'use strict';
const { PrismaClient } = require('@prisma/client');
const { readFileSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');

async function main() {
  const prisma = new PrismaClient();
  const migrationsDir = join(__dirname, 'prisma', 'migrations');

  // tabela de controle de migrations aplicadas
  await prisma.$executeRawUnsafe(
    'CREATE TABLE IF NOT EXISTS "_applied_migrations" ("name" TEXT PRIMARY KEY, "applied_at" TIMESTAMP DEFAULT now())'
  );

  if (!existsSync(migrationsDir)) {
    console.error('❌ prisma/migrations não encontrado');
    process.exit(1);
  }

  const rows = await prisma.$queryRawUnsafe('SELECT name FROM "_applied_migrations"');
  const applied = new Set(rows.map((r) => r.name));

  const dirs = readdirSync(migrationsDir)
    .filter((d) => existsSync(join(migrationsDir, d, 'migration.sql')))
    .sort();

  for (const d of dirs) {
    if (applied.has(d)) {
      console.log(`↷ ${d} já aplicada`);
      continue;
    }
    const sql = readFileSync(join(migrationsDir, d, 'migration.sql'), 'utf8');
    const statements = sql
      .replace(/--[^\n]*/g, '')
      .split(';')
      .map((s) => s.trim())
      .filter((s) => s.length > 4);
    for (const stmt of statements) {
      try {
        await prisma.$executeRawUnsafe(stmt);
      } catch (e) {
        // CREATE ... sem IF NOT EXISTS em um banco que já tinha o schema: ignora "already exists"
        if (!String(e.message).includes('already exists')) throw e;
      }
    }
    await prisma.$executeRawUnsafe('INSERT INTO "_applied_migrations" (name) VALUES ($1)', d);
    console.log(`✓ ${d} aplicada`);
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('❌ Migration falhou:', e.message);
  process.exit(1);
});

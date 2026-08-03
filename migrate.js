'use strict';
const { PrismaClient } = require('@prisma/client');
const { readFileSync, readdirSync, existsSync } = require('fs');
const { join } = require('path');

async function main() {
  const prisma = new PrismaClient();
  const migrationsDir = join(__dirname, 'prisma', 'migrations');

  try {
    await prisma.$queryRaw`SELECT 1 FROM "AdminUser" LIMIT 1`;
    console.log('✓ Schema já existe — pulando migration inicial');
    await prisma.$disconnect();
    return;
  } catch (_) {
    console.log('→ Aplicando schema...');
  }

  if (!existsSync(migrationsDir)) {
    console.error('❌ prisma/migrations não encontrado');
    process.exit(1);
  }

  const dirs = readdirSync(migrationsDir)
    .filter((d) => existsSync(join(migrationsDir, d, 'migration.sql')))
    .sort();

  for (const d of dirs) {
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
        if (!String(e.message).includes('already exists')) throw e;
      }
    }
    console.log(`✓ Migration ${d} aplicada`);
  }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('❌ Migration falhou:', e.message);
  process.exit(1);
});

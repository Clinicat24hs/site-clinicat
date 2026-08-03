'use strict';
const { PrismaClient } = require('@prisma/client');
const DATA = require('./data/content-data.js');
const prisma = new PrismaClient();

async function main() {
  for (const item of DATA) {
    const existing = await prisma.contentPage.findUnique({ where: { slug: item.slug } });
    const data = {
      active: true, highlights: [], tagline: null, coverUrl: null, linkSpecialty: null,
      seoTitle: null, seoDescription: null, displayOrder: 0, ...item,
    };
    if (existing) await prisma.contentPage.update({ where: { id: existing.id }, data });
    else await prisma.contentPage.create({ data });
  }
  const n = await prisma.contentPage.count();
  console.log(`✓ Seed de conteúdo: ${n} páginas`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());

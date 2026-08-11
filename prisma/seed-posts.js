'use strict';
// Seed das matérias iniciais do blog (idempotente por slug).
const { PrismaClient } = require('@prisma/client');
const DATA = require('./data/posts-data.js');
const prisma = new PrismaClient();

async function main() {
  const now = Date.now();
  for (const p of DATA) {
    // publica com datas escalonadas (mais recentes primeiro)
    const publishedAt = new Date(now - p.order * 3 * 24 * 60 * 60 * 1000);
    const data = {
      title: p.title,
      slug: p.slug,
      category: p.category,
      excerpt: p.excerpt,
      content: p.content,
      coverUrl: p.coverUrl ?? null,
      status: p.status || 'PUBLICADO',
      publishedAt,
    };
    const existing = await prisma.post.findUnique({ where: { slug: p.slug } });
    if (existing) await prisma.post.update({ where: { id: existing.id }, data });
    else await prisma.post.create({ data });
  }
  const n = await prisma.post.count();
  console.log(`✓ Seed de blog: ${n} matérias`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());

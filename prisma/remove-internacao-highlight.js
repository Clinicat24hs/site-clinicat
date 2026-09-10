'use strict';
// Remove APENAS o card "Alas separadas (felina, infectocontagiosa, UTI)" da
// página Internação, sem tocar em nenhum outro campo (imagem, intro, etc).
// Idempotente e seguro mesmo depois de edições no admin.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const page = await prisma.contentPage.findUnique({ where: { slug: 'internacao' } });
  if (!page) {
    console.log('Página "internacao" não encontrada — nada a fazer.');
    return;
  }
  const before = page.highlights || [];
  const after = before.filter((h) => !/alas separadas/i.test(h));
  if (after.length === before.length) {
    console.log('Highlight "Alas separadas" já não existe — nada a fazer.');
    return;
  }
  await prisma.contentPage.update({ where: { id: page.id }, data: { highlights: after } });
  console.log(`✓ Highlight removido. ${before.length} → ${after.length} itens.`);
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());

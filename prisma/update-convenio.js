'use strict';
// Atualiza SOMENTE a página de Convênios (ContentPage slug=convenio) com o texto novo.
// Não toca em nenhuma outra página. Idempotente.
const { PrismaClient } = require('@prisma/client');
const DATA = require('./data/content-data.js');
const prisma = new PrismaClient();
async function main() {
  const c = DATA.find((d) => d.slug === 'convenio');
  if (!c) { console.error('convenio não encontrado nos dados'); process.exit(1); }
  const res = await prisma.contentPage.updateMany({
    where: { slug: 'convenio' },
    data: { title: c.title, tagline: c.tagline, intro: c.intro, highlights: c.highlights },
  });
  console.log(res.count ? '✓ Página de convênios atualizada' : '! convenio não existe no banco (rode seed-content.js)');
}
main().catch((e)=>{console.error(e);process.exit(1);}).finally(()=>prisma.$disconnect());

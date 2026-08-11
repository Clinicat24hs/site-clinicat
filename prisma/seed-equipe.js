'use strict';
// Reconstrói a EQUIPE a partir do PDF Equipe 2026 (substitui os EQUIPE atuais).
// Especialistas (kind=ESPECIALISTA) NÃO são tocados.
const { PrismaClient } = require('@prisma/client');
const DATA = require('./data/equipe-data.js');
const prisma = new PrismaClient();
async function main() {
  await prisma.professional.deleteMany({ where: { kind: 'EQUIPE' } });
  for (const d of DATA) await prisma.professional.create({ data: d });
  const n = await prisma.professional.count({ where: { kind: 'EQUIPE' } });
  console.log(`✓ Equipe reconstruída: ${n} registros`);
}
main().catch((e)=>{console.error(e);process.exit(1);}).finally(()=>prisma.$disconnect());

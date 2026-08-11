'use strict';
// Atualiza SOMENTE o campo `bio` dos profissionais (por nome), a partir dos CVs
// dos PDFs Equipe/Especialistas 2026. Não toca em nenhum outro campo — seguro
// mesmo depois de edições no admin. Idempotente.
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

// chave = nome (como está no banco) → bio nova
const BIOS = {
  'Nathalia Regatieri': 'Médica veterinária formada pela FAM (2025), atua com cuidados intensivos e internação — acompanhamento de pacientes críticos, boletins médicos e emergências. Dedica-se ao cuidado integral e ao bem-estar de cada paciente.',
  'Gabriela Barbosa': 'Médica veterinária (UNINOVE, 2023) com foco em clínica médica e internação de pacientes críticos e semi-intensivos. Pós-graduanda em Urgências, Emergências e Cuidados Hospitalares (Ethos On), une técnica e atendimento humanizado.',
  'Jeniffer Loureiro': 'Médica veterinária formada pela FMU (2017), com formação em acupuntura veterinária e medicina felina, atenta às particularidades de cada paciente.',
  'Selma Rosa': 'Cirurgiã de pequenos animais (FMU) com mais de 7 anos de experiência em cirurgias eletivas e de emergência — tecidos moles, oncológica, abdominal e urológica.',
  'Guilherme Lorenzato': 'Neurologista de pequenos animais, em constante aprimoramento com pós-graduação em intensivismo e neurocirurgia, com foco no manejo de pacientes críticos e afecções neurológicas complexas.',
  'Eugênio Ferreira': 'Pneumologista formado pela UFAL, com aprimoramento em terapia intensiva e cuidados paliativos (Intensive Care) e pós-graduação em pneumologia (UFAPE, 2025). Coordenador clínico e pneumologista volante em São Paulo e Maceió.',
  'Isabela Souza': 'Dermatologista formada pela UFLA (2009), com especialização em dermatologia veterinária (CEDV-USP, 2012) e curso avançado de otologia (Anclivepa-SP). Membro da Sociedade Brasileira de Dermatologia Veterinária.',
  'Jéssica Layne': 'Médica veterinária (Cruzeiro do Sul, 2015) com atuação em ortopedia e neurocirurgia de cães e gatos, com pós-graduações pela Anclivepa-SP e imersões em cirurgia. Palestrante em cursos de ortopedia.',
  'Luiz Ricardo': 'Formado pela FMU (2009) e mestre pela FMVZ-UNESP Botucatu, é referência em cirurgia de mínima invasão — endoscopia, videolaparoscopia e laser. Membro fundador de sociedades de endoscopia e videocirurgia veterinária.',
  'Alexandre Antonio': 'Médico veterinário (1995) especializado em diagnóstico por imagem, com pós-graduação em ultrassonografia de pequenos animais e cursos de ultrassom oftálmico, musculoesquelético e cervical.',
  'Mariana Tikuma': 'Formada pela UNISA, com residência e mestrado em clínica médica pela USP e especialização em medicina felina. Atendimento dedicado às necessidades específicas dos gatos.',
  'Regina Costa': 'Cardiologista veterinária, coordenadora e docente da pós-graduação em cardiologia da Anclivepa e ex-pesquisadora do setor de aterosclerose do InCor (HC-FMUSP). Publicações e apresentações em congressos nacionais e internacionais.',
  'Bruna Pereira': 'Médica veterinária (FMU) com especialização em gastroenterologia veterinária (UFAPE) e associada à Associação Brasileira de Gastroenterologia Animal.',
  'Raquel Cantarella': 'Neurologista graduada pela PUC-PR (2007), com residência com ênfase em neurologia e mestrado em neuro-oftalmologia (UFPR). Membro da ABNV, professora de pós-graduação e CEO da Neuroclass, com mais de 10.000 horas de aperfeiçoamento na área.',
  'Renata Medeiros': 'Médica veterinária (Anhembi Morumbi, 2013) especializada em nefrologia e urologia de cães e gatos (Anclivepa-SP), associada ao CBNUV e à ASVNU.',
  'Jessica Voitena': 'Oftalmologista com formação e residência em clínica cirúrgica pela UFPR e pós-graduação em oftalmologia e microcirurgia ocular (Qualittas), onde também é professora. Atua com oftalmologia volante em São Paulo.',
  'Gustavo Montenegro': 'Médico veterinário volante formado pela UFCG (CRMV-SP 68817), com atuação em ortopedia de pequenos animais.',
};

async function main() {
  const all = await prisma.professional.findMany();
  let updated = 0;
  const misses = [];
  for (const [name] of Object.entries(BIOS)) {
    const match = all.find((p) => norm(p.name) === norm(name));
    if (!match) { misses.push(name); continue; }
    await prisma.professional.update({ where: { id: match.id }, data: { bio: BIOS[name] } });
    updated++;
  }
  console.log(`✓ Bios atualizadas: ${updated}/${Object.keys(BIOS).length}`);
  if (misses.length) console.log('  não encontrados no banco:', misses.join(', '));
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());

'use strict';
const { PrismaClient } = require('@prisma/client');
const META = require('./data/professionals-meta.js');
const prisma = new PrismaClient();

// COLE aqui o JSON gerado no Step 1 (lista { file, webp }).
const PHOTOS = [
  {
    "file": " Bruna Pereira-gastro.jpg",
    "webp": "bruna-pereira-gastro.webp"
  },
  {
    "file": " Isabela Souza-dermato.jpg",
    "webp": "isabela-souza-dermato.webp"
  },
  {
    "file": "Alexandre Antonio - Ultrasonografia.jpg",
    "webp": "alexandre-antonio-ultrasonografia.webp"
  },
  {
    "file": "Ana Paula-Coordenadora Clinica.jpg",
    "webp": "ana-paula-coordenadora-clinica.webp"
  },
  {
    "file": "Ana rosa - auxiliar de Limpeza.jpg",
    "webp": "ana-rosa-auxiliar-de-limpeza.webp"
  },
  {
    "file": "Camile-Recepcionista.webp",
    "webp": "camile-recepcionista.webp"
  },
  {
    "file": "Carol-Oncologista.jpg",
    "webp": "carol-oncologista.webp"
  },
  {
    "file": "Eugênio Ferreira - Pneumologista.jpg",
    "webp": "eugenio-ferreira-pneumologista.webp"
  },
  {
    "file": "Fernanda-auxiliar .jpg",
    "webp": "fernanda-auxiliar.webp"
  },
  {
    "file": "Gabriela Barbosa - Veterinaria.jpg",
    "webp": "gabriela-barbosa-veterinaria.webp"
  },
  {
    "file": "Gabryella-Auxiliar.jpg",
    "webp": "gabryella-auxiliar.webp"
  },
  {
    "file": "Guilherme Lorenzato-Neurologista.jpg",
    "webp": "guilherme-lorenzato-neurologista.webp"
  },
  {
    "file": "Gustavo montenegro - Ortopedista.jpg",
    "webp": "gustavo-montenegro-ortopedista.webp"
  },
  {
    "file": "Jeniffer Loureiro - Veterinaria.jpg",
    "webp": "jeniffer-loureiro-veterinaria.webp"
  },
  {
    "file": "Jessica Voitena - Oftalmo.jpg",
    "webp": "jessica-voitena-oftalmo.webp"
  },
  {
    "file": "Jéssica Layne-ortopedista.jpg",
    "webp": "jessica-layne-ortopedista.webp"
  },
  {
    "file": "Luiz Ricardo-endoscopia-video cirurgia.jpg",
    "webp": "luiz-ricardo-endoscopia-video-cirurgia.webp"
  },
  {
    "file": "Maria Cristina Gestora de Compras.webp",
    "webp": "maria-cristina-gestora-de-compras.webp"
  },
  {
    "file": "Mariana Tikuma - .jpg",
    "webp": "mariana-tikuma.webp"
  },
  {
    "file": "Marketing Maria Luna.webp",
    "webp": "marketing-maria-luna.webp"
  },
  {
    "file": "Matheus.webp",
    "webp": "matheus.webp"
  },
  {
    "file": "Micael  - Veterinário.jpg",
    "webp": "micael-veterinario.webp"
  },
  {
    "file": "Nany - Monitora da Creche.jpg",
    "webp": "nany-monitora-da-creche.webp"
  },
  {
    "file": "Nathalia Regatieri - Veterinária.jpg",
    "webp": "nathalia-regatieri-veterinaria.webp"
  },
  {
    "file": "Raquel Cantarella - Neurologista.jpg",
    "webp": "raquel-cantarella-neurologista.webp"
  },
  {
    "file": "Regina Costa- Cardiologia.jpg",
    "webp": "regina-costa-cardiologia.webp"
  },
  {
    "file": "Renata Medeiros-Veteriinaria.jpg",
    "webp": "renata-medeiros-veteriinaria.webp"
  },
  {
    "file": "Selma Rosa-Cirurgia.jpg",
    "webp": "selma-rosa-cirurgia.webp"
  },
  {
    "file": "Tatilaine-Psicologa.webp",
    "webp": "tatilaine-psicologa.webp"
  },
  {
    "file": "eduardo-auxiliar.webp",
    "webp": "eduardo-auxiliar.webp"
  },
  {
    "file": "lais-bueno-.webp",
    "webp": "lais-bueno.webp"
  },
  {
    "file": "larissa - Auxiliar.webp",
    "webp": "larissa-auxiliar.webp"
  }
];

// Helpers (espelham src/lib/professionals-helpers.ts; duplicados aqui p/ rodar em CJS no container)
function deaccent(s){return s.normalize('NFD').replace(/[̀-ͯ]/g,'');}
function slugifyName(n){return deaccent(n).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}
function parseFilename(f){const noExt=f.replace(/\.[a-z0-9]+$/i,'').trim();const m=noExt.match(/^(.*?)\s*[-–]\s*(.*)$/);return m?{name:m[1].trim(),roleRaw:m[2].trim()}:{name:noExt.trim(),roleRaw:''};}
const SPEC=[[/dermato/,'Dermatologia'],[/neuro/,'Neurologia'],[/cardio/,'Cardiologia'],[/gastro/,'Gastroenterologia'],[/oncolog/,'Oncologia'],[/ortoped/,'Ortopedia'],[/oftalmo/,'Oftalmologia'],[/pneumolog/,'Pneumologia'],[/ultrasson|ultrason/,'Ultrassonografia'],[/endoscopia|video ?cirurgia/,'Endoscopia e Videocirurgia'],[/cirurg/,'Cirurgia Geral'],[/felina/,'Medicina Felina'],[/nefro/,'Nefrologia e Urologia'],[/endocrino/,'Endocrinologia']];
function classify(roleRaw){const k=deaccent(roleRaw).toLowerCase();for(const [re,name] of SPEC){if(re.test(k))return{kind:'ESPECIALISTA',specialty:name,title:name};}return{kind:'EQUIPE',specialty:null,title:roleRaw||'Equipe Clinicat'};}
function titleCaseName(n){return n.split(/\s+/).map(w=>w?w[0].toUpperCase()+w.slice(1).toLowerCase():w).join(' ').trim();}
function capFirst(s){return s?s[0].toUpperCase()+s.slice(1):s;}

// Correções para arquivos cujo filename não segue "Nome - Função" (sem hífen, função no início,
// ou área ausente). Chave = filename original. Precede a classificação automática.
const OVERRIDES = {
  'Maria Cristina Gestora de Compras.webp': { name: 'Maria Cristina', kind: 'EQUIPE', specialty: null, title: 'Gestora de Compras' },
  'Marketing Maria Luna.webp': { name: 'Maria Luna', kind: 'EQUIPE', specialty: null, title: 'Marketing' },
  'Mariana Tikuma - .jpg': { name: 'Mariana Tikuma', kind: 'ESPECIALISTA', specialty: 'Medicina Felina', title: 'Medicina Felina' },
  'lais-bueno-.webp': { name: 'Lais Bueno', kind: 'EQUIPE', specialty: null, title: 'Equipe Clinicat' },
  'Renata Medeiros-Veteriinaria.jpg': { name: 'Renata Medeiros', kind: 'ESPECIALISTA', specialty: 'Nefrologia e Urologia', title: 'Nefrologia e Urologia' },
};

async function main() {
  let equipeOrder = 0, espOrder = 0;
  for (const { file, webp } of PHOTOS) {
    const parsed = parseFilename(file);
    const c = classify(parsed.roleRaw);
    const ov = OVERRIDES[file] || {};
    const name = titleCaseName((ov.name ?? parsed.name));
    const kind = ov.kind ?? c.kind;
    const specialty = ov.specialty !== undefined ? ov.specialty : c.specialty;
    const title = capFirst((ov.title ?? c.title).trim());
    const meta = META[slugifyName(name)] || {};
    const photoUrl = `/team/${webp}`;
    const displayOrder = kind === 'ESPECIALISTA' ? espOrder++ : equipeOrder++;
    // upsert idempotente por photoUrl — chave estável de seed
    const existing = await prisma.professional.findFirst({ where: { photoUrl } });
    const data = {
      name, kind, title, specialty,
      crmv: meta.crmv ?? null, bio: meta.bio ?? null, photoUrl, displayOrder, active: true,
    };
    if (existing) await prisma.professional.update({ where: { id: existing.id }, data });
    else await prisma.professional.create({ data });
  }
  const total = await prisma.professional.count();
  console.log(`✓ Seed de profissionais: ${total} registros`);
}
main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());

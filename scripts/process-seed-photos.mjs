import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import { join, extname } from "path";

const SRC = "/Users/fernandojorge/Desktop/Projetos/apps/clinicat/img-profissionais/saida";
const OUT = new URL("../public/team/", import.meta.url).pathname;

function slugify(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

mkdirSync(OUT, { recursive: true });
const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
let n = 0;
for (const f of files) {
  const outName = `${slugify(f)}.webp`;
  await sharp(join(SRC, f))
    .rotate()
    .resize({ width: 600, height: 600, fit: "cover", position: "top" })
    .webp({ quality: 82 })
    .toFile(join(OUT, outName));
  console.log(`✓ ${f} → team/${outName}`);
  n++;
}
console.log(`\n${n} fotos processadas em public/team/`);

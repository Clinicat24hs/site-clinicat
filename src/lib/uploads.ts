import sharp from "sharp";
import { randomUUID } from "crypto";
import { mkdir, writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";

const PUBLIC_PREFIX = "/uploads/";

function uploadDir(explicit?: string): string {
  return explicit ?? process.env.UPLOAD_DIR ?? "./public/uploads";
}

/** Nome de arquivo seguro para ler/apagar dentro do diretório de uploads. */
function safeFilename(name: string): string | null {
  if (!name || name.includes("/") || name.includes("\\") || name.includes("..")) return null;
  return name;
}

export interface SaveOptions {
  dir?: string;
  maxWidth?: number;
}

export async function saveUploadedImage(
  bytes: Buffer | Uint8Array,
  opts: SaveOptions = {}
): Promise<string> {
  const dir = uploadDir(opts.dir);
  const maxWidth = opts.maxWidth ?? 600;
  await mkdir(dir, { recursive: true });
  const filename = `${randomUUID()}.webp`;
  const out = await sharp(bytes)
    .rotate() // respeita EXIF
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  await writeFile(join(dir, filename), out);
  return `${PUBLIC_PREFIX}${filename}`;
}

export async function deleteUploadedImage(
  url: string | null | undefined,
  opts: { dir?: string } = {}
): Promise<void> {
  if (!url || !url.startsWith(PUBLIC_PREFIX)) return;
  const dir = uploadDir(opts.dir);
  const filename = safeFilename(url.slice(PUBLIC_PREFIX.length));
  if (!filename) return;
  try {
    await unlink(join(dir, filename));
  } catch {
    // arquivo já ausente — ok
  }
}

const CONTENT_TYPES: Record<string, string> = {
  webp: "image/webp",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
};

export interface UploadedFile {
  bytes: Buffer;
  contentType: string;
}

/**
 * Lê um upload do disco para ser servido por rota.
 *
 * No build `standalone` o Next só entrega os arquivos que já estavam em public/
 * quando o servidor subiu — um upload feito em runtime dá 404 até reiniciar.
 * Por isso os uploads são servidos por rota, lendo direto do UPLOAD_DIR.
 */
export async function readUploadedImage(
  name: string,
  opts: { dir?: string } = {}
): Promise<UploadedFile | null> {
  const filename = safeFilename(name);
  if (!filename) return null;
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  const contentType = CONTENT_TYPES[ext];
  if (!contentType) return null;
  try {
    return { bytes: await readFile(join(uploadDir(opts.dir), filename)), contentType };
  } catch {
    return null;
  }
}

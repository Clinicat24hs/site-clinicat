import sharp from "sharp";
import { randomUUID } from "crypto";
import { mkdir, writeFile, unlink } from "fs/promises";
import { join } from "path";

const PUBLIC_PREFIX = "/uploads/";

function uploadDir(explicit?: string): string {
  return explicit ?? process.env.UPLOAD_DIR ?? "./public/uploads";
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
  const filename = url.slice(PUBLIC_PREFIX.length);
  if (!filename || filename.includes("/") || filename.includes("..")) return;
  try {
    await unlink(join(dir, filename));
  } catch {
    // arquivo já ausente — ok
  }
}

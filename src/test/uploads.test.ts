import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtempSync, rmSync, existsSync, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import sharp from "sharp";
import { saveUploadedImage, deleteUploadedImage, readUploadedImage } from "@/lib/uploads";

let dir: string;

beforeEach(() => { dir = mkdtempSync(join(tmpdir(), "up-")); });
afterEach(() => { rmSync(dir, { recursive: true, force: true }); });

async function redPng(): Promise<Buffer> {
  return sharp({ create: { width: 800, height: 800, channels: 3, background: { r: 255, g: 0, b: 0 } } })
    .png().toBuffer();
}

describe("uploads", () => {
  it("grava um WebP e retorna URL /uploads/*.webp", async () => {
    const bytes = await redPng();
    const url = await saveUploadedImage(bytes, { dir, maxWidth: 400 });
    expect(url).toMatch(/^\/uploads\/[a-f0-9-]+\.webp$/);
    const file = join(dir, url.replace("/uploads/", ""));
    expect(existsSync(file)).toBe(true);
    const meta = await sharp(readFileSync(file)).metadata();
    expect(meta.format).toBe("webp");
    expect(meta.width).toBeLessThanOrEqual(400);
  });

  it("deleteUploadedImage remove o arquivo", async () => {
    const bytes = await redPng();
    const url = await saveUploadedImage(bytes, { dir, maxWidth: 400 });
    const file = join(dir, url.replace("/uploads/", ""));
    expect(existsSync(file)).toBe(true);
    await deleteUploadedImage(url, { dir });
    expect(existsSync(file)).toBe(false);
  });

  it("deleteUploadedImage ignora URL vazia/externa sem erro", async () => {
    await expect(deleteUploadedImage("", { dir })).resolves.toBeUndefined();
    await expect(deleteUploadedImage("https://x.com/a.jpg", { dir })).resolves.toBeUndefined();
  });

  it("readUploadedImage devolve os bytes e o content-type do arquivo salvo", async () => {
    const url = await saveUploadedImage(await redPng(), { dir, maxWidth: 400 });
    const found = await readUploadedImage(url.replace("/uploads/", ""), { dir });
    expect(found?.contentType).toBe("image/webp");
    expect((await sharp(found!.bytes).metadata()).format).toBe("webp");
  });

  it("readUploadedImage recusa traversal, nome vazio e extensão não-imagem", async () => {
    for (const name of ["../package.json", "a/b.webp", "..\\x.webp", "", "notas.txt"]) {
      await expect(readUploadedImage(name, { dir })).resolves.toBeNull();
    }
  });

  it("readUploadedImage devolve null quando o arquivo não existe", async () => {
    await expect(readUploadedImage("nao-existe.webp", { dir })).resolves.toBeNull();
  });
});

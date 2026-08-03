import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdtempSync, rmSync, existsSync, readFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import sharp from "sharp";
import { saveUploadedImage, deleteUploadedImage } from "@/lib/uploads";

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
});

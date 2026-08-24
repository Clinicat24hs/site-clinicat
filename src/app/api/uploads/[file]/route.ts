import { NextResponse } from "next/server";
import { readUploadedImage } from "@/lib/uploads";

export const dynamic = "force-dynamic";

/**
 * Serve as imagens enviadas pelo admin. O rewrite de /uploads/:file em
 * next.config.ts cai aqui quando o arquivo não está no public/ do build —
 * que é o caso de todo upload feito depois do deploy.
 */
export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const found = await readUploadedImage(file);
  if (!found) return NextResponse.json({ error: "Não encontrado" }, { status: 404 });

  return new NextResponse(new Uint8Array(found.bytes), {
    headers: {
      "Content-Type": found.contentType,
      "Content-Length": String(found.bytes.byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { saveUploadedImage } from "@/lib/uploads";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp"];

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Arquivo ausente" }, { status: 400 });
  }
  if (!ALLOWED.includes(file.type)) {
    return NextResponse.json({ error: "Formato inválido (use JPG, PNG ou WebP)" }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Imagem acima de 8 MB" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const url = await saveUploadedImage(bytes);
  return NextResponse.json({ url });
}

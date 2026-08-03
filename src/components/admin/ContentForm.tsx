"use client";
import { useState } from "react";
import type { ContentPage, ContentType } from "@prisma/client";
import { ImageUploadField } from "./ImageUploadField";

export function ContentForm({
  initial,
  action,
}: {
  initial?: ContentPage;
  action: (formData: FormData) => Promise<{ error?: string } | void>;
}) {
  const [type, setType] = useState<ContentType>(initial?.type ?? "ESPECIALIDADE");
  const [error, setError] = useState("");

  return (
    <form
      action={async (fd) => { const r = await action(fd); if (r?.error) setError(r.error); }}
      style={{ display: "grid", gap: 12, maxWidth: 520 }}
    >
      <label>Tipo
        <select name="type" value={type} onChange={(e) => setType(e.target.value as ContentType)}>
          <option value="ESPECIALIDADE">Especialidade</option>
          <option value="SERVICO">Serviço</option>
        </select>
      </label>
      <label>Título<input name="title" defaultValue={initial?.title ?? ""} required /></label>
      <label>Slug<input name="slug" defaultValue={initial?.slug ?? ""} required /></label>
      <label>Tagline<input name="tagline" defaultValue={initial?.tagline ?? ""} /></label>
      <label>Intro<textarea name="intro" defaultValue={initial?.intro ?? ""} rows={4} required /></label>
      <label>Highlights (um por linha)
        <textarea name="highlights" defaultValue={initial?.highlights.join("\n") ?? ""} rows={5} />
      </label>
      {type === "ESPECIALIDADE" && (
        <label>Especialidade vinculada (Professional.specialty)
          <input name="linkSpecialty" defaultValue={initial?.linkSpecialty ?? ""} />
        </label>
      )}
      <label>SEO Title<input name="seoTitle" defaultValue={initial?.seoTitle ?? ""} /></label>
      <label>SEO Description<textarea name="seoDescription" defaultValue={initial?.seoDescription ?? ""} rows={2} /></label>
      <label>Ordem<input name="displayOrder" type="number" defaultValue={initial?.displayOrder ?? 0} /></label>
      <label style={{ display: "flex", gap: 8 }}>
        <input type="checkbox" name="active" defaultChecked={initial?.active ?? true} /> Ativo (aparece no site)
      </label>
      <div><span>Capa</span><ImageUploadField name="coverUrl" initialUrl={initial?.coverUrl} /></div>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <button type="submit">Salvar</button>
    </form>
  );
}

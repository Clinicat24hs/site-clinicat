"use client";
import { useState } from "react";
import type { Post } from "@prisma/client";
import { ImageUploadField } from "./ImageUploadField";

export function PostForm({
  initial,
  action,
}: {
  initial?: Post;
  action: (formData: FormData) => Promise<{ error?: string } | void>;
}) {
  const [error, setError] = useState("");
  return (
    <form
      action={async (fd) => { const r = await action(fd); if (r?.error) setError(r.error); }}
      style={{ display: "grid", gap: 14, maxWidth: 720 }}
    >
      <label>Título<input name="title" defaultValue={initial?.title ?? ""} required /></label>
      <label>
        Slug (URL) — deixe em branco para gerar do título
        <input name="slug" defaultValue={initial?.slug ?? ""} placeholder="ex.: castracao-beneficios" />
      </label>
      <label>Categoria<input name="category" defaultValue={initial?.category ?? ""} placeholder="Ex.: Cães, Gatos, Vacinação" /></label>
      <label>Resumo (aparece no card)<textarea name="excerpt" defaultValue={initial?.excerpt ?? ""} rows={2} required /></label>
      <label>
        Conteúdo
        <span style={{ display: "block", fontWeight: 400, fontSize: ".8rem", color: "var(--a-muted)", margin: ".2rem 0 .3rem" }}>
          Escreva normalmente. Linha em branco separa parágrafos. Use <code>## </code> para títulos,
          <code> - </code> para listas e <code>**texto**</code> para negrito.
        </span>
        <textarea name="content" defaultValue={initial?.content ?? ""} rows={16} required style={{ fontFamily: "ui-monospace, monospace", fontSize: ".92rem" }} />
      </label>
      <label>
        Status
        <select name="status" defaultValue={initial?.status ?? "RASCUNHO"}>
          <option value="RASCUNHO">Rascunho (não aparece no site)</option>
          <option value="PUBLICADO">Publicado</option>
        </select>
      </label>
      <div><span>Imagem de capa</span><ImageUploadField name="coverUrl" initialUrl={initial?.coverUrl} /></div>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <button type="submit">Salvar</button>
    </form>
  );
}

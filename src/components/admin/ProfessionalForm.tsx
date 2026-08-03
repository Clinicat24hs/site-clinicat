"use client";
import { useState } from "react";
import type { Professional } from "@prisma/client";
import { ImageUploadField } from "./ImageUploadField";

export function ProfessionalForm({
  initial,
  action,
}: {
  initial?: Professional;
  action: (formData: FormData) => Promise<{ error?: string } | void>;
}) {
  const [kind, setKind] = useState<Professional["kind"]>(initial?.kind ?? "EQUIPE");
  const [error, setError] = useState("");

  return (
    <form
      action={async (fd) => { const r = await action(fd); if (r?.error) setError(r.error); }}
      style={{ display: "grid", gap: 12, maxWidth: 520 }}
    >
      <label>Nome<input name="name" defaultValue={initial?.name ?? ""} required /></label>
      <label>Tipo
        <select name="kind" value={kind} onChange={(e) => setKind(e.target.value as Professional["kind"])}>
          <option value="EQUIPE">Equipe</option>
          <option value="ESPECIALISTA">Especialista</option>
        </select>
      </label>
      <label>Cargo/Título<input name="title" defaultValue={initial?.title ?? ""} required /></label>
      {kind === "ESPECIALISTA" && (
        <label>Especialidade<input name="specialty" defaultValue={initial?.specialty ?? ""} /></label>
      )}
      <label>CRMV<input name="crmv" defaultValue={initial?.crmv ?? ""} /></label>
      <label>Mini-bio<textarea name="bio" defaultValue={initial?.bio ?? ""} rows={3} /></label>
      <label>Ordem<input name="displayOrder" type="number" defaultValue={initial?.displayOrder ?? 0} /></label>
      <label style={{ display: "flex", gap: 8 }}>
        <input type="checkbox" name="active" defaultChecked={initial?.active ?? true} /> Ativo (aparece no site)
      </label>
      <div><span>Foto</span><ImageUploadField name="photoUrl" initialUrl={initial?.photoUrl} /></div>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <button type="submit">Salvar</button>
    </form>
  );
}

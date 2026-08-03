"use client";
import { useState } from "react";

export function ImageUploadField({ name, initialUrl }: { name: string; initialUrl?: string | null }) {
  const [url, setUrl] = useState(initialUrl ?? "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true); setErr("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Falha no upload");
      setUrl(data.url);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Erro");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ display: "grid", gap: 8 }}>
      {url && <img src={url} alt="prévia" style={{ width: 120, height: 120, objectFit: "cover", borderRadius: 12 }} />}
      <input type="file" accept="image/jpeg,image/png,image/webp" onChange={onChange} disabled={busy} />
      {busy && <span>enviando…</span>}
      {err && <span style={{ color: "crimson" }}>{err}</span>}
      <input type="hidden" name={name} value={url} readOnly />
    </div>
  );
}

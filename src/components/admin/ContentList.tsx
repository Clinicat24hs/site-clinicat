"use client";
import { useState } from "react";
import Link from "next/link";
import type { ContentPage } from "@prisma/client";
import { toggleContentActiveAction, deleteContentAction } from "@/lib/actions/content-actions";

export function ContentList({ items }: { items: ContentPage[] }) {
  const [type, setType] = useState<"ALL" | "ESPECIALIDADE" | "SERVICO">("ALL");
  const [q, setQ] = useState("");
  const filtered = items.filter(
    (c) => (type === "ALL" || c.type === type) && c.title.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <select value={type} onChange={(e) => setType(e.target.value as typeof type)}>
          <option value="ALL">Todos</option>
          <option value="ESPECIALIDADE">Especialidades</option>
          <option value="SERVICO">Serviços</option>
        </select>
        <input placeholder="Buscar por título" value={q} onChange={(e) => setQ(e.target.value)} />
        <Link href="/admin/content/new">+ Novo</Link>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr><th align="left">Título</th><th>Tipo</th><th>Slug</th><th>Ativo</th><th></th></tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr key={c.id} style={{ borderTop: "1px solid #eee" }}>
              <td>{c.title}</td>
              <td align="center">{c.type === "ESPECIALIDADE" ? "Especialidade" : "Serviço"}</td>
              <td align="center">{c.slug}</td>
              <td align="center">
                <input type="checkbox" checked={c.active}
                  onChange={(e) => toggleContentActiveAction(c.id, e.target.checked)} />
              </td>
              <td align="right">
                <Link href={`/admin/content/${c.id}`}>editar</Link>{" · "}
                <button onClick={() => { if (confirm(`Excluir ${c.title}?`)) deleteContentAction(c.id); }}>
                  excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

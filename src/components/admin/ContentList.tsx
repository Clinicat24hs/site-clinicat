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
      <div className="admin-toolbar">
        <select value={type} onChange={(e) => setType(e.target.value as typeof type)}>
          <option value="ALL">Todos</option>
          <option value="ESPECIALIDADE">Especialidades</option>
          <option value="SERVICO">Serviços</option>
        </select>
        <input placeholder="Buscar por título" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="spacer" />
        <Link href="/admin/content/new" className="btn-a">+ Novo</Link>
      </div>
      <table>
        <thead>
          <tr><th>Título</th><th>Tipo</th><th>Slug</th><th>Imagem</th><th>Ativo</th><th></th></tr>
        </thead>
        <tbody>
          {filtered.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.type === "ESPECIALIDADE" ? "Especialidade" : "Serviço"}</td>
              <td>{c.slug}</td>
              <td>
                {c.coverUrl ? (
                  <span title={c.coverUrl} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#157347", fontWeight: 600, fontSize: ".85rem", whiteSpace: "nowrap" }}>
                    <span aria-hidden>●</span> Com imagem
                  </span>
                ) : (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#b26a00", fontWeight: 600, fontSize: ".85rem", whiteSpace: "nowrap" }}>
                    <span aria-hidden>○</span> Sem imagem
                  </span>
                )}
              </td>
              <td>
                <input type="checkbox" checked={c.active}
                  onChange={(e) => toggleContentActiveAction(c.id, e.target.checked)} />
              </td>
              <td>
                <span className="admin-actions">
                  <Link href={`/admin/content/${c.id}`}>editar</Link>
                  <button onClick={() => { if (confirm(`Excluir ${c.title}?`)) deleteContentAction(c.id); }}>
                    excluir
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

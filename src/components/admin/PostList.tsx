"use client";
import { useState } from "react";
import Link from "next/link";
import type { Post } from "@prisma/client";
import { deletePostAction } from "@/lib/actions/post-actions";

export function PostList({ items }: { items: Post[] }) {
  const [status, setStatus] = useState<"ALL" | "PUBLICADO" | "RASCUNHO">("ALL");
  const [q, setQ] = useState("");
  const filtered = items.filter(
    (p) => (status === "ALL" || p.status === status) && p.title.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <div className="admin-toolbar">
        <select value={status} onChange={(e) => setStatus(e.target.value as typeof status)}>
          <option value="ALL">Todos</option>
          <option value="PUBLICADO">Publicados</option>
          <option value="RASCUNHO">Rascunhos</option>
        </select>
        <input placeholder="Buscar por título" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="spacer" />
        <Link href="/admin/posts/new" className="btn-a">+ Nova matéria</Link>
      </div>
      <table>
        <thead>
          <tr><th style={{ width: 56 }}>Capa</th><th>Título</th><th>Categoria</th><th>Status</th><th></th></tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>
                {p.coverUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.coverUrl} alt={p.title} className="admin-thumb" />
                ) : (
                  <span className="admin-thumb admin-thumb-empty">✎</span>
                )}
              </td>
              <td>{p.title}</td>
              <td>{p.category}</td>
              <td>
                <span className={`admin-badge ${p.status === "PUBLICADO" ? "on" : "off"}`}>
                  {p.status === "PUBLICADO" ? "Publicado" : "Rascunho"}
                </span>
              </td>
              <td>
                <span className="admin-actions">
                  <Link href={`/admin/posts/${p.id}`}>editar</Link>
                  <button onClick={() => { if (confirm(`Excluir "${p.title}"?`)) deletePostAction(p.id); }}>
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

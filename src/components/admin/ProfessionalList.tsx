"use client";
import { useState } from "react";
import Link from "next/link";
import type { Professional } from "@prisma/client";
import { toggleProfessionalActiveAction, deleteProfessionalAction } from "@/lib/actions/professional-actions";

export function ProfessionalList({ items }: { items: Professional[] }) {
  const [kind, setKind] = useState<"ALL" | "EQUIPE" | "ESPECIALISTA">("ALL");
  const [q, setQ] = useState("");
  const filtered = items.filter(
    (p) => (kind === "ALL" || p.kind === kind) && p.name.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <select value={kind} onChange={(e) => setKind(e.target.value as typeof kind)}>
          <option value="ALL">Todos</option>
          <option value="EQUIPE">Equipe</option>
          <option value="ESPECIALISTA">Especialistas</option>
        </select>
        <input placeholder="Buscar por nome" value={q} onChange={(e) => setQ(e.target.value)} />
        <Link href="/admin/professionals/new">+ Novo</Link>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr><th align="left">Nome</th><th>Tipo</th><th>Cargo/Área</th><th>Ativo</th><th></th></tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id} style={{ borderTop: "1px solid #eee" }}>
              <td>{p.name}</td>
              <td align="center">{p.kind === "EQUIPE" ? "Equipe" : "Especialista"}</td>
              <td align="center">{p.specialty ?? p.title}</td>
              <td align="center">
                <input type="checkbox" checked={p.active}
                  onChange={(e) => toggleProfessionalActiveAction(p.id, e.target.checked)} />
              </td>
              <td align="right">
                <Link href={`/admin/professionals/${p.id}`}>editar</Link>{" · "}
                <button onClick={() => { if (confirm(`Excluir ${p.name}?`)) deleteProfessionalAction(p.id); }}>
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

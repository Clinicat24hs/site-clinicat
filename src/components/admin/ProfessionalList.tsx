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
      <div className="admin-toolbar">
        <select value={kind} onChange={(e) => setKind(e.target.value as typeof kind)}>
          <option value="ALL">Todos</option>
          <option value="EQUIPE">Equipe</option>
          <option value="ESPECIALISTA">Especialistas</option>
        </select>
        <input placeholder="Buscar por nome" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="spacer" />
        <Link href="/admin/professionals/new" className="btn-a">+ Novo</Link>
      </div>
      <p className="admin-muted" style={{ marginBottom: 12 }}>{filtered.length} profissionais</p>
      <table>
        <thead>
          <tr><th style={{ width: 56 }}>Foto</th><th>Nome</th><th>Tipo</th><th>Cargo/Área</th><th>CRMV</th><th>Ativo</th><th></th></tr>
        </thead>
        <tbody>
          {filtered.map((p) => (
            <tr key={p.id}>
              <td>
                {p.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.photoUrl} alt={p.name} className="admin-thumb" />
                ) : (
                  <span className="admin-thumb admin-thumb-empty">?</span>
                )}
              </td>
              <td>{p.name}</td>
              <td>{p.kind === "EQUIPE" ? "Equipe" : "Especialista"}</td>
              <td>{p.specialty ?? p.title}</td>
              <td>{p.crmv ?? "—"}</td>
              <td>
                <input type="checkbox" checked={p.active}
                  onChange={(e) => toggleProfessionalActiveAction(p.id, e.target.checked)} />
              </td>
              <td>
                <span className="admin-actions">
                  <Link href={`/admin/professionals/${p.id}`}>editar</Link>
                  <button onClick={() => { if (confirm(`Excluir ${p.name}?`)) deleteProfessionalAction(p.id); }}>
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

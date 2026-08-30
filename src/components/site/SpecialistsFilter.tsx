"use client";

import { useMemo, useState } from "react";
import type { Professional } from "@prisma/client";
import { TeamCard } from "@/components/site/TeamCard";

export function SpecialistsFilter({ specialists }: { specialists: Professional[] }) {
  // Áreas distintas (na ordem em que aparecem), para montar os filtros.
  const areas = useMemo(() => {
    const seen: string[] = [];
    for (const p of specialists) {
      const a = (p.specialty || "").trim();
      if (a && !seen.includes(a)) seen.push(a);
    }
    return seen.sort((x, y) => x.localeCompare(y, "pt-BR"));
  }, [specialists]);

  const [active, setActive] = useState<string>("__all__");

  const filtered = useMemo(
    () => (active === "__all__" ? specialists : specialists.filter((p) => (p.specialty || "").trim() === active)),
    [specialists, active],
  );

  // Sem áreas cadastradas: só mostra a galeria, sem barra de filtros.
  const showFilters = areas.length > 1;

  return (
    <>
      {showFilters && (
        <div className="row gap wrap" style={{ justifyContent: "center", marginTop: "1.75rem" }} role="tablist" aria-label="Filtrar por área">
          <button
            type="button"
            className={`chip${active === "__all__" ? " chip-active" : ""}`}
            aria-pressed={active === "__all__"}
            onClick={() => setActive("__all__")}
          >
            Todas
          </button>
          {areas.map((a) => (
            <button
              key={a}
              type="button"
              className={`chip${active === a ? " chip-active" : ""}`}
              aria-pressed={active === a}
              onClick={() => setActive(a)}
            >
              {a}
            </button>
          ))}
        </div>
      )}

      <div className="team-grid" style={{ marginTop: "2rem" }}>
        {filtered.map((p) => (
          <TeamCard key={p.id} p={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="center muted" style={{ marginTop: "1.5rem" }}>
          Nenhum especialista nesta área no momento.
        </p>
      )}
    </>
  );
}

import type { Professional } from "@prisma/client";

const PersonIcon = () => (
  <svg className="ico" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
  </svg>
);

export function TeamCard({ p }: { p: Professional }) {
  return (
    <article className="team-card">
      <div className="team-photo">
        {p.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={p.photoUrl} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <PersonIcon />
        )}
      </div>
      <div className="body">
        <h3>{p.name}</h3>
        <div className="team-role">{p.title}</div>
        {p.crmv && <div className="team-crmv">{p.crmv}</div>}
        {p.bio && <p style={{ fontSize: ".85rem", color: "var(--muted)", marginTop: ".5rem" }}>{p.bio}</p>}
      </div>
    </article>
  );
}

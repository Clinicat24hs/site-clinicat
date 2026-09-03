const CONVENIOS = [
  { src: "/convenios/doglife.png", alt: "Dog Life" },
  { src: "/convenios/petlife.png", alt: "Pet Life" },
  { src: "/convenios/catlife.png", alt: "CatLife" },
  { src: "/convenios/plamev.png", alt: "Plamev" },
];

export function ConvenioLogos({ height = 44, center = false }: { height?: number; center?: boolean }) {
  return (
    <div className="row gap wrap" style={{ alignItems: "center", justifyContent: center ? "center" : undefined }}>
      {CONVENIOS.map((l) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={l.src}
          src={l.src}
          alt={`Convênio ${l.alt}`}
          style={{ height, width: "auto", borderRadius: 10, border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}
        />
      ))}
    </div>
  );
}

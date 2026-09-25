const CONVENIOS: { src: string; alt: string; href?: string }[] = [
  { src: "/convenios/doglife.png", alt: "Dog Life" },
  { src: "/convenios/petlife.png", alt: "Pet Life" },
  { src: "/convenios/catlife.png", alt: "CatLife" },
  { src: "/convenios/plamev.png", alt: "Plamev" },
  {
    src: "/convenios/petvidas.png",
    alt: "Petvidas",
    href: "http://sistemapetvidas.com.br/ClientePetContrato/CheckoutClientePorte?idConsultor=31",
  },
];

export function ConvenioLogos({ height = 44, center = false }: { height?: number; center?: boolean }) {
  return (
    <div className="row gap wrap" style={{ alignItems: "center", justifyContent: center ? "center" : undefined }}>
      {CONVENIOS.map((l) => {
        // eslint-disable-next-line @next/next/no-img-element
        const img = (
          <img
            src={l.src}
            alt={`Convênio ${l.alt}`}
            style={{ height, width: "auto", borderRadius: 10, border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)", display: "block" }}
          />
        );
        return l.href ? (
          <a key={l.src} href={l.href} target="_blank" rel="noopener" aria-label={`${l.alt} — contratar plano`} title={`${l.alt} — contratar plano`}>
            {img}
          </a>
        ) : (
          <span key={l.src}>{img}</span>
        );
      })}
    </div>
  );
}

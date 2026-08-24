export interface GalleryImage {
  /** Caminho do arquivo em /public. */
  src: string;
  /** Legenda exibida na foto — usada também como alt. */
  label: string;
}

export interface ServiceGallery {
  /** Título da seção; cai no padrão do componente quando ausente. */
  title?: string;
  subtitle?: string;
  /** Foto de capa do hero, usada quando a página não tem coverUrl no admin. */
  cover?: {
    src: string;
    /** object-position do recorte 4/3 do hero. */
    objectPosition?: string;
  };
  images: GalleryImage[];
}

/**
 * Galerias de fotos por slug de página de serviço.
 * Slugs sem entrada aqui simplesmente não exibem a seção de galeria.
 */
export const SERVICE_GALLERIES: Record<string, ServiceGallery> = {
  "banho-e-tosa": {
    subtitle:
      "Alguns dos pets que passaram pelo nosso banho e tosa — limpinhos, cheirosos e prontos para voltar para casa.",
    // Foto quadrada: o recorte 4/3 do hero sobe um pouco para não cortar a cabeça.
    cover: { src: "/estrutura/bob-2.jpg", objectPosition: "center 15%" },
    images: [
      { src: "/estrutura/1.jpg", label: "Pelagem limpa e macia depois do banho" },
      { src: "/estrutura/2.jpeg", label: "Acabamento caprichado, com laços de brinde" },
      { src: "/estrutura/3.jpeg", label: "Gravatinha na saída do atendimento" },
      { src: "/estrutura/4.jpeg", label: "Manejo gentil do começo ao fim" },
      { src: "/estrutura/5.jpeg", label: "Banho com produtos adequados a cada pelagem" },
      { src: "/estrutura/6.jpeg", label: "Secagem cuidadosa e escovação" },
      { src: "/estrutura/7.jpeg", label: "Tosa higiênica e estética" },
      { src: "/estrutura/8.jpeg", label: "Ambiente tranquilo para o pet relaxar" },
      { src: "/estrutura/9.jpeg", label: "Pet feliz na hora de ir para casa" },
      { src: "/estrutura/10.jpeg", label: "Detalhes de acabamento: laços e acessórios" },
      { src: "/estrutura/11.jpeg", label: "Cuidados com unhas, ouvidos e higiene geral" },
    ],
  },
};

export function getServiceGallery(slug: string): ServiceGallery | undefined {
  return SERVICE_GALLERIES[slug];
}

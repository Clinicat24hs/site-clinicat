/**
 * Disparo de eventos de conversão para Meta Pixel e Google Ads.
 *
 * Cada contato do site (WhatsApp, telefone, formulário) chama `trackContact`.
 * O evento vai para as duas plataformas de uma vez, com o mesmo nome lógico,
 * para que os relatórios batam entre elas.
 *
 * O rótulo de conversão do Google (AW-XXXX/abc123) é opcional e por canal:
 *   NEXT_PUBLIC_GADS_LABEL_WHATSAPP
 *   NEXT_PUBLIC_GADS_LABEL_PHONE
 *   NEXT_PUBLIC_GADS_LABEL_FORM
 * Sem rótulo, o evento ainda é enviado como evento nomeado (útil no GA4 e
 * importável como conversão), só não conta direto na conversão do Ads.
 */

type ContactChannel = "whatsapp" | "phone" | "form";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const GADS_LABELS: Record<ContactChannel, string | undefined> = {
  whatsapp: process.env.NEXT_PUBLIC_GADS_LABEL_WHATSAPP,
  phone: process.env.NEXT_PUBLIC_GADS_LABEL_PHONE,
  form: process.env.NEXT_PUBLIC_GADS_LABEL_FORM,
};

/** Nome do evento como aparece no GA4 / Google Ads. */
const GA_EVENT_NAME: Record<ContactChannel, string> = {
  whatsapp: "clique_whatsapp",
  phone: "clique_telefone",
  form: "envio_formulario",
};

/**
 * Registra um contato iniciado pelo usuário.
 *
 * @param channel  Por onde o contato começou.
 * @param location Onde no site o clique aconteceu (header, footer, hero…),
 *                 para separar no relatório qual ponto de contato converte.
 */
export function trackContact(channel: ContactChannel, location: string): void {
  if (typeof window === "undefined") return;

  // Meta: "Contact" é evento padrão do Pixel, então já entra nos relatórios
  // e pode ser usado como otimização de campanha sem configuração extra.
  try {
    window.fbq?.("track", "Contact", { channel, location });
  } catch {
    // Bloqueador de anúncios ou rede indisponível: nunca quebrar o clique.
  }

  try {
    // transport_type "beacon" usa navigator.sendBeacon, que é entregue mesmo
    // se a página for descarregada em seguida. A maioria dos links de WhatsApp
    // do site navega na mesma aba, então sem isso a conversão se perde no meio
    // do caminho — é o mesmo problema que o event_callback do snippet oficial
    // do Google resolve, sem precisar segurar a navegação do usuário.
    const label = GADS_LABELS[channel];
    if (label) {
      window.gtag?.("event", "conversion", {
        send_to: label,
        transport_type: "beacon",
      });
    }
    window.gtag?.("event", GA_EVENT_NAME[channel], {
      event_category: "contato",
      event_label: location,
      transport_type: "beacon",
    });
  } catch {
    // idem
  }
}

"use client";

import { useEffect } from "react";
import { trackContact } from "@/lib/track";

/**
 * Observa cliques de contato em toda a página por delegação, em vez de exigir
 * um onClick em cada link. Assim os componentes do site seguem sendo server
 * components e qualquer link de WhatsApp/telefone novo já entra no rastreio
 * sem precisar lembrar de instrumentar.
 *
 * O `location` do evento sai do container mais próximo com data-track-area
 * (ou da tag semântica), para o relatório mostrar qual ponto de contato
 * converte melhor: header, footer, hero, página de serviço…
 */
function areaOf(el: Element): string {
  const marked = el.closest("[data-track-area]");
  if (marked) return marked.getAttribute("data-track-area") || "desconhecido";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  if (el.closest("form")) return "formulario";
  return "conteudo";
}

export function ContactTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/i.test(href)) {
        trackContact("whatsapp", areaOf(link));
      } else if (href.startsWith("tel:")) {
        trackContact("phone", areaOf(link));
      }
    }

    // O formulário de contato monta uma URL do WhatsApp e navega; o submit é
    // o momento em que o lead realmente acontece.
    function onSubmit(e: Event) {
      const form = (e.target as Element | null)?.closest?.("form[data-wpp-form]");
      if (form) trackContact("form", areaOf(form));
    }

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  return null;
}

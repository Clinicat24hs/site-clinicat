"use client";

import { useEffect } from "react";

// forms.app injeta seu construtor global `formsapp` via embed.js.
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    formsapp?: any;
  }
}

const FORM_ID = "6851a2299526ea99b7a1f6b8";
const SHARE_URL = "https://share.forms.app";
const EMBED_SRC = "https://cdn.formsapp.io/embed.js";

export function SurveyEmbed() {
  useEffect(() => {
    // Inicializa o formulário. Idempotente: sobrevive à navegação client-side do Next.
    const init = () => {
      try {
        if (window.formsapp) {
          // "standard": embute o formulário no iframe da página (mantém o menu do site).
          new window.formsapp(FORM_ID, "standard", {}, SHARE_URL);
        }
      } catch {
        /* noop */
      }
    };

    if (window.formsapp) {
      init();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", init);
      return () => existing.removeEventListener("load", init);
    }

    const s = document.createElement("script");
    s.src = EMBED_SRC;
    s.async = true;
    s.defer = true;
    s.addEventListener("load", init);
    document.body.appendChild(s);
  }, []);

  return (
    <div className="survey-embed">
      <iframe
        data-formsapp-src={`${SHARE_URL}/form/${FORM_ID}`}
        title="Pesquisa de Satisfação - Clinicat"
        style={{ width: "100%", minHeight: "78vh", border: 0, borderRadius: 16 }}
      />
    </div>
  );
}

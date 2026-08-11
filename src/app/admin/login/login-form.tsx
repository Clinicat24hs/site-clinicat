"use client";

import { useActionState, useState } from "react";
import { loginAction } from "@/lib/actions/auth-actions";

const EyeIcon = ({ off }: { off: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {off ? (
      <>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19M6.61 6.61A18.5 18.5 0 0 0 2 12s3 8 10 8a9.12 9.12 0 0 0 5.06-1.54" />
        <path d="M14.12 14.12A3 3 0 1 1 9.88 9.88" /><line x1="2" y1="2" x2="22" y2="22" />
      </>
    ) : (
      <>
        <path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8Z" /><circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, {});
  const [show, setShow] = useState(false);
  return (
    <form action={action} style={{ display: "grid", gap: 12 }}>
      <label>E-mail<input name="email" type="email" required /></label>
      <label>
        Senha
        <span style={{ position: "relative", display: "block" }}>
          <input name="password" type={show ? "text" : "password"} required style={{ paddingRight: 44 }} />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Ocultar senha" : "Mostrar senha"}
            title={show ? "Ocultar senha" : "Mostrar senha"}
            style={{
              position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)",
              background: "transparent", color: "var(--a-muted)", border: "none",
              padding: 6, cursor: "pointer", display: "grid", placeItems: "center",
            }}
          >
            <EyeIcon off={show} />
          </button>
        </span>
      </label>
      {state?.error && <p style={{ color: "crimson" }}>{state.error}</p>}
      <button type="submit" disabled={pending}>
        {pending ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

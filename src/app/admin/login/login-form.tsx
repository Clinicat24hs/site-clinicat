"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions/auth-actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, {});
  return (
    <form action={action} style={{ display: "grid", gap: 12, maxWidth: 320 }}>
      <label>E-mail<input name="email" type="email" required /></label>
      <label>Senha<input name="password" type="password" required /></label>
      {state?.error && <p style={{ color: "crimson" }}>{state.error}</p>}
      <button type="submit" disabled={pending}>
        {pending ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // Deploy atrás de proxy (Coolify/Traefik) em domínio próprio: sem isso o Auth.js v5
  // rejeita o host (UntrustedHost) e devolve "problem with the server configuration".
  trustHost: true,
  pages: { signIn: "/admin/login" },
  session: { strategy: "jwt" },
  providers: [], // preenchido em auth.ts (Node); vazio aqui mantém o bundle edge-safe
  callbacks: {
    authorized({ auth, request }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/admin/login") return true;
      if (pathname.startsWith("/admin")) return !!auth?.user; // false → redireciona pro signIn
      return true;
    },
  },
} satisfies NextAuthConfig;

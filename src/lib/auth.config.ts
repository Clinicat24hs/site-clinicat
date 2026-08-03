import type { NextAuthConfig } from "next-auth";

export const authConfig = {
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

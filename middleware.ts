import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// Instância só-Edge: sem providers com Prisma/bcrypt. O callback `authorized`
// de auth.config.ts retorna false para /admin sem sessão → Auth.js redireciona
// automaticamente para `pages.signIn` (/admin/login).
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/admin/:path*", "/relatorios", "/relatorios.html"],
};

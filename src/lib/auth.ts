import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "@/lib/auth.config";
import { db } from "@/lib/db";
import { authorizeAdmin } from "@/lib/authorize";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (creds) => {
        const repo = {
          findByEmail: (email: string) =>
            db.adminUser.findUnique({ where: { email } }),
        };
        return authorizeAdmin(
          repo,
          String(creds?.email ?? ""),
          String(creds?.password ?? "")
        );
      },
    }),
  ],
});

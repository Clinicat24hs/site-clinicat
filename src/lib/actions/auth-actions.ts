"use server";

import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import { headers } from "next/headers";
import { loginRateLimiter } from "@/lib/rate-limit";

export async function loginAction(_prev: unknown, formData: FormData) {
  const hdrs = await headers();
  const ip = hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!loginRateLimiter.check(ip)) {
    return { error: "Muitas tentativas. Aguarde alguns minutos e tente de novo." };
  }
  try {
    await signIn("credentials", {
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
      redirectTo: "/admin",
    });
  } catch (error) {
    if (error instanceof AuthError) return { error: "E-mail ou senha inválidos." };
    throw error;
  }
  return {};
}

export async function logoutAction() {
  await signOut({ redirectTo: "/admin/login" });
}

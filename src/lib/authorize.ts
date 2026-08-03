import { verifyPassword } from "@/lib/password";

export interface AdminRecord {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
}

export interface AdminRepo {
  findByEmail(email: string): Promise<AdminRecord | null>;
}

export async function authorizeAdmin(
  repo: AdminRepo,
  email: string,
  password: string
): Promise<{ id: string; email: string; name: string } | null> {
  if (!email || !password) return null;
  const admin = await repo.findByEmail(email);
  if (!admin) return null;
  const ok = await verifyPassword(password, admin.passwordHash);
  if (!ok) return null;
  return { id: admin.id, email: admin.email, name: admin.name };
}

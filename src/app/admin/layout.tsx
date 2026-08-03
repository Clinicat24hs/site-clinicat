import Link from "next/link";
import { auth } from "@/lib/auth";
import { logoutAction } from "@/lib/actions/auth-actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  // A página de login é renderizada fora deste layout guard via checagem de sessão:
  if (!session?.user) {
    // Sem sessão: só permite a rota de login (middleware já redireciona as demais).
    return <>{children}</>;
  }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: "100vh" }}>
      <aside style={{ padding: 16, borderRight: "1px solid #eee" }}>
        <strong>Clinicat Admin</strong>
        <nav style={{ display: "grid", gap: 8, marginTop: 16 }}>
          <Link href="/admin/professionals">Profissionais</Link>
          <Link href="/admin/posts">Blog</Link>
        </nav>
        <form action={logoutAction} style={{ marginTop: 24 }}>
          <button type="submit">Sair</button>
        </form>
      </aside>
      <main style={{ padding: 24 }}>{children}</main>
    </div>
  );
}

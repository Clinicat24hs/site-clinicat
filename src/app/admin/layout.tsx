import Link from "next/link";
import { auth } from "@/lib/auth";
import { logoutAction } from "@/lib/actions/auth-actions";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // Sem sessão (página de login): shell + centralização, sem sidebar.
  if (!session?.user) {
    return (
      <>
        <link rel="stylesheet" href="/admin.css" />
        <div className="admin-shell">
          <div className="admin-login">{children}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <link rel="stylesheet" href="/admin.css" />
      <div className="admin-shell">
        <div className="admin-layout">
          <aside className="admin-sidebar">
            <div className="admin-brand">
              Clinicat
              <small>Admin</small>
            </div>
            <nav className="admin-nav">
              <Link href="/admin">Painel</Link>
              <Link href="/admin/professionals">Profissionais</Link>
              <Link href="/admin/content">Especialidades &amp; Serviços</Link>
              <Link href="/admin/posts">Blog</Link>
            </nav>
            <form action={logoutAction}>
              <button type="submit" className="admin-logout">Sair</button>
            </form>
          </aside>
          <main className="admin-main">{children}</main>
        </div>
      </div>
    </>
  );
}

import { auth } from "@/lib/auth";

export default async function AdminDashboard() {
  const session = await auth();
  return (
    <div>
      <h1>Painel</h1>
      <p>Bem-vindo(a), {session?.user?.name ?? "admin"}.</p>
      <p>Use o menu para gerenciar Profissionais e Blog.</p>
    </div>
  );
}

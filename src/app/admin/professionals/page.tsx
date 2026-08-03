import { listAllProfessionals } from "@/lib/professionals";
import { ProfessionalList } from "@/components/admin/ProfessionalList";

export const dynamic = "force-dynamic";

export default async function AdminProfessionals() {
  const items = await listAllProfessionals();
  return (
    <div>
      <h1>Profissionais</h1>
      <ProfessionalList items={items} />
    </div>
  );
}

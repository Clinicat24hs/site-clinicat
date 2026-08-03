import { notFound } from "next/navigation";
import { getProfessional } from "@/lib/professionals";
import { ProfessionalForm } from "@/components/admin/ProfessionalForm";
import { updateProfessionalAction } from "@/lib/actions/professional-actions";

export const dynamic = "force-dynamic";

export default async function EditProfessional({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const professional = await getProfessional(id);
  if (!professional) notFound();
  const action = updateProfessionalAction.bind(null, id);
  return (
    <div>
      <h1>Editar: {professional.name}</h1>
      <ProfessionalForm initial={professional} action={action} />
    </div>
  );
}

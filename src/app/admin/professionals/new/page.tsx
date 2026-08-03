import { ProfessionalForm } from "@/components/admin/ProfessionalForm";
import { createProfessionalAction } from "@/lib/actions/professional-actions";

export default function NewProfessional() {
  return (
    <div>
      <h1>Novo profissional</h1>
      <ProfessionalForm action={createProfessionalAction} />
    </div>
  );
}

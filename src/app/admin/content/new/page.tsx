import { ContentForm } from "@/components/admin/ContentForm";
import { createContentAction } from "@/lib/actions/content-actions";

export default function NewContent() {
  return (
    <div>
      <h1>Novo item</h1>
      <ContentForm action={createContentAction} />
    </div>
  );
}

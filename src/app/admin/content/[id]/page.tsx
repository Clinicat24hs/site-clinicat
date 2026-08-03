import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { ContentForm } from "@/components/admin/ContentForm";
import { updateContentAction } from "@/lib/actions/content-actions";

export const dynamic = "force-dynamic";

export default async function EditContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const content = await getContent(id);
  if (!content) notFound();
  const action = updateContentAction.bind(null, id);
  return (
    <div>
      <h1>Editar: {content.title}</h1>
      <ContentForm initial={content} action={action} />
    </div>
  );
}

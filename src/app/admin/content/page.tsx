import { listContent } from "@/lib/content";
import { ContentList } from "@/components/admin/ContentList";

export const dynamic = "force-dynamic";

export default async function AdminContent() {
  const items = await listContent();
  return (
    <div>
      <h1>Especialidades & Serviços</h1>
      <ContentList items={items} />
    </div>
  );
}

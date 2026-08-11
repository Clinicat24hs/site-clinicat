import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts";
import { PostForm } from "@/components/admin/PostForm";
import { updatePostAction } from "@/lib/actions/post-actions";

export const dynamic = "force-dynamic";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) notFound();
  const action = updatePostAction.bind(null, id);
  return (
    <div>
      <h1>Editar: {post.title}</h1>
      <PostForm initial={post} action={action} />
    </div>
  );
}

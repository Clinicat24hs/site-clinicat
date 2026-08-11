import { PostForm } from "@/components/admin/PostForm";
import { createPostAction } from "@/lib/actions/post-actions";

export default function NewPost() {
  return (
    <div>
      <h1>Nova matéria</h1>
      <PostForm action={createPostAction} />
    </div>
  );
}

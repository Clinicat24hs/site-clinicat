import { listAllPosts } from "@/lib/posts";
import { PostList } from "@/components/admin/PostList";

export const dynamic = "force-dynamic";

export default async function AdminPosts() {
  const items = await listAllPosts();
  return (
    <div>
      <h1>Blog</h1>
      <PostList items={items} />
    </div>
  );
}

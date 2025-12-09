import { posts } from "../lib/blogData";

export default function BlogList() {
  return (
    <div className="grid gap-10">
      {posts.map((post) => (
        <article key={post.slug} className="p-8 border rounded-3xl dark:border-white/10">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="mt-2 opacity-70">{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

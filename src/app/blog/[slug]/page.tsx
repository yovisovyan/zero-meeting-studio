// src/app/blog/[slug]/page.tsx

import { posts } from "@/lib/posts";
import Image from "next/image";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-400 mb-8">{post.date}</p>

      {post.image && (
        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <article className="prose prose-invert leading-relaxed">
        <p>{post.excerpt}</p>

        <p>
          This is placeholder blog content. Replace this with real content,
          Markdown, or CMS-powered text. For now, this ensures your dynamic
          blog route builds correctly on Vercel.
        </p>

        <p>
          Add as many paragraphs as you want. The key is that all tags are
          properly closed so the JSX parser can interpret the file.
        </p>
      </article>
    </main>
  );
}

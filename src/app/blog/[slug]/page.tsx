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
        {post.excerpt}
        <br />
        <br />
        <p>
          This is p

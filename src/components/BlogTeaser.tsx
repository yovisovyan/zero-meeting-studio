// src/components/BlogTeaser.tsx
import Link from "next/link";
import Image from "next/image";
import { posts } from "../lib/posts";

export default function BlogTeaser() {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Insights & Ideas</h2>
          <p className="text-gray-400 max-w-xl">
            Fresh thinking on design, web performance, and modern branding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl overflow-hidden bg-glass border border-white/5 p-4 hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  unoptimized={false}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h3 className="text-xl font-semibold group-hover:text-white/90">
                {post.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">{post.excerpt}</p>

              <p className="text-brand-500 mt-3 text-sm group-hover:underline">
                Read more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

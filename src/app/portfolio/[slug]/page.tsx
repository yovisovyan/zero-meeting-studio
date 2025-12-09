import { portfolio } from "@/lib/portfolio";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolio.find((p) => p.slug === params.slug);

  if (!project) return <div className="pt-40 text-center">Project not found.</div>;

  return (
    <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      
      <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
      <p className="text-xl text-gray-400 mb-12">{project.tagline}</p>

      <div className="space-y-10">
        {project.images.map((img, i) => (
          <div key={i} className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            <Image src={img} alt={project.title} fill className="object-cover" />
          </div>
        ))}
      </div>

      {project.results && (
        <div className="mt-16 bg-glass p-8 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-semibold mb-4">Results</h2>
          <ul className="space-y-2 text-gray-300">
            {project.results.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

interface BlogCardProps {
  title: string;
  desc: string;
}

export default function BlogCard({ title, desc }: BlogCardProps) {
  return (
    <div className="p-8 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:scale-[1.02] transition">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

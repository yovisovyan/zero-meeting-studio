export default function BlogCard({ title, desc }) {
  return (
    <div className="p-8 rounded-3xl bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:scale-[1.02] transition">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

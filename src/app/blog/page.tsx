import BlogList from "../../components/BlogList";

export default function BlogPage() {
  return (
    <main className="mt-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <BlogList />
    </main>
  );
}

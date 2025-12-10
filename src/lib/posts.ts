// src/lib/posts.ts

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    title: "Why Your Website Fails to Convert (And How to Fix It)",
    slug: "website-conversion-secrets",
    excerpt:
      "Most websites look great but silently lose customers. Fix these three high-impact conversion killers.",
    image:
      "https://images.unsplash.com/photo-1551292831-023188e78222?auto=format&fit=crop&w=1600&q=80",
    date: "2025-01-04",
  },
  {
    title: "The Zero-Meeting Workflow: How We Deliver Fast, Every Time",
    slug: "zero-meeting-workflow",
    excerpt:
      "A look into our async-first system that eliminates calls while increasing clarity and speed.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    date: "2025-01-01",
  },
  {
    title: "Apple-Inspired Design: The Hidden Formula",
    slug: "apple-inspired-design-secrets",
    excerpt:
      "Minimalism isn’t enough. Here’s the psychology and design theory behind Apple-level premium UX.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    date: "2024-12-28",
  },
  {
    title: "SEO in 2025: What Actually Matters",
    slug: "seo-in-2025",
    excerpt:
      "Forget old-school keyword hacks. Modern SEO is about search intent, UX, and AI-driven content structure.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
    date: "2025-01-10",
  },
  {
    title: "Design Psychology for High-Converting Landing Pages",
    slug: "design-psychology-landing-pages",
    excerpt:
      "Brands that convert well tap into predictable human behavior. Here are the visual cues that matter most.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1600&q=80",
    date: "2025-01-07",
  },
  {
    title: "How to Build Trust Quickly With Cold Traffic",
    slug: "build-trust-with-cold-traffic",
    excerpt:
      "Visitors decide in 0.2 seconds whether they trust your brand. Here’s what triggers an instant ‘yes’.",
    image:
      "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80",
    date: "2025-01-05",
  },
];

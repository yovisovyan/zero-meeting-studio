export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
  date: string;
}

export const posts: BlogPost[] = [
  {
    title: "Why Your Website Fails to Convert (And How to Fix It)",
    slug: "website-conversion-secrets",
    excerpt:
      "Most websites look good — but don’t convert. Learn the 3 conversion design principles that instantly lift sign-ups and sales.",
    image: "/blog/conversion.jpg",
    date: "2025-01-04",
  },
  {
    title: "The Zero-Meeting Workflow: How We Deliver Fast, Every Time",
    slug: "zero-meeting-workflow",
    excerpt:
      "Our async-first workflow eliminates meetings, delays, and confusion — allowing us to build high-end websites in record time.",
    image: "/blog/workflow.jpg",
    date: "2025-01-01",
  },
  {
    title: "Apple-Inspired Design: The Hidden Formula",
    slug: "apple-inspired-design-secrets",
    excerpt:
      "Apple designs feel effortless and premium. This article breaks down the visual psychology that makes their branding iconic.",
    image: "/blog/apple-premium.jpg",
    date: "2024-12-28",
  },

  /* -------------------- NEW SEO POSTS -------------------- */

  {
    title: "10 Mistakes Most Small Businesses Make With Their Website",
    slug: "small-business-website-mistakes",
    excerpt:
      "From slow load times to unclear messaging — here are the top mistakes hurting your credibility (and how to fix them fast).",
    image: "/blog/mistakes.jpg",
    date: "2025-01-07",
  },
  {
    title: "Why Modern Websites Must Be Built for Speed",
    slug: "website-speed-optimization",
    excerpt:
      "53% of users leave if a site takes longer than 3 seconds. Speed is now a revenue issue — here’s how to stay ahead.",
    image: "/blog/speed.jpg",
    date: "2025-01-06",
  },
  {
    title: "The Psychology Behind High-Converting Landing Pages",
    slug: "landing-page-psychology",
    excerpt:
      "Conversion isn’t luck — it’s psychology. Learn the human-behavior triggers Apple, Stripe, and Airbnb use to influence decisions.",
    image: "/blog/psychology.jpg",
    date: "2025-01-05",
  },
  {
    title: "Why Branding Matters More Than Features",
    slug: "branding-vs-features",
    excerpt:
      "People don’t buy features — they buy meaning. Here’s why strategic branding wins over even the best product specs.",
    image: "/blog/branding.jpg",
    date: "2024-12-30",
  },
  {
    title: "How AI Is Changing Modern Web Design",
    slug: "ai-web-design-future",
    excerpt:
      "AI isn’t replacing designers — it’s empowering them. Discover how AI enhances workflows, creativity, and ultra-fast delivery.",
    image: "/blog/ai-design.jpg",
    date: "2024-12-29",
  },
];

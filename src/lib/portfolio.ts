// src/lib/portfolio.ts
export interface PortfolioProject {
  title: string;
  slug: string;
  tagline: string;
  thumbnail: string;
  images: string[];
  category: string;
  results?: string[];
  problem?: string;
  solution?: string;
}

export const portfolio: PortfolioProject[] = [
  {
    title: "SaaS Dashboard",
    slug: "saas-dashboard",
    tagline: "A clean, modern analytics dashboard for a fast-growing SaaS.",
    category: "Web App",
    thumbnail:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      "https://images.unsplash.com/photo-1547658719-da2b51169166",
      "https://images.unsplash.com/photo-1553531888-a663144fed42",
    ],
    problem:
      "The old dashboard was cluttered and confusing, causing drop-offs and support tickets.",
    solution:
      "We designed a clean UI with clear hierarchy, fast charts, and mobile-first responsiveness.",
    results: [
      "↑ 36% onboarding completion",
      "↑ 22% paid conversions",
      "↓ 40% support tickets",
    ],
  },

  {
    title: "Fitness Landing Page",
    slug: "fitness-landing",
    tagline:
      "High-conversion landing page for a fitness instructor selling training programs.",
    category: "Landing Page",
    thumbnail:
      "https://images.unsplash.com/photo-1554284126-5b63f9db83f1",
    images: [
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      "https://images.unsplash.com/photo-1596357395217-80de13130a43",
    ],
    problem:
      "Low conversion from social media traffic and unclear value proposition.",
    solution:
      "A high-energy landing page with strong hierarchy, social proof, and clear CTAs.",
    results: [
      "1200+ leads in 30 days",
      "18% conversion rate",
    ],
  },

  {
    title: "eCommerce Brand Redesign",
    slug: "ecommerce-redesign",
    tagline:
      "A complete redesign for a growing minimalist clothing brand.",
    category: "E-Commerce",
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    ],
    problem:
      "Brand lacked consistency and was losing conversions due to outdated UX.",
    solution:
      "A premium redesign using better storytelling, refined UI, and optimized checkout.",
    results: ["2.3× revenue increase", "17% higher AOV"],
  },
];

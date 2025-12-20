// src/lib/schemas.ts

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zero-Meeting Studio",
  url: "https://www.zeromeeting.site",
  logo: "https://www.zeromeeting.site/logo.png",
  description: "Premium async web design studio",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ID",
    addressRegion: "Indonesia",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@zeromeeting.studio",
    telephone: "+62-8515-6974-570",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zero-Meeting Studio",
  priceRange: "$499-$1800",
  areaServed: ["US", "EU", "Asia"],
  offers: [
    {
      "@type": "Offer",
      name: "Launch Landing Page",
      price: "499",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Business Website",
      price: "1200",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "Shopify Store",
      price: "1800",
      priceCurrency: "USD",
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do we really not need any meetings?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes — by design. Everything happens async through a short onboarding form, written updates, and Loom videos when helpful.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is delivery, really?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "48–72 hours for most projects. We work in focused async sprints without meetings or blockers.",
      },
    },
  ],
};

export const articleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    "@type": "Person",
    name: article.author,
  },
  url: article.url,
});

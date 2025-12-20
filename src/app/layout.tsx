// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zero-Meeting Studio | Premium Web Design & Landing Pages - No Meetings Required",
  description:
    "Zero-Meeting Studio builds Apple-grade landing pages, business websites, and Shopify stores for founders. Fast async delivery in 48-72 hours. No meetings, no calls, just results.",
  keywords: [
    "web design",
    "landing pages",
    "business websites",
    "Shopify stores",
    "async web design",
    "conversion-focused design",
    "premium websites",
  ],
  authors: [{ name: "Zero-Meeting Studio" }],
  creator: "Zero-Meeting Studio",
  metadataBase: new URL("https://www.zeromeeting.site"),
  alternates: {
    canonical: "https://www.zeromeeting.site",
  },

  openGraph: {
    title: "Zero-Meeting Studio | Premium Web Design & Landing Pages - No Meetings Required",
    description:
      "Apple-grade websites built async for founders. No meetings. Delivered in 48–72 hours.",
    url: "https://www.zeromeeting.site",
    siteName: "Zero-Meeting Studio",
    images: [
      {
        url: "https://www.zeromeeting.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zero-Meeting Studio — Async Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zero-Meeting Studio | Premium Async Web Design",
    description:
      "High-conversion websites built without meetings. Fast async delivery for founders.",
    images: ["https://www.zeromeeting.site/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zero-Meeting Studio",
              url: "https://www.zeromeeting.site",
              logo: "https://www.zeromeeting.site/logo.png",
              description:
                "Premium async web design studio building Apple-grade landing pages and business websites",
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
              sameAs: [
                "https://www.upwork.com/freelancers/~01731a55e280e4b81f",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

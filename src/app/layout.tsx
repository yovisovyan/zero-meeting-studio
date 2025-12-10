// src/app/layout.tsx
import "./globals.css";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import PageTransition from "@/components/PageTransition";
import Concierge from "@/components/Concierge";


export const metadata = {
  title: "Zero-Meeting Studio",
  description: "Beautiful websites. Zero meetings.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ClientLayoutWrapper>
            <div className="relative z-10 min-h-screen transition-colors">
              <Navbar />
              <PageTransition>{children}</PageTransition>
              <Concierge />
              <Footer />
            </div>
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

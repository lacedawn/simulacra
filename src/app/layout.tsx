import type { Metadata } from "next";
import { DM_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { cn } from "@/lib/utils";

// Initiate font with correct preload and css variable assignment
const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap", // Prevents FOIT to ensure zero layout shift penalties
});

const newsreader = Newsreader({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://essence.simulacra.com"),
  title: "essence",
  description: "personal site containing essays, musings, and scattered thoughts.",
  openGraph: {
    title: "essence",
    description: "lacedawn",
    type: "website",
    url: "/", // Canonical URL would go here in prod
  },
  twitter: {
    card: "summary_large_image",
    title: "essence",
    description: "personal site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(dmMono.variable, newsreader.variable, "dark")}>
      <body className="min-h-screen bg-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-box focus:text-accent outline-none"
        >
          Skip to main content
        </a>
        <div className="max-w-container-lg mx-auto py-8 px-4 flex flex-col min-h-screen">
          <header>
            <Nav />
          </header>
          <main id="main-content" className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

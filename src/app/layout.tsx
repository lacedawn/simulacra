import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://lacedawn.github.io"),
  title: "lacedawn",
  description: "lebonbon",
  openGraph: {
    type: "website",
    title: "lacedawn",
    description: "lebonbon",
    siteName: "lacedawn",
  },
  twitter: {
    card: "summary",
    title: "lacedawn",
    description: "lebonbon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ebGaramond.variable}>
      <head>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-accent outline-none"
        >
          skip to main content
        </a>
        <div className="max-w-container-lg mx-auto py-10 px-6 flex flex-col min-h-screen">
          <header>
            <Nav />
          </header>
          <main id="main-content" className="flex-1 mt-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

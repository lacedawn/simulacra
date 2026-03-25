import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "@/components/nav";
import Sidebar from "@/components/sidebar";

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
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only">
          Skip to main content
        </a>

        <div className="page-container">
          <header className="site-header">
            <MainNav />
          </header>

          <div className="content-grid">
            <main id="main-content" className="main-column">
              {children}
            </main>

            <aside className="sidebar-column">
              <Sidebar />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}

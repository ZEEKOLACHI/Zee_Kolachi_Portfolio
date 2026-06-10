import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { seo, identity } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s · ${identity.brand}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: identity.fullName }],
  creator: identity.fullName,
  openGraph: {
    type: "website",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: identity.brand,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%23080b14'/%3E%3Ctext x='50' y='68' font-family='Georgia,serif' font-size='56' font-weight='700' text-anchor='middle' fill='%2338f5b5'%3EZ%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.fullName,
  alternateName: identity.brand,
  jobTitle: identity.roles[0],
  description: identity.bio,
  address: { "@type": "PostalAddress", addressRegion: "Sindh", addressCountry: "PK" },
  url: seo.url,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-controlroom min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Skip link for keyboard / screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

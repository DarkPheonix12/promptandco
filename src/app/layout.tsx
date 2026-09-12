import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetMono = JetBrains_Mono({
  variable: "--font-jet-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AI Search Optimization Agency | AEO & GEO | Prompt&Co.",
    template: "%s | Prompt&Co.",
  },
  description:
    "Prompt&Co. helps brands improve AI discoverability through AEO, GEO, entity optimization, content and authority across modern AI search. Be the brand AI recommends.",
  keywords: [
    "AI search optimization",
    "AEO agency",
    "GEO agency",
    "generative engine optimization",
    "answer engine optimization",
    "AI SEO",
    "AI visibility",
    "entity optimization",
    "AI search optimization agency",
    "ChatGPT SEO",
    "AI discoverability",
  ],
  authors: [{ name: "Prompt&Co." }],
  creator: "Prompt&Co.",
  publisher: "Prompt&Co.",
  metadataBase: new URL("https://promptco.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://promptco.online",
    siteName: "Prompt&Co.",
    title: "Prompt&Co. | AI Search Optimization Agency | AEO & GEO",
    description:
      "Be the brand AI recommends. Prompt&Co. helps brands become more discoverable, understandable, citable and recommendable across the AI search ecosystem.",
    // Image is provided by src/app/opengraph-image.tsx (generated PNG).
  },
  twitter: {
    card: "summary_large_image",
    title: "Prompt&Co. | AI Search Optimization Agency",
    description:
      "Be the brand AI recommends. AEO + GEO + AI Search Optimization.",
    // Image is provided by src/app/opengraph-image.tsx (generated PNG).
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://promptco.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}

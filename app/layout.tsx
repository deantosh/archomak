import type { Metadata } from "next";
import { Outfit, Roboto, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const defaultTitle = "Archomak | Building focused software products.";
const defaultDescription =
  "Archomak is a product company building focused software products for teams solving practical problems with clarity and care.";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Archomak",
  },
  description: defaultDescription,
  applicationName: "Archomak",
  keywords: [
    "Archomak",
    "product company",
    "software products",
    "product studio",
    "software development",
    "software engineering",
    "weather intelligence",
    "service commerce",
    "artificial intelligence",
    "workflow automation",
  ],
  authors: [{ name: "Archomak" }],
  creator: "Archomak",
  publisher: "Archomak",
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: "Archomak",
    locale: "en_US",
    images: [
      {
        url: "/photos/hero.jpg",
        width: 2000,
        height: 1335,
        alt: "Archomak building technology products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/photos/hero.jpg"],
  },
  category: "technology",
  icons: {
    icon: "/logo/favico.png",
    shortcut: "/logo/favico.png",
    apple: "/logo/favico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Archomak",
    url: siteUrl,
    logo: `${siteUrl}/logo/favico.png`,
    description: defaultDescription,
    email: "hello@archomak.com",
    founder: [
      { "@type": "Person", name: "Lucky Archibong" },
      { "@type": "Person", name: "Deantosh Daiddoh" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@archomak.com",
      contactType: "customer support",
    },
    sameAs: [
      "https://x.com/archomak.tech",
      "https://www.linkedin.com/company/archomak",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Archomak",
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-US",
    publisher: { "@type": "Organization", name: "Archomak" },
  };

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${roboto.variable} ${robotoMono.variable} ${outfit.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

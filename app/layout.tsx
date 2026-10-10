import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { products } from "@/lib/products";
import { organizationId } from "@/lib/seo";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const defaultTitle =
  "Archomak | Software that simplifies everyday business operations";
const defaultDescription =
  "Archomak builds and runs software products for businesses across Africa, including Kunanyesha and Sikakoraa.";
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
    "Kunanyesha",
    "Sikakoraa",
    "business software Africa",
    "software company Kenya",
    "Kenya weather forecast",
    "online booking Kenya",
    "M-Pesa payments",
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
        url: "/products/sikakoraa.jpg",
        width: 1440,
        height: 900,
        alt: "Sikakoraa, a product by Archomak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/products/sikakoraa.jpg"],
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
    "@id": organizationId,
    name: "Archomak",
    url: siteUrl,
    logo: `${siteUrl}/logo/logo.png`,
    description: defaultDescription,
    slogan: "Software that simplifies everyday business operations.",
    email: "admin@archomak.com",
    address: { "@type": "PostalAddress", addressCountry: "KE" },
    areaServed: { "@type": "Place", name: "Africa" },
    brand: products.map((p) => ({
      "@type": "Brand",
      name: p.name,
      url: p.website,
      logo: `${siteUrl}${p.screenshot}`,
    })),
    founder: [
      { "@type": "Person", name: "Lucky Archibong" },
      { "@type": "Person", name: "Deantosh Daiddoh" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@archomak.com",
      contactType: "customer support",
    },
    sameAs: [
      "https://x.com/archomak.tech",
      "https://www.linkedin.com/company/archomak",
      ...products.map((p) => p.website),
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Archomak",
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-US",
    publisher: { "@id": organizationId },
  };

  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${instrumentSans.variable} font-sans antialiased`}
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

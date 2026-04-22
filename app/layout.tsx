import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const defaultTitle = "Archomak | Digital Products for Africa and the World";
const defaultDescription =
  "Archomak builds practical digital products for enterprises and operations teams across Africa and globally, using AI where it creates measurable value.";

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
    "digital products",
    "enterprise software",
    "workflow automation",
    "document intelligence",
    "weather reporting",
    "african technology company",
    "product company",
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
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Archomak logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo/logo.png"],
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
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Archomak",
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en-US",
  };

  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
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

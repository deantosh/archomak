import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const defaultTitle =
  "Archomak | AI-Powered Digital Products and Enterprise Solutions";
const defaultDescription =
  "Archomak builds AI-powered digital products and enterprise software solutions to automate workflows, extract data, and improve operational efficiency.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Archomak",
  },
  description: defaultDescription,
  applicationName: "Archomak",
  generator: "v0.app",
  keywords: [
    "Archomak",
    "AI software",
    "enterprise automation",
    "OCR data extraction",
    "digital products",
    "workflow automation",
    "business software solutions",
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

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

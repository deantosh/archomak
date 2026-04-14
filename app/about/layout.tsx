import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const aboutTitle = "About Archomak";
const aboutDescription =
  "Learn about Archomak's mission, team, values, and products focused on AI automation, document intelligence, weather reporting, and service-commerce workflows.";

export const metadata: Metadata = {
  title: aboutTitle,
  description: aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/about`,
    title: `${aboutTitle} | Archomak`,
    description: aboutDescription,
    siteName: "Archomak",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "About Archomak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${aboutTitle} | Archomak`,
    description: aboutDescription,
    images: ["/logo/logo.png"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

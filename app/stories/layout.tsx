import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";

const description =
  "Notes from the work at Archomak: how we think about the products we build, the markets we serve, and the decisions behind them.";

export const metadata: Metadata = {
  title: "Stories",
  description,
  alternates: { canonical: "/stories" },
  openGraph: {
    title: "Stories | Archomak",
    description,
    url: `${siteUrl}/stories`,
    type: "website",
    images: [
      { url: "/photos/hero.jpg", width: 2000, height: 1335, alt: "Archomak" },
    ],
  },
};

export default function StoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Stories",
        item: `${siteUrl}/stories`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {children}
    </>
  );
}

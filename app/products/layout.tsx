import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";

const description =
  "The products we are building now: Kunanyesha for smarter planning and Book & Pay for simpler bookings and payments.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Archomak",
    description,
    url: `${siteUrl}/products`,
    type: "website",
    images: [
      { url: "/photos/hero.jpg", width: 2000, height: 1335, alt: "Archomak" },
    ],
  },
};

export default function ProductsLayout({
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
        name: "Products",
        item: `${siteUrl}/products`,
      },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Archomak products",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Kunanyesha",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Weather-aware planning and automated reporting for teams that need better visibility.",
          url: "https://kunanyesha.archomak.com/",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "Book & Pay",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Scheduling, reminders, and payments for service businesses that need fewer tools and less friction.",
          url: `${siteUrl}/products`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      {children}
    </>
  );
}

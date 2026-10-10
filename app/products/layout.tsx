import type { Metadata } from "next";

import { siteUrl } from "@/lib/seo";

const description =
  "Products built and run by Archomak: Kunanyesha, weekly weather outlooks for every county in Kenya, and Sikakoraa, a marketplace for booking and paying local professionals.";

export const metadata: Metadata = {
  title: "Products: Kunanyesha and Sikakoraa",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | Archomak",
    description,
    url: `${siteUrl}/products`,
    type: "website",
    images: [
      {
        url: "/products/sikakoraa.jpg",
        width: 1440,
        height: 900,
        alt: "The Sikakoraa website",
      },
    ],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

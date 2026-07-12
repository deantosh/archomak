import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";

const description =
  "Talk to Archomak about your operations. Tell us what you are working on and we will point you to the right product. We respond within one business day.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Archomak",
    description,
    url: `${siteUrl}/contact`,
    type: "website",
    images: [
      { url: "/photos/hero.jpg", width: 2000, height: 1335, alt: "Archomak" },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

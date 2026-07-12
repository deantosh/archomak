import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const description = "The terms that cover your use of archomak.com.";

export const metadata: Metadata = {
  title: "Terms",
  description,
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms | Archomak",
    description,
    url: `${siteUrl}/terms`,
    type: "website",
  },
};

const sections = [
  {
    heading: "Using the site",
    body: "The content on archomak.com is provided for general information. Please do not misuse the site or try to disrupt how it works.",
  },
  {
    heading: "Our products",
    body: "Our products may have their own separate terms on their own websites. Those terms govern your use of the products themselves.",
  },
  {
    heading: "Intellectual property",
    body: "The content, branding, and design on this site belong to Archomak unless stated otherwise.",
  },
  {
    heading: "No warranty",
    body: "The site is provided as is, without warranties of any kind. We do our best to keep it accurate and available, but cannot guarantee it.",
  },
  {
    heading: "Changes",
    body: "We may update these terms as the site evolves. The date above reflects the current version.",
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white text-[#202124] min-h-screen">
      <Navigation />
      <article className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-[#1a73e8] mb-5">Terms</p>
          <h1
            className="text-h1 mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-[#80868b] mb-12">
            Last updated 12 July 2026
          </p>

          <p className="text-lg text-[#5f6368] leading-relaxed mb-10">
            These terms cover your use of archomak.com.
          </p>

          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2
                  className="text-h3 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.heading}
                </h2>
                <p className="text-base text-[#5f6368] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-base text-[#5f6368] leading-relaxed mt-10">
            Questions? Email{" "}
            <a
              href="mailto:hello@archomak.com"
              className="text-[#1a73e8] hover:underline"
            >
              hello@archomak.com
            </a>
            .
          </p>
        </div>
      </article>
      <Footer />
    </div>
  );
}

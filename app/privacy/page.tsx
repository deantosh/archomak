import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://archomak.com";
const description =
  "How Archomak handles information you share through archomak.com.";

export const metadata: Metadata = {
  title: "Privacy",
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy | Archomak",
    description,
    url: `${siteUrl}/privacy`,
    type: "website",
  },
};

const sections = [
  {
    heading: "Information we collect",
    body: "When you use the contact form, we collect the name, email, company, and message you send us. We also collect aggregated, anonymized analytics about how the site is used.",
  },
  {
    heading: "How we use it",
    body: "We use the details you send to respond to your enquiry and follow up. We use analytics to understand and improve the site. We do not sell your information.",
  },
  {
    heading: "Data retention",
    body: "We keep contact enquiries only as long as we need them to respond and stay in touch about your request.",
  },
  {
    heading: "Your choices",
    body: "To access or delete information you have sent us, email hello@archomak.com and we will take care of it.",
  },
  {
    heading: "Changes",
    body: "We may update this policy as the site evolves. The date above reflects the current version.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white text-[#202124] min-h-screen">
      <Navigation />
      <article className="pt-36 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium text-[#1a73e8] mb-5">Privacy</p>
          <h1
            className="text-h1 mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-[#80868b] mb-12">
            Last updated 12 July 2026
          </p>

          <p className="text-lg text-[#5f6368] leading-relaxed mb-10">
            This policy explains what information Archomak collects through
            archomak.com and how we use it.
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
            Questions about your data? Email{" "}
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

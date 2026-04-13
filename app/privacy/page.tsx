"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const LAST_UPDATED = "April 13, 2026";

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-8 text-foreground/95 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
              <p className="text-muted-foreground">
                This Privacy Policy explains how Archomak collects, uses,
                stores, shares, and protects personal information when you use
                our websites, products, and services. We use this policy as a
                transparent framework based on common best practices for modern
                web products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. Information We Collect
              </h2>
              <p className="text-muted-foreground mb-3">
                We may collect the following categories of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Identity and contact data such as name, email, company, and
                  role.
                </li>
                <li>
                  Account and profile data such as login credentials and
                  settings.
                </li>
                <li>
                  Usage data such as pages visited, feature interactions, and
                  session metadata.
                </li>
                <li>
                  Device and technical data such as browser type, IP address,
                  and operating system.
                </li>
                <li>
                  Support and communication data such as messages sent through
                  contact forms.
                </li>
                <li>
                  Payment and billing metadata when applicable through payment
                  providers.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                3. How We Use Information
              </h2>
              <p className="text-muted-foreground mb-3">
                We use personal information to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services.</li>
                <li>Authenticate users and protect platform security.</li>
                <li>Respond to support requests and service inquiries.</li>
                <li>
                  Send service notices, updates, and operational communications.
                </li>
                <li>
                  Analyze performance and usage trends to improve user
                  experience.
                </li>
                <li>
                  Comply with legal, regulatory, and contractual obligations.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                4. Legal Bases for Processing
              </h2>
              <p className="text-muted-foreground mb-3">
                Depending on your location, our legal bases may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Performance of a contract with you.</li>
                <li>Your consent where required.</li>
                <li>
                  Legitimate interests, including security and product
                  improvement.
                </li>
                <li>Compliance with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Cookies and Similar Technologies
              </h2>
              <p className="text-muted-foreground">
                We may use cookies and similar technologies to keep you signed
                in, remember preferences, measure traffic, and understand how
                users engage with our pages. You can control cookies through
                your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                6. Sharing of Information
              </h2>
              <p className="text-muted-foreground mb-3">
                We do not sell personal information. We may share information
                with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers who process data on our behalf.</li>
                <li>Payment processors and infrastructure vendors.</li>
                <li>
                  Professional advisors and legal authorities when required.
                </li>
                <li>
                  Business partners only when necessary to deliver requested
                  services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">7. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain personal information only for as long as needed for
                the purposes described in this policy, including legal,
                accounting, security, and reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">8. Data Security</h2>
              <p className="text-muted-foreground">
                We use reasonable administrative, technical, and organizational
                safeguards to protect personal information. No system is fully
                immune from risk, but we continuously improve controls to reduce
                exposure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                9. Your Rights and Choices
              </h2>
              <p className="text-muted-foreground mb-3">
                Depending on applicable law, you may have rights to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  Access, correct, update, or delete your personal information.
                </li>
                <li>Object to or restrict certain processing activities.</li>
                <li>Withdraw consent where processing relies on consent.</li>
                <li>Request export or portability of eligible data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                10. International Data Transfers
              </h2>
              <p className="text-muted-foreground">
                If information is transferred across borders, we apply
                safeguards designed to meet applicable data protection
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                11. Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground">
                Our services are not directed to children under the age required
                by applicable law. We do not knowingly collect personal data
                from children without lawful authorization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                12. Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this policy to reflect legal, technical, or
                business changes. When updates are material, we will provide
                reasonable notice through our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">13. Contact Us</h2>
              <p className="text-muted-foreground">
                For privacy requests or questions, contact us at
                support@archomak.tech.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

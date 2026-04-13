"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const LAST_UPDATED = "April 13, 2026";

export default function TermsOfServicePage() {
  return (
    <main className="overflow-hidden">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="space-y-8 text-foreground/95 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground">
                By accessing or using Archomak websites, products, or services,
                you agree to these Terms of Service. If you do not agree, do not
                use the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. Eligibility and Accounts
              </h2>
              <p className="text-muted-foreground mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate information when creating an account.</li>
                <li>Keep your credentials confidential and secure.</li>
                <li>Notify us promptly of unauthorized account access.</li>
                <li>Accept responsibility for activity under your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                3. Use of Services
              </h2>
              <p className="text-muted-foreground mb-3">
                You may use the services only in compliance with applicable law
                and these terms. You must not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Abuse, interfere with, or disrupt our systems.</li>
                <li>
                  Attempt unauthorized access to accounts, data, or networks.
                </li>
                <li>
                  Use the services for illegal, fraudulent, or harmful activity.
                </li>
                <li>
                  Reverse engineer or bypass service restrictions unless allowed
                  by law.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">4. User Content</h2>
              <p className="text-muted-foreground">
                You retain ownership of content you submit. You grant Archomak a
                limited license to host, process, and display that content as
                needed to operate and improve the services. You are responsible
                for ensuring you have rights to the content you provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Intellectual Property
              </h2>
              <p className="text-muted-foreground">
                The services, including software, branding, designs, and
                documentation, are owned by Archomak or its licensors and
                protected by applicable intellectual property laws. Except as
                explicitly permitted, no rights are granted to copy, distribute,
                or create derivative works.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                6. Third-Party Services
              </h2>
              <p className="text-muted-foreground">
                Our services may include links or integrations with third-party
                websites or providers. We are not responsible for third-party
                content, policies, or performance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                7. Fees and Payments
              </h2>
              <p className="text-muted-foreground">
                Paid features may be subject to fees, billing terms, and taxes
                disclosed at purchase. Unless otherwise stated, fees are
                non-refundable except where required by law or explicit service
                commitments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                8. Service Availability and Changes
              </h2>
              <p className="text-muted-foreground">
                We may modify, suspend, or discontinue features at any time,
                including for maintenance, security, legal requirements, or
                product evolution. We will make reasonable efforts to
                communicate material changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Termination</h2>
              <p className="text-muted-foreground">
                You may stop using the services at any time. We may suspend or
                terminate access if these terms are violated, required by law,
                or needed to protect users, systems, or business operations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                10. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground">
                To the extent permitted by law, services are provided on an
                as-is and as-available basis without warranties of any kind,
                express or implied, including merchantability, fitness for a
                particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                11. Limitation of Liability
              </h2>
              <p className="text-muted-foreground">
                To the extent permitted by law, Archomak is not liable for
                indirect, incidental, special, consequential, or punitive
                damages, or loss of profits, data, use, or goodwill arising from
                use of the services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                12. Indemnification
              </h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold Archomak harmless from claims,
                liabilities, losses, and expenses arising from your use of the
                services, your content, or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">13. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms are governed by the laws applicable to
                Archomak&apos;s principal place of business, unless otherwise
                required by applicable consumer protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                14. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We may revise these terms from time to time. Continued use after
                updated terms become effective means you accept the revised
                terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">15. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms, contact support@archomak.tech.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

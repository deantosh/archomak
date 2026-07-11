import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dadce0] bg-[#f8f9fa]">
      <style>{`
        .footer-link {
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #202124;
          text-decoration: underline;
        }
        .footer-social {
          transition: background-color 0.2s ease;
        }
        .footer-social:hover {
          background-color: #e8f0fe;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/wordmark.png"
                alt="Archomak logo"
                width={413}
                height={51}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#5f6368] leading-relaxed">
              Building practical digital products for businesses and the world.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-medium text-[#202124] mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="footer-link text-sm text-[#5f6368]"
                >
                  Kunanyesha
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="footer-link text-sm text-[#5f6368]"
                >
                  Book &amp; Pay
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-[#202124] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/stories"
                  className="footer-link text-sm text-[#5f6368]"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="footer-link text-sm text-[#5f6368]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Why Archomak */}
          <div>
            <h3 className="text-sm font-medium text-[#202124] mb-4">
              Why Archomak
            </h3>
            <p className="text-sm text-[#5f6368] leading-relaxed">
              We build practical products that solve operational challenges and
              deliver measurable outcomes for teams across the world.
            </p>
            <p className="text-xs text-[#80868b] mt-3">
              Founded by Lucky Archibong &amp; Deantosh Daiddoh
            </p>
          </div>

          {/* Social */}
          <div className="md:col-span-4 pt-2">
            <h3 className="text-sm font-medium text-[#202124] mb-4">Social</h3>
            <div className="flex gap-3">
              <a
                className="footer-social p-2.5 rounded-full bg-white border border-[#dadce0]"
                href="https://x.com/archomak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Twitter size={18} className="text-[#5f6368]" />
              </a>
              <a
                className="footer-social p-2.5 rounded-full bg-white border border-[#dadce0]"
                href="https://linkedin.com/company/archomak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-[#5f6368]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#dadce0] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5f6368]">
            © {currentYear} Archomak. All rights reserved.
          </p>
          <p className="text-xs text-[#80868b]">
            Practical products. Measurable outcomes.
          </p>
        </div>
      </div>
    </footer>
  );
}

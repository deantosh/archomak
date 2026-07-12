import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const links = [
  { name: "Products", href: "/products" },
  { name: "Stories", href: "/stories" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#dadce0] bg-[#f8f9fa]">
      <style>{`
        .footer-link { transition: color 0.2s ease; }
        .footer-link:hover { color: #202124; }
        .footer-social { transition: background-color 0.2s ease; }
        .footer-social:hover { background-color: #e8f0fe; }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Top row: logo + socials, and primary links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link href="/" aria-label="Archomak home">
              <Image
                src="/logo/wordmark.png"
                alt="Archomak"
                width={413}
                height={51}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <div className="flex gap-2">
              <a
                className="footer-social p-2.5 rounded-full bg-white border border-[#dadce0]"
                href="https://x.com/archomak.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <Twitter size={16} className="text-[#5f6368]" />
              </a>
              <a
                className="footer-social p-2.5 rounded-full bg-white border border-[#dadce0]"
                href="https://ke.linkedin.com/company/archomak"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-[#5f6368]" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="footer-link text-sm text-[#5f6368]"
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar: copyright + legal */}
        <div className="mt-8 pt-6 border-t border-[#dadce0] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#5f6368]">
            © {currentYear} Archomak. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="footer-link text-sm text-[#5f6368]"
            >
              Privacy
            </Link>
            <Link href="/terms" className="footer-link text-sm text-[#5f6368]">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

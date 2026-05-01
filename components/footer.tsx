import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070707]">
      <style>{`
        @keyframes footer-logo-pulse {
          0%,100% { box-shadow: 0 0 0 rgba(59,130,246,0); }
          50% { box-shadow: 0 0 18px rgba(59,130,246,0.5); }
        }
        .footer-link {
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-link:hover {
          color: #fff;
          transform: translate3d(3px,0,0);
        }
        .footer-social {
          transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
        }
        .footer-social:hover {
          border-color: rgba(6,182,212,0.6);
          background-color: rgba(6,182,212,0.08);
          transform: scale(1.15);
        }
        .footer-logo-wrap:hover .footer-logo {
          animation: footer-logo-pulse 1.4s ease-in-out infinite;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="footer-logo-wrap flex items-center gap-3 mb-4">
              <Image
                src="/logo/logo.png"
                alt="Archomak logo"
                width={120}
                height={120}
                className="footer-logo rounded-md object-contain"
              />
              {/* <span className="text-base font-semibold tracking-wide text-white">
                Archomak
              </span> */}
            </div>
            <p className="text-sm text-slate-300">
              Building practical digital products for Africa and the world.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/7"
                  className="footer-link text-sm text-slate-300"
                >
                  Kunanyesha
                </Link>
              </li>
              <li>
                <Link
                  href="/products/1"
                  className="footer-link text-sm text-slate-300"
                >
                  LuDa Lens
                </Link>
              </li>
              <li>
                <Link
                  href="/products/8"
                  className="footer-link text-sm text-slate-300"
                >
                  Book & Pay
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/enterprise"
                  className="footer-link text-sm text-slate-300"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="footer-link text-sm text-slate-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Why Archomak</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We build practical products that solve operational challenges and
              deliver measurable outcomes for teams across Africa and beyond.
            </p>
            <p className="text-xs text-slate-600 mt-3">
              Founded by Lucky Archibong &amp; Deantosh Daiddoh
            </p>
          </div>

          {/* Social */}
          <div className="md:col-span-4 pt-2">
            <h3 className="font-bold text-white mb-4">Social</h3>
            <div className="flex gap-3">
              <a
                className="footer-social p-2 rounded-lg bg-white/3 border border-white/10"
                href="#"
              >
                <Twitter
                  size={18}
                  className="text-slate-300 transition-colors duration-200 hover:text-cyan-300"
                />
              </a>
              <a
                className="footer-social p-2 rounded-lg bg-white/3 border border-white/10"
                href="#"
              >
                <Linkedin
                  size={18}
                  className="text-slate-300 transition-colors duration-200 hover:text-cyan-300"
                />
              </a>
              <a
                className="footer-social p-2 rounded-lg bg-white/3 border border-white/10"
                href="#"
              >
                <Github
                  size={18}
                  className="text-slate-300 transition-colors duration-200 hover:text-cyan-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} Archomak. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Product company. AI-enabled execution. Africa-first perspective.
          </p>
        </div>
      </div>
    </footer>
  );
}

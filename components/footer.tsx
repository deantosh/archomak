import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo/favico.png"
                alt="Archomak logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-base font-semibold tracking-wide text-foreground">
                Archomak
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovating at the intersection of human creativity and advanced
              engineering.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LuDa Lens
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow</h3>
            <div className="flex gap-3">
              <a
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                href="#"
              >
                <Twitter
                  size={18}
                  className="text-muted-foreground hover:text-accent"
                />
              </a>
              <a
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                href="#"
              >
                <Linkedin
                  size={18}
                  className="text-muted-foreground hover:text-accent"
                />
              </a>
              <a
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                href="#"
              >
                <Github
                  size={18}
                  className="text-muted-foreground hover:text-accent"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Archomak. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

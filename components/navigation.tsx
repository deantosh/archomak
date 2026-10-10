"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Products", href: "/products" },
  { name: "Company", href: "/company" },
  { name: "News", href: "/news" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center" aria-label="Archomak home">
              <Image
                src="/logo/wordmark.png"
                alt="Archomak"
                width={413}
                height={51}
                priority
                className="h-[18px] w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`nav-link text-[15px] ${
                    isActive(item.href) ? "active" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-pill btn-primary px-4 py-2 text-[15px]"
              >
                Contact us
              </Link>
            </div>

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 rounded-lg text-[var(--ink)] hover:bg-[var(--surface-alt)] transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-16">
          <nav className="flex flex-col px-4 pt-6">
            {[...navItems, { name: "Contact us", href: "/contact" }].map(
              (item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="py-4 text-2xl font-semibold tracking-tight border-b border-[var(--line)] text-[var(--ink)]"
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </>
  );
}

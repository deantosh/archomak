import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const columns = [
  {
    title: "Products",
    links: [
      ...products.map((p) => ({
        name: p.name,
        href: `/products/${p.slug}`,
        external: false,
      })),
      { name: "All products", href: "/products", external: false },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/company", external: false },
      { name: "News", href: "/news", external: false },
      { name: "Contact", href: "/contact", external: false },
    ],
  },
  {
    title: "Follow",
    links: [
      { name: "LinkedIn", href: "https://ke.linkedin.com/company/archomak", external: true },
      { name: "X", href: "https://x.com/archomak.tech", external: true },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/logo/wordmark.png"
              alt="Archomak"
              width={413}
              height={51}
              className="h-4 w-auto object-contain"
            />
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-medium text-[var(--ink)] mb-4">
                {col.title}
              </h2>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener me" : undefined}
                      className="text-sm text-[var(--ink-2)] hover:text-[var(--ink)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row justify-between gap-4 text-sm text-[var(--ink-3)]">
          <p>© {currentYear} Archomak</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[var(--ink)] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--ink)] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

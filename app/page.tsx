import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getNewsItem } from "@/lib/news";
import { getProduct, products } from "@/lib/products";

const featured = getNewsItem("sikakoraa-launches-20-october")!;
const featuredProduct = getProduct(featured.product)!;

const hubs = [
  {
    title: "Our products",
    body: `${products.map((p) => p.name).join(" and ")}: what each one does, who it is for and where to find it.`,
    link: "Explore products",
    href: "/products",
  },
  {
    title: "About Archomak",
    body: "Our mission, our vision and the basic facts about the company.",
    link: "About us",
    href: "/company",
  },
  {
    title: "News",
    body: "Launches and announcements from Archomak and our products.",
    link: "Read the news",
    href: "/news",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-[var(--ink)] min-h-screen">
      <Navigation />

      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-4 sm:pb-6">
          <h1 className="text-h1 max-w-[17ch]">
            Software that simplifies everyday business operations.
          </h1>
          <p className="text-lede mt-5 sm:mt-6 max-w-[46ch]">
            Archomak builds and runs software products for businesses across
            Africa.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[15px] font-medium text-[var(--ink-3)]">
                Featured · News
              </p>
              <h2 className="text-h2 mt-3 mb-4">{featured.title}</h2>
              <p className="text-lede max-w-[40ch]">
                Our service marketplace opens on 20 October 2026. Customers
                book a local professional and pay up front by M-Pesa or card.
              </p>
              <Link
                href={`/news/${featured.slug}`}
                className="text-link inline-block mt-5"
              >
                Read the announcement →
              </Link>
            </div>
            <Link
              href={`/news/${featured.slug}`}
              tabIndex={-1}
              aria-hidden
              className="block overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] px-5 pt-5 sm:px-7 sm:pt-7"
            >
              <Image
                src={featuredProduct.screenshot}
                alt=""
                width={1440}
                height={900}
                className="block w-full aspect-[16/10] object-cover object-top rounded-t-lg ring-1 ring-[var(--line)]"
              />
            </Link>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {hubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="card-base group grid content-start gap-2.5 p-7"
              >
                <h2 className="text-h3">{hub.title}</h2>
                <p className="text-[var(--ink-2)]">{hub.body}</p>
                <span className="font-medium mt-2 group-hover:underline underline-offset-4">
                  {hub.link} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

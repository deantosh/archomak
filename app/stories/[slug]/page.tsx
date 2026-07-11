import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { stories, getStory, formatStoryDate } from "@/lib/stories";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const more = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <div className="bg-white text-[#202124] min-h-screen">
      <Navigation />

      <article className="pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm text-[#5f6368] hover:text-[#202124] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All stories
          </Link>

          <div className="flex items-center gap-3 mb-5 text-sm text-[#5f6368]">
            <span className="tag-pill">{story.category}</span>
            <span>{formatStoryDate(story.date)}</span>
            <span aria-hidden>·</span>
            <span>{story.readingTime}</span>
          </div>

          <h1
            className="text-h1 mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {story.title}
          </h1>
        </div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={story.cover}
              alt={story.coverAlt}
              width={1600}
              height={1067}
              priority
              className="w-full h-[280px] sm:h-[420px] object-cover"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {story.body.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl text-[#202124] leading-relaxed"
                    : "text-lg text-[#5f6368] leading-relaxed"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#e8eaed] flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-[#5f6368]">
              Want to talk about your operations?
            </p>
            <Link
              href="/contact"
              className="btn-pill btn-primary px-6 py-3 text-sm"
            >
              Talk to us <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </article>

      {/* More stories */}
      <section className="border-t border-[#e8eaed] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <h2
            className="text-h3 mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            More stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((s) => (
              <Link
                key={s.slug}
                href={`/stories/${s.slug}`}
                className="card-base group flex flex-col h-full overflow-hidden bg-white"
              >
                <div className="overflow-hidden">
                  <Image
                    src={s.cover}
                    alt={s.coverAlt}
                    width={1600}
                    height={1067}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-[#5f6368]">
                    <span className="tag-pill">{s.category}</span>
                    <span>{s.readingTime}</span>
                  </div>
                  <h3
                    className="text-base font-medium text-[#202124] leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

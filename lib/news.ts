export type NewsItem = {
  slug: string;
  product: "Kunanyesha" | "Sikakoraa";
  title: string;
  summary: string;
  date: string; // ISO
  /** Paragraphs. A paragraph starting with "## " is a subheading. */
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "sikakoraa-launches-20-october",
    product: "Sikakoraa",
    title: "Sikakoraa launches on 20 October",
    summary:
      "Our service marketplace opens in Kenya on 20 October 2026. Customers book a local professional and pay up front by M-Pesa or card.",
    date: "2026-10-10",
    body: [
      "Sikakoraa is a marketplace for local services. Customers find a professional, book a time and pay up front by M-Pesa, Airtel Money or card. Payments are held securely until the job is done. Businesses get their own booking page, manage requests in one place and withdraw to M-Pesa or a bank account.",
      "There are no monthly fees. Sikakoraa takes a small fee from each payment, and early providers pay half the standard rate during the launch offer.",
      "The name comes from a Ghanaian expression, sika koraa, which means “money, for real”. It describes what we want for every business on the platform: get booked, get paid, with less back-and-forth.",
      "**Sikakoraa opens on 20 October 2026 at sikakoraa.com.**",
    ],
  },
  {
    slug: "kunanyesha-is-live",
    product: "Kunanyesha",
    title:
      "Kunanyesha is live: a weekly weather outlook for every county in Kenya",
    summary:
      "Seven-day forecasts with ward-level detail, delivered as a ready-to-share report for all 47 counties.",
    date: "2026-06-28",
    body: [
      "Today we are launching Kunanyesha, our weather reporting product for Kenya. Kunanyesha is Swahili for “it is raining”. When rain, or the lack of it, decides how a week goes, the people planning that week should not have to piece the forecast together themselves.",
      "## A report for every county, every week",
      "Each week Kunanyesha produces a weather outlook for every county as a PDF report covering Monday to Sunday. The forecast comes from the Global Forecast System (GFS) model and is broken down to ward level, so a team can see what to expect in its own area instead of a single figure for the whole county.",
      "Reports cover all 47 counties. Teams can schedule them to arrive by email at the start of each week, or generate one on demand when plans change. Every report run is logged, so it is always clear what was sent and when.",
      "## Try it without signing up",
      "If you collect rainfall readings from your own weather stations, the free map generator turns them into a county rainfall map. Upload a CSV of station observations, choose a county, and the map is drawn for you. The data stays in your browser session.",
      "## One plan, everything included",
      "There is a single plan with every feature: all counties, weekly and on-demand reports, ward-level breakdowns, the automation scheduler, email distribution and audit logs. It costs KES 999 a month or KES 9,600 a year, paid through Pesapal.",
      "## Who it is for",
      "We built Kunanyesha for teams whose plans depend on the weather, such as county offices, agricultural programmes and field operations.",
      "**Kunanyesha is available today at kunanyesha.archomak.com.**",
    ],
  },
];

export function getNewsItem(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function formatNewsDate(iso: string, month: "long" | "short" = "long") {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month,
    year: "numeric",
  });
}

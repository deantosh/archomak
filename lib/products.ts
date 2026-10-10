export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  /** One sentence, used on cards and in structured data. */
  description: string;
  /** Page title and meta description for /products/[slug]. */
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  website: string;
  displayUrl: string;
  /** ISO date the product opens to the public. */
  launchDate: string;
  color: string;
  tint: string;
  screenshot: string;
  screenshotAlt: string;
  /** Plain paragraphs that open the product page. */
  intro: string[];
  audience: string;
  features: { title: string; body: string }[];
  pricing: {
    summary: string;
    details: string[];
    /** For structured data. */
    offer?: { price: string; currency: string; period: string };
  };
};

export const products: Product[] = [
  {
    id: "7",
    slug: "kunanyesha",
    name: "Kunanyesha",
    category: "Weather",
    description:
      "Weekly weather outlooks for every county in Kenya, with ward-level detail.",
    seoTitle: "Kunanyesha: weekly county weather reports for Kenya",
    seoDescription:
      "Kunanyesha produces a seven-day weather outlook for each of Kenya's 47 counties, with ward-level detail, as a PDF report delivered by email every week.",
    keywords: [
      "Kenya weather forecast",
      "county weather report",
      "ward-level forecast",
      "rainfall map Kenya",
      "weekly weather outlook",
    ],
    website: "https://kunanyesha.archomak.com/",
    displayUrl: "kunanyesha.archomak.com",
    launchDate: "2026-06-28",
    color: "var(--kunanyesha)",
    tint: "var(--kunanyesha-tint)",
    screenshot: "/products/kunanyesha.jpg",
    screenshotAlt: "The Kunanyesha website",
    intro: [
      "Kunanyesha is Swahili for “it is raining”. Each week it produces a weather outlook for every county in Kenya, covering Monday to Sunday and broken down to ward level, so a team can see what to expect in its own area instead of a single figure for the whole county.",
      "Forecasts come from the Global Forecast System (GFS) model. Reports arrive as a ready-to-share PDF with maps, tables and a written summary.",
    ],
    audience:
      "Teams whose plans depend on the weather, such as county offices, agricultural programmes and field operations.",
    features: [
      {
        title: "All 47 counties",
        body: "A seven-day outlook for every county in Kenya, with ward-level breakdowns.",
      },
      {
        title: "Weekly and on-demand reports",
        body: "Reports are produced every week, and can be generated on demand when plans change.",
      },
      {
        title: "Scheduling and email delivery",
        body: "Schedule reports to arrive by email at the start of each week, sent to everyone who needs them.",
      },
      {
        title: "Audit logs",
        body: "Every report run is logged, so it is always clear what was sent and when.",
      },
      {
        title: "Free rainfall map generator",
        body: "Upload a CSV of readings from your own weather stations, choose a county and get a rainfall map.",
      },
    ],
    pricing: {
      summary: "One plan with every feature.",
      details: [
        "KES 999 a month, or KES 9,600 a year.",
        "Payments through Pesapal.",
      ],
      offer: { price: "999", currency: "KES", period: "month" },
    },
  },
  {
    id: "8",
    slug: "sikakoraa",
    name: "Sikakoraa",
    category: "Commerce",
    description:
      "Customers book a local professional and pay up front by M-Pesa or card.",
    seoTitle: "Sikakoraa: book and pay local professionals in Kenya",
    seoDescription:
      "Sikakoraa is a marketplace for local services in Kenya. Customers find a verified professional, book a time and pay up front by M-Pesa, Airtel Money or card.",
    keywords: [
      "book a plumber Nairobi",
      "online booking Kenya",
      "M-Pesa booking payments",
      "service marketplace Kenya",
      "booking page for small business",
    ],
    website: "https://www.sikakoraa.com/",
    displayUrl: "sikakoraa.com",
    launchDate: "2026-10-20",
    color: "var(--sikakoraa)",
    tint: "var(--sikakoraa-tint)",
    screenshot: "/products/sikakoraa.jpg",
    screenshotAlt: "The Sikakoraa website",
    intro: [
      "Sikakoraa is a marketplace for local services in Kenya. Customers find a professional by service and area, compare prices, book a time and pay up front by mobile money or card.",
      "Each business gets its own booking page, manages requests in one place and is paid out when the job is done. The name comes from a Ghanaian expression, sika koraa, which means “money, for real”.",
    ],
    audience:
      "Service businesses in Kenya, such as plumbers, electricians, cleaners, salons and movers, and the customers who book them.",
    features: [
      {
        title: "A booking page for every business",
        body: "A shareable link where customers choose a service, pick a time and pay.",
      },
      {
        title: "M-Pesa, Airtel Money and card payments",
        body: "Customers pay when they book. Payments are processed through IntaSend.",
      },
      {
        title: "Funds held until the job is done",
        body: "Payments are held securely and released once the job is confirmed.",
      },
      {
        title: "Verified businesses",
        body: "Businesses go through KYC verification, and customers can see the verified badge before they book.",
      },
      {
        title: "Bookings, payments and payouts in one dashboard",
        body: "Track every booking and payment, and withdraw to M-Pesa or a bank account.",
      },
    ],
    pricing: {
      summary: "No monthly fees.",
      details: [
        "A platform fee is taken from each payment at payout: 10% standard, 5% for early providers during the launch offer.",
        "No setup fees and no subscription.",
      ],
    },
  },
];

export function getProduct(name: string) {
  return products.find((p) => p.name === name);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

/** Launch dates are in Kenya time (UTC+3). */
export function isLive(product: Product, now = new Date()) {
  return now >= new Date(`${product.launchDate}T00:00:00+03:00`);
}

export function formatLaunchDate(product: Product) {
  return new Date(`${product.launchDate}T12:00:00Z`).toLocaleDateString(
    "en-GB",
    { day: "numeric", month: "short" },
  );
}

export function getProductWebsiteHref(product: Product, placement: string) {
  try {
    const url = new URL(product.website);
    url.searchParams.set("utm_source", "archomak-site");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "product-site-handoff");
    url.searchParams.set("utm_content", `${product.id}-${placement}`);
    return url.toString();
  } catch {
    return product.website;
  }
}

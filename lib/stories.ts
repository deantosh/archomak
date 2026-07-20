export type Story = {
  slug: string;
  category: "Product" | "Company" | "Engineering";
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string; // ISO
  readingTime: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "weather-data-for-47-counties",
    category: "Product",
    title: "Weather data in one weekly report",
    excerpt:
      "How Kunanyesha turns fragmented weather signals into a single report that operations teams can act on every week.",
    cover: "/photos/kunanyesha.jpg",
    coverAlt: "A team reviewing weather information at a desk",
    date: "2026-06-24",
    readingTime: "4 min read",
    body: [
      "For most operations teams, weather information already exists. It is just scattered, inconsistent, and rarely arrives in a form anyone can act on. A planner might check one forecast, a field lead another, and a team manager a third, each with different assumptions and coverage.",
      "Kunanyesha was built to close that gap. It consolidates real-time and forecast data into a single, consistent source, then packages it into an automated weekly report delivered at the start of the week.",
      "The goal is not more data. It is fewer decisions made blind. When a team can see weather trends alongside its own operating context, planning shifts from reactive to deliberate.",
      "We are continuing to expand historical coverage and alerting so teams can move from weekly planning to real-time response, without adding headcount to watch the weather.",
    ],
  },
  {
    slug: "bookings-and-payments-one-platform",
    category: "Product",
    title: "Why bookings and payments belong on one platform",
    excerpt:
      "Service businesses were stitching together three tools to do one job. Book & Pay collapses scheduling, mobile money, and card payments into a single flow.",
    cover: "/photos/bookandpay.jpg",
    coverAlt: "A service-business owner managing appointments and payments",
    date: "2026-06-03",
    readingTime: "5 min read",
    body: [
      "A small service business should not need a developer, three subscriptions, and a spreadsheet to take a booking and get paid. Yet that is exactly what many teams end up with: a scheduling app, a payment link, and a separate reminder tool that never quite talk to each other.",
      "Book & Pay was designed around a single flow: a customer books, pays, and receives an automatic reminder. It all happens in one place, with no integration work required from the business.",
      "Bringing these together is not only a convenience. Reminders sent from the same system that holds the booking are the ones that actually reduce no-shows, because they carry the real appointment details.",
      "We are continuing to refine the experience with real teams so the product stays simple and useful as it grows.",
    ],
  },
  {
    slug: "outcomes-first-technology-second",
    category: "Company",
    title: "Outcomes first, technology second",
    excerpt:
      "Our building philosophy in one line, and what it means for the products we choose to ship and the ones we choose not to.",
    cover: "/photos/mission.jpg",
    coverAlt: "A team collaborating around a laptop",
    date: "2026-05-19",
    readingTime: "3 min read",
    body: [
      "It is easy to start with a technology and go looking for a problem to attach it to. We try to do the opposite: start with a concrete operational problem, and only reach for AI or automation where it measurably improves speed, accuracy, or cost.",
      "That discipline shows up in what we decline to build as much as what we ship. If a simpler tool solves the problem, the simpler tool wins.",
      "It also shapes how we work with the businesses that use our products. We would rather tell a team honestly that we are not the right fit than sell them a deployment that does not move a real number.",
      "Every product we ship is live, used, and evolving against real feedback. That is the only test we trust.",
    ],
  },
  {
    slug: "designing-for-unreliable-infrastructure",
    category: "Engineering",
    title: "Designing for unreliable infrastructure",
    excerpt:
      "Low connectivity, intermittent power, and fragmented payment rails are not edge cases in the environments we build for. They are the baseline we design for.",
    cover: "/photos/story-data.jpg",
    coverAlt: "A team working at their desks in an office",
    date: "2026-04-28",
    readingTime: "6 min read",
    body: [
      "In much of the world, a product can assume a fast, always-on connection. In the markets we build for, that assumption breaks constantly. A product that only works under ideal conditions does not really work at all.",
      "So resilience is a first-class requirement, not a finishing touch. We design for intermittent connectivity, degrade gracefully when a network drops, and treat fragmented payment rails as the norm rather than the exception.",
      "Practically, that means offline-tolerant flows, aggressive caching of the data a user needs most, and payment integrations that speak the rails people actually use: mobile money first, cards alongside.",
      "The payoff is products that hold up on a real Tuesday afternoon in the field, not just in a demo. That is the bar we hold ourselves to.",
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}

export function formatStoryDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

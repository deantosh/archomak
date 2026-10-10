/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/stories/weather-data-for-47-counties",
        destination: "/news/kunanyesha-is-live",
        permanent: true,
      },
      {
        source: "/stories/bookings-and-payments-one-platform",
        destination: "/news/sikakoraa-launches-20-october",
        permanent: true,
      },
      { source: "/stories", destination: "/news", permanent: true },
      { source: "/stories/:slug", destination: "/news", permanent: true },
      { source: "/about", destination: "/company", permanent: true },
    ];
  },
}

export default nextConfig

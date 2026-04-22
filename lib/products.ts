type ProductLink = {
  detailsHref: string;
  websiteHref?: string;
};

const productLinks: Record<string, ProductLink> = {
  "1": {
    detailsHref: "/products/1",
    websiteHref: process.env.NEXT_PUBLIC_LUDALENS_SITE_URL,
  },
  "7": {
    detailsHref: "/products/7",
    websiteHref: "https://kunanyesha.archomak.com/",
  },
  "8": {
    detailsHref: "/products/8",
    websiteHref: "https://www.bookandpaygh.com",
  },
};

function appendUtmParams(
  rawHref: string,
  productId: string,
  placement: string,
) {
  try {
    const url = new URL(rawHref);
    url.searchParams.set("utm_source", "archomak-site");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", "product-site-handoff");
    url.searchParams.set("utm_content", `${productId}-${placement}`);
    return url.toString();
  } catch {
    return rawHref;
  }
}

export function getProductDetailsHref(productId: string) {
  return productLinks[productId]?.detailsHref ?? "/products";
}

export function getProductWebsiteHref(productId: string, placement: string) {
  const websiteHref = productLinks[productId]?.websiteHref;
  if (!websiteHref) {
    return null;
  }

  return appendUtmParams(websiteHref, productId, placement);
}

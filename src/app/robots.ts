import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cookieheaven.art").replace(/\/$/, "");

// Same file for everyone, so it is written once at build time.
export const dynamic = "force-static";

/**
 * The site wants to be found. Nothing here is private, and there is no logged-in
 * area, so every crawler is welcome and the only instruction is where the map is.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

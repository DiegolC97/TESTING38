import type { MetadataRoute } from "next";

/** Serves /robots.txt so crawlers get a valid answer instead of a soft 404. */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" } };
}

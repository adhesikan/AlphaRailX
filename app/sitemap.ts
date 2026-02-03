import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alpharailx.com";
  const routes = [
    "",
    "/services",
    "/approach",
    "/industries",
    "/case-studies",
    "/security",
    "/resources",
    "/contact",
    "/legal",
    "/capability-brief"
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date()
  }));
}

import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/schema";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },

    /*
     * Home Inspections
     */
    {
      path: "/home-inspections",
      changeFrequency: "monthly" as const,
      priority: 0.95,
    },
    {
      path: "/home-inspections/buyer-inspection",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/home-inspections/pre-listing-inspection",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/home-inspections/new-construction-tarion",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/home-inspections/annual-home-maintenance",
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      path: "/book-inspection",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },

    /*
     * Engineering Consulting
     */
    {
      path: "/engineering-services",
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      path:
        "/engineering-services/building-envelope-consulting",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path:
        "/engineering-services/building-condition-assessment",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path:
        "/engineering-services/building-envelope-quality-assurance",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },

    /*
     * Company
     */
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      path: "/contact",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      path: "/resources",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },

    /*
     * Legal
     */
    {
      path: "/privacy",
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
    {
      path: "/terms",
      changeFrequency: "yearly" as const,
      priority: 0.2,
    },
  ];

  return routes.map(
    ({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })
  );
}
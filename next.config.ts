import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },

  async redirects() {
    return [
      {
        source: "/consulting-services/building-envelope-consulting",
        destination: "/engineering-services/building-envelope-consulting",
        permanent: true,
      },
      {
        source: "/consulting-services/building-condition-assessments",
        destination: "/engineering-services/building-condition-assessment",
        permanent: true,
      },
      {
        source: "/home-inspections/buyer",
        destination: "/home-inspections/buyer-inspection",
        permanent: true,
      },
      {
        source: "/home-inspections/pre-listing",
        destination: "/home-inspections/pre-listing-inspection",
        permanent: true,
      },
      {
        source: "/home-inspections/new-construction",
        destination: "/home-inspections/new-construction-tarion",
        permanent: true,
      },
      {
        source: "/home-inspections/annual-maintenance",
        destination: "/home-inspections/annual-home-maintenance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
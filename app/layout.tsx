import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

import Schema from "@/components/seo/Schema";
import {
  SITE_URL,
  veloraBusinessSchema,
  veloraWebsiteSchema,
} from "@/lib/schema";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Velora Engineering and Consulting | Building Envelope Consultants Ottawa",
    template: "%s | Velora Engineering and Consulting",
  },

  description:
    "Ottawa building envelope consultants providing building envelope consulting, condition assessments, quality assurance, building performance services, and professional home inspections.",

  applicationName: "Velora Engineering and Consulting",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: SITE_URL,
    siteName: "Velora Engineering and Consulting",
    title:
      "Velora Engineering and Consulting | Building Envelope Consultants Ottawa",
    description:
      "Independent building envelope consulting, condition assessments, quality assurance, and home inspection services in Ottawa.",
    images: [
      {
        url: "/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Velora Engineering and Consulting",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Velora Engineering and Consulting | Building Envelope Consultants Ottawa",
    description:
      "Independent building envelope consulting, condition assessments, quality assurance, and home inspection services in Ottawa.",
    images: ["/images/og/velora-og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-CA">
      <body>
        <Schema
          id="velora-global-schema"
          data={[veloraBusinessSchema, veloraWebsiteSchema]}
          />
        
        {children}
      <VercelAnalytics />
      </body>
    </html>
  
  );
}
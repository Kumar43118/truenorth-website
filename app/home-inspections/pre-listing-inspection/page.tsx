import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import IncludedItems from "@/components/inspections/IncludedItems";
import InspectionFAQ from "@/components/inspections/InspectionFAQ";
import InspectionProcess from "@/components/inspections/InspectionProcess";
import PricingCTA from "@/components/inspections/PricingCTA";
import SampleReportPreview from "@/components/inspections/SampleReportPreview";
import WhyPreListingInspection from "@/components/inspections/WhyPreListingInspection";
import Schema from "@/components/seo/Schema";
import ServiceHero from "@/components/shared/ServiceHero";

import { preListingInspectionSchema } from "@/lib/schema";

const PAGE_PATH = "/home-inspections/pre-listing-inspection";

export const metadata: Metadata = {
  title: "Pre-Listing Home Inspection in Ottawa",

  description:
    "P.Eng.-led pre-listing home inspections in Ottawa to help sellers understand visible property conditions, identify maintenance priorities, and prepare before listing.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Pre-Listing Home Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Professional pre-listing inspections for Ottawa homeowners preparing to sell, with clear reporting on visible conditions and maintenance priorities.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Pre-Listing Home Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Professional pre-listing inspections for Ottawa homeowners preparing to sell, with clear reporting on visible conditions and maintenance priorities.",
  },
};

export default function PreListingInspectionPage() {
  return (
    <>
      <Schema
        id="pre-listing-inspection-schema"
        data={preListingInspectionSchema}
      />

      <Navbar />

      <main className="pt-[88px]">
        <ServiceHero
          eyebrow="Pre-Listing Home Inspection"
          title="Understand your home before it reaches the market."
          description="A pre-listing inspection can help identify visible deficiencies, maintenance concerns, and conditions that may become relevant during a sale. Use the findings to better understand the property, prioritize maintenance or repairs, and prepare for potential buyer questions."
          image="/images/pre-listing-inspection.jpg"
          imageAlt="Residential property exterior reviewed during a pre-listing home inspection"
          primaryButton="Request Pre-Listing Inspection"
          primaryHref="/book-inspection"
          secondaryButton="Explore Home Inspections"
          secondaryHref="/home-inspections"
          highlights={[
            "Identify visible concerns before listing",
            "Plan repairs and maintenance priorities",
            "Prepare for potential buyer questions",
            "Better understand the home's condition",
          ]}
        />

        <WhyPreListingInspection />

        <IncludedItems />

        <InspectionProcess variant="pre-listing" />

        <SampleReportPreview />

        <PricingCTA variant="pre-listing" />

        <InspectionFAQ variant="pre-listing" />
      </main>

      <Footer />
    </>
  );
}
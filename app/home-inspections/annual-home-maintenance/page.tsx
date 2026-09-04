import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import IncludedItems from "@/components/inspections/IncludedItems";
import InspectionFAQ from "@/components/inspections/InspectionFAQ";
import InspectionProcess from "@/components/inspections/InspectionProcess";
import PricingCTA from "@/components/inspections/PricingCTA";
import SampleReportPreview from "@/components/inspections/SampleReportPreview";
import WhyMaintenanceInspection from "@/components/inspections/WhyMaintenanceInspection";
import Schema from "@/components/seo/Schema";
import ServiceHero from "@/components/shared/ServiceHero";

import { annualMaintenanceInspectionSchema } from "@/lib/schema";

const PAGE_PATH = "/home-inspections/annual-home-maintenance";

export const metadata: Metadata = {
  title: "Annual Home Maintenance Inspection in Ottawa",

  description:
    "P.Eng.-led home maintenance inspections in Ottawa to help homeowners understand visible conditions, identify maintenance priorities, and plan for long-term property care.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Annual Home Maintenance Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Professional home maintenance inspections in Ottawa focused on visible conditions, maintenance priorities, and practical long-term property planning.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Annual Home Maintenance Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Professional home maintenance inspections in Ottawa focused on visible conditions, maintenance priorities, and practical long-term property planning.",
  },
};

export default function AnnualMaintenanceInspectionPage() {
  return (
    <>
      <Schema
        id="annual-maintenance-inspection-schema"
        data={annualMaintenanceInspectionSchema}
      />

      <Navbar />

      <main className="pt-[88px]">
        <ServiceHero
          eyebrow="Annual Home Maintenance Inspection"
          title="Stay ahead of maintenance with a clearer understanding of your home."
          description="A periodic home inspection can help identify visible deterioration, developing maintenance concerns, and components that may require repair, monitoring, or further evaluation. Use the findings to prioritize upkeep and plan future property needs."
          image="/images/annual-maintenance.jpg"
          imageAlt="Residential property exterior reviewed during a home maintenance inspection"
          primaryButton="Request Maintenance Inspection"
          primaryHref="/book-inspection"
          secondaryButton="Explore Home Inspections"
          secondaryHref="/home-inspections"
          highlights={[
            "Identify visible maintenance concerns",
            "Prioritize repairs and upkeep",
            "Review major building systems",
            "Support long-term property planning",
          ]}
        />

        <WhyMaintenanceInspection />

        <IncludedItems />

        <InspectionProcess variant="maintenance" />

        <SampleReportPreview />

        <PricingCTA variant="maintenance" />

        <InspectionFAQ variant="maintenance" />
      </main>

      <Footer />
    </>
  );
}
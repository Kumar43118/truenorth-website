import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import InspectionFAQ from "@/components/inspections/InspectionFAQ";
import IncludedItems from "@/components/inspections/IncludedItems";
import InspectionProcess from "@/components/inspections/InspectionProcess";
import PricingCTA from "@/components/inspections/PricingCTA";
import SampleReportPreview from "@/components/inspections/SampleReportPreview";
import WhyBuyerInspection from "@/components/inspections/WhyBuyerInspection";
import ServiceHero from "@/components/shared/ServiceHero";

const PAGE_PATH = "/home-inspections/buyer-inspection";

export const metadata: Metadata = {
  title: "Buyer Home Inspection in Ottawa | Velora",
  description:
    "P.Eng.-led buyer home inspections in Ottawa, backed by building science, construction, and engineering experience to help buyers better understand visible property conditions before purchase.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: "Buyer Home Inspection in Ottawa | Velora",
    description:
      "Professional buyer home inspections in Ottawa with practical reporting, photographs, and a building-informed perspective.",
    url: PAGE_PATH,
    type: "website",
  },
};

export default function BuyerInspectionPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        <ServiceHero
          eyebrow="Buyer Home Inspection"
          title="Understand the home before you make it yours."
          description="Before making one of life's largest purchases, get an independent home inspection informed by engineering, construction, and building science experience. Better understand visible conditions, potential concerns, and future maintenance priorities before moving forward."
          image="/images/buyer-inspection.jpg"
          imageAlt="Residential home reviewed as part of a buyer home inspection"
          primaryButton="Book Buyer Inspection"
          primaryHref="/book-inspection"
          secondaryButton="View Sample Report"
          secondaryHref="#sample-report"
          highlights={[
            "Major building systems reviewed",
            "P.Eng.-led inspection",
            "Digital report with photographs",
            "Practical maintenance guidance",
          ]}
        />

        <WhyBuyerInspection />

        <IncludedItems />

        <InspectionProcess variant="buyer" />

        <SampleReportPreview />

        <PricingCTA variant="buyer" />

        <InspectionFAQ variant="buyer" />
      </main>

      <Footer />
    </>
  );
}
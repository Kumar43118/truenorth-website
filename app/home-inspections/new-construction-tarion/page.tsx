import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import IncludedItems from "@/components/inspections/IncludedItems";
import InspectionFAQ from "@/components/inspections/InspectionFAQ";
import InspectionProcess from "@/components/inspections/InspectionProcess";
import PricingCTA from "@/components/inspections/PricingCTA";
import SampleReportPreview from "@/components/inspections/SampleReportPreview";
import WhyNewConstructionInspection from "@/components/inspections/WhyNewConstructionInspection";
import Schema from "@/components/seo/Schema";
import ServiceHero from "@/components/shared/ServiceHero";

import { newConstructionInspectionSchema } from "@/lib/schema";

const PAGE_PATH = "/home-inspections/new-construction-tarion";

export const metadata: Metadata = {
  title: "New Construction & Tarion Home Inspection in Ottawa",

  description:
    "P.Eng.-led new construction home inspections in Ottawa to document visible deficiencies, workmanship concerns, and construction conditions around applicable Tarion warranty timelines.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "New Construction & Tarion Home Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent new construction inspections in Ottawa with photographic documentation of visible deficiencies, workmanship concerns, and construction conditions.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "New Construction & Tarion Home Inspection in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent new construction inspections in Ottawa with photographic documentation of visible deficiencies, workmanship concerns, and construction conditions.",
  },
};

export default function NewConstructionInspectionPage() {
  return (
    <>
      <Schema
        id="new-construction-inspection-schema"
        data={newConstructionInspectionSchema}
      />

      <Navbar />

      <main className="pt-[88px]">
        <ServiceHero
          eyebrow="New Construction / Tarion Inspection"
          title="Document visible deficiencies before important warranty deadlines."
          description="An independent inspection can help new homeowners identify and document visible deficiencies, workmanship concerns, and construction conditions around applicable warranty timelines. The findings can provide useful information when communicating concerns to the builder and preparing warranty documentation."
          image="/images/new-construction-inspection.jpg"
          imageAlt="New residential construction reviewed during a home inspection"
          primaryButton="Request New Construction Inspection"
          primaryHref="/book-inspection"
          secondaryButton="Explore Home Inspections"
          secondaryHref="/home-inspections"
          highlights={[
            "Visible deficiency documentation",
            "Workmanship and installation observations",
            "Digital report with photographs",
            "Information for builder discussions",
          ]}
        />

        <WhyNewConstructionInspection />

        <IncludedItems />

        <InspectionProcess variant="new-construction" />

        <SampleReportPreview />

        <PricingCTA variant="new-construction" />

        <InspectionFAQ variant="new-construction" />
      </main>

      <Footer />
    </>
  );
}
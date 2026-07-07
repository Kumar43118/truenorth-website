import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ServiceHero from "@/components/shared/ServiceHero";
import WhyEngineer from "@/components/inspections/WhyEngineer";
import IncludedItems from "@/components/inspections/IncludedItems";
import InspectionProcess from "@/components/inspections/InspectionProcess";
import SampleReportPreview from "@/components/inspections/SampleReportPreview";
import InspectionFAQ from "@/components/inspections/InspectionFAQ";
import PricingCTA from "@/components/inspections/PricingCTA";
import InspectionCTA from "@/components/inspections/InspectionCTA";

export default function PreListingInspectionPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <ServiceHero
          eyebrow="Pre-Listing Inspection"
          title="Sell Your Home With Confidence."
          description="Identify potential concerns before your property goes on the market. A pre-listing inspection helps reduce surprises, support smoother negotiations, and give buyers greater confidence."
          image="/images/buyer-inspection.jpg"
          imageAlt="Pre-listing home inspection"
          primaryButton="Book Pre-Listing Inspection"
          secondaryButton="View Inspection Services"
          highlights={[
            "Identify concerns before listing",
            "Reduce surprises during negotiations",
            "Support buyer confidence",
            "Plan repairs before going to market",
          ]}
        />

        <WhyEngineer />
        <IncludedItems />
        <InspectionProcess />
        <SampleReportPreview />
        <InspectionFAQ />
        <PricingCTA />
        <InspectionCTA />
      </main>

      <Footer />
    </>
  );
}
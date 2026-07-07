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

export default function AnnualMaintenanceInspectionPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <ServiceHero
          eyebrow="Annual Home Maintenance Inspection"
          title="Protect Your Home Year After Year."
          description="Stay ahead of costly repairs with a proactive annual review of your home’s major systems, maintenance priorities, and visible building performance concerns."
          image="/images/buyer-inspection.jpg"
          imageAlt="Annual home maintenance inspection"
          primaryButton="Book Maintenance Inspection"
          secondaryButton="View Inspection Services"
          highlights={[
            "Identify maintenance priorities",
            "Plan repairs before issues worsen",
            "Review major building systems",
            "Protect long-term property value",
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
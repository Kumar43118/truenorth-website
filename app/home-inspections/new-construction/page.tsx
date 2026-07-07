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
  eyebrow="New Construction / Tarion Inspection"
  title="Protect Your New Home Warranty."
  description="Document visible deficiencies and construction concerns before key warranty deadlines. A Tarion inspection helps new homeowners understand what should be reviewed, recorded, and addressed."
  image="/images/buyer-inspection.jpg"
  imageAlt="New construction home inspection"
  primaryButton="Book Tarion Inspection"
  secondaryButton="View Inspection Services"
  highlights={[
    "Document warranty deficiencies",
    "Review workmanship concerns",
    "Support Tarion submissions",
    "Identify issues before deadlines",
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
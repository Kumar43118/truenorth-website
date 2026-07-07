import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InspectionHero from "@/components/inspections/InspectionHero";
import WhyEngineer from "@/components/inspections/WhyEngineer";
import InspectionTypes from "@/components/inspections/InspectionTypes";
import IncludedItems from "@/components/inspections/IncludedItems";
import EngineeringDifference from "@/components/inspections/EngineeringDifference";
import InspectionCTA from "@/components/inspections/InspectionCTA";
import InspectionFAQ from "@/components/inspections/InspectionFAQ";

export default function HomeInspectionsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <InspectionHero />
        <WhyEngineer />
        <InspectionTypes />
        <IncludedItems />
        <EngineeringDifference />
        <InspectionCTA />
        <InspectionFAQ />

      </main>

      <Footer />
    </>
  );
}
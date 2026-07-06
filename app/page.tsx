import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChoose from "../components/WhyChoose";
import TrustBar from "../components/TrustBar";
import ResidentialServices from "../components/ResidentialServices";
import BuildingScienceServices from "../components/BuildingScienceServices";
import EngineerSection from "../components/EngineerSection";
import InspectionProcess from "../components/InspectionProcess";
import TrueNorthApproach from "../components/TrueNorthApproach";
import FutureTesting from "../components/FutureTesting";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChoose />
        <TrustBar />
        <ResidentialServices />
        <BuildingScienceServices />
        <EngineerSection />
        <InspectionProcess />
        <TrueNorthApproach />
        <FutureTesting />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
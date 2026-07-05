import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TrustBar from "../components/TrustBar";
import WhyChoose from "../components/WhyChoose";
import ResidentialServices from "../components/ResidentialServices";
import BuildingScienceServices from "../components/BuildingScienceServices";
import EngineerSection from "../components/EngineerSection";
import InspectionProcess from "../components/InspectionProcess";
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
        <TrustBar />
        <WhyChoose />
        <ResidentialServices />
        <BuildingScienceServices />
        <EngineerSection />
        <InspectionProcess />
        <FutureTesting />
        <FAQ />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
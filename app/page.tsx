import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustCredibility from "@/components/TrustCredibility";
import ServicePillars from "@/components/ServicePillars";
import EngineerSection from "@/components/EngineerSection";
import HowWeWork from "@/components/HowWeWork";
import WhoWeServe from "@/components/WhoWeServe";
import WhyVelora from "@/components/WhyVelora";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import Schema from "@/components/seo/Schema";
import { homeInspectionSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Home Inspections in Ottawa | Velora Engineering and Consulting",
  },

  description:
    "Velora provides P.Eng.-led home inspections in Ottawa and the National Capital Region, backed by building envelope and building science expertise for confident property decisions.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title:
      "Home Inspections in Ottawa | Velora Engineering and Consulting",
    description:
      "P.Eng.-led home inspections in Ottawa and the National Capital Region, backed by building envelope and building science expertise.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Home Inspections in Ottawa | Velora Engineering and Consulting",
    description:
      "P.Eng.-led home inspections in Ottawa and the National Capital Region, backed by building envelope and building science expertise.",
  },
};

export default function Home() {
  return (
    <>
      <Schema
        id="home-inspection-schema"
        data={homeInspectionSchema}
      />

      <Navbar />

      <main>
        <Hero />
        <TrustCredibility />
        <ServicePillars />
        <WhyVelora />
        <EngineerSection />
        <HowWeWork />
        <WhoWeServe />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import ConstructionActivities from "@/components/engineering/quality-assurance/ConstructionActivities";
import ConstructionObservationProcess from "@/components/engineering/quality-assurance/ConstructionObservationProcess";
import QualityAssuranceClients from "@/components/engineering/quality-assurance/QualityAssuranceClients";
import QualityAssuranceDeliverables from "@/components/engineering/quality-assurance/QualityAssuranceDeliverables";
import QualityAssuranceFAQ from "@/components/engineering/quality-assurance/QualityAssuranceFAQ";
import QualityAssurancePurpose from "@/components/engineering/quality-assurance/QualityAssurancePurpose";
import QualityAssuranceServices from "@/components/engineering/quality-assurance/QualityAssuranceServices";
import ServiceHero from "@/components/engineering/quality-assurance/ServiceHero";

import CTA from "@/components/shared/CTA";
import Schema from "@/components/seo/Schema";

import { buildingEnvelopeQualityAssuranceSchema } from "@/lib/schema";

const PAGE_PATH =
  "/engineering-services/building-envelope-quality-assurance";

export const metadata: Metadata = {
  title: "Building Envelope Quality Assurance in Ottawa",

  description:
    "Independent building envelope quality assurance services in Ottawa, including design reviews, construction observations, deficiency documentation, and technical reporting for new construction and rehabilitation projects.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Building Envelope Quality Assurance in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent building envelope quality assurance in Ottawa, including technical reviews, construction observations, deficiency documentation, and practical project support.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Building Envelope Quality Assurance in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent building envelope quality assurance in Ottawa, including technical reviews, construction observations, deficiency documentation, and practical project support.",
  },
};

export default function BuildingEnvelopeQualityAssurancePage() {
  return (
    <>
      <Schema
        id="building-envelope-quality-assurance-schema"
        data={buildingEnvelopeQualityAssuranceSchema}
      />

      <Navbar />

      <main>
        <ServiceHero />

        <QualityAssurancePurpose />

        <QualityAssuranceServices />

        <ConstructionObservationProcess />

        <ConstructionActivities />

        <QualityAssuranceDeliverables />

        <QualityAssuranceClients />

        <QualityAssuranceFAQ />

        <CTA
          eyebrow="Let's Talk"
          title="Looking for independent building envelope quality assurance?"
          description="Whether you're planning a new construction project or a building rehabilitation, Velora can provide independent building envelope quality assurance, construction observations, deficiency documentation, and practical technical guidance tailored to your project."
          primaryLabel="Request a Consultation"
          primaryHref="/contact"
        />
      </main>

      <Footer />
    </>
  );
}
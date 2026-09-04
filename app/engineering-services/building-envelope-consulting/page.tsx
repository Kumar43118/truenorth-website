import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/shared/ServiceHero";

import BuildingEnvelopeScope from "@/components/engineering/BuildingEnvelopeScope";
import BuildingEnvelopeConcerns from "@/components/engineering/BuildingEnvelopeConcerns";
import BuildingEnvelopeProcess from "@/components/engineering/BuildingEnvelopeProcess";
import BuildingEnvelopeDeliverables from "@/components/engineering/BuildingEnvelopeDeliverables";
import BuildingEnvelopeClients from "@/components/engineering/BuildingEnvelopeClients";
import BuildingEnvelopeFAQ from "@/components/engineering/BuildingEnvelopeFAQ";
import EngineeringConsultationCTA from "@/components/engineering/EngineeringConsultationCTA";

import Schema from "@/components/seo/Schema";
import { buildingEnvelopeConsultingSchema } from "@/lib/schema";

const PAGE_PATH =
  "/engineering-services/building-envelope-consulting";

export const metadata: Metadata = {
  title: "Building Envelope Consulting in Ottawa",

  description:
    "Independent building envelope consulting in Ottawa for exterior walls, cladding, windows, roofing, water intrusion, moisture concerns, and rehabilitation projects.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Building Envelope Consulting in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent building envelope consulting in Ottawa for exterior walls, cladding, windows, roofing, moisture concerns, water intrusion, and rehabilitation projects.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Building Envelope Consulting in Ottawa | Velora Engineering and Consulting",

    description:
      "Independent building envelope consulting in Ottawa for exterior walls, cladding, windows, roofing, moisture concerns, water intrusion, and rehabilitation projects.",
  },
};

export default function BuildingEnvelopeConsultingPage() {
  return (
    <>
      <Schema
        id="building-envelope-consulting-schema"
        data={buildingEnvelopeConsultingSchema}
      />

      <Navbar />

      <main className="pt-[88px]">
        <ServiceHero
          eyebrow="Building Envelope Consulting"
          title="Understand how your building envelope is performing."
          description="Focused engineering review of exterior walls, cladding, windows, roofing, flashing, waterproofing, and moisture-related concerns to help owners and project teams understand existing conditions and determine practical next steps."
          image="/images/engineering/building-envelope.jpg"
          imageAlt="Building envelope rehabilitation work on a multi-residential building"
          primaryButton="Discuss Your Project"
          primaryHref="/contact"
          secondaryButton="Explore Consulting Services"
          secondaryHref="/engineering-services#consulting-services"
          highlights={[
            "Exterior wall and cladding reviews",
            "Water intrusion investigations",
            "Window, roofing, and waterproofing assessments",
            "Repair and rehabilitation support",
          ]}
        />

        <BuildingEnvelopeScope />
        <BuildingEnvelopeConcerns />
        <BuildingEnvelopeProcess />
        <BuildingEnvelopeDeliverables />
        <BuildingEnvelopeClients />
        <BuildingEnvelopeFAQ />

        <EngineeringConsultationCTA
          eyebrow="Building Envelope Consulting"
          title="Need clarity on a building envelope concern?"
          description="Tell us about the building, observed concern, project stage, and the technical question you need to address. We’ll review the available information and help determine an appropriate consulting scope and practical next step."
        />
      </main>

      <Footer />
    </>
  );
}
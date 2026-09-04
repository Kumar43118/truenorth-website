import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceHero from "@/components/shared/ServiceHero";

import AssessmentPurpose from "@/components/engineering/condition/AssessmentPurpose";
import SystemsReviewed from "@/components/engineering/condition/SystemsReviewed";
import ConditionPriorityFramework from "@/components/engineering/condition/ConditionPriorityFramework";
import ConditionAssessmentProcess from "@/components/engineering/condition/ConditionAssessmentProcess";
import AssessmentDeliverables from "@/components/engineering/condition/AssessmentDeliverables";
import AssessmentClients from "@/components/engineering/condition/AssessmentClients";
import WhenToEngageAssessment from "@/components/engineering/condition/WhenToEngageAssessment";
import AssessmentFAQ from "@/components/engineering/condition/AssessmentFAQ";
import EngineeringConsultationCTA from "@/components/engineering/EngineeringConsultationCTA";

import Schema from "@/components/seo/Schema";
import { buildingConditionAssessmentSchema } from "@/lib/schema";

const PAGE_PATH =
  "/engineering-services/building-condition-assessment";

export const metadata: Metadata = {
  title: "Building Condition Assessments in Ottawa",

  description:
    "Building condition assessments in Ottawa for owners, condominium corporations, property managers, purchasers, and investors seeking clear documentation of visible conditions, repair priorities, maintenance needs, and capital planning considerations.",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title:
      "Building Condition Assessments in Ottawa | Velora Engineering and Consulting",

    description:
      "Professional building condition assessments in Ottawa focused on visible building conditions, maintenance and repair priorities, photographic documentation, and practical engineering recommendations.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Building Condition Assessments in Ottawa | Velora Engineering and Consulting",

    description:
      "Professional building condition assessments in Ottawa focused on visible building conditions, maintenance and repair priorities, photographic documentation, and practical engineering recommendations.",
  },
};

export default function BuildingConditionAssessmentPage() {
  return (
    <>
      <Schema
        id="building-condition-assessment-schema"
        data={buildingConditionAssessmentSchema}
      />

      <Navbar />

      <main className="pt-[88px]">
        <ServiceHero
          eyebrow="Building Condition Assessments"
          title="Understand the condition of your building and plan what comes next."
          description="A structured review of visible building conditions can help owners and decision-makers identify concerns, understand repair and maintenance priorities, and plan future capital work with greater clarity."
          image="/images/engineering/building-condition-assessment.jpg"
          imageAlt="Existing multi-residential building undergoing a condition assessment"
          primaryButton="Request an Assessment"
          primaryHref="/contact"
          secondaryButton="Explore Consulting Services"
          secondaryHref="/engineering-services#consulting-services"
          highlights={[
            "Review of visible building conditions",
            "Photographic documentation",
            "Maintenance and repair priorities",
            "Practical engineering recommendations",
          ]}
        />

        <AssessmentPurpose />
        <SystemsReviewed />
        <ConditionPriorityFramework />
        <ConditionAssessmentProcess />
        <AssessmentDeliverables />
        <AssessmentClients />
        <WhenToEngageAssessment />
        <AssessmentFAQ />

        <EngineeringConsultationCTA
          eyebrow="Building Condition Assessment"
          title="Need a clearer understanding of your building's condition?"
          description="Tell us about the property, known concerns, available documentation, and the decisions the assessment needs to support. We’ll review your inquiry and help determine an appropriate scope and practical next step."
          primaryLabel="Request an Assessment"
        />
      </main>

      <Footer />
    </>
  );
}
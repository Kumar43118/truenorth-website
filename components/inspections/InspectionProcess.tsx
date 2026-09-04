import {
  CalendarDays,
  FileCheck,
  House,
  Search,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

type InspectionProcessVariant =
  | "buyer"
  | "pre-listing"
  | "new-construction"
  | "maintenance";

type InspectionProcessProps = {
  variant?: InspectionProcessVariant;
};

const processContent = {
  buyer: {
    title: "A simple, transparent inspection process.",
    description:
      "From booking to receiving your report, the inspection process is designed to provide clear information before your purchase decision.",
    steps: [
      {
        icon: CalendarDays,
        title: "Request Your Inspection",
        description:
          "Share the property details, purchase timeline, and preferred inspection date. We'll confirm the scope and availability.",
      },
      {
        icon: Search,
        title: "Property Inspection",
        description:
          "We conduct a systematic visual review of readily accessible building systems and components included in the inspection scope.",
      },
      {
        icon: FileCheck,
        title: "Receive Your Report",
        description:
          "Receive a digital report with photographs, documented observations, identified concerns, and practical recommendations.",
      },
      {
        icon: House,
        title: "Make an Informed Decision",
        description:
          "Use the findings to better understand the property, discuss relevant concerns, and plan future maintenance or further evaluation where appropriate.",
      },
    ],
  },

  "pre-listing": {
    title: "A clear process for preparing your property.",
    description:
      "Understand visible conditions before listing and use the inspection findings to make informed preparation and maintenance decisions.",
    steps: [
      {
        icon: CalendarDays,
        title: "Request Your Inspection",
        description:
          "Share the property details and anticipated listing timeline. We'll confirm the inspection scope and availability.",
      },
      {
        icon: Search,
        title: "Property Inspection",
        description:
          "We review visible and readily accessible building systems and components to identify relevant deficiencies and maintenance concerns.",
      },
      {
        icon: FileCheck,
        title: "Review the Findings",
        description:
          "Receive a digital report documenting observations, photographs, identified concerns, and practical recommendations.",
      },
      {
        icon: House,
        title: "Prepare for Listing",
        description:
          "Use the findings to prioritize maintenance, consider repairs, and prepare for potential buyer questions.",
      },
    ],
  },

  "new-construction": {
    title: "A structured review of your new home.",
    description:
      "Document visible deficiencies and construction concerns so you have clearer information when communicating with the builder.",
    steps: [
      {
        icon: CalendarDays,
        title: "Request Your Inspection",
        description:
          "Share the property details, occupancy information, and relevant warranty milestone or review timeline.",
      },
      {
        icon: Search,
        title: "New Home Review",
        description:
          "We inspect visible and readily accessible components and document relevant deficiencies or construction concerns within the agreed scope.",
      },
      {
        icon: FileCheck,
        title: "Receive Documentation",
        description:
          "Receive a digital report with photographs and clearly documented observations to support appropriate follow-up.",
      },
      {
        icon: House,
        title: "Plan Your Next Steps",
        description:
          "Use the documented findings when discussing concerns with the builder and determining appropriate follow-up.",
      },
    ],
  },

  maintenance: {
    title: "A practical process for planning home maintenance.",
    description:
      "Review visible building conditions and identify maintenance priorities before minor concerns develop into larger problems.",
    steps: [
      {
        icon: CalendarDays,
        title: "Request Your Inspection",
        description:
          "Tell us about the home, its age, and any known concerns or maintenance questions you would like reviewed.",
      },
      {
        icon: Search,
        title: "Condition Review",
        description:
          "We review visible and readily accessible building systems and components with a focus on condition and maintenance priorities.",
      },
      {
        icon: FileCheck,
        title: "Receive Your Report",
        description:
          "Receive documented observations, photographs, identified concerns, and practical maintenance recommendations.",
      },
      {
        icon: House,
        title: "Plan and Prioritize",
        description:
          "Use the findings to organize maintenance work, consider further evaluation where appropriate, and plan future property improvements.",
      },
    ],
  },
} satisfies Record<
  InspectionProcessVariant,
  {
    title: string;
    description: string;
    steps: {
      icon: typeof CalendarDays;
      title: string;
      description: string;
    }[];
  }
>;

export default function InspectionProcess({
  variant = "buyer",
}: InspectionProcessProps) {
  const content = processContent[variant];

  const headingId = `inspection-process-${variant}`;

  return (
    <section
      aria-labelledby={headingId}
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div id={headingId}>
            <SectionHeader
              eyebrow="Our Process"
              title={content.title}
              description={content.description}
            />
          </div>
        </Reveal>

        <div className="relative mt-14 grid gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-8 right-8 top-8 hidden h-px bg-[#D4A63A]/30 lg:block"
          />

          {content.steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.title}
                delay={index * 0.08}
                y={20}
                amount={0.12}
                className="h-full"
              >
                <article className="relative h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-8 w-8" />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#B88A2A]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
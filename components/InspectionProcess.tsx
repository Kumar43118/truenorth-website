import {
  CalendarCheck,
  ClipboardList,
  FileText,
  ShieldCheck,
} from "lucide-react";

import SectionHeader from "./shared/SectionHeader";
import ProcessStep from "./shared/ProcessStep";

const steps = [
  {
    number: "1",
    title: "Book Inspection",
    description:
      "Choose a convenient inspection time and share basic property details.",
    icon: CalendarCheck,
  },
  {
    number: "2",
    title: "On-Site Review",
    description:
      "A detailed inspection is completed with an engineering and building science perspective.",
    icon: ClipboardList,
  },
  {
    number: "3",
    title: "Digital Report",
    description:
      "Receive a clear report with photos, observations, and practical recommendations.",
    icon: FileText,
  },
  {
    number: "4",
    title: "Move Forward",
    description:
      "Understand the findings and make confident decisions about the property.",
    icon: ShieldCheck,
  },
];

export default function InspectionProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <SectionHeader
          eyebrow="Our Process"
          title="A clear process from booking to confident decision-making."
          description="TrueNorth keeps the inspection process simple, transparent, and focused on helping you understand the property."
        />

        <div className="relative mt-16 grid gap-12 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#B88A2A]/40 md:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative bg-white px-4">
              <ProcessStep
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
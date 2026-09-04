import {
  Building2,
  ClipboardCheck,
  Hammer,
  Search,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    icon: Search,
    title: "Building Envelope Investigations",
    description:
      "Focused investigation of reported water entry, condensation, deterioration, air leakage, and other building-envelope performance concerns.",
    items: [
      "Review of reported symptoms and available background information",
      "Visual assessment of accessible conditions",
      "Photographic documentation of observed concerns",
      "Identification of likely contributing factors",
    ],
  },
  {
    icon: Building2,
    title: "Exterior Wall and Component Assessments",
    description:
      "Condition-based assessment of exterior walls, cladding, windows, roofing, flashing, sealants, drainage, and related interfaces.",
    items: [
      "Cladding and exterior wall assessments",
      "Window, door, and perimeter interface reviews",
      "Roofing, drainage, and transition observations",
      "Flashing, sealant, and waterproofing reviews",
    ],
  },
  {
    icon: Hammer,
    title: "Repair and Rehabilitation Consulting",
    description:
      "Engineering support for developing practical repair and rehabilitation approaches based on observed conditions, project objectives, and technical requirements.",
    items: [
      "Repair strategy and concept development",
      "Rehabilitation design and detailing support",
      "Technical specifications and repair documentation",
      "Coordination with owners, designers, and project teams",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Construction Review and Technical Support",
    description:
      "Independent construction observations and technical support during repair and rehabilitation work to assist with quality, coordination, and documentation.",
    items: [
      "Construction-phase field observations",
      "Review of selected completed work",
      "Photographic documentation and field reporting",
      "Technical coordination during construction",
    ],
  },
];

export default function BuildingEnvelopeScope() {
  return (
    <section
      id="building-envelope-services"
      aria-labelledby="building-envelope-services-heading"
      className="scroll-mt-24 bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Scope of Services"
            title="Focused consulting for building envelope concerns and rehabilitation projects."
            description="The appropriate scope depends on the building, reported concern, available information, and the decision the client needs to make."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                delay={index * 0.08}
                y={22}
                amount={0.12}
                className="h-full"
              >
                <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/50 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="py-3.5 text-sm font-medium leading-6 text-[#102A43]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
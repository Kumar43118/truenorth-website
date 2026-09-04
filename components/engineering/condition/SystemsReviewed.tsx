import {
  Building2,
  Home,
  Layers3,
  Map,
  PanelsTopLeft,
  Warehouse,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const systems = [
  {
    number: "01",
    icon: Layers3,
    title: "Exterior Walls and Cladding",
    description:
      "Visible wall assemblies, cladding materials, joints, interfaces, sealants, flashings, and signs of deterioration or moisture-related concerns.",
  },
  {
    number: "02",
    icon: Home,
    title: "Roofing Systems",
    description:
      "Accessible roof coverings or membranes, drainage components, parapets, flashings, transitions, and visible maintenance or deterioration concerns.",
  },
  {
    number: "03",
    icon: PanelsTopLeft,
    title: "Windows, Doors, and Glazing",
    description:
      "Visible window and door assemblies, perimeter interfaces, sealants, glazing conditions, drainage provisions, and signs of air or water leakage.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Balconies and Exterior Projections",
    description:
      "Accessible balconies, canopies, guards, soffits, exposed edges, waterproofing interfaces, and visible signs of deterioration.",
  },
  {
    number: "05",
    icon: Map,
    title: "Below-Grade and Site Interfaces",
    description:
      "Visible foundation interfaces, entrances, localized grading, drainage conditions, and exterior features that may affect the building envelope.",
  },
  {
    number: "06",
    icon: Warehouse,
    title: "Interior Indicators",
    description:
      "Accessible interior areas may be reviewed for staining, condensation, deterioration, or other symptoms that may relate to exterior enclosure conditions.",
  },
];

export default function SystemsReviewed() {
  return (
    <section
      aria-labelledby="systems-reviewed-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Building Systems Reviewed"
            title="A systematic review of visible and accessible building conditions."
            description="The specific systems and components included in an assessment are defined by the property type, client objectives, available access, and agreed scope of work."
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-5xl border-t border-slate-200 lg:mt-16">
          {systems.map((system, index) => {
            const Icon = system.icon;

            return (
              <Reveal
                key={system.number}
                delay={index * 0.05}
                y={16}
                amount={0.12}
              >
                <article className="group grid gap-5 border-b border-slate-200 py-7 transition duration-300 md:grid-cols-[72px_72px_0.7fr_1.3fr] md:items-center md:gap-6 md:py-8">
                  <span className="text-sm font-semibold tracking-[0.2em] text-[#B88A2A]">
                    {system.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#102A43]">
                    {system.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {system.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-500">
            Building condition assessments are generally based on visible and
accessible conditions. Concealed assemblies, exploratory openings,
specialized diagnostic work, and discipline-specific reviews are
included only where identified in the agreed scope or coordinated
with an appropriate specialist.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
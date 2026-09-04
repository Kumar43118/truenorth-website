import {
  CloudRain,
  Droplets,
  Layers3,
  PanelTop,
  Snowflake,
  Wind,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

const concerns = [
  {
    icon: Droplets,
    title: "Water Entry",
    description:
      "Leaks and staining may originate at windows, wall interfaces, roofing transitions, flashings, sealants, or concealed drainage paths.",
  },
  {
    icon: PanelTop,
    title: "Window and Door Interfaces",
    description:
      "Perimeter seals, flashings, drainage provisions, installation details, and adjacent wall conditions can affect long-term performance.",
  },
  {
    icon: Layers3,
    title: "Cladding Deterioration",
    description:
      "Cracking, displacement, corrosion, failed joints, and material deterioration may indicate localized defects or broader enclosure concerns.",
  },
  {
    icon: CloudRain,
    title: "Roofing and Drainage",
    description:
      "Roof membranes, drainage systems, parapets, flashings, and transitions must work together to effectively manage water.",
  },
  {
    icon: Snowflake,
    title: "Condensation and Thermal Concerns",
    description:
      "Cold surfaces, discontinuous insulation, air leakage, and interior humidity can contribute to condensation and material damage.",
  },
  {
    icon: Wind,
    title: "Air Leakage and Drafts",
    description:
      "Uncontrolled air movement can affect occupant comfort, energy efficiency, condensation risk, and the long-term performance of wall and window assemblies.",
  },
];

export default function BuildingEnvelopeConcerns() {
  return (
    <section
      aria-labelledby="building-envelope-concerns-heading"
      className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
              Common Building Concerns
            </p>

            <h2
              id="building-envelope-concerns-heading"
              className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl"
            >
              Visible symptoms may be connected to conditions elsewhere in the
              enclosure.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Building envelope concerns often involve interfaces between
              materials and systems. The investigation should consider the
              reported symptom, surrounding conditions, and possible water,
              air, and heat-flow paths.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {concerns.map((concern, index) => {
            const Icon = concern.icon;

            return (
              <Reveal
                key={concern.title}
                delay={(index % 3) * 0.07}
                y={18}
                amount={0.12}
                className="h-full"
              >
                <article className="group h-full bg-[#102A43] p-7 transition duration-300 hover:bg-white/[0.06] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {concern.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {concern.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-400">
            The source and extent of a building envelope concern may not be
            confirmed through visual review alone. Additional investigation,
            testing, openings, or specialist services may be recommended where
            appropriate.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
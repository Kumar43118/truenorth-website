import {
  Building2,
  HardHat,
  Landmark,
  PanelsTopLeft,
  Users,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const clients = [
  {
    icon: Building2,
    title: "Building Owners",
    description:
      "Independent technical guidance for understanding building envelope concerns, planning repairs, and making informed property decisions.",
  },
  {
    icon: Landmark,
    title: "Condominium Corporations",
    description:
      "Support for building envelope investigations, rehabilitation planning, capital projects, and construction-phase review.",
  },
  {
    icon: Users,
    title: "Property Managers",
    description:
      "Practical engineering guidance for reported leaks, deterioration, maintenance planning, and coordination with owners and contractors.",
  },
  {
    icon: PanelsTopLeft,
    title: "Architects & Consultants",
    description:
      "Responsive technical collaboration, design and detailing input, construction review support, and an independent building envelope perspective.",
  },
  {
    icon: HardHat,
    title: "Contractors & Builders",
    description:
      "Project-specific technical coordination, constructability input, construction observations, and documentation during repair and rehabilitation work.",
  },
];

export default function BuildingEnvelopeClients() {
  return (
    <section
      aria-labelledby="building-envelope-clients-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
  eyebrow="Who We Work With"
  title="Building envelope guidance for owners and project teams."
  description="Velora works with clients and project teams who need clear, independent guidance on building envelope conditions, repair planning, and rehabilitation work."
/>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <Reveal
                key={client.title}
                delay={index * 0.07}
                y={20}
                amount={0.12}
                className="h-full"
              >
                <article className="group h-full rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4A63A]/40 hover:bg-white hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-[#102A43]">
                    {client.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {client.description}
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
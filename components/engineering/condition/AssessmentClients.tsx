import {
  Building2,
  BuildingIcon,
  KeyRound,
  Landmark,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

const clients = [
  {
    number: "01",
    icon: Building2,
    title: "Building Owners",
    description:
      "Condition assessments can help owners understand visible building envelope concerns, establish maintenance priorities, and plan repair or rehabilitation work.",
  },
  {
    number: "02",
    icon: Landmark,
    title: "Condominium Corporations",
    description:
      "Condition assessments can support board discussions, investigation of known concerns, repair planning, and informed capital decisions.",
  },
  {
    number: "03",
    icon: BuildingIcon,
    title: "Property Managers",
    description:
      "Clear documentation of observed conditions can help property managers communicate concerns, coordinate follow-up work, and support maintenance and ownership decisions.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Purchasers and Investors",
    description:
      "Property-specific condition information can help purchasers and investors understand visible concerns, potential repair needs, and areas that may require further investigation.",
  },
];

export default function AssessmentClients() {
  return (
    <section
      aria-labelledby="assessment-clients-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Who We Work With
              </p>

              <h2
  id="assessment-clients-heading"
  className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#102A43] sm:text-5xl"
>
  Condition information for better property decisions.
</h2>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-slate-600">
  Velora supports clients who need a clearer understanding of existing
  building envelope conditions before planning maintenance, repairs,
  rehabilitation, acquisition, or other property-related decisions.
</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-0 border-y border-slate-200 md:grid-cols-2 lg:mt-16">
          {clients.map((client, index) => {
            const Icon = client.icon;

            return (
              <Reveal
                key={client.number}
                delay={index * 0.07}
                y={18}
                amount={0.12}
                className="h-full"
              >
                <article
                  className={`group h-full p-7 transition duration-300 hover:bg-[#F8FAFC] sm:p-8 lg:p-10 ${
                    index % 2 === 0
                      ? "md:border-r md:border-slate-200"
                      : ""
                  } ${index < 2 ? "border-b border-slate-200" : ""}`}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>

                    <span className="text-4xl font-semibold text-slate-200">
                      {client.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.015em] text-[#102A43]">
                    {client.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-8 text-slate-600">
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
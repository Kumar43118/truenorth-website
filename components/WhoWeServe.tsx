import {
  Building2,
  ClipboardCheck,
  Home,
  KeyRound,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const audiences = [
  {
    icon: KeyRound,
    title: "Home Buyers",
    description:
      "Independent home inspections that help buyers better understand visible property conditions, potential concerns, and priorities before making a purchase decision.",
  },
  {
    icon: Home,
    title: "Homeowners",
    description:
      "Practical inspections for owners who want to better understand their home, identify maintenance priorities, and plan future repairs or improvements.",
  },
  {
  icon: ClipboardCheck,
  title: "New Homeowners",
    description:
      "New construction and Tarion-focused inspections to help document visible deficiencies and concerns during important warranty milestones.",
  },
  {
    icon: Wrench,
    title: "Home Sellers",
    description:
      "Pre-listing inspections that can help identify visible concerns in advance and give sellers more information before bringing a property to market.",
  },
  {
    icon: Building2,
    title: "Property Owners & Managers",
    description:
      "Independent building-envelope assessments and practical technical guidance for existing buildings, repairs, maintenance planning, and rehabilitation.",
  },
  {
    icon: PanelsTopLeft,
    title: "Design & Construction Teams",
    description:
      "Building-envelope consulting and quality assurance support for architects, consultants, contractors, developers, and project teams.",
  },
];

export default function WhoWeServe() {
  return (
    <section
      aria-labelledby="who-we-serve-heading"
      className="bg-[#102A43] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal y={24} amount={0.2}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Who We Serve
              </p>

              <h2
                id="who-we-serve-heading"
                className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl"
              >
                Helping people make informed decisions about their properties.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                {siteConfig.company.shortName} primarily serves home buyers,
                homeowners, sellers, and new-home owners, while also providing
                specialized building-envelope consulting for property and
                construction professionals.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;

              return (
                <Reveal
                  key={audience.title}
                  delay={index * 0.07}
                  y={20}
                  amount={0.1}
                  className="h-full"
                >
                  <article className="group h-full bg-[#102A43] p-7 transition duration-300 hover:bg-white/[0.06] sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {audience.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-300">
                      {audience.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
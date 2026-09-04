import {
  CheckCircle2,
  DoorOpen,
  Droplets,
  Fan,
  FileText,
  Hammer,
  Home,
  Layers,
  ShieldAlert,
  Snowflake,
  SquareStack,
  ThermometerSun,
  Zap,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const items = [
  { label: "Roofing", icon: Home },
  { label: "Exterior Cladding", icon: Layers },
  { label: "Foundation", icon: SquareStack },
  { label: "Visible Structural Components", icon: Hammer },
  { label: "Windows", icon: Snowflake },
  { label: "Doors", icon: DoorOpen },
  { label: "Attic", icon: Home },
  { label: "Insulation & Ventilation", icon: ThermometerSun },
  { label: "Plumbing", icon: Droplets },
  { label: "Electrical", icon: Zap },
  { label: "Heating & Cooling", icon: Fan },
  { label: "Interior Finishes", icon: CheckCircle2 },
  { label: "Visible Moisture Indicators", icon: Droplets },
  { label: "Visible Safety Concerns", icon: ShieldAlert },
];

export default function IncludedItems() {
  return (
    <section
      aria-labelledby="inspection-scope-heading"
      className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Inspection Scope"
            title="A systematic visual review from roof to foundation."
            description="The inspection includes a visual review of readily accessible building systems and components to help identify visible deficiencies, maintenance concerns, and conditions that may warrant further investigation."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal
                key={item.label}
                delay={(index % 6) * 0.04}
                y={18}
                amount={0.1}
                className="h-full"
              >
                <article className="group flex h-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A63A]/40 hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <h3 className="font-semibold text-[#102A43]">
                    {item.label}
                  </h3>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={22} amount={0.15}>
          <div className="mt-16 rounded-3xl border border-white/10 bg-[#102A43] p-8 text-white sm:p-10 lg:mt-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#D4A63A]">
                <FileText aria-hidden="true" className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.015em]">
                  Clear findings. Practical next steps.
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                  Your digital inspection report includes photographs,
                  documented observations, identified concerns, and practical
                  recommendations to help you understand the visible condition
                  of the home and determine appropriate next steps.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-6 text-slate-500">
            Inspection scope is limited to visible and readily accessible
            systems and components at the time of inspection. Concealed,
            obstructed, unsafe, or inaccessible conditions are not inspected,
            and specialized testing or further investigation may be recommended
            where appropriate.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
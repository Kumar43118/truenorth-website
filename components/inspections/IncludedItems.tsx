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

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const items = [
  { label: "Roofing System", icon: Home },
  { label: "Exterior Cladding", icon: Layers },
  { label: "Foundation", icon: SquareStack },
  { label: "Structure", icon: Hammer },
  { label: "Windows", icon: Snowflake },
  { label: "Doors", icon: DoorOpen },
  { label: "Attic", icon: Home },
  { label: "Insulation", icon: ThermometerSun },
  { label: "Plumbing", icon: Droplets },
  { label: "Electrical", icon: Zap },
  { label: "Heating & Cooling", icon: Fan },
  { label: "Interior Finishes", icon: CheckCircle2 },
  { label: "Moisture Indicators", icon: Droplets },
  { label: "Safety Concerns", icon: ShieldAlert },
];

export default function IncludedItems() {
  return (
    <section className="bg-white py-28">
      <Container>
        <SectionHeader
          eyebrow="What's Included"
          title="A comprehensive inspection from roof to foundation."
          description="Every residential inspection follows a systematic engineering-led review of the home's major systems and visible building components."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A63A]/40 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102A43] transition-colors duration-300 group-hover:bg-[#B88A2A]">
                  <Icon className="h-6 w-6 text-[#D4A63A] transition-colors duration-300 group-hover:text-[#102A43]" />
                </div>

                <h3 className="text-lg font-semibold text-[#102A43]">
                  {item.label}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-3xl border border-[#D4A63A]/20 bg-[#102A43] p-10 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#D4A63A]/15">
              <FileText className="h-8 w-8 text-[#D4A63A]" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Every inspection includes a detailed digital report.
              </h3>

              <p className="mt-3 max-w-3xl leading-8 text-slate-300">
                You&apos;ll receive a professionally prepared report containing
                photographs, observations, maintenance recommendations, and
                clearly explained findings to help you make informed property
                decisions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
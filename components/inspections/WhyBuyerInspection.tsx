import { AlertTriangle, ShieldCheck, PiggyBank } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  {
    icon: AlertTriangle,
    title: "Avoid Unexpected Repairs",
    description:
      "Identify significant issues before closing, helping you make informed decisions and avoid costly surprises.",
  },
  {
    icon: PiggyBank,
    title: "Strengthen Negotiations",
    description:
      "Inspection findings can help support repair requests or price negotiations before finalizing your purchase.",
  },
  {
    icon: ShieldCheck,
    title: "Buy With Confidence",
    description:
      "Understand the condition of the property so you know exactly what you're buying and can plan for future maintenance.",
  },
];

export default function WhyBuyerInspection() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Why It Matters"
          title="Every home tells a story. An inspection helps you understand it."
          description="Buying a home is one of the largest financial decisions you'll make. A professional inspection provides clarity before you commit."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43]">
                  <Icon className="h-7 w-7 text-[#D4A63A]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#102A43]">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
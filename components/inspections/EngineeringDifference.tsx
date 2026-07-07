import { CheckCircle2 } from "lucide-react";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";

const standardInspection = [
  "Identifies visible deficiencies",
  "Provides general inspection observations",
  "Focuses on condition at the time of inspection",
  "Offers maintenance-focused recommendations",
];

const engineeringAssessment = [
  "Explains why issues may be occurring",
  "Applies building science and engineering judgment",
  "Considers how building systems interact",
  "Provides objective, evidence-based recommendations",
];

export default function EngineeringDifference() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <Container>
        <SectionHeader
          eyebrow="The Engineering Difference"
          title="More than a checklist. A technical understanding of your home."
          description="A standard inspection can identify visible concerns. An engineering-led assessment helps explain what those concerns mean, why they may be occurring, and how they can affect the performance of the home."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#102A43]">
              Standard Home Inspection
            </h3>

            <div className="mt-8 space-y-5">
              {standardInspection.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-slate-400" />
                  <p className="leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#B88A2A]/30 bg-[#102A43] p-8 text-white shadow-xl">
            <h3 className="text-2xl font-semibold">
              Engineering-Led Assessment
            </h3>

            <div className="mt-8 space-y-5">
              {engineeringAssessment.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#B88A2A]" />
                  <p className="leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
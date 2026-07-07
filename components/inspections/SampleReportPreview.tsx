import { ArrowRight, Camera, ClipboardCheck, FileText } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const reportItems = [
  {
    icon: Camera,
    title: "Photographs",
    description: "Clear photos documenting key observations.",
  },
  {
    icon: ClipboardCheck,
    title: "Observations",
    description: "Visible conditions explained in plain language.",
  },
  {
    icon: FileText,
    title: "Recommendations",
    description: "Practical next steps and maintenance priorities.",
  },
];

export default function SampleReportPreview() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Inspection Report
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#102A43] md:text-5xl">
              Clear reporting that helps you understand what matters.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              After the inspection, you receive a detailed digital report with
              photographs, observations, and practical recommendations to help
              you make informed decisions.
            </p>

            <div className="mt-10">
              <Button
                variant="outline"
                className="rounded-full border-[#102A43]/20 bg-white px-8 py-7 text-base font-semibold text-[#102A43] transition-all duration-300 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white"
              >
                View Sample Report
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="mb-8 h-3 w-36 rounded-full bg-[#B88A2A]" />

              <div className="space-y-5">
                {reportItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102A43]">
                        <Icon className="h-6 w-6 text-[#D4A63A]" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#102A43]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
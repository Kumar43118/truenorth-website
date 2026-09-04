import Link from "next/link";
import {
  ArrowRight,
  Camera,
  ClipboardCheck,
  FileText,
  ListChecks,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

const reportItems = [
  {
    icon: ClipboardCheck,
    title: "Key Findings",
    description:
      "Important observations summarized clearly so you can quickly understand the main concerns identified during the inspection.",
  },
  {
    icon: Camera,
    title: "Photographic Documentation",
    description:
      "Relevant photographs are included to help document visible conditions and provide context for reported findings.",
  },
  {
    icon: ListChecks,
    title: "Priorities",
    description:
      "Findings are organized by priority to help distinguish items requiring prompt attention from planned maintenance or monitoring.",
  },
  {
    icon: FileText,
    title: "Recommendations",
    description:
      "Practical recommendations and appropriate next steps are provided for identified concerns.",
  },
];

export default function SampleReportPreview() {
  return (
    <section
      id="sample-report"
      aria-labelledby="sample-report-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal y={24} amount={0.2}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Inspection Report
              </p>

              <h2
                id="sample-report-heading"
                className="mt-5 text-4xl font-semibold leading-[1.06] tracking-[-0.025em] text-[#102A43] sm:text-5xl"
              >
                Clear reporting that helps you understand what matters.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Following the inspection, you receive a digital report that
                organizes key findings, photographs, priorities, and practical
                recommendations so you can better understand the visible
                condition of the property and determine appropriate next steps.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex min-h-14 items-center justify-center rounded-full border border-[#102A43]/20 bg-white px-8 text-base font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
              >
                Request a Sample Report

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={24} amount={0.16}>
            <div className="rounded-[2rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
              <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-8 h-1.5 w-24 rounded-full bg-[#D4A63A]" />

                <div className="space-y-4">
                  {reportItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                          <Icon
                            aria-hidden="true"
                            className="h-6 w-6"
                          />
                        </div>

                        <div>
                          <h3 className="font-semibold text-[#102A43]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
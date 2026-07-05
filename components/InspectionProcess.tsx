import { CalendarCheck, ClipboardList, FileText, MessageCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Book",
    description:
      "Schedule your inspection and share basic property details so we can prepare properly.",
    icon: CalendarCheck,
  },
  {
    number: "02",
    title: "Inspect",
    description:
      "A detailed site review is completed with a building science and engineering perspective.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Report",
    description:
      "You receive a clear digital report with photos, findings, and practical recommendations.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Support",
    description:
      "We remain available to clarify findings and help you understand your next steps.",
    icon: MessageCircle,
  },
];

export default function InspectionProcess() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
            Our Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            A clear process from booking to confident decision-making.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#B88A2A]">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#102A43] text-[#B88A2A]">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#102A43]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
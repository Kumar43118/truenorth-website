import {
  AlertTriangle,
  CalendarClock,
  ClipboardList,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";

const priorities = [
  {
    number: "01",
    icon: AlertTriangle,
    title: "Immediate Attention",
    description:
      "Conditions that may warrant prompt action, stabilization, further investigation, or coordination with an appropriate specialist.",
    examples: [
      "Potential safety or active leakage concerns",
      "Significant or accelerating deterioration",
      "Conditions requiring prompt investigation or action",
    ],
  },
  {
    number: "02",
    icon: CalendarClock,
    title: "Near-Term Planning",
    description:
      "Conditions that may not require immediate action but should be considered for repair, further investigation, or capital planning in the near term.",
    examples: [
      "Developing deterioration",
      "Deferred maintenance requiring correction",
      "Components approaching repair or renewal",
    ],
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Routine and Long-Term Planning",
    description:
      "Routine maintenance items, monitoring recommendations, and longer-term repair or renewal needs that can be incorporated into ongoing property planning.",
    examples: [
      "Routine maintenance requirements",
      "Conditions recommended for monitoring",
      "Longer-term repair or renewal considerations",
    ],
  },
];

export default function ConditionPriorityFramework() {
  return (
    <section
      aria-labelledby="condition-priority-heading"
      className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
              Condition Priorities
            </p>

            <h2
  id="condition-priority-heading"
  className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl"
>
  Organizing assessment findings into practical priorities.
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
  Assessment findings can be organized by relative priority to help
  clients understand which conditions may require prompt action,
  near-term repair planning, or ongoing maintenance and monitoring.
</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:mt-16 lg:grid-cols-3">
          {priorities.map((priority, index) => {
            const Icon = priority.icon;

            return (
              <Reveal
                key={priority.number}
                delay={index * 0.08}
                y={20}
                amount={0.12}
                className="h-full"
              >
                <article className="group h-full bg-[#102A43] p-7 transition duration-300 hover:bg-white/[0.05] sm:p-8 lg:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                      <Icon aria-hidden="true" className="h-7 w-7" />
                    </div>

                    <span className="text-4xl font-semibold text-white/15">
                      {priority.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {priority.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-300">
                    {priority.description}
                  </p>

                  <div className="mt-7 border-t border-white/10 pt-6">
                    <ul className="space-y-4">
                      {priority.examples.map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4A63A]"
                          />

                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal y={18} amount={0.15}>
          <p className="mx-auto mt-8 max-w-4xl text-center text-sm leading-7 text-slate-400">
            Priority classifications are based on the observed conditions,
            available information, and agreed assessment scope. They are
            intended to support planning and do not replace emergency response,
            specialty investigation, or detailed design where those services
            are required.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
const principles = [
  {
    title: "Professional Engineering",
    description:
      "Every residential building assessment is completed by a Licensed Professional Engineer, bringing technical expertise and professional accountability to every project.",
  },
  {
    title: "Evidence-Based",
    description:
      "Recommendations are supported by engineering principles, building science knowledge, field observations, and recognized industry standards.",
  },
  {
    title: "Independent Advice",
    description:
      "We do not perform repair work or receive referral commissions. Our only objective is to provide clear technical guidance so clients can make informed decisions.",
  },
];

const metrics = [
  {
    value: "6+",
    label: "Years Engineering Experience",
  },
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "P.Eng.",
    label: "Professional Engineer Ontario",
  },
];

export default function TrueNorthApproach() {
  return (
    <section className="relative overflow-hidden bg-[#102A43] py-24 text-white">
      <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto max-w-7xl px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2A]">
            The TrueNorth Approach
          </p>

          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            Engineering Clarity.
            <span className="block text-[#B88A2A]">Confident Decisions.</span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-200">
            Helping homeowners understand their homes through engineering
            expertise and independent assessments.
          </p>
        </div>

        <div className="mt-20 divide-y divide-white/15 border-y border-white/15">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="grid gap-6 py-10 md:grid-cols-[0.35fr_1fr]"
            >
              <div>
                <h3 className="text-xl font-bold uppercase tracking-[0.18em] text-[#B88A2A]">
                  {principle.title}
                </h3>
                <div className="mt-4 h-1 w-12 rounded-full bg-[#B88A2A]" />
              </div>

              <p className="max-w-4xl text-xl leading-9 text-slate-200">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-5xl text-center">
          <p className="text-4xl font-bold leading-tight md:text-6xl">
            Independent engineering advice you can trust when every decision
            matters.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
            >
              <p className="text-4xl font-bold text-[#B88A2A]">
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-300">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
          Professional engineering principles applied to residential building
          assessments.
        </p>
      </div>
    </section>
  );
}
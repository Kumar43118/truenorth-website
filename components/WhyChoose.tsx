const features = [
  {
    title: "Licensed Professional Engineer",
    description:
      "Your inspection is conducted by a P.Eng. with real building science and field investigation experience.",
  },
  {
    title: "Building Science Perspective",
    description:
      "We look beyond visible defects to understand how the home performs as a system.",
  },
  {
    title: "Clear, Practical Guidance",
    description:
      "You receive objective explanations, prioritized recommendations, and confidence in your next step.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
            Why Choose TrueNorth
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            Engineering confidence for every property decision.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            TrueNorth combines residential inspection services with building
            science expertise, helping homeowners understand the condition,
            performance, and risks of their property.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#102A43] text-[#B88A2A]">
                ✓
              </div>

              <h3 className="text-xl font-bold text-[#102A43]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
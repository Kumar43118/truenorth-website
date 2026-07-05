import { ArrowRight, Droplets, Gauge, Thermometer, Wind } from "lucide-react";

const services = [
  "Window & Door Performance Testing",
  "Air Leakage Testing",
  "Water Penetration Testing",
  "Infrared Thermography",
];

export default function FutureTesting() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-4xl bg-[#102A43] p-10 text-white md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
                Expanding Services
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                Testing services coming soon.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-200">
                TrueNorth is being built to grow beyond residential inspections
                into building performance testing, envelope diagnostics, and
                technical consulting services.
              </p>

              <div className="mt-8 flex items-center gap-2 font-semibold text-[#B88A2A]">
                Future service roadmap
                <ArrowRight size={18} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => {
                const icons = [Gauge, Wind, Droplets, Thermometer];
                const Icon = icons[index];

                return (
                  <div
                    key={service}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#B88A2A]">
                      <Icon size={22} />
                    </div>

                    <p className="font-semibold">{service}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
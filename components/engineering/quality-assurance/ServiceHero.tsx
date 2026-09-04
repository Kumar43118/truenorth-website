import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Independent construction observations",
  "Design and detail reviews",
  "Deficiency documentation",
  "Practical technical guidance",
];

export default function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-[#102A43] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,166,58,0.18),transparent_35%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
            Building Envelope Quality Assurance
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Independent technical guidance from design through construction.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
            Velora provides building envelope design reviews, scheduled
            construction observations, deficiency documentation, and practical
            recommendations to help project teams identify concerns early and
            support durable building performance.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 text-sm font-medium text-slate-100 sm:text-base"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                />

                <span>{highlight}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#D4A63A] px-7 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
            >
              Request a Consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>

            <Link
              href="#quality-assurance-services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 px-7 font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
            >
              Explore Quality Assurance Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
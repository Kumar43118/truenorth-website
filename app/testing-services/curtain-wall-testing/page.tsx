import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Droplets,
  FileSearch,
  Gauge,
  PanelsTopLeft,
  Wind,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Curtain Wall Testing in Ottawa",
  description:
    "Velora is developing curtain wall testing capabilities in Ottawa, including field air leakage testing, water penetration testing, quality assurance observations, deficiency documentation, and technical reporting.",
};


const testMethods = [
  {
    icon: Wind,
    title: "Air Leakage Testing",
    standard: "ASTM E783",
    description:
      "Field measurement of air leakage through installed curtain wall components and interfaces under a specified pressure differential.",
  },
  {
    icon: Droplets,
    title: "Water Penetration Testing",
    standard: "ASTM E1105",
    description:
      "Field evaluation of water penetration using calibrated water spray and a controlled pressure difference across the installed assembly.",
  },
  {
    icon: FileSearch,
    title: "Diagnostic Investigation",
    standard: "Project-Specific",
    description:
      "Focused testing and investigation to identify probable leakage pathways, interface deficiencies, and contributing installation conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Construction Quality Assurance",
    standard: "Field Review",
    description:
      "Periodic observations of curtain wall installation, transitions, sealants, membranes, drainage provisions, and critical interfaces.",
  },
];

const procedure = [
  {
    number: "01",
    title: "Review project requirements",
    description:
      "Review drawings, specifications, curtain wall details, performance criteria, test pressures, sample locations, and acceptance requirements.",
  },
  {
    number: "02",
    title: "Select test areas",
    description:
      "Coordinate representative test locations that include typical glazing, mullions, transoms, perimeter interfaces, and critical transitions.",
  },
  {
    number: "03",
    title: "Prepare the test setup",
    description:
      "Install the temporary chamber, seal the test perimeter, position the required equipment, and confirm that adjacent conditions are suitable.",
  },
  {
    number: "04",
    title: "Perform field testing",
    description:
      "Apply the specified pressure, airflow, and water spray conditions while monitoring the assembly for leakage and performance concerns.",
  },
  {
    number: "05",
    title: "Investigate deficiencies",
    description:
      "Document observed leakage, review probable pathways, coordinate corrective work, and complete retesting when required.",
  },
  {
    number: "06",
    title: "Issue technical reporting",
    description:
      "Provide a clear summary of test conditions, results, observations, deficiencies, photographs, and recommended next steps.",
  },
];

const deficiencyLocations = [
  "Mullion and transom intersections",
  "Pressure plates, caps, and glazing gaskets",
  "Internal seals and compartmentalization joints",
  "Perimeter air and water seals",
  "Sill drainage paths and weep systems",
  "Curtain wall anchors and penetrations",
  "Transitions to opaque wall assemblies",
  "Roof, podium, parapet, and soffit interfaces",
];

const applications = [
  "New commercial and institutional buildings",
  "High-rise residential developments",
  "Curtain wall replacement projects",
  "Building envelope rehabilitation programs",
  "Construction quality assurance testing",
  "Water-entry and air-leakage investigations",
  "Post-repair verification and retesting",
  "Pre-handover and project closeout reviews",
];

const deliverables = [
  "Test location and assembly identification",
  "Applicable test pressures and project criteria",
  "Description of equipment and test setup",
  "Air leakage or water penetration results",
  "Photographic documentation",
  "Observed leakage pathways and deficiencies",
  "Recommendations for corrective work",
  "Retesting documentation when required",
];

const systemTypes = [
  {
    icon: PanelsTopLeft,
    title: "Stick-Built Curtain Wall",
    description:
      "Field-assembled systems requiring careful coordination of mullions, transoms, glazing, seals, drainage paths, and perimeter interfaces.",
  },
  {
    icon: Building2,
    title: "Unitized Curtain Wall",
    description:
      "Factory-assembled panels where stack joints, anchors, panel interfaces, perimeter transitions, and field seals are critical to performance.",
  },
  {
    icon: Gauge,
    title: "Hybrid Façade Systems",
    description:
      "Projects combining curtain wall with window wall, precast concrete, metal panels, masonry, roofing, or other enclosure systems.",
  },
];

export default function CurtainWallTestingPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#102A43] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-[#D4A63A]/15"
          />

          <Container>
            <div className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
              <div className="lg:col-span-2">
                <div className="inline-flex rounded-full border border-[#D4A63A]/35 bg-[#D4A63A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                  Capability in Development
                </div>
              </div>

              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                  Building Performance Testing
                </p>

                <h1 className="mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                  Curtain Wall Testing
                  <span className="mt-2 block text-[#D4A63A]">
                    and Performance Verification
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                  Velora is developing field-testing capabilities for installed
                  curtain wall systems, including air leakage testing, water
                  penetration testing, diagnostic investigation, deficiency
                  documentation, and technical reporting.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                  >
                    Discuss a Future Testing Requirement

                    <ArrowRight
                      aria-hidden="true"
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href="/testing-services"
                    className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/35 px-8 font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Explore Testing Services
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A63A] text-[#102A43]">
                  <PanelsTopLeft className="h-7 w-7" aria-hidden="true" />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                  Integrated Façade Performance
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  Testing the system—not only the glass
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Curtain wall performance depends on coordinated glazing,
                  framing, seals, drainage paths, anchors, perimeter interfaces,
                  and transitions to adjacent building systems.
                </p>

                <div className="mt-7 border-t border-white/15 pt-6">
                  <p className="text-sm leading-6 text-slate-300">
                    Test locations, pressures, durations, sample sizes, and
                    acceptance criteria should be established by the project
                    documents or responsible design professional.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Introduction */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Curtain Wall Performance
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Verify how the installed façade performs as a complete system.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Curtain wall systems are expected to control air leakage,
                  manage rainwater, accommodate building movement, resist
                  environmental loading, and maintain continuity with adjacent
                  building envelope assemblies.
                </p>

                <p>
                  Even when individual components are properly manufactured,
                  field installation conditions can affect overall performance.
                  Missing seals, discontinuous membranes, blocked drainage
                  paths, incomplete joints, or poorly coordinated transitions
                  may contribute to air or water leakage.
                </p>

                <p>
                  Field testing and independent quality assurance provide
                  objective information that helps project teams identify
                  concerns early, coordinate corrective work, and verify
                  completed repairs.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Testing Services */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Testing and Review Services
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Performance verification supported by technical investigation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Testing requirements can be tailored to new construction,
                rehabilitation work, reported leakage, or post-repair
                verification.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {testMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <article
                    key={method.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>

                      <span className="rounded-full bg-[#D4A63A]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#96701F]">
                        {method.standard}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-[#102A43]">
                      {method.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {method.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* System Types */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Curtain Wall Systems
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Testing adapted to the façade configuration.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  The testing approach should reflect the system type, drainage
                  strategy, joint configuration, installation sequence, and
                  interfaces with surrounding construction.
                </p>
              </div>

              <div className="space-y-5">
                {systemTypes.map((system) => {
                  const Icon = system.icon;

                  return (
                    <article
                      key={system.title}
                      className="flex gap-5 rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#102A43]">
                          {system.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {system.description}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Procedure */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Testing Process
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                From document review through technical reporting.
              </h2>
            </div>

            <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
              {procedure.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-4 py-7 sm:grid-cols-[80px_260px_1fr]"
                >
                  <span className="text-sm font-semibold tracking-[0.18em] text-[#B88A2A]">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold text-[#102A43]">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Common Deficiencies */}
        <section className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                  Common Performance Concerns
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                  Curtain wall deficiencies often occur at joints, seals, and
                  transitions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Leakage can originate within the curtain wall system, at its
                  perimeter, or through adjacent construction. Investigation
                  should consider the complete enclosure interface rather than
                  only the visible point of entry.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {deficiencyLocations.map((location) => (
                  <div
                    key={location}
                    className="flex gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#D4A63A]"
                    />

                    <p className="leading-7 text-slate-200">{location}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Applications and Deliverables */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Typical Applications
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-4xl">
                  Projects that may benefit from curtain wall testing
                </h2>

                <ul className="mt-8 space-y-4">
                  {applications.map((application) => (
                    <li
                      key={application}
                      className="flex gap-3 text-slate-700"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-[#B88A2A]"
                      />

                      <span className="leading-7">{application}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Technical Reporting
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-4xl">
                  Clear documentation for project teams
                </h2>

                <ul className="mt-8 space-y-4">
                  {deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex gap-3 text-slate-700"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-[#B88A2A]"
                      />

                      <span className="leading-7">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-[#D4A63A] py-16 sm:py-20">
          <Container>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#102A43]/70 sm:text-sm">
                  Curtain Wall Testing
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-[#102A43]">
                  Planning a future curtain wall testing requirement?
                </h2>

                <p className="mt-4 text-lg leading-8 text-[#102A43]/80">
                  Share the curtain wall drawings, specifications, system type,
                  proposed test locations, performance criteria, project stage,
                  and anticipated schedule so Velora can review whether its
                  developing capabilities may align with your project.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-[#102A43] px-8 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#183A59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#D4A63A]"
              >
                Discuss Your Project

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
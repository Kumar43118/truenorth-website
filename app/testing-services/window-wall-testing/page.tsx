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
  Layers3,
  PanelsTopLeft,
  Wind,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";

const PAGE_PATH = "/testing-services/window-wall-testing";

export const metadata: Metadata = {
  title: "Window Wall Testing in Ottawa — Coming Soon",

  description:
    "Velora is developing window wall testing capabilities in Ottawa, including field air leakage and water penetration testing, diagnostic investigation, construction quality assurance, deficiency documentation, and technical reporting.",

  alternates: {
    canonical: PAGE_PATH,
  },

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title:
      "Window Wall Testing Coming Soon | Velora Engineering and Consulting",

    description:
      "Velora is developing window wall field-testing capabilities in Ottawa for air leakage, water penetration, diagnostic investigation, and construction quality assurance.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Window Wall Testing Coming Soon | Velora Engineering and Consulting",

    description:
      "Velora is developing window wall field-testing capabilities in Ottawa for air leakage, water penetration, diagnostic investigation, and construction quality assurance.",
  },
};

const testMethods = [
  {
    icon: Wind,
    title: "Air Leakage Testing",
    standard: "Project-Specified",
    description:
      "Field evaluation of air leakage through selected window wall components, joints, operable sections, and interfaces using the applicable project-specified procedure and acceptance criteria.",
  },
  {
    icon: Droplets,
    title: "Water Penetration Testing",
    standard: "ASTM E1105 / Project-Specified",
    description:
      "Field evaluation of resistance to water penetration using calibrated water spray and controlled pressure conditions where the selected procedure is applicable to the tested assembly.",
  },
  {
    icon: FileSearch,
    title: "Diagnostic Investigation",
    standard: "Project-Specific",
    description:
      "Focused investigation of reported leakage, condensation, perimeter concerns, drainage conditions, and suspected deficiencies within or adjacent to the window wall system.",
  },
  {
    icon: ClipboardCheck,
    title: "Construction Quality Assurance",
    standard: "Field Review",
    description:
      "Periodic observations of window wall installation, slab-edge transitions, seals, membranes, drainage provisions, glazing interfaces, and other critical conditions.",
  },
];

const procedure = [
  {
    number: "01",
    title: "Review project documents",
    description:
      "Review drawings, specifications, window wall details, slab-edge conditions, transition membranes, applicable test requirements, performance criteria, and proposed test locations.",
  },
  {
    number: "02",
    title: "Select representative areas",
    description:
      "Coordinate test locations that include representative panels, stack joints, slab edges, perimeter interfaces, operable units, and critical transitions.",
  },
  {
    number: "03",
    title: "Prepare the test setup",
    description:
      "Install the temporary chamber where required, seal the test perimeter, position the appropriate equipment, and confirm that adjacent conditions are suitable for testing.",
  },
  {
    number: "04",
    title: "Perform field testing",
    description:
      "Apply the specified pressure, airflow, water spray, or other agreed test conditions while monitoring the selected assembly area for leakage and performance concerns.",
  },
  {
    number: "05",
    title: "Investigate deficiencies",
    description:
      "Document observed leakage or performance concerns, assess probable pathways, coordinate corrective work where appropriate, and complete retesting when required.",
  },
  {
    number: "06",
    title: "Issue technical reporting",
    description:
      "Provide a clear summary of test conditions, applicable criteria, results, observations, deficiencies, photographs, and recommended next steps.",
  },
];

const deficiencyLocations = [
  "Vertical and horizontal stack joints",
  "Slab-edge cover transitions",
  "Perimeter air and water seals",
  "End dams and sill drainage paths",
  "Operable window and door interfaces",
  "Transition membranes at floor lines",
  "Spandrel panels and insulation interfaces",
  "Connections to balconies and adjacent wall systems",
];

const applications = [
  "New high-rise residential construction",
  "Window wall replacement projects",
  "Building envelope rehabilitation programs",
  "Construction quality assurance testing",
  "Water-entry and air-leakage investigations",
  "Post-repair verification and retesting",
  "Pre-handover and project closeout reviews",
  "Condominium and multi-residential buildings",
];

const deliverables = [
  "Test location and assembly identification",
  "Applicable test procedure and project criteria",
  "Test pressures, durations, and relevant conditions",
  "Description of equipment and test setup",
  "Air leakage or water penetration results",
  "Photographic documentation",
  "Observed leakage pathways and deficiencies",
  "Recommendations for corrective work",
  "Retesting documentation when required",
];

const interfaces = [
  {
    icon: Layers3,
    title: "Slab-Edge Transitions",
    description:
      "Continuity at floor lines is critical because the window wall system must transition across concrete slab edges, cover panels, membranes, and adjacent interior finishes.",
  },
  {
    icon: PanelsTopLeft,
    title: "Stack Joints",
    description:
      "Vertical and horizontal panel joints must accommodate installation tolerances, drainage, movement, and continuity of the air and water control layers.",
  },
  {
    icon: Building2,
    title: "Adjacent Assemblies",
    description:
      "Window wall performance depends on coordinated transitions to balconies, opaque wall systems, roofs, podiums, soffits, and other façade components.",
  },
  {
    icon: Gauge,
    title: "Operable Components",
    description:
      "Operable windows and doors introduce additional gaskets, hardware, drainage paths, and frame joints that can affect overall system performance.",
  },
];

export default function WindowWallTestingPage() {
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
                  Window Wall Testing
                  <span className="mt-2 block text-[#D4A63A]">
                    and Performance Verification
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                  Velora is developing field-testing capabilities for installed
                  window wall systems, including air leakage testing, water
                  penetration testing, diagnostic investigation, quality
                  assurance observations, and technical reporting.
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

              {/* System Performance */}
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A63A] text-[#102A43]">
                  <PanelsTopLeft
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                  Slab-Edge Façade Systems
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  Testing the panel, joint, and building interface
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Window wall performance depends on coordinated framing,
                  glazing, stack joints, slab-edge transitions, perimeter
                  seals, drainage paths, membranes, and adjacent wall
                  construction.
                </p>

                <div className="mt-7 border-t border-white/15 pt-6">
                  <p className="text-sm leading-6 text-slate-300">
                    Test locations, procedures, pressures, durations, sample
                    sizes, and acceptance criteria should be established by the
                    project documents or responsible design professional.
                  </p>
                </div>

                <p className="mt-5 border-t border-white/15 pt-5 text-xs leading-5 text-slate-400">
                  The applicable testing standard or procedure depends on the
                  window wall system, project specifications, installation
                  conditions, project stage, selected test area, and agreed
                  testing scope.
                </p>
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
                  Window Wall Performance
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Evaluate the installed system across panels, joints, and
                  floor-line transitions.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Window wall systems are commonly installed between concrete
                  floor slabs and rely on coordinated glazing, framing, stack
                  joints, perimeter seals, drainage paths, slab-edge covers,
                  and transition membranes.
                </p>

                <p>
                  The system may perform well at individual components while
                  still experiencing leakage at joints or transitions. Missing
                  seals, blocked drainage paths, incomplete end dams, membrane
                  discontinuities, or poorly coordinated slab-edge details can
                  affect overall performance.
                </p>

                <p>
                  Field testing and independent quality assurance can provide
                  objective information that helps project teams identify
                  concerns, coordinate corrective work, and verify completed
                  repairs.
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
                Planned Testing and Review Services
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Performance verification supported by focused investigation.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Testing requirements may vary depending on new construction,
                replacement projects, reported leakage, rehabilitation work,
                post-repair verification, and the applicable project
                specifications.
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
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
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

            <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-500">
              Window wall systems and project specifications vary. Applicable
              standards, procedures, test pressures, sample sizes, and
              acceptance criteria should therefore be confirmed before field
              testing rather than assumed from the system description alone.
            </p>
          </Container>
        </section>

        {/* Critical Interfaces */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Critical Interfaces
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Window wall performance depends on coordinated transitions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  The testing approach should reflect the panel configuration,
                  floor-line details, drainage strategy, operable components,
                  and interfaces with surrounding enclosure systems.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {interfaces.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6"
                        />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-[#102A43]">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>
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

        {/* Deficiencies */}
        <section className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                  Common Performance Concerns
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                  Window wall deficiencies often occur at stack joints and
                  floor-line transitions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Leakage may originate within the window wall system, at its
                  perimeter, or from adjacent construction. Investigation
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

                    <p className="leading-7 text-slate-200">
                      {location}
                    </p>
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
                  Projects that may benefit from window wall testing
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

                      <span className="leading-7">
                        {application}
                      </span>
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

                      <span className="leading-7">
                        {deliverable}
                      </span>
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
                  Window Wall Testing
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-[#102A43]">
                  Planning a future window wall testing requirement?
                </h2>

                <p className="mt-4 text-lg leading-8 text-[#102A43]/80">
                  Share the window wall drawings, specifications, slab-edge
                  details, proposed test locations, performance criteria,
                  project stage, and anticipated schedule so Velora can review
                  whether its developing capabilities may align with your
                  project.
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
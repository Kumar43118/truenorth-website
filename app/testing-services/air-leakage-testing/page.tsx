import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Gauge,
  Search,
  ShieldCheck,
  Wind,
} from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@/components/shared/Container";

const PAGE_PATH = "/testing-services/air-leakage-testing";

export const metadata: Metadata = {
  title: "Air Leakage Testing in Ottawa — Coming Soon",

  description:
    "Velora is developing field air leakage testing capabilities in Ottawa for installed windows, doors, and related building envelope assemblies.",

  alternates: {
    canonical: PAGE_PATH,
  },

  robots: {
    index: false,
    follow: true,
  },

  openGraph: {
    title:
      "Air Leakage Testing Coming Soon | Velora Engineering and Consulting",

    description:
      "Velora is developing field air leakage testing capabilities for installed fenestration and building envelope assemblies in Ottawa.",

    url: PAGE_PATH,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Air Leakage Testing Coming Soon | Velora Engineering and Consulting",

    description:
      "Velora is developing field air leakage testing capabilities for installed fenestration and building envelope assemblies in Ottawa.",
  },
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verify installed performance",
    description:
      "Evaluate whether installed windows, doors, and façade assemblies are meeting the project’s air leakage requirements under controlled test conditions.",
  },
  {
    icon: Search,
    title: "Identify leakage pathways",
    description:
      "Locate air leakage at frame joints, perimeter seals, operable sections, interfaces, and other vulnerable building envelope transitions.",
  },
  {
    icon: ClipboardCheck,
    title: "Support quality assurance",
    description:
      "Provide objective field information that supports construction review, deficiency resolution, and project closeout.",
  },
  {
    icon: FileText,
    title: "Document test results",
    description:
      "Receive clear technical reporting supported by test data, site observations, photographs, and practical recommendations.",
  },
];

const procedure = [
  {
    number: "01",
    title: "Review project requirements",
    description:
      "Confirm the specified pressure differential, allowable air leakage rate, test locations, sample sizes, and relevant project documents.",
  },
  {
    number: "02",
    title: "Prepare the test area",
    description:
      "Set up the test chamber, seal the perimeter, connect calibrated equipment, and confirm that the assembly is ready for testing.",
  },
  {
    number: "03",
    title: "Apply pressure",
    description:
      "Establish the required pressure difference across the installed specimen in accordance with the agreed test procedure.",
  },
  {
    number: "04",
    title: "Measure air leakage",
    description:
      "Measure the airflow required to maintain the target pressure and calculate the corresponding air leakage rate.",
  },
  {
    number: "05",
    title: "Document and report",
    description:
      "Record the test conditions, equipment, observations, results, deficiencies, and recommended next steps.",
  },
];

const leakageLocations = [
  "Window and door perimeter seals",
  "Operable sash and frame joints",
  "Mullion and transom connections",
  "Curtain wall and window wall interfaces",
  "Sealant joints and end dams",
  "Transitions between adjacent wall systems",
  "Penetrations through the air barrier",
  "Incomplete or damaged interior seals",
];

const applications = [
  "New construction quality assurance",
  "Window replacement projects",
  "Curtain wall and window wall installations",
  "Building envelope rehabilitation projects",
  "Leakage investigations in existing buildings",
  "Pre-handover and project closeout testing",
];

const deliverables = [
  "Description of the tested assembly and location",
  "Applicable test pressure and project criteria",
  "Test equipment and setup documentation",
  "Measured air leakage results",
  "Photographic documentation",
  "Observed deficiencies and leakage pathways",
  "Recommendations for corrective work",
  "Retesting results when required",
];

const equipment = [
  {
    icon: Gauge,
    title: "Pressure measurement",
    description:
      "Monitors the pressure difference across the tested assembly.",
  },
  {
    icon: Wind,
    title: "Calibrated airflow",
    description:
      "Measures the airflow required to maintain the target pressure.",
  },
  {
    icon: Building2,
    title: "Temporary chamber",
    description:
      "Isolates the test specimen from the interior or exterior side.",
  },
  {
    icon: ClipboardCheck,
    title: "Test documentation",
    description:
      "Records setup, conditions, readings, observations, and results.",
  },
];

export default function AirLeakageTestingPage() {
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
                  Air Leakage Testing
                  <span className="mt-2 block text-[#D4A63A]">
                    for Installed Assemblies
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                  Velora is developing field air leakage testing capabilities
                  for installed windows, doors, glazed wall systems, and
                  related building envelope assemblies using controlled
                  pressure and measured airflow.
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

              {/* ASTM E783 */}
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A63A] text-[#102A43]">
                  <Wind
                    aria-hidden="true"
                    className="h-7 w-7"
                  />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                  ASTM E783
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                  Field measurement for installed windows and doors
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  ASTM E783 provides a field procedure for determining air
                  leakage rates through installed exterior windows and doors
                  under specified static air-pressure differences.
                </p>

                <div className="mt-7 border-t border-white/15 pt-6">
                  <p className="text-sm leading-6 text-slate-300">
                    Test requirements, allowable leakage rates, sample sizes,
                    and acceptance criteria should be established by the
                    project documents or the responsible design professional.
                  </p>
                </div>

                <p className="mt-5 border-t border-white/15 pt-5 text-xs leading-5 text-slate-400">
                  The applicable test standard and procedure depend on the
                  assembly, project specifications, installation conditions,
                  and agreed testing scope. Other standards or specifications
                  may apply to storefront, curtain wall, glazed wall, or other
                  façade systems.
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
                  Air Leakage Performance
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Understand how air is moving through the building envelope.
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Uncontrolled air leakage can affect energy use, occupant
                  comfort, condensation risk, moisture movement, indoor air
                  quality, and the long-term durability of building envelope
                  assemblies.
                </p>

                <p>
                  Field air leakage testing provides objective information
                  about the performance of installed systems. It can be used
                  to verify construction quality, investigate suspected
                  deficiencies, and confirm whether corrective work has
                  improved performance.
                </p>

                <p>
                  Testing should be coordinated with the project team so that
                  test areas, pressure levels, acceptance criteria, and
                  responsibilities are clearly understood before work begins.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Why Testing Matters
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Measurable information for better project decisions.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D4A63A]">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6"
                      />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-[#102A43]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Procedure */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Testing Procedure
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                How field air leakage testing is performed.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                The specific test setup varies by assembly and project, but
                the overall process typically follows these stages.
              </p>
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

        {/* Equipment */}
        <section className="bg-[#102A43] py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                  Test Equipment
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] sm:text-5xl">
                  Controlled pressure. Calibrated airflow. Documented results.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  A temporary chamber is installed over the test specimen and
                  connected to calibrated equipment capable of establishing
                  and maintaining the required pressure difference.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {equipment.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-white/15 bg-white/[0.06] p-6"
                    >
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-[#D4A63A]"
                      />

                      <h3 className="mt-5 text-lg font-semibold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Leakage Locations */}
        <section className="bg-white py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Common Leakage Locations
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                  Air leakage often occurs at interfaces and transitions.
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Leakage may originate within the tested product, around its
                  perimeter, or at adjacent construction interfaces. Careful
                  investigation is often required to distinguish between these
                  pathways.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {leakageLocations.map((location) => (
                  <div
                    key={location}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#B88A2A]"
                    />

                    <p className="leading-7 text-slate-700">
                      {location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Applications and Deliverables */}
        <section className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                  Typical Applications
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.025em] text-[#102A43] sm:text-4xl">
                  Projects that may benefit from testing
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
                  Clear documentation of the test and results
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
                  Air Leakage Testing
                </p>

                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.025em] text-[#102A43]">
                  Planning a future air leakage testing requirement?
                </h2>

                <p className="mt-4 text-lg leading-8 text-[#102A43]/80">
                  Share the project documents, assembly type, test locations,
                  required pressure, acceptance criteria, and anticipated
                  schedule so we can review whether Velora&apos;s developing
                  testing capabilities may align with your project.
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
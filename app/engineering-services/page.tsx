import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Building2, Hammer, ClipboardList, Waves, FileSearch, Gauge } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Building Envelope Consulting",
    description:
      "Assessment of exterior walls, cladding, windows, roofing interfaces, and moisture-related concerns.",
  },
  {
    icon: Hammer,
    title: "Structural Reviews",
    description:
      "Engineering-led observations of visible structural concerns in residential and small-building applications.",
  },
  {
    icon: ClipboardList,
    title: "Property Condition Assessments",
    description:
      "Independent evaluations to help owners understand building condition, maintenance priorities, and future repair needs.",
  },
  {
    icon: Waves,
    title: "Moisture & Water Intrusion Reviews",
    description:
      "Review of suspected leakage, condensation, staining, and moisture-related building performance concerns.",
  },
  {
    icon: FileSearch,
    title: "Rehabilitation Consulting",
    description:
      "Support for repair planning, building renewal, and practical recommendations for existing buildings.",
  },
  {
    icon: Gauge,
    title: "Performance Testing",
    description:
      "Future services may include air leakage, water penetration, and building envelope performance testing.",
  },
];

export default function EngineeringServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <section className="bg-[#F8FAFC] py-28">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Engineering Services
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-[#102A43] md:text-6xl">
              Building science and engineering support for property owners.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              TrueNorth provides engineering-led building assessments focused on
              clarity, practical recommendations, and long-term building
              performance.
            </p>
          </Container>
        </section>

        <section className="bg-white py-28">
          <Container>
            <SectionHeader
              eyebrow="Services"
              title="Technical guidance for existing buildings."
              description="Our engineering services support homeowners, property owners, and clients who need objective building science expertise."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43]">
                      <Icon className="h-8 w-8 text-[#D4A63A]" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold text-[#102A43]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
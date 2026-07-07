import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, BookOpen, Home, ShieldCheck } from "lucide-react";

const resources = [
  {
    icon: Home,
    title: "Home Inspection vs. Engineering-Led Assessment",
    description:
      "Understand the difference between a standard inspection and an assessment informed by engineering judgment.",
  },
  {
    icon: ShieldCheck,
    title: "What Buyers Should Know Before Closing",
    description:
      "Key building systems, common risks, and questions to ask before committing to a home purchase.",
  },
  {
    icon: BookOpen,
    title: "Understanding Building Envelope Issues",
    description:
      "A homeowner-friendly guide to moisture, cladding, windows, roofs, and long-term building performance.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <section className="bg-[#F8FAFC] py-28">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Resources
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-[#102A43] md:text-6xl">
              Helpful guidance for homeowners and property buyers.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Educational articles and guides to help you better understand
              home inspections, building science, and property performance.
            </p>
          </Container>
        </section>

        <section className="bg-white py-28">
          <Container>
            <SectionHeader
              eyebrow="Guides"
              title="Start with these topics."
              description="These resources will be expanded over time as TrueNorth grows."
            />

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {resources.map((resource) => {
                const Icon = resource.icon;

                return (
                  <div
                    key={resource.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43]">
                      <Icon className="h-8 w-8 text-[#D4A63A]" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold text-[#102A43]">
                      {resource.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {resource.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-[#102A43]">
                      Coming Soon
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
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
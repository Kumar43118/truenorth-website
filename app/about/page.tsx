import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Award, Compass, Microscope, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Professional Engineering",
    description:
      "TrueNorth applies engineering judgment, technical knowledge, and professional accountability to residential building assessments.",
  },
  {
    icon: Microscope,
    title: "Evidence-Based Assessments",
    description:
      "Our recommendations are based on field observations, building science principles, and recognized industry standards.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Advice",
    description:
      "We do not perform repair work or receive referral commissions. Our role is to provide objective guidance.",
  },
  {
    icon: Compass,
    title: "Clear Direction",
    description:
      "We help homeowners understand building conditions clearly so they can make confident property decisions.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <section className="bg-[#F8FAFC] py-28">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              About TrueNorth
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-[#102A43] md:text-6xl">
              Engineering-first building assessments for confident homeowners.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              TrueNorth Building Science was created to bring professional
              engineering judgment, building science knowledge, and independent
              advice to residential property assessments.
            </p>
          </Container>
        </section>

        <section className="bg-white py-28">
          <Container>
            <SectionHeader
              eyebrow="Our Philosophy"
              title="More than identifying issues — we explain why they matter."
              description="A home inspection should do more than list visible deficiencies. It should help homeowners understand how building systems perform, where risks may exist, and what decisions should be made next."
            />

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43]">
                      <Icon className="h-8 w-8 text-[#D4A63A]" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold text-[#102A43]">
                      {value.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="bg-[#102A43] py-28 text-white">
          <Container>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A63A]">
                Our Approach
              </p>

              <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
                Engineering clarity. Confident decisions.
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                TrueNorth combines technical knowledge with practical field
                experience to provide homeowners with clear, objective, and
                useful guidance.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white py-28">
          <Container>
            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-10 text-center">
              <h2 className="text-4xl font-bold text-[#102A43]">
                Serving Ottawa and surrounding communities.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                TrueNorth provides engineering-led residential inspection and
                building science services throughout Ottawa and nearby areas.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
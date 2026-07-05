import {
  Home,
  Search,
  Hammer,
  ShieldCheck,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Buyer's Home Inspection",
    description:
      "A comprehensive evaluation to help you make an informed purchasing decision.",
    icon: Search,
  },
  {
    title: "Pre-Listing Inspection",
    description:
      "Identify issues before listing your home and reduce surprises during negotiations.",
    icon: Home,
  },
  {
    title: "New Construction (Tarion)",
    description:
      "Independent inspection support to help document deficiencies before warranty deadlines.",
    icon: Hammer,
  },
  {
    title: "Annual Home Maintenance",
    description:
      "Protect your investment with yearly maintenance assessments and practical recommendations.",
    icon: ShieldCheck,
  },
];

export default function ResidentialServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
            Residential Services
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            Inspection services for confident home decisions.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you are buying, selling, maintaining, or moving into a new
            home, TrueNorth provides clear, objective inspection services backed
            by professional building science knowledge.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              label="Residential Inspection"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
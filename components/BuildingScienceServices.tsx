import {
  Building2,
  House,
  Layers3,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Foundation Review",
    description:
      "A focused review of visible foundation conditions, cracking, settlement indicators, moisture intrusion, and related concerns.",
    icon: Building2,
  },
  {
    title: "Roofing & Attic Review",
    description:
      "Assessment of roofing, attic ventilation, insulation, moisture staining, and signs of premature deterioration.",
    icon: House,
  },
  {
    title: "Building Envelope Review",
    description:
      "Review of exterior walls, windows, doors, flashing, cladding, and moisture management details affecting building performance.",
    icon: Layers3,
  },
];

export default function BuildingScienceServices() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
              Building Science Services
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
              Focused reviews for complex building concerns.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Some concerns require more than a standard checklist. TrueNorth
              provides targeted building science reviews to help homeowners
              better understand structural, moisture, roofing, attic, and
              building-envelope-related issues.
            </p>
          </div>

          <div className="grid gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                action="Request Review"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
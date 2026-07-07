import {
  ClipboardCheck,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/ServiceCard";


const services = [
  {
    title: "Buyer Home Inspection",
    description:
      "Understand the condition of a home before you purchase. Our engineering-led inspections help identify visible deficiencies, maintenance concerns, and potential risks so you can make informed decisions.",
    icon: Home,
    label: "Most Popular",
    action: "Learn More",
    href: "/home-inspections/buyer",
    items: [
      "Structural Review",
      "Roof & Attic",
      "Building Envelope",
      "Mechanical Systems",
    ],
  },
  {
    title: "Pre-Listing Inspection",
    description:
      "Prepare your property before it goes on the market. Identify issues early, reduce surprises during negotiations, and build confidence with prospective buyers.",
    icon: ClipboardCheck,
    action: "Learn More",
    href: "/home-inspections/pre-listing",
    items: [
      "Seller Preparation",
      "Maintenance Review",
      "Condition Assessment",
      "Market Readiness",
    ],
  },
  {
    title: "New Construction / Tarion Inspection",
    description:
      "Protect your investment by documenting deficiencies and construction concerns before warranty deadlines. Ideal for new homeowners during the Tarion warranty period.",
    icon: ShieldCheck,
    action: "Learn More",
    href: "/home-inspections/new-construction",
    items: [
      "Warranty Reviews",
      "Deficiency Identification",
      "Quality Assessment",
      "Builder Documentation",
    ],
  },
  {
    title: "Annual Home Maintenance Inspection",
    description:
      "Stay ahead of costly repairs with routine inspections that identify maintenance priorities and help extend the life of your home's major systems.",
    icon: Wrench,
    action: "Learn More",
    href: "/home-inspections/annual-maintenance",
    items: [
      "Preventive Maintenance",
      "Seasonal Review",
      "Building Performance",
      "Long-Term Planning",
    ],
  },
];

export default function InspectionTypes() {
  return (
    <section className="bg-[#F8FAFC] py-28">
      <Container>
        <SectionHeader
          eyebrow="Inspection Services"
          title="Choose the inspection that's right for your property."
          description="Whether you're buying, selling, or maintaining a home, TrueNorth provides engineering-led inspection services designed to give you confidence in your property's condition."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              label={service.label}
              action={service.action}
              items={service.items}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
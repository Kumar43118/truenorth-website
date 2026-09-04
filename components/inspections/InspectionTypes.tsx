import {
  ClipboardCheck,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Buyer Home Inspection",
    description:
  "Understand the visible condition of a home before you purchase. Our engineering-informed inspections help identify visible deficiencies, maintenance concerns, and conditions that may warrant further investigation.",    icon: Home,
    label: "Most Popular",
    action: "Learn More",
    href: "/home-inspections/buyer-inspection",
    items: [
      "Visible Structural Conditions",
      "Roof & Attic",
      "Building Envelope",
      "Mechanical Systems",
    ],
  },
  {
    title: "Pre-Listing Inspection",
    description:
      "Prepare your property before it reaches the market. Identify visible concerns early, reduce surprises during negotiations, and provide greater clarity to prospective buyers.",
    icon: ClipboardCheck,
    action: "Learn More",
    href: "/home-inspections/pre-listing",
    items: [
      "Seller Preparation",
      "Maintenance Priorities",
      "Visible Condition Review",
      "Market Readiness",
    ],
  },
  {
    title: "New Construction / Tarion Inspection",
    description:
      "Document visible deficiencies and construction concerns before applicable warranty deadlines. This service supports new homeowners during the Tarion warranty process.",
    icon: ShieldCheck,
    action: "Learn More",
    href: "/home-inspections/new-construction",
    items: [
      "Warranty Milestone Reviews",
      "Visible Deficiency Documentation",
      "Construction Quality Observations",
      "Builder Submission Support",
    ],
  },
  {
    title: "Annual Home Maintenance Inspection",
    description:
      "Identify developing maintenance concerns, establish repair priorities, and support the long-term care of your home and its major systems.",
    icon: Wrench,
    action: "Learn More",
    href: "/home-inspections/annual-maintenance",
    items: [
      "Preventive Maintenance",
      "Seasonal Conditions",
      "Building Performance",
      "Long-Term Planning",
    ],
  },
];

export default function InspectionTypes() {
  return (
    <section
      id="inspection-services"
      aria-labelledby="inspection-services-heading"
      className="scroll-mt-24 bg-[#F8FAFC] py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal y={24} amount={0.2}>
          <SectionHeader
            eyebrow="Inspection Services"
          title="The right inspection for every stage of homeownership."
            description="Whether you are buying, selling, moving into a new home, or planning long-term maintenance, Velora provides professional inspections designed to improve your understanding of the property."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              y={22}
              amount={0.12}
              className="h-full"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                label={service.label}
                action={service.action}
                items={service.items}
                href={service.href}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
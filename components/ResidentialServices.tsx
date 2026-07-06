import { Hammer, Home, Search, ShieldCheck } from "lucide-react";
import Container from "./shared/Container";
import SectionHeader from "./shared/SectionHeader";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Buyer Home Inspection",
    description:
      "A comprehensive inspection to help you understand the condition of a home before making one of life’s biggest investments.",
    icon: Search,
    label: "For home buyers",
    action: "View Inspection Details",
    items: [
  "Roof & Exterior",
  "Foundation",
  "Electrical System",
  "Plumbing",
  "Heating & Cooling",
],
  },
  {
    title: "Pre-Listing Inspection",
    description:
      "Identify potential concerns before listing your property and reduce surprises during the selling process.",
    icon: Home,
    label: "For sellers",
   action: "View Inspection Details",
    items: [
  "Identify Deficiencies",
  "Maintenance Issues",
  "Safety Concerns",
  "Repair Priorities",
  "Seller Preparation",
],
  },
  {
    title: "New Construction / Tarion Inspection",
    description:
      "Independent inspection support for newly built homes to help document deficiencies before warranty deadlines.",
    icon: Hammer,
    label: "For new homes",
    action: "View Inspection Details",
    items: [
  "Warranty Deficiencies",
  "Interior Finishes",
  "Exterior Review",
  "Building Envelope",
  "Tarion Support",
],
  },
  {
    title: "Annual Home Maintenance Inspection",
    description:
      "A proactive review to help homeowners identify maintenance needs before they become costly repairs.",
    icon: ShieldCheck,
    label: "For homeowners",
    action: "View Inspection Details",
    items: [
  "Roof Condition",
  "Water Intrusion",
  "HVAC Review",
  "Safety Items",
  "Maintenance Planning",
],
  },
];

export default function ResidentialServices() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <Container>
        <SectionHeader
          eyebrow="Residential Inspection Services"
          title="Inspection services for confident home decisions."
          description="Whether you are buying, selling, maintaining, or moving into a new home, TrueNorth provides clear residential inspection services backed by building science knowledge."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              label={service.label}
              action={service.action}
              items={service.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
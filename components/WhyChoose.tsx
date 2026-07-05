import {
  BadgeCheck,
  ShieldCheck,
  House,
  FileText,
} from "lucide-react";

import SectionHeader from "./shared/SectionHeader";
import FeatureCard from "./shared/FeatureCard";

const features = [
  {
    icon: BadgeCheck,
    title: "Engineering Expertise",
    description:
      "Every inspection is personally completed by a Licensed Professional Engineer, giving you expert insight beyond a standard checklist.",
  },
  {
    icon: ShieldCheck,
    title: "Objective Advice",
    description:
      "Independent, unbiased recommendations focused on protecting your investment—not selling repair services.",
  },
  {
    icon: House,
    title: "Building Science Perspective",
    description:
      "We explain how your home's systems work together, helping you understand the root cause of issues.",
  },
  {
    icon: FileText,
    title: "Clear Digital Reports",
    description:
      "Receive a clear, photo-rich digital report with practical recommendations you can act on immediately.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">

        <SectionHeader
          eyebrow="Why Choose TrueNorth"
          title="Engineering Expertise You Can Trust"
          description="We combine professional engineering knowledge with practical home inspection experience to help homeowners make informed decisions."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
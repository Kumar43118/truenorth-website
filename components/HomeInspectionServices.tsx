import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Tag,
  Hammer,
  Wrench,
  ArrowRight,
} from "lucide-react";
<div className="mt-16 overflow-hidden rounded-3xl">
  <Image
    src="/images/inspections/attic-inspection.jpg"
    alt="Home inspector reviewing attic conditions during a residential inspection"
    width={1400}
    height={800}
    className="h-105 w-full object-cover"
  />
</div>
const services = [
  {
    icon: Home,
    eyebrow: "Buying a Home?",
    title: "Buyer Home Inspection",
    description:
      "Make an informed purchase with a comprehensive inspection that helps you understand the property's condition before closing.",
    href: "/home-inspections/buyer-inspection",
  },
  {
    icon: Tag,
    eyebrow: "Selling Your Home?",
    title: "Pre-Listing Inspection",
    description:
      "Identify potential concerns before listing your property and provide buyers with greater confidence during the sales process.",
    href: "/home-inspections/pre-listing",
  },
  {
    icon: Hammer,
    eyebrow: "Taking Possession?",
    title: "New Construction Inspection",
    description:
      "Independent inspections to help identify visible deficiencies before and after taking possession of your newly constructed home.",
    href: "/home-inspections/new-construction",
  },
  {
    icon: Wrench,
    eyebrow: "Protect Your Investment",
    title: "Annual Home Maintenance Inspection",
    description:
      "Regular inspections help identify developing issues early, allowing you to plan maintenance before problems become costly repairs.",
    href: "/home-inspections/annual-maintenance",
  },
];

export default function HomeInspectionServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D8B25C]">
            Home Inspection Services
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            Helping You Make Confident Home Decisions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you&apos;re buying, selling, taking possession of a new home,
            or planning long-term maintenance, our inspections provide clear,
            practical information to help you move forward with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#D8B25C] hover:shadow-xl"
              >
                <div className="flex gap-6">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#102A43]/5">
                    <Icon className="h-7 w-7 text-[#102A43]" />
                  </div>

                  <div className="flex-1">

                    <p className="text-sm font-semibold uppercase tracking-wider text-[#B88A2A]">
                      {service.eyebrow}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-[#102A43]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 font-medium text-[#102A43] transition-colors group-hover:text-[#B88A2A]">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>

                </div>
              </Link>
            );
          })}

        </div>

        <div className="mt-14 text-center">
          <Link
            href="/home-inspections"
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#102A43] transition-colors hover:text-[#B88A2A]"
          >
            View All Home Inspection Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
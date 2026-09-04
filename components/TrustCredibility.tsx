import {
  BadgeCheck,
  BriefcaseBusiness,
  House,
  MapPin,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";

const credentials = [
  {
    icon: BadgeCheck,
    title: "P.Eng.-Led",
    description: "Home inspections led by a licensed Professional Engineer in Ontario",
  },
  {
    icon: BriefcaseBusiness,
    title: "9+ Years",
    description:
      "Experience across construction, building science, and engineering",
  },
  {
    icon: House,
    title: "Building Science",
    description:
      "Experience evaluating building envelopes, moisture, roofing, windows, and exterior systems",
  },
  {
    icon: MapPin,
    title: "Ottawa & NCR",
    description:
      "Serving homeowners and homebuyers across Ottawa and the National Capital Region",
  },
];

export default function TrustCredibility() {
  return (
    <section
      aria-label="Professional credentials"
      className="border-y border-white/10 bg-[#102A43]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;

            const borderClasses = [
              "border-b border-white/10 sm:border-r xl:border-b-0",
              "border-b border-white/10 xl:border-r xl:border-b-0",
              "border-b border-white/10 sm:border-r sm:border-b-0 xl:border-r",
              "",
            ][index];

            return (
              <Reveal
                key={credential.title}
                delay={index * 0.06}
                y={14}
                amount={0.1}
                className={`h-full ${borderClasses}`}
              >
                <div className="flex h-full items-start gap-4 px-1 py-7 sm:px-6 lg:py-8 xl:first:pl-0 xl:last:pr-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {credential.title}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
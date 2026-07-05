import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
} from "lucide-react";

const highlights = [
  {
    title: "Licensed Professional Engineer",
    description: "P.Eng. licensed in Ontario.",
    icon: BadgeCheck,
  },
  {
    title: "Building Science Experience",
    description: "Building envelope, moisture, roofing, and field review experience.",
    icon: Building2,
  },
  {
    title: "Structural Background",
    description: "Engineering judgment applied to real building conditions.",
    icon: ClipboardCheck,
  },
  {
    title: "Project Experience",
    description: "Experience with investigations, tendering, quality reviews, and reporting.",
    icon: BriefcaseBusiness,
  },
];

export default function EngineerSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-4xl bg-[#F8FAFC] p-8">
          <div className="flex aspect-4/5 items-center justify-center rounded-3xl border border-slate-200 bg-white">
            <p className="max-w-xs text-center text-slate-500">
              Founder photo placeholder
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
            Meet Your Engineer
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
            Engineering expertise you can trust.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At TrueNorth Building Science, every inspection is personally
            conducted by a Licensed Professional Engineer (P.Eng.) with hands-on
            experience in building science, structural engineering, field
            investigations, and construction consulting.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The goal is not simply to identify deficiencies, but to help
            homeowners understand how their property performs and what those
            findings mean for their decision.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#102A43] text-[#B88A2A]">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-bold text-[#102A43]">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
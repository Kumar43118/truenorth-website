import {
  BrickWall,
  Building2,
  DoorOpen,
  Droplets,
  Layers3,
  PanelTop,
  ShieldCheck,
  Waves,
} from "lucide-react";

const activities = [
  {
    title: "Exterior Walls and Cladding",
    description:
      "Review of cladding installation, attachment, drainage provisions, joints, terminations, and transitions between adjacent wall systems.",
    icon: Building2,
  },
  {
    title: "Air and Vapour Control Layers",
    description:
      "Observation of membrane continuity, laps, penetrations, transitions, terminations, and interfaces with windows, roofs, and structural elements.",
    icon: Layers3,
  },
  {
    title: "Windows, Doors, and Glazing",
    description:
      "Review of rough openings, perimeter membranes, flashings, sealants, drainage paths, and integration with surrounding wall assemblies.",
    icon: DoorOpen,
  },
  {
    title: "Flashings and Drainage",
    description:
      "Observation of sill flashings, through-wall flashings, end dams, drip edges, drainage cavities, and water-shedding transitions.",
    icon: Droplets,
  },
  {
    title: "Roofing and Wall Interfaces",
    description:
      "Review of roof-to-wall transitions, parapets, curbs, penetrations, membrane terminations, and continuity at critical junctions.",
    icon: PanelTop,
  },
  {
    title: "Waterproofing Systems",
    description:
      "Observation of below-grade waterproofing, podium membranes, balcony waterproofing, protection layers, drainage, and terminations.",
    icon: Waves,
  },
  {
    title: "Sealants and Movement Joints",
    description:
      "Review of joint preparation, backing materials, sealant geometry, adhesion, continuity, and coordination with adjacent materials.",
    icon: ShieldCheck,
  },
  {
    title: "Masonry and Wall Interfaces",
    description:
      "Observation of masonry interfaces, cavity drainage, shelf-angle transitions, control joints, flashings, and related enclosure details.",
    icon: BrickWall,
  },
];

export default function ConstructionActivities() {
  return (
    <section className="bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#B8891E]">
            Typical Construction Activities
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#102A43] sm:text-4xl">
            Focused reviews of critical building envelope components.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Construction observations are tailored to the project scope and
            scheduled around installations where continuity, coordination, and
            workmanship have the greatest influence on long-term envelope
            performance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#102A43] text-[#D4A63A]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#102A43]">
                  {activity.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {activity.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 max-w-4xl text-base leading-7 text-slate-600">
          The specific components reviewed depend on the project documents,
          construction sequence, access, and agreed consulting scope. Conditions
          that are concealed or inaccessible at the time of a site visit may not
          be observable.
        </p>
      </div>
    </section>
  );
}
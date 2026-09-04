import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/shared/Container";

const featuredGuides = [
  {
    category: "Home Inspection",
    title: "Buyer's Home Inspection Checklist",
    description:
      "Everything you should know before purchasing your next home.",
    image: "/images/home-inspection.jpg",
    href: "#",
  },
  {
    category: "Building Science",
    title: "Understanding Foundation Cracks",
    description:
      "Learn which cracks are cosmetic and which require professional attention.",
    image: "/images/crawlspace-inspection.jpg",
    href: "#",
  },
  {
    category: "Engineering",
    title: "Preparing for a Home Inspection",
    description:
      "Simple steps that help homeowners get the most value from an inspection.",
    image: "/images/ottawa-skyline.jpg",
    href: "#",
  },
];

export default function FeaturedGuides() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A63A]">
            Featured Guides
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#102A43]">
            Popular Resources
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Start with our most popular homeowner and building science guides.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <article
              key={guide.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 bg-slate-200">
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4A63A]">
                  {guide.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-[#102A43]">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {guide.description}
                </p>

                <Link
                  href={guide.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#102A43] transition hover:text-[#D4A63A]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
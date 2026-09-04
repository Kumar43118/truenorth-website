import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-40 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D8B25C]">
            {eyebrow}
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-[#102A43] md:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-5 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-[#102A43]/20 bg-white px-8 py-5 text-base font-semibold text-[#102A43] transition hover:border-[#D8B25C] hover:text-[#B88A2A]"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={700}
              priority
              className="h-[420px] w-full object-cover lg:h-[520px]"
            />
            <div className="absolute inset-0 bg-[#102A43]/10" />
          </div>
        )}
      </div>
    </section>
  );
}
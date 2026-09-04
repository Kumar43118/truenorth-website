import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
} from "lucide-react";

import Container from "@/components/shared/Container";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: string;
  primaryHref: string;
  secondaryButton?: string;
  secondaryHref?: string;
  highlights?: string[];
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  primaryHref,
  secondaryButton,
  secondaryHref,
  highlights = [],
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:56px_56px]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
              {eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-[#102A43] sm:text-5xl xl:text-6xl">
              {title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
  <Link
    href={primaryHref}
    className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 py-4 text-base font-semibold text-[#102A43] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#102A43] focus-visible:ring-offset-4"
  >
    {primaryButton}

    <ArrowRight
      aria-hidden="true"
      className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  {secondaryButton && secondaryHref && (
    <Link
      href={secondaryHref}
      className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#102A43]/20 bg-white px-8 py-4 text-base font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
    >
      {secondaryButton}
    </Link>
  )}
</div>

            {highlights.length > 0 && (
              <div className="mt-12 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CircleCheck
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-[#B88A2A]"
                    />

                    <span className="text-lg leading-7 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#B88A2A]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_30px_80px_rgba(16,42,67,0.18)]">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] sm:h-[520px]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
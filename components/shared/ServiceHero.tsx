import Image from "next/image";
import { ArrowRight, CircleCheck } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryButton: string;
  secondaryButton?: string;
  highlights?: string[];
};

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryButton,
  secondaryButton,
  highlights = [],
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-28">
      <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#102A43_1px,transparent_1px),linear-gradient(90deg,#102A43_1px,transparent_1px)] [background-size:56px_56px]" />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              {eyebrow}
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-[#102A43] md:text-5xl xl:text-6xl">
              {title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              {description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                {primaryButton}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              {secondaryButton && (
                <Button
                  variant="outline"
                  className="rounded-full border-[#102A43]/20 bg-white px-8 py-7 text-base font-semibold text-[#102A43] transition-all duration-300 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white"
                >
                  {secondaryButton}
                </Button>
              )}
            </div>

            {highlights.length > 0 && (
              <div className="mt-12 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CircleCheck className="h-5 w-5 text-[#B88A2A]" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-[#B88A2A]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_30px_80px_rgba(16,42,67,0.18)]">
              <div className="relative h-[520px] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
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
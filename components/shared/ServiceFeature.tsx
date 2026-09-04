import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceFeatureProps {
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  link: string;
  imageLeft?: boolean;
}

export default function ServiceFeature({
  eyebrow,
  title,
  description,
  bullets,
  image,
  imageAlt,
  link,
  imageLeft = true,
}: ServiceFeatureProps) {
  const imageSection = (
    <div className="relative overflow-hidden rounded-3xl">
      <Image
        src={image}
        alt={imageAlt}
        width={800}
        height={600}
        className="h-full w-full object-cover transition duration-700 hover:scale-105"
      />
    </div>
  );

  const textSection = (
    <div className="flex flex-col justify-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#D8B25C]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold leading-tight text-[#102A43]">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>

      <div className="mt-8 space-y-4">
        {bullets.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="mt-1 h-5 w-5 text-[#D8B25C]" />
            <span className="text-slate-700">{item}</span>
          </div>
        ))}
      </div>

      <Link
        href={link}
        className="mt-10 inline-flex items-center gap-2 font-semibold text-[#102A43] transition hover:text-[#B88A2A]"
      >
        Learn More
        <ArrowRight className="h-5 w-5" />
      </Link>
    </div>
  );

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-8 lg:grid-cols-2 lg:px-12">
        {imageLeft ? (
          <>
            {imageSection}
            {textSection}
          </>
        ) : (
          <>
            {textSection}
            {imageSection}
          </>
        )}
      </div>
    </section>
  );
}
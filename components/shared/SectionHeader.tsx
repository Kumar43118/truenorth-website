interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B88A2A]">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-[#102A43] md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
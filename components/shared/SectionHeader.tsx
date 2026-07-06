type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl text-center"
      : "max-w-3xl text-left";

  return (
    <div className={`${alignment} mb-16`}>
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-4xl font-bold tracking-tight leading-tight text-[#102A43] md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
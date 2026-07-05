import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102A43]">
        <Icon className="h-8 w-8 text-[#B88A2A]" />
      </div>

      <h3 className="text-2xl font-semibold text-[#102A43]">
        {title}
      </h3>

      <div className="my-5 h-1 w-14 rounded-full bg-[#B88A2A]" />

      <p className="leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
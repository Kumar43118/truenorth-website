import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
}: ProcessStepProps) {
  return (
    <div className="group relative text-center">
      {/* Circle */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#102A43] shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        <Icon className="h-9 w-9 text-[#B88A2A]" />

        <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#B88A2A] text-sm font-bold text-white">
          {number}
        </div>
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-[#102A43]">
        {title}
      </h3>

      <p className="leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
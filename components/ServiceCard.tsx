import { ArrowRight, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  label?: string;
  action?: string;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  label,
  action = "Learn More",
}: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#B88A2A]">
        <Icon size={28} strokeWidth={2} />
      </div>

      {label && (
        <p className="mb-4 text-sm font-semibold text-[#B88A2A]">{label}</p>
      )}

      <h3 className="text-xl font-bold text-[#102A43]">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-[#102A43]">
        {action}
        <ArrowRight size={18} strokeWidth={2} />
      </div>
    </div>
  );
}
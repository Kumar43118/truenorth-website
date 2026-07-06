import { ArrowRight, Check, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  label?: string;
  action?: string;
  items?: string[];
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  label,
  action = "View Details",
  items = [],
}: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-xl">
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#102A43] transition-colors duration-300 group-hover:bg-[#B88A2A]">
          <Icon className="h-8 w-8 text-[#B88A2A] transition-colors duration-300 group-hover:text-[#102A43]" />
        </div>

        <div>
          {label && (
            <p className="mb-3 inline-flex rounded-full bg-[#B88A2A]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#B88A2A] transition-colors duration-300 group-hover:bg-[#B88A2A]/20">
              {label}
            </p>
          )}

          <h3 className="text-2xl font-semibold text-[#102A43]">{title}</h3>
        </div>
      </div>

      <p className="mt-6 leading-8 text-slate-600">{description}</p>

      {items.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-2 text-slate-700">
              <Check className="h-4 w-4 text-[#B88A2A]" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-auto pt-8">
        <div className="mb-6 h-px w-full bg-slate-200" />

        <div className="flex items-center gap-2 font-semibold text-[#102A43]">
          {action}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
import Link from "next/link";
import { ArrowRight, Check, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  label?: string;
  action?: string;
  items?: string[];
  href?: string;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  label,
  action = "Learn More",
  items = [],
  href,
}: ServiceCardProps) {
  const card = (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A63A]/40 hover:shadow-xl">
      {/* Header */}
      <div className="flex items-start gap-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#102A43] transition-colors duration-300 group-hover:bg-[#B88A2A]">
          <Icon className="h-8 w-8 text-[#D4A63A] transition-colors duration-300 group-hover:text-[#102A43]" />
        </div>

        <div className="flex-1">
          {label && (
            <span className="inline-flex rounded-full bg-[#D4A63A]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#B88A2A]">
              {label}
            </span>
          )}

          <h3 className="mt-3 text-2xl font-semibold text-[#102A43]">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="mt-6 leading-8 text-slate-600">
        {description}
      </p>

      {/* Features */}
      {items.length > 0 && (
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-slate-700"
            >
              <Check className="h-4 w-4 text-[#B88A2A]" />
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-auto pt-8">
        <div className="mb-6 h-px bg-slate-200" />

        <div className="flex items-center gap-2 font-semibold text-[#102A43]">
          {action}

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Reveal from "@/components/animations/Reveal";
import { siteConfig } from "@/lib/site";

export default function ContactSection() {
  const phone = siteConfig.contact.phone?.trim();

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="overflow-hidden bg-[#102A43] text-white"
    >
      <div className="grid lg:grid-cols-2">
        <Reveal y={24} amount={0.15} className="h-full">
          <div className="group relative min-h-[380px] overflow-hidden sm:min-h-[460px] lg:min-h-[680px]">
            <Image
              src="/images/contact/ottawa-skyline.jpg"
              alt="Ottawa skyline during a winter evening"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-[#102A43]/20" />

            <div className="absolute inset-0 bg-linear-to-t from-[#102A43]/55 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-[#102A43]/20" />

            <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
              <p className="max-w-md text-sm leading-6 text-white/80">
                P.Eng.-led home inspections and specialized building-envelope
                consulting across Ottawa and the National Capital Region.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 xl:px-20">
          <Reveal y={26} amount={0.2}>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D4A63A] sm:text-sm">
                Ready to Get Started?
              </p>

              <h2
                id="contact-cta-heading"
                className="mt-5 text-4xl font-semibold tracking-[-0.025em] text-white sm:text-5xl"
              >
                Book your home inspection with confidence.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Tell us about the property and the type of inspection you need.
                We&apos;ll review the details, confirm the appropriate service,
                and help you take the next step.
              </p>

              <div className="mt-10 space-y-5 border-y border-white/10 py-7">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                    className="group flex w-fit items-center gap-4 text-slate-200 transition-colors hover:text-white"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                      <Phone aria-hidden="true" className="h-5 w-5" />
                    </span>

                    <span>{phone}</span>
                  </a>
                )}

                <a
                  href={`mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
                    "Home Inspection Inquiry – Velora Engineering and Consulting"
                  )}`}
                  className="group flex w-fit items-center gap-4 text-slate-200 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A] transition duration-300 group-hover:bg-[#D4A63A] group-hover:text-[#102A43]">
                    <Mail aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <span>{siteConfig.contact.email}</span>
                </a>

                <div className="flex items-center gap-4 text-slate-200">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#D4A63A]">
                    <MapPin aria-hidden="true" className="h-5 w-5" />
                  </span>

                  <span>
                    Serving {siteConfig.contact.address.city} and the National
                    Capital Region
                  </span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-inspection"
                  className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Book a Home Inspection

                  <ArrowUpRight
                    aria-hidden="true"
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  href="/engineering-services"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/40 px-8 font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
                >
                  Engineering Consulting
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
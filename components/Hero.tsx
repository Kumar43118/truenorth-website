"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[700px] overflow-hidden lg:min-h-[800px]"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{
          scale: shouldReduceMotion ? 1 : 1.045,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 14,
          ease: "easeOut",
        }}
      >
        <Image
          src="/images/cover-facade.png"
          alt="Residential home inspection in Ottawa"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[75%_90%] scale-[1.02]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-r from-[#102A43]/95 via-[#102A43]/78 to-[#102A43]/35" />

      <div className="absolute inset-0 bg-linear-to-t from-[#102A43]/50 via-transparent to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-6 pb-16 pt-28 sm:px-8 lg:min-h-[800px] lg:px-12 lg:pt-32">
        <div className="max-w-3xl">
          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4A63A] sm:text-sm"
          >
            P.Eng.-Led Home Inspections · Ottawa & National Capital Region
          </motion.p>

          <motion.h1
            id="hero-heading"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 28,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              delay: shouldReduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl"
          >
            Know your home
            <span className="block">before you make the decision.</span>
          </motion.h1>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    scaleX: 0,
                  }
            }
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 h-px w-24 origin-left bg-[#D4A63A]"
          />

          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.36,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl"
          >
            Professional home inspections backed by engineering and building
            science experience, helping buyers, homeowners, and sellers
            understand the condition of their property and make informed
            decisions with confidence.
          </motion.p>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/book-inspection"
              className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 text-base font-semibold text-[#102A43] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
            >
              Book a Home Inspection

              <ArrowRight
                aria-hidden="true"
                className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/home-inspections"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/60 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-[#102A43] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A43]"
            >
              Explore Home Inspections
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
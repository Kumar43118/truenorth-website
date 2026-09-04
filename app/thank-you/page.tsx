import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Inspection Request Received",

  description:
    "Your home inspection request has been received by Velora Engineering and Consulting.",

  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        <section className="min-h-[70vh] bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_24px_60px_-35px_rgba(15,23,42,0.3)] sm:p-10 lg:p-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#102A43]">
                <CheckCircle2
                  aria-hidden="true"
                  className="h-10 w-10 text-[#D4A63A]"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Request Received
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#102A43] sm:text-5xl">
                Thank you. We&apos;ve received your inspection request.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We&apos;ll review the property details, requested inspection
                service, preferred timing, and availability before contacting
                you to confirm the scope, fees, and appointment.
              </p>

              <div className="mx-auto mt-8 flex max-w-2xl items-start gap-4 rounded-2xl bg-[#F8FAFC] p-5 text-left sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#102A43] text-[#D4A63A]">
                  <Mail
                    aria-hidden="true"
                    className="h-5 w-5"
                  />
                </div>

                <div>
                  <h2 className="font-semibold text-[#102A43]">
                    Watch for a confirmation email
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    A confirmation email is normally sent to the address
                    provided with your request. If you receive it, you can
                    reply directly to add information or ask a question.
                    Your request may still have been received successfully
                    even if the confirmation email does not arrive.
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-7 max-w-2xl text-sm leading-6 text-slate-500">
                Please note that submitting an inspection request does not
                confirm an appointment. Your inspection is booked after Velora
                confirms the scope, timing, access, and fees with you.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4A63A] px-8 text-base font-semibold text-[#102A43] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0B552] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                >
                  Return Home

                  <ArrowRight
                    aria-hidden="true"
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/home-inspections"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#102A43]/20 bg-white px-8 text-base font-semibold text-[#102A43] transition duration-300 hover:border-[#102A43] hover:bg-[#102A43] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A63A] focus-visible:ring-offset-4"
                >
                  View Home Inspections
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
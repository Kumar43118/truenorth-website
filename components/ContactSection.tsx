import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section className="bg-[#102A43] py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#B88A2A]">
            Book an Inspection
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ready to make a confident property decision?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-200">
            Contact TrueNorth Building Science to schedule a residential
            inspection or request a focused building science review.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-[#B88A2A]" size={22} />
              <span>Phone number coming soon</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-[#B88A2A]" size={22} />
              <span>info@truenorthbs.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-[#B88A2A]" size={22} />
              <span>Serving Ottawa & Surrounding Areas</span>
            </div>
          </div>
        </div>

        <div className="rounded-4xl bg-white p-8 text-[#102A43]">
          <h3 className="text-2xl font-bold">Request an Inspection</h3>

          <p className="mt-3 text-slate-600">
            This form will later connect to your email or booking system.
          </p>

          <div className="mt-8 grid gap-4">
            <input
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#B88A2A]"
              placeholder="Your name"
            />

            <input
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#B88A2A]"
              placeholder="Email address"
            />

            <input
              className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#B88A2A]"
              placeholder="Phone number"
            />

            <select className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#B88A2A]">
              <option>Select service</option>
              <option>Buyer&apos;s Home Inspection</option>
              <option>Pre-Listing Inspection</option>
              <option>New Construction / Tarion Inspection</option>
              <option>Annual Home Maintenance Inspection</option>
              <option>Foundation Review</option>
              <option>Roofing & Attic Review</option>
              <option>Building Envelope Review</option>
            </select>

            <textarea
              className="min-h-32 rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#B88A2A]"
              placeholder="Tell us about the property"
            />

            <Button className="rounded-full bg-[#B88A2A] py-6 text-base font-semibold text-white hover:bg-[#a07824]">
              Submit Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
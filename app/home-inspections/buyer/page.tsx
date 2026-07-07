import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck, Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Buyer Home Inspection",
  "Pre-Listing Inspection",
  "New Construction / Tarion Inspection",
  "Annual Home Maintenance Inspection",
  "Engineering Consultation",
];

export default function BookInspectionPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <section className="bg-[#F8FAFC] py-28">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Book an Inspection
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-[#102A43] md:text-6xl">
              Request a professional home inspection.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Tell us about the property and the inspection service you need.
              We’ll review your request and follow up to confirm availability.
            </p>
          </Container>
        </section>

        <section className="bg-white py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
              <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Full Name" />
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Email Address" />
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Phone Number" />
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Property Address" />
                </div>

                <select className="mt-6 w-full rounded-xl border border-slate-200 p-4 text-slate-600">
                  <option>Select Inspection Type</option>
                  {services.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Preferred Date" />
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Preferred Time" />
                </div>

                <textarea
                  className="mt-6 min-h-40 w-full rounded-xl border border-slate-200 p-4"
                  placeholder="Tell us anything important about the property or timing."
                />

                <Button className="mt-8 rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-7 text-base font-semibold text-white">
                  Submit Request
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="rounded-3xl bg-[#102A43] p-8 text-white">
                <CalendarCheck className="h-10 w-10 text-[#D4A63A]" />

                <h2 className="mt-6 text-3xl font-bold">
                  What happens next?
                </h2>

                <p className="mt-4 leading-8 text-slate-300">
                  After you submit your request, we’ll contact you to confirm
                  the inspection type, timing, property details, and next steps.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-[#D4A63A]" />
                    <span>Serving Ottawa and surrounding areas</span>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 text-[#D4A63A]" />
                    <span>info@truenorthbs.com</span>
                  </div>

                  <div className="flex gap-3">
                    <Phone className="h-5 w-5 text-[#D4A63A]" />
                    <span>Phone number to be added</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
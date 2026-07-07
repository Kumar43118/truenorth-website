import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-22">
        <section className="bg-[#F8FAFC] py-28">
          <Container>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B88A2A]">
              Contact TrueNorth
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight text-[#102A43] md:text-6xl">
              Have a question about your property?
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
              Contact TrueNorth Building Science to discuss residential
              inspections, engineering-led assessments, or building science
              services in Ottawa and surrounding areas.
            </p>
          </Container>
        </section>

        <section className="bg-white py-28">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl bg-[#102A43] p-8 text-white">
                <h2 className="text-3xl font-bold">Get in touch</h2>

                <p className="mt-4 leading-8 text-slate-300">
                  Send a message and we’ll follow up to understand your needs
                  and recommend the right next step.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-[#D4A63A]" />
                    <span>info@truenorthbs.com</span>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-[#D4A63A]" />
                    <span>Phone number to be added</span>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-[#D4A63A]" />
                    <span>Serving Ottawa and surrounding areas</span>
                  </div>
                </div>
              </div>

              <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="grid gap-6 md:grid-cols-2">
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Full Name" />
                  <input className="rounded-xl border border-slate-200 p-4" placeholder="Email Address" />
                </div>

                <input
                  className="mt-6 w-full rounded-xl border border-slate-200 p-4"
                  placeholder="Phone Number"
                />

                <select className="mt-6 w-full rounded-xl border border-slate-200 p-4 text-slate-600">
                  <option>Reason for Contact</option>
                  <option>Book a Home Inspection</option>
                  <option>Engineering Services</option>
                  <option>General Question</option>
                </select>

                <textarea
                  className="mt-6 min-h-40 w-full rounded-xl border border-slate-200 p-4"
                  placeholder="How can we help?"
                />

                <Button className="mt-8 rounded-full bg-linear-to-b from-[#D4A63A] to-[#B58420] px-8 py-7 text-base font-semibold text-white">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
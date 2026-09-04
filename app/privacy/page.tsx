import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Velora Engineering and Consulting",
  description: `Privacy policy for ${siteConfig.company.name}, including how personal information submitted through the Velora website is collected, used, protected, and disclosed.`,
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Privacy Policy
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.035em] text-[#102A43] sm:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                This Privacy Policy explains how{" "}
                {siteConfig.company.operatingName} collects, uses, discloses,
                retains, and protects personal information submitted through
                this website or provided in connection with an inquiry or
                service request.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: September 2, 2026
              </p>
            </div>
          </Container>
        </section>

        {/* Policy */}
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="prose prose-slate max-w-4xl prose-headings:text-[#102A43] prose-a:text-[#B88A2A]">
              <h2>1. Who We Are</h2>

              <p>
                {siteConfig.company.operatingName} is an operating name of{" "}
                {siteConfig.company.legalName}. In this Privacy Policy,
                &quot;Velora,&quot; &quot;we,&quot; &quot;us,&quot; and
                &quot;our&quot; refer to {siteConfig.company.legalName} when
                operating as {siteConfig.company.operatingName}.
              </p>

              <h2>2. Personal Information We Collect</h2>

              <p>
                We may collect personal information that you voluntarily
                provide when contacting Velora, requesting a home inspection,
                or inquiring about professional services.
              </p>

              <p>This information may include:</p>

              <ul>
                <li>Your name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Property address</li>
                <li>Requested inspection or consulting service</li>
                <li>Preferred inspection dates or timing</li>
                <li>
                  Information about a property, project, concern, or service
                  request
                </li>
                <li>
                  Photographs, reports, drawings, or other information you
                  choose to provide
                </li>
                <li>
                  Communications exchanged with Velora regarding your inquiry
                  or services
                </li>
              </ul>

              <p>
                Our website and service providers may also process limited
                technical information necessary to operate, secure, and
                maintain the website, such as IP address, browser or device
                information, and server logs.
              </p>

              <h2>3. Why We Collect Personal Information</h2>

              <p>
                Velora collects and uses personal information only for
                reasonable purposes connected with our business and services,
                including to:
              </p>

              <ul>
                <li>Respond to inquiries and service requests</li>
                <li>
                  Review property and project information provided by potential
                  clients
                </li>
                <li>
                  Determine appropriate inspection or consulting services and
                  scope
                </li>
                <li>
                  Confirm availability, scheduling, access requirements, and
                  fees
                </li>
                <li>
                  Communicate with clients before, during, and after an
                  assignment
                </li>
                <li>
                  Prepare and deliver inspection reports or other agreed
                  professional deliverables
                </li>
                <li>
                  Maintain appropriate business and professional records
                </li>
                <li>
                  Operate, secure, maintain, and improve our website and
                  communications systems
                </li>
                <li>
                  Meet applicable legal, regulatory, professional, or
                  contractual requirements
                </li>
              </ul>

              <h2>4. Consent</h2>

              <p>
                Where required, Velora obtains consent for the collection, use,
                or disclosure of personal information. By voluntarily
                submitting information through this website or providing it
                directly to Velora for an inquiry or service request, you
                consent to its use for the purposes described at the time of
                collection and in this Privacy Policy.
              </p>

              <p>
                If we intend to use personal information for a materially new
                purpose that was not previously identified, additional consent
                will be obtained where required by law.
              </p>

              <h2>5. Limiting Collection</h2>

              <p>
                We aim to collect only the personal information reasonably
                required to understand your request, provide our services,
                communicate with you, and satisfy applicable business,
                professional, and legal requirements.
              </p>

              <p>
                Please avoid submitting sensitive personal information that is
                not necessary for your inquiry or requested service.
              </p>

              <h2>6. Service Providers and Information Sharing</h2>

              <p>
                Velora does not sell or rent personal information.
              </p>

              <p>
                We may provide personal information to service providers that
                assist us with functions such as website hosting, email
                delivery, data storage, information technology, or other
                business operations. These providers may process information
                only as necessary to perform services on our behalf, subject
                to their applicable terms, safeguards, and legal obligations.
              </p>

              <p>
                We may also disclose personal information where reasonably
                necessary to:
              </p>

              <ul>
                <li>Provide an agreed service</li>
                <li>Comply with applicable law or lawful legal process</li>
                <li>
                  Protect the rights, safety, security, or property of Velora,
                  our clients, or others
                </li>
                <li>
                  Establish, exercise, or defend legal or professional claims
                </li>
              </ul>

              <h2>7. Processing Outside Canada</h2>

              <p>
                Some service providers used to operate our website,
                communications, or technology systems may process or store
                information outside Canada.
              </p>

              <p>
                When personal information is processed in another jurisdiction,
                it may be subject to the laws of that jurisdiction and may be
                accessible to courts, law-enforcement agencies, or government
                authorities in accordance with applicable law.
              </p>

              <h2>8. Retention of Personal Information</h2>

              <p>
                Personal information is retained only for as long as reasonably
                necessary to fulfill the purposes for which it was collected
                and to satisfy applicable legal, professional, contractual,
                insurance, or business-record requirements.
              </p>

              <p>
                When information is no longer required, Velora will take
                reasonable steps to securely delete, destroy, or anonymize it,
                as appropriate.
              </p>

              <h2>9. Safeguarding Personal Information</h2>

              <p>
                Velora uses reasonable administrative, technical, and
                organizational safeguards appropriate to the nature and
                sensitivity of the information in our custody or control.
              </p>

              <p>
                These measures are intended to help protect personal
                information against unauthorized access, use, disclosure,
                alteration, loss, or theft. No electronic transmission or
                storage system can, however, be guaranteed to be completely
                secure.
              </p>

              <h2>10. Access and Correction</h2>

              <p>
                You may contact Velora to request access to personal
                information we hold about you or to request correction of
                information that is inaccurate or incomplete, subject to any
                exceptions permitted or required by applicable law.
              </p>

              <p>
                We may need to verify your identity before responding to an
                access or correction request.
              </p>

              <h2>11. External Websites</h2>

              <p>
                This website may contain links to third-party websites. Velora
                is not responsible for the privacy practices, security, or
                content of third-party websites. We encourage you to review
                their privacy policies before providing personal information.
              </p>

              <h2>12. Changes to This Privacy Policy</h2>

              <p>
                Velora may update this Privacy Policy from time to time to
                reflect changes to our services, technology, business
                practices, or legal requirements.
              </p>

              <p>
                The date shown at the top of this page identifies when the
                policy was last updated.
              </p>

              <h2>13. Privacy Questions and Requests</h2>

              <p>
                Questions, requests for access or correction, or concerns about
                Velora&apos;s handling of personal information may be directed
                to:
              </p>

              <p>
                <strong>{siteConfig.company.operatingName}</strong>
                <br />
                Email:{" "}
                <a href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
                <br />
                Ottawa, Ontario, Canada
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
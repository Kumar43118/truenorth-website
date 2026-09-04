import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/shared/Container";
import { siteConfig } from "@/lib/site";

const PAGE_PATH = "/terms";

export const metadata: Metadata = {
  title: "Terms of Use | Velora Engineering and Consulting",
  description: `Terms governing use of the ${siteConfig.company.operatingName} website, including general information, service inquiries, professional services, intellectual property, and limitations.`,
  alternates: {
    canonical: PAGE_PATH,
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-[88px]">
        {/* Hero */}
        <section className="bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B88A2A] sm:text-sm">
                Terms of Use
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.035em] text-[#102A43] sm:text-6xl">
                Terms of Use
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                These terms govern your use of the{" "}
                {siteConfig.company.operatingName} website and explain the
                relationship between website information, service inquiries,
                and formally engaged professional services.
              </p>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: September 2, 2026
              </p>
            </div>
          </Container>
        </section>

        {/* Terms */}
        <section className="bg-white py-20 sm:py-24">
          <Container>
            <div className="prose prose-slate max-w-4xl prose-headings:text-[#102A43] prose-a:text-[#B88A2A]">
              <h2>1. About These Terms</h2>

              <p>
                This website is operated by{" "}
                {siteConfig.company.legalName} under the operating name{" "}
                {siteConfig.company.operatingName}. In these Terms of Use,
                &quot;Velora,&quot; &quot;we,&quot; &quot;us,&quot; and
                &quot;our&quot; refer to {siteConfig.company.legalName} when
                operating as {siteConfig.company.operatingName}.
              </p>

              <p>
                By accessing or using this website, you agree to these Terms of
                Use. If you do not agree with these terms, you should not use
                the website.
              </p>

              <h2>2. General Information Only</h2>

              <p>
                Information provided on this website is for general
                informational purposes only. Website content is not intended to
                provide project-specific engineering, inspection, construction,
                legal, financial, real estate, or other professional advice.
              </p>

              <p>
                Building and property conditions vary. Information presented on
                this website may not apply to a particular property, building,
                project, transaction, or circumstance.
              </p>

              <h2>3. No Professional Engagement Through Website Use</h2>

              <p>
                Accessing this website, sending an email, submitting an inquiry,
                or submitting an inspection request does not by itself create a
                professional engineer-client, consultant-client, inspector-client,
                or other professional services relationship with Velora.
              </p>

              <p>
                Professional services are provided only after Velora has
                accepted an assignment and the applicable scope, terms, fees,
                responsibilities, and other engagement requirements have been
                confirmed.
              </p>

              <h2>4. Home Inspection Requests</h2>

              <p>
                Submission of a home inspection request through this website
                does not confirm an appointment.
              </p>

              <p>
                Velora will review the submitted information and may contact the
                requester to confirm the inspection service, property details,
                scope, access requirements, timing, availability, fees, and any
                other information required before an appointment is accepted.
              </p>

              <p>
                Home inspection services may also be subject to a separate
                inspection agreement, proposal, scope of work, or other written
                terms. Where such an agreement applies, that agreement governs
                the inspection services.
              </p>

              <h2>5. Engineering and Consulting Services</h2>

              <p>
                Engineering and consulting services are provided only under an
                agreed professional scope appropriate to the assignment.
              </p>

              <p>
                The nature of the required review, investigation, analysis,
                reporting, design input, field services, or other professional
                work will depend on the project and the terms of the applicable
                engagement.
              </p>

              <p>
                General information on this website should not be relied upon
                as a substitute for project-specific professional advice.
              </p>

              <h2>6. Inspection Limitations</h2>

              <p>
                Standard home inspections are visual and non-invasive and are
                limited to conditions and components that are visible and
                readily accessible at the time of inspection.
              </p>

              <p>
                Concealed, obstructed, unsafe, inaccessible, or otherwise
                unobservable conditions may not be identified. Specialized
                testing, destructive investigation, environmental assessment,
                code compliance review, or detailed engineering analysis is not
                included unless expressly identified in the agreed scope.
              </p>

              <p>
                Additional review by a qualified specialist or through a
                separately scoped engineering assessment may be recommended
                where an observed condition warrants further investigation.
              </p>

              <h2>7. Accuracy and Availability of Website Information</h2>

              <p>
                Velora makes reasonable efforts to keep website information
                accurate and current. However, we do not represent or warrant
                that all website content is complete, error-free, current, or
                suitable for every purpose.
              </p>

              <p>
                Services, descriptions, availability, pricing, service areas,
                website features, and other information may be changed,
                suspended, or removed without notice.
              </p>

              <h2>8. Third-Party Information and Links</h2>

              <p>
                This website may contain references or links to third-party
                websites, organizations, standards, programs, manufacturers, or
                other external resources.
              </p>

              <p>
                Links and references are provided for convenience or general
                information only. Velora does not control third-party content
                and is not responsible for its accuracy, availability, privacy
                practices, security, or continued operation.
              </p>

              <h2>9. Intellectual Property</h2>

              <p>
                Unless otherwise indicated, the content of this website,
                including text, graphics, branding, logos, layouts, service
                descriptions, and original materials, is owned by or licensed
                to Velora and is protected by applicable intellectual property
                laws.
              </p>

              <p>
                You may view and use website content for personal,
                non-commercial informational purposes. You may not reproduce,
                publish, modify, distribute, sell, or commercially exploit
                website content without prior written permission, except where
                permitted by law.
              </p>

              <h2>10. Acceptable Website Use</h2>

              <p>You agree not to use this website to:</p>

              <ul>
                <li>Submit false, misleading, or fraudulent information</li>
                <li>
                  Attempt to gain unauthorized access to website systems,
                  accounts, servers, or data
                </li>
                <li>
                  Introduce malicious software, automated attacks, or other
                  harmful technology
                </li>
                <li>
                  Interfere with the availability, security, or operation of the
                  website
                </li>
                <li>
                  Use website content in a manner that infringes the rights of
                  Velora or others
                </li>
              </ul>

              <h2>11. Limitation of Website Liability</h2>

              <p>
                To the extent permitted by applicable law, Velora is not liable
                for losses or damages arising solely from reliance on general
                website information, inability to access the website, or use of
                third-party websites linked from this website.
              </p>

              <p>
                Nothing in these Terms of Use is intended to exclude or limit
                responsibilities or liabilities that cannot legally be excluded
                or limited.
              </p>

              <p>
                Liability relating to formally engaged professional services is
                governed by the applicable agreement, scope of work, and legal
                and professional requirements.
              </p>

              <h2>12. Privacy</h2>

              <p>
                Personal information submitted through this website is handled
                in accordance with our{" "}
                <a href="/privacy">Privacy Policy</a>.
              </p>

              <h2>13. Governing Law</h2>

              <p>
                These Terms of Use are governed by the applicable laws of the
                Province of Ontario and the federal laws of Canada applicable
                in Ontario.
              </p>

              <h2>14. Changes to These Terms</h2>

              <p>
                Velora may update these Terms of Use from time to time to
                reflect changes to our website, services, business practices,
                or applicable requirements.
              </p>

              <p>
                The date shown at the top of this page identifies the most
                recent update.
              </p>

              <h2>15. Contact</h2>

              <p>
                Questions about these Terms of Use may be directed to:
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
"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

import { siteConfig } from "@/lib/site";

const allowedInspectionTypes = [
  "Buyer Home Inspection",
  "Pre-Listing Inspection",
  "New Construction / Tarion Inspection",
  "Annual Home Maintenance Inspection",
] as const;

export async function sendInspectionRequest(formData: FormData) {
  /*
   * Environment validation
   */
  const resendApiKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !emailFrom || !contactToEmail) {
    console.error(
      "Inspection request email configuration is incomplete."
    );

    throw new Error(
      "The inspection request service is temporarily unavailable."
    );
  }

  const resend = new Resend(resendApiKey);

  /*
   * Read and normalize form values.
   */
  const name = getText(formData, "name", 120);
  const email = getText(formData, "email", 254).toLowerCase();
  const phone = getText(formData, "phone", 50);
  const propertyAddress = getText(
    formData,
    "property_address",
    300
  );
  const inspectionType = getText(
    formData,
    "inspection_type",
    100
  );
  const preferredDate = getText(
    formData,
    "preferred_date",
    30
  );
  const preferredTime = getText(
    formData,
    "preferred_time",
    80
  );
  const message = getText(formData, "message", 3000);

  /*
   * Server-side validation.
   *
   * Do not rely only on HTML "required" attributes because
   * requests can be submitted directly to the server action.
   */
  if (
    !name ||
    !email ||
    !phone ||
    !propertyAddress ||
    !inspectionType
  ) {
    throw new Error(
      "Please complete all required inspection request fields."
    );
  }

  if (!isValidEmail(email)) {
    throw new Error(
      "Please provide a valid email address."
    );
  }

  if (
    !allowedInspectionTypes.includes(
      inspectionType as (typeof allowedInspectionTypes)[number]
    )
  ) {
    throw new Error(
      "Please select a valid inspection type."
    );
  }

  /*
   * Email 1:
   * Internal notification sent to Velora.
   *
   * This is the critical email. If it fails, the request
   * should not be treated as successfully submitted.
   */
  const internalEmail = await resend.emails.send({
    from: emailFrom,
    to: contactToEmail,
    replyTo: email,
    subject: `New Inspection Request — ${inspectionType}`,
    html: `
      <div
        style="
          margin:0;
          padding:0;
          background:#f8fafc;
          font-family:Arial,Helvetica,sans-serif;
          color:#102A43;
        "
      >
        <div
          style="
            max-width:680px;
            margin:0 auto;
            padding:40px 20px;
          "
        >
          <div
            style="
              background:#102A43;
              padding:32px;
              border-radius:20px 20px 0 0;
              color:white;
            "
          >
            <h1
              style="
                margin:0;
                font-size:32px;
                line-height:1.2;
              "
            >
              ${escapeHtml(siteConfig.company.shortName)}
            </h1>

            <p
              style="
                margin:8px 0 0;
                color:#D4A63A;
                letter-spacing:5px;
                font-size:12px;
                text-transform:uppercase;
              "
            >
              ${escapeHtml(siteConfig.company.tagline)}
            </p>
          </div>

          <div
            style="
              background:white;
              padding:32px;
              border:1px solid #e2e8f0;
              border-top:none;
              border-radius:0 0 20px 20px;
            "
          >
            <p
              style="
                margin:0 0 8px;
                color:#B88A2A;
                font-size:12px;
                font-weight:bold;
                letter-spacing:3px;
                text-transform:uppercase;
              "
            >
              New Inspection Request
            </p>

            <h2
              style="
                margin:0 0 24px;
                font-size:28px;
                color:#102A43;
              "
            >
              ${escapeHtml(inspectionType)}
            </h2>

            <table
              style="
                width:100%;
                border-collapse:collapse;
              "
            >
              ${row("Client Name", name)}
              ${row("Email", email)}
              ${row("Phone", phone)}
              ${row("Property Address", propertyAddress)}
              ${row("Inspection Type", inspectionType)}
              ${row("Preferred Date", preferredDate)}
              ${row("Preferred Time", preferredTime)}
              ${row("Additional Information", message)}
            </table>

            <div
              style="
                margin-top:32px;
                padding:20px;
                border-radius:16px;
                background:#f8fafc;
                border:1px solid #e2e8f0;
              "
            >
              <p
                style="
                  margin:0;
                  color:#475569;
                  line-height:1.6;
                "
              >
                Reply directly to this email to contact the client
                at ${escapeHtml(email)}.
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
  });

  if (internalEmail.error) {
    console.error(
      "Internal inspection notification failed:",
      internalEmail.error
    );

    throw new Error(
      "The inspection request could not be delivered. Please contact Velora directly."
    );
  }

  console.log(
    "Internal inspection notification sent:",
    internalEmail.data?.id
  );

  /*
   * Email 2:
   * Automatic confirmation sent to the customer.
   *
   * This email is useful, but it is secondary.
   *
   * If the internal request was successfully delivered,
   * a failure here should NOT cause the customer to think
   * their inspection request failed.
   */
  try {
    const confirmationEmail = await resend.emails.send({
      from: emailFrom,
      to: email,
      replyTo: contactToEmail,
      subject:
        "We've received your home inspection request",
      html: `
        <div
          style="
            margin:0;
            padding:40px 20px;
            background:#f8fafc;
            font-family:Arial,Helvetica,sans-serif;
            color:#102A43;
          "
        >
          <div
            style="
              max-width:650px;
              margin:0 auto;
              background:white;
              border-radius:20px;
              overflow:hidden;
              border:1px solid #e2e8f0;
            "
          >
            <div
              style="
                background:#102A43;
                padding:35px;
                text-align:center;
              "
            >
              <h1
                style="
                  margin:0;
                  color:white;
                  font-size:34px;
                "
              >
                ${escapeHtml(siteConfig.company.shortName)}
              </h1>

              <p
                style="
                  margin:8px 0 0;
                  color:#D4A63A;
                  letter-spacing:4px;
                  font-size:12px;
                  text-transform:uppercase;
                "
              >
                ${escapeHtml(siteConfig.company.tagline)}
              </p>
            </div>

            <div style="padding:40px;">
              <h2
                style="
                  margin-top:0;
                  color:#102A43;
                "
              >
                We've received your request.
              </h2>

              <p
                style="
                  font-size:17px;
                  line-height:1.7;
                "
              >
                Hi <strong>${escapeHtml(name)}</strong>,
              </p>

              <p style="line-height:1.8;">
                Thank you for contacting
                <strong>
                  ${escapeHtml(siteConfig.company.name)}
                </strong>.
              </p>

              <p style="line-height:1.8;">
                We've received your request for a
                <strong>
                  ${escapeHtml(inspectionType)}
                </strong>.
              </p>

              <div
                style="
                  margin:28px 0;
                  padding:24px;
                  background:#F8FAFC;
                  border-radius:14px;
                  border:1px solid #e2e8f0;
                "
              >
                <p
                  style="
                    margin:0 0 16px;
                    font-weight:bold;
                    color:#102A43;
                  "
                >
                  Request details
                </p>

                <p
                  style="
                    margin:8px 0;
                    line-height:1.6;
                  "
                >
                  <strong>Property:</strong>
                  ${escapeHtml(propertyAddress)}
                </p>

                <p
                  style="
                    margin:8px 0;
                    line-height:1.6;
                  "
                >
                  <strong>Inspection:</strong>
                  ${escapeHtml(inspectionType)}
                </p>

                ${
                  preferredDate
                    ? `
                      <p
                        style="
                          margin:8px 0;
                          line-height:1.6;
                        "
                      >
                        <strong>Preferred date:</strong>
                        ${escapeHtml(preferredDate)}
                      </p>
                    `
                    : ""
                }

                ${
                  preferredTime
                    ? `
                      <p
                        style="
                          margin:8px 0;
                          line-height:1.6;
                        "
                      >
                        <strong>Preferred time:</strong>
                        ${escapeHtml(preferredTime)}
                      </p>
                    `
                    : ""
                }
              </div>

              <div
                style="
                  margin:30px 0;
                  padding:25px;
                  background:#F8FAFC;
                  border-left:4px solid #D4A63A;
                "
              >
                <strong>What happens next?</strong>

                <ul
                  style="
                    margin:15px 0 0;
                    padding-left:22px;
                    line-height:1.8;
                  "
                >
                  <li>
                    We'll review the submitted property information.
                  </li>

                  <li>
                    We'll confirm the inspection scope, timing,
                    access requirements, and fees.
                  </li>

                  <li>
                    Your appointment will be booked after
                    confirmation.
                  </li>

                  <li>
                    We'll answer any questions before the
                    inspection.
                  </li>
                </ul>
              </div>

              <p style="line-height:1.8;">
                Submitting an inspection request does not confirm an
                appointment. We'll contact you after reviewing the
                submitted details.
              </p>

              <p style="line-height:1.8;">
                You can reply directly to this email if you have any
                questions or need to provide additional information.
              </p>

              <p
                style="
                  margin-top:35px;
                  line-height:1.7;
                "
              >
                Thank you,
                <br /><br />
                <strong>
                  ${escapeHtml(siteConfig.company.name)}
                </strong>
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (confirmationEmail.error) {
      console.error(
        "Customer confirmation email failed:",
        confirmationEmail.error
      );
    } else {
      console.log(
        "Customer confirmation sent:",
        confirmationEmail.data?.id
      );
    }
  } catch (error) {
    /*
     * The internal request has already been received.
     * Do not fail the customer's submission simply because
     * the automatic confirmation could not be sent.
     */
    console.error(
      "Customer confirmation email encountered an error:",
      error
    );
  }

  /*
   * The internal request was successfully received.
   */
  redirect("/thank-you");
}

/*
 * Safely read a text value from FormData.
 */
function getText(
  formData: FormData,
  field: string,
  maxLength: number
) {
  const value = formData.get(field);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

/*
 * Basic server-side email validation.
 */
function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/*
 * Build a safely escaped table row for the internal email.
 */
function row(label: string, value: string) {
  return `
    <tr>
      <td
        style="
          padding:14px 12px 14px 0;
          border-bottom:1px solid #e2e8f0;
          width:190px;
          color:#64748b;
          font-size:14px;
          vertical-align:top;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding:14px 0;
          border-bottom:1px solid #e2e8f0;
          color:#102A43;
          font-size:15px;
          font-weight:600;
          vertical-align:top;
          white-space:pre-wrap;
          overflow-wrap:anywhere;
        "
      >
        ${escapeHtml(value || "Not provided")}
      </td>
    </tr>
  `;
}

/*
 * Prevent submitted user content from being interpreted as HTML.
 */
function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
import type { CustomProjectSubmission } from "@/lib/customProject";
import { getResendClient } from "@/lib/resend";

function getConfigError() {
  if (
    process.env.RESEND_API_KEY &&
    process.env.BUSINESS_INQUIRY_EMAIL &&
    process.env.FROM_EMAIL
  ) {
    return null;
  }

  if (process.env.NODE_ENV !== "production") {
    return "Email delivery is not configured yet. Add RESEND_API_KEY, BUSINESS_INQUIRY_EMAIL, and FROM_EMAIL to your environment.";
  }

  return "Email delivery is temporarily unavailable. Please try again soon.";
}

function formatOptional(value: string) {
  return value || "Not provided";
}

function buildBusinessEmailText(submission: CustomProjectSubmission) {
  return [
    "New Custom Project inquiry",
    "",
    `Name: ${submission.name}`,
    `Email or phone: ${submission.emailOrPhone}`,
    `Project type: ${submission.projectType}`,
    `Quantity: ${submission.quantity}`,
    `Deadline: ${submission.deadline}`,
    `Preferred contact method: ${formatOptional(submission.contactMethod)}`,
    `Budget range: ${formatOptional(submission.budget)}`,
    `Notes: ${formatOptional(submission.notes)}`,
    `Timestamp: ${submission.submittedAtIso}`,
    "",
    "Details:",
    submission.details,
  ].join("\n");
}

function buildBusinessEmailHtml(submission: CustomProjectSubmission) {
  return `
    <div style="font-family: Arial, sans-serif; color: #2b2b2b; line-height: 1.6;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">New Custom Project inquiry</h1>
      <p><strong>Name:</strong> ${submission.name}</p>
      <p><strong>Email or phone:</strong> ${submission.emailOrPhone}</p>
      <p><strong>Project type:</strong> ${submission.projectType}</p>
      <p><strong>Quantity:</strong> ${submission.quantity}</p>
      <p><strong>Deadline:</strong> ${submission.deadline}</p>
      <p><strong>Preferred contact method:</strong> ${formatOptional(submission.contactMethod)}</p>
      <p><strong>Budget range:</strong> ${formatOptional(submission.budget)}</p>
      <p><strong>Notes:</strong> ${formatOptional(submission.notes)}</p>
      <p><strong>Timestamp:</strong> ${submission.submittedAtIso}</p>
      <div style="margin-top: 24px;">
        <p style="margin-bottom: 8px;"><strong>Details:</strong></p>
        <p style="white-space: pre-wrap;">${submission.details}</p>
      </div>
    </div>
  `;
}

function buildCustomerConfirmationText(submission: CustomProjectSubmission) {
  return [
    `Hi ${submission.name},`,
    "",
    "Your custom project request was received.",
    "Most custom project requests receive a response within 1 to 2 business days.",
    "Rush timelines are not guaranteed unless they are confirmed directly.",
    "If your request is time-sensitive, make sure the deadline is included in the request and follow up on social if needed.",
    "",
    "Thank you,",
    "McGraw Made Studio",
  ].join("\n");
}

function buildCustomerConfirmationHtml(submission: CustomProjectSubmission) {
  return `
    <div style="font-family: Arial, sans-serif; color: #2b2b2b; line-height: 1.6;">
      <p>Hi ${submission.name},</p>
      <p>Your custom project request was received.</p>
      <p>Most custom project requests receive a response within 1 to 2 business days.</p>
      <p>Rush timelines are not guaranteed unless they are confirmed directly.</p>
      <p>If your request is time-sensitive, make sure the deadline is included in the request and follow up on social if needed.</p>
      <p>Thank you,<br />McGraw Made Studio</p>
    </div>
  `;
}

export async function sendCustomProjectEmails(
  submission: CustomProjectSubmission,
) {
  const configError = getConfigError();
  if (configError) {
    return {
      ok: false as const,
      error: configError,
    };
  }

  const resend = getResendClient();
  if (!resend) {
    return {
      ok: false as const,
      error: "Email delivery is temporarily unavailable. Please try again soon.",
    };
  }

  const from = process.env.FROM_EMAIL!;
  const businessInbox = process.env.BUSINESS_INQUIRY_EMAIL!;

  const businessResult = await resend.emails.send({
    from,
    to: businessInbox,
    subject: `New Custom Project inquiry from ${submission.name}`,
    text: buildBusinessEmailText(submission),
    html: buildBusinessEmailHtml(submission),
  });

  if (businessResult.error) {
    return {
      ok: false as const,
      error:
        process.env.NODE_ENV !== "production"
          ? `Business email failed: ${businessResult.error.message}`
          : "We couldn't send your request right now. Please try again soon.",
    };
  }

  if (submission.customerEmail) {
    const customerResult = await resend.emails.send({
      from,
      to: submission.customerEmail,
      subject: "We received your custom project request",
      text: buildCustomerConfirmationText(submission),
      html: buildCustomerConfirmationHtml(submission),
    });

    if (customerResult.error) {
      return {
        ok: false as const,
        error:
          process.env.NODE_ENV !== "production"
            ? `Customer confirmation email failed: ${customerResult.error.message}`
            : "We couldn't send your request right now. Please try again soon.",
      };
    }
  }

  return {
    ok: true as const,
  };
}

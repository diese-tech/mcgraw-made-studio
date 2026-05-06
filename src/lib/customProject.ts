export type CustomProjectSubmission = {
  name: string;
  emailOrPhone: string;
  projectType: string;
  quantity: string;
  details: string;
  deadline: string;
  contactMethod: string;
  budget: string;
  notes: string;
  submittedAtIso: string;
  customerEmail: string | null;
};

type CustomProjectValidationResult =
  | {
      ok: true;
      data: CustomProjectSubmission;
    }
  | {
      ok: false;
      error: string;
    };

const requiredFields = [
  ["name", "Name"],
  ["emailOrPhone", "Email or phone"],
  ["projectType", "Project type"],
  ["quantity", "Quantity"],
  ["details", "Personalization and details"],
  ["deadline", "Deadline"],
] as const;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function extractCustomerEmail(value: string) {
  const match = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : null;
}

export function validateCustomProjectForm(
  formData: FormData,
): CustomProjectValidationResult {
  for (const [key, label] of requiredFields) {
    if (!readString(formData, key)) {
      return {
        ok: false,
        error: `${label} is required.`,
      };
    }
  }

  const emailOrPhone = readString(formData, "emailOrPhone");
  const customerEmail = extractCustomerEmail(emailOrPhone);

  return {
    ok: true,
    data: {
      name: readString(formData, "name"),
      emailOrPhone,
      projectType: readString(formData, "projectType"),
      quantity: readString(formData, "quantity"),
      details: readString(formData, "details"),
      deadline: readString(formData, "deadline"),
      contactMethod: readString(formData, "contactMethod"),
      budget: readString(formData, "budget"),
      notes: readString(formData, "notes"),
      submittedAtIso: new Date().toISOString(),
      customerEmail,
    },
  };
}

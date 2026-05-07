export type CustomProjectSubmission = {
  name: string;
  emailOrPhone: string;
  projectType: string;
  quantity: string;
  details: string;
  deadline: string;
  contactMethod: string;
  budget: string;
  referenceFileName: string;
  notes: string;
  submittedAtIso: string;
  customerEmail: string | null;
};

export type CustomProjectAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

type CustomProjectValidationResult =
  | {
      ok: true;
      data: CustomProjectSubmission;
      attachment: CustomProjectAttachment | null;
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

async function readReferenceAttachment(formData: FormData) {
  const value = formData.get("referenceImage");

  if (!(value instanceof File) || value.size === 0) {
    return {
      ok: true as const,
      fileName: "",
      attachment: null,
    };
  }

  const allowedTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/heic",
    "image/heif",
    "application/pdf",
  ]);
  const maxBytes = 5 * 1024 * 1024;

  if (!allowedTypes.has(value.type)) {
    return {
      ok: false as const,
      error: "Reference files must be an image or PDF.",
    };
  }

  if (value.size > maxBytes) {
    return {
      ok: false as const,
      error: "Reference files must be smaller than 5 MB.",
    };
  }

  return {
    ok: true as const,
    fileName: value.name,
    attachment: {
      filename: value.name,
      content: Buffer.from(await value.arrayBuffer()),
      contentType: value.type,
    },
  };
}

export function extractCustomerEmail(value: string) {
  const match = value.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : null;
}

export async function validateCustomProjectForm(
  formData: FormData,
): Promise<CustomProjectValidationResult> {
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
  const reference = await readReferenceAttachment(formData);

  if (!reference.ok) {
    return {
      ok: false,
      error: reference.error,
    };
  }

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
      referenceFileName: reference.fileName,
      notes: readString(formData, "notes"),
      submittedAtIso: new Date().toISOString(),
      customerEmail,
    },
    attachment: reference.attachment,
  };
}

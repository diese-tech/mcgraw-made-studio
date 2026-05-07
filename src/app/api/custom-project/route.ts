import { NextResponse } from "next/server";
import { sendCustomProjectEmails } from "@/lib/customProjectEmail";
import { validateCustomProjectForm } from "@/lib/customProject";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const validation = await validateCustomProjectForm(formData);

  if (!validation.ok) {
    return NextResponse.json(
      { error: validation.error },
      { status: 400 },
    );
  }

  const result = await sendCustomProjectEmails(
    validation.data,
    validation.attachment,
  );

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";

const projectTypes = [
  "Personalized Gift",
  "Award or Plaque",
  "Sign or Decor",
  "Seasonal Item",
  "UV Printed Item",
  "3D Printed Item",
  "Bulk or Event Piece",
];

const budgetRanges = ["Under $100", "$100-$250", "$250-$500", "$500+", "Not sure yet"];

export function CustomProjectForm() {
  const [attempted, setAttempted] = useState(false);
  const router = useRouter();

  return (
    <form
      noValidate
      className="soft-card rounded-[32px] p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setAttempted(true);

        if (event.currentTarget.checkValidity()) {
          router.push("/success");
        }
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <FormField id="name" label="Name" required>
          <input
            id="name"
            name="name"
            required
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
            placeholder="Your full name"
          />
        </FormField>

        <FormField
          id="emailOrPhone"
          label="Email or phone"
          hint="Provide at least one way for us to follow up."
          required
        >
          <input
            id="emailOrPhone"
            name="emailOrPhone"
            required
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
            placeholder="name@email.com or (555) 000-0000"
          />
        </FormField>

        <FormField id="projectType" label="Project type" required>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="quantity" label="Quantity" required>
          <input
            id="quantity"
            name="quantity"
            required
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
            placeholder="Examples: 1, 12, 50"
          />
        </FormField>

        <div className="md:col-span-2">
          <FormField id="details" label="Personalization and details" required>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
              placeholder="Tell us the names, wording, colors, materials, style, and anything else that matters."
            />
          </FormField>
        </div>

        <FormField id="deadline" label="Deadline" required>
          <input
            id="deadline"
            name="deadline"
            required
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
            placeholder="Event date or needed-by date"
          />
        </FormField>

        <FormField id="contactMethod" label="Preferred contact method">
          <select
            id="contactMethod"
            name="contactMethod"
            defaultValue=""
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
          >
            <option value="">No preference</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="instagram">Instagram</option>
          </select>
        </FormField>

        <FormField id="budget" label="Budget range">
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
          >
            <option value="">Optional budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="referenceImage"
          label="Reference image upload"
          hint="This is a UI placeholder only for the MVP scaffold."
        >
          <input
            id="referenceImage"
            name="referenceImage"
            type="file"
            className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
          />
        </FormField>

        <div className="md:col-span-2">
          <FormField id="notes" label="Notes">
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="rounded-2xl border border-line bg-white px-4 py-3 outline-none"
              placeholder="Anything else we should know before we follow up?"
            />
          </FormField>
        </div>
      </div>

      {attempted ? (
        <p className="mt-4 text-sm text-[#9d5c3f]">
          Complete the required fields before continuing to the success page.
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-7 text-muted">
          This scaffold validates the form locally and routes to the success page. No live email
          sending or backend submission is wired in this issue.
        </p>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
}

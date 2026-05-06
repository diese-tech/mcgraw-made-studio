import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { policyPages } from "@/content/policies";

export const metadata: Metadata = {
  title: "Privacy",
};

const page = policyPages.find((item) => item.slug === "privacy");

export default function PrivacyPage() {
  if (!page) return null;

  return (
    <Section eyebrow="Legal" title={page.title} description={page.intro}>
      <div className="space-y-8">
        {page.sections.map((section) => (
          <div key={section.heading} className="soft-card rounded-[28px] p-6">
            <h2 className="font-display text-3xl text-walnut">{section.heading}</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

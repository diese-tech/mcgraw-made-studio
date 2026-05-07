import { Section } from "@/components/ui/Section";
import { policyPages } from "@/content/policies";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Refund & Custom Order Policy",
  description:
    "Refund and custom order policy details for McGraw Made Studio custom projects and ready-made pieces.",
  path: "/refund-custom-order-policy",
});

const page = policyPages.find((item) => item.slug === "refund-custom-order-policy");

export default function RefundPolicyPage() {
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

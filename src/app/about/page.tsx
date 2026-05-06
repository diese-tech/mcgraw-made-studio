import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About",
  description: "The family roots and studio story behind McGraw Made Studio.",
};

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="A warm studio brand with room to create across categories."
      description="McGraw Made Studio keeps the family-rooted story while building a broader identity for custom fabrication, gifting, awards, decor, and ready-made work."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="image-placeholder soft-card min-h-[360px] rounded-[32px] p-6" />
        <Card>
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              The working name comes from McGraw Ave in New York, tying the studio back to family
              history without boxing it into one craft category.
            </p>
            <p>
              The goal of the site is to feel premium first, capable second, and personal third.
              That means polished structure, warm visuals, and a clear path for both Custom
              Projects and Ready-Made Items.
            </p>
            <p>
              This MVP intentionally keeps the operations lightweight while giving the business a
              cleaner intake and stronger digital presence.
            </p>
          </div>
          <div className="mt-6">
            <Button href="/custom-projects">Start a Custom Project</Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

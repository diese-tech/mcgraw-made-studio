import type { Metadata } from "next";
import { CustomProjectForm } from "@/components/forms/CustomProjectForm";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Custom Projects",
  description: "Structured quote request flow for custom work.",
};

export default function CustomProjectsPage() {
  return (
    <Section
      eyebrow="Custom Project"
      title="Start with a clear quote request instead of a messy DM thread."
      description="Use this form to share the basics we need for a structured follow-up. This MVP scaffold does not send email yet."
    >
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Card>
          <h3 className="font-display text-3xl text-walnut">What to include</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <li>Name and best contact method</li>
            <li>Project type and quantity</li>
            <li>Personalization, wording, or design details</li>
            <li>Deadline or event timing</li>
            <li>Reference image and budget range if helpful</li>
          </ul>
          <div className="mt-6">
            <Button href="/gallery" variant="secondary">
              Browse Gallery First
            </Button>
          </div>
        </Card>
        <CustomProjectForm />
      </div>
    </Section>
  );
}

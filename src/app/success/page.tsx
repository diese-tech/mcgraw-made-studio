import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Success",
  description:
    "Confirmation that your McGraw Made Studio custom project request was received for follow-up.",
  path: "/success",
});

export default function SuccessPage() {
  return (
    <Section
      eyebrow="Success"
      title="Thanks! Your Custom Project inquiry has been received."
      description="We'll review your details and follow up with next steps within 1 to 2 business days."
    >
      <Card className="mx-auto max-w-2xl text-center">
        <p className="text-lg leading-8 text-muted">
          Thank you for sharing your project details. Our team will review everything and follow up with thoughtful next steps for your quote.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          Most inquiries receive a response within 1 to 2 business days. If your timeline is tight, include it in your message so we can prioritize accordingly.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/gallery" variant="secondary">
            Browse Gallery
          </Button>
          <Button href="/" variant="ghost">
            Return Home
          </Button>
        </div>
      </Card>
    </Section>
  );
}

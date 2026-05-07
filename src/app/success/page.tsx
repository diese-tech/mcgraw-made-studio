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
      title="Thanks, your Custom Project request is ready for follow-up."
      description="We received your details and will review the request before following up."
    >
      <Card className="mx-auto max-w-2xl text-center">
        <p className="text-lg leading-8 text-muted">
          Thanks. We received your Custom Project request and will review the details before
          following up with a quote.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          For urgent deadlines, message us on Instagram after submitting the request details.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/gallery" variant="secondary">
            Browse Gallery
          </Button>
          <Button href="/ready-made" variant="ghost">
            Shop Ready-Made
          </Button>
        </div>
      </Card>
    </Section>
  );
}

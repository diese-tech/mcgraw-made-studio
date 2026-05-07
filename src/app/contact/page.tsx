import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { siteContent } from "@/content/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Contact McGraw Made Studio for general questions, custom project timing, ready-made gifts, and Central Florida pickup or shipping details.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Reach out directly, or use the Custom Project form when you already know the details."
      description="General questions can start here. Quote-ready requests should use the structured Custom Project flow."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="font-display text-3xl text-walnut">Direct contact</h2>
          <div className="mt-4 space-y-3 text-sm leading-7 text-muted">
            <p>Email: {siteContent.brand.email}</p>
            <p>Phone: {siteContent.brand.phone}</p>
            <p>Typical custom reply: 1 to 2 business days</p>
            <p>Have a tight deadline? Include it up front so timeline feasibility can be confirmed.</p>
          </div>
        </Card>
        <Card>
          <h2 className="font-display text-3xl text-walnut">Best next steps</h2>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="/custom-projects">Start a Custom Project</Button>
            <Button href="/ready-made" variant="secondary">
              Shop Ready-Made
            </Button>
            <Button href="/gallery" variant="ghost">
              Browse Gallery
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

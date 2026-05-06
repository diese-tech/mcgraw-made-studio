import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function CTASection() {
  return (
    <Section
      eyebrow="Next step"
      title={homeContent.finalCta.title}
      description={homeContent.finalCta.description}
      className="bg-walnut text-cream"
    >
      <div className="soft-card rounded-[32px] p-8">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href={homeContent.finalCta.primaryCta.href}>
            {homeContent.finalCta.primaryCta.label}
          </Button>
          <Button href={homeContent.finalCta.secondaryCta.href} variant="secondary">
            {homeContent.finalCta.secondaryCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}

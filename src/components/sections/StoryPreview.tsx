import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function StoryPreview() {
  return (
    <Section
      eyebrow={homeContent.story.eyebrow}
      title={homeContent.story.title}
      description={homeContent.story.description}
    >
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="image-placeholder soft-card min-h-[320px] rounded-[32px] p-6" />
        <Card className="flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-sm leading-7 text-muted">
              The brand is rooted in family identity, but the site needs to feel versatile enough
              to support gifts, event pieces, business awards, and custom fabrication over time.
            </p>
            <p className="text-sm leading-7 text-muted">
              That balance is what this scaffold is designed to reinforce across copy, layout, and
              navigation.
            </p>
          </div>
          <div className="mt-6">
            <Button href={homeContent.story.cta.href} variant="secondary">
              {homeContent.story.cta.label}
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
}

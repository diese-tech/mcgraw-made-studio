import Image from "next/image";
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
        <div className="soft-card relative min-h-[320px] overflow-hidden rounded-[32px]">
          <Image
            src={homeContent.story.imageSrc}
            alt={homeContent.story.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <Card className="flex flex-col justify-between">
          <div className="space-y-4">
            <p className="text-sm leading-7 text-muted">
              The McGraw name comes from a place that still feels like home. The studio grew from
              that same idea — making things that feel personal, considered, and worth passing along.
            </p>
            <p className="text-sm leading-7 text-muted">
              Whether it&apos;s a wedding keepsake, an event award, or a piece of decor for
              someone&apos;s home, every project gets the same care. That&apos;s what this studio
              is built around.
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

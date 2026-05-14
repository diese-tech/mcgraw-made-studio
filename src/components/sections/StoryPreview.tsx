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
              McGraw Ave was the street the studio is named for — a family&apos;s home, a place
              a new family started, and one that still shows up in dreams.
            </p>
            <p className="text-sm leading-7 text-muted">
              That sense of somewhere being specifically yours is what goes into every piece
              made here. A wedding keepsake, a recognition award, or a sign for someone&apos;s
              wall: each one gets the same attention.
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

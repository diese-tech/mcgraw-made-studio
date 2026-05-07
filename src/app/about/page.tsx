import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Learn the family-rooted story behind McGraw Made Studio, a Central Florida custom fabrication and personalized goods studio.",
  path: "/about",
  image: homeContent.story.imageSrc,
});

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Named for the place that still feels like home."
      description="McGraw Made Studio carries the warmth of family roots into custom pieces made for homes, milestones, gifts, businesses, and celebrations."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="soft-card relative min-h-[360px] overflow-hidden rounded-[32px]">
          <Image
            src={homeContent.story.imageSrc}
            alt={homeContent.story.imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
        <Card>
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              McGraw Ave was the street my family called home. I spent my childhood, adolescence,
              and young adult life there, and it is also where I started my own family.
            </p>
            <p>
              No matter how much time has passed or how far life has moved forward, that place
              still feels like home. When I dream of home, McGraw Ave is where I find myself.
            </p>
            <p>
              That sense of memory, belonging, and personal meaning is what shapes the studio. Each
              piece is made to feel intentional, polished, and connected to the people or moments it
              represents.
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

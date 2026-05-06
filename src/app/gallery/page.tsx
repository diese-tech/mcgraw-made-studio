import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { galleryItems } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Portfolio proof, inspiration, and repeatable work.",
};

export default function GalleryPage() {
  return (
    <Section
      eyebrow="Gallery"
      title="Past work that helps customers picture what is possible."
      description="Gallery Items act as proof, inspiration, and a starting point for repeatable requests."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {galleryItems.map((item) => (
          <Card key={item.slug}>
            <div className="image-placeholder mb-5 aspect-[5/4] rounded-[24px] p-4" />
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.category}
                  </p>
                  <h2 className="font-display text-3xl text-walnut">{item.title}</h2>
                </div>
                <span className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-walnut">
                  {item.repeatability}
                </span>
              </div>
              <p className="text-sm leading-7 text-muted">{item.caption}</p>
              <p className="text-sm text-muted">{item.materials}</p>
              <Button href={item.ctaHref} variant="secondary">
                {item.ctaLabel}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

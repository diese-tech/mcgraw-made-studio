import { Button } from "@/components/ui/Button";
import { ImageCard } from "@/components/ui/ImageCard";
import { Section } from "@/components/ui/Section";
import { galleryItems } from "@/content/gallery";

export function FeaturedGallery() {
  return (
    <Section
      eyebrow="Proof before pitch"
      title="Recent work that builds trust fast."
      description="Show strong visual proof early so visitors can quickly understand quality, range, and style."
      className="bg-surface"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {galleryItems.slice(0, 3).map((item) => (
          <ImageCard
            key={item.slug}
            label={item.imageLabel}
            eyebrow={item.category}
            title={item.title}
            description={item.caption}
            footer={item.materials}
          />
        ))}
      </div>
      <div className="mt-8">
        <Button href="/gallery" variant="secondary">
          Browse Gallery
        </Button>
      </div>
    </Section>
  );
}

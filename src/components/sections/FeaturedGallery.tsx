import { Button } from "@/components/ui/Button";
import { ImageCard } from "@/components/ui/ImageCard";
import { Section } from "@/components/ui/Section";
import { galleryItems } from "@/content/gallery";

export function FeaturedGallery() {
  return (
    <Section
      eyebrow="Recent work"
      title="A look at what comes out of this studio."
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
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
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

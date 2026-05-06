import { ImageCard } from "@/components/ui/ImageCard";
import { Section } from "@/components/ui/Section";
import { categories } from "@/content/categories";

export function CategoryGrid() {
  return (
    <Section
      eyebrow="What we make"
      title="Explore the kinds of work customers actually come here to request."
      description="Public-facing categories are shaped around how customers shop, not just production methods."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <ImageCard
            key={category.slug}
            label={category.imageLabel}
            eyebrow={category.eyebrow}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </Section>
  );
}

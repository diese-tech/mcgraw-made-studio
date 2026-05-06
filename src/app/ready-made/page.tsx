import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { readyMadeItems } from "@/content/readyMade";

export const metadata: Metadata = {
  title: "Ready-Made",
  description: "Finished and limited-quantity items with direct Square payment links.",
};

export default function ReadyMadePage() {
  return (
    <Section
      eyebrow="Ready-Made Items"
      title="Shop finished pieces without adding cart complexity."
      description="Each item supports a direct Square payment link and a clear availability status."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {readyMadeItems.map((item) => (
          <Card key={item.slug}>
            <div className="image-placeholder mb-5 aspect-[5/4] rounded-[24px] p-4" />
            <div className="space-y-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-3xl text-walnut">{item.title}</h2>
                  <p className="mt-1 text-sm font-medium text-walnut">{item.price}</p>
                </div>
                <span className="rounded-full bg-brass-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-walnut">
                  {item.availability}
                </span>
              </div>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
              <p className="text-sm text-muted">{item.quantityNote}</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href={item.squareLink}>Buy Now</Button>
                <Button href="/contact" variant="ghost">
                  Ask a Question
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

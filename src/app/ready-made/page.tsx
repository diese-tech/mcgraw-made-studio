import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { readyMadeItems } from "@/content/readyMade";
import { getReadyMadePrimaryLabel, isReadyMadePurchasable } from "@/lib/readyMade";

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
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    {item.category}
                  </p>
                  <h2 className="font-display text-3xl text-walnut">{item.title}</h2>
                  <p className="mt-1 text-sm font-medium text-walnut">{item.price}</p>
                </div>
                <span className="rounded-full bg-brass-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-walnut">
                  {item.availability}
                </span>
              </div>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
              <div className="grid gap-2 rounded-[20px] border border-line bg-white/60 p-4 text-sm text-muted">
                <p>
                  <span className="font-medium text-walnut">Quantity / availability:</span>{" "}
                  {item.quantityLabel}
                </p>
                <p>
                  <span className="font-medium text-walnut">Materials:</span> {item.materials}
                </p>
                <p>
                  <span className="font-medium text-walnut">Fulfillment:</span>{" "}
                  {item.fulfillmentNote}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={isReadyMadePurchasable(item) ? item.squareLink : undefined}
                  disabled={!isReadyMadePurchasable(item)}
                  target={isReadyMadePurchasable(item) ? "_blank" : undefined}
                  rel={isReadyMadePurchasable(item) ? "noreferrer" : undefined}
                >
                  {getReadyMadePrimaryLabel(item)}
                </Button>
                <Button href={`/contact?item=${item.slug}`} variant="ghost">
                  Ask a Question
                </Button>
              </div>
              <p className="text-xs leading-6 text-muted">
                Square checkout opens in a new tab when the item is available for immediate
                purchase.
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

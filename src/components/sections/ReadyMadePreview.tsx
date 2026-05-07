import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { readyMadeItems } from "@/content/readyMade";
import { getReadyMadePrimaryLabel } from "@/lib/readyMade";

export function ReadyMadePreview() {
  return (
    <Section
      eyebrow="Buy-now path"
      title="Ready-Made Items for customers who want something available now."
      description="Each item can point directly to a Square payment page without adding cart complexity."
      className="bg-[rgba(234,228,220,0.44)]"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {readyMadeItems.slice(0, 3).map((item) => (
          <Card key={item.slug}>
            <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-[22px]">
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-2xl text-walnut">{item.title}</h3>
                <span className="rounded-full bg-brass-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-walnut">
                  {item.availability}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {item.category}
              </p>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
              <p className="text-sm font-medium text-walnut">{item.price}</p>
              <p className="text-sm text-muted">{item.quantityLabel}</p>
              <p className="text-sm text-muted">{getReadyMadePrimaryLabel(item)}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/ready-made">View Ready-Made Items</Button>
      </div>
    </Section>
  );
}

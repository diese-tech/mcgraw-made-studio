import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/home";

export function CTASection() {
  return (
    <section className="bg-walnut py-16 sm:py-20">
      <div className="page-shell">
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
            Next step
          </p>
          <h2 className="font-display text-4xl text-cream sm:text-5xl">
            {homeContent.finalCta.title}
          </h2>
          <p className="text-lg leading-8 text-cream/70">
            {homeContent.finalCta.description}
          </p>
        </div>
        <div className="soft-card rounded-[32px] p-8">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href={homeContent.finalCta.primaryCta.href}>
              {homeContent.finalCta.primaryCta.label}
            </Button>
            <Button href={homeContent.finalCta.secondaryCta.href} variant="secondary">
              {homeContent.finalCta.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function ProcessSteps() {
  return (
    <Section
      eyebrow="How it works"
      title="How a custom order works"
      description="Send the details once. Get a quote back. Approve it and the work begins."
    >
      <div className="grid gap-6">
        <Card className="overflow-hidden p-0">
          <div className="lg:grid lg:grid-cols-[1fr_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px] lg:aspect-auto lg:min-h-[320px] lg:rounded-l-[28px] lg:rounded-tr-none">
              <Image
                src={homeContent.processSteps[0].imageSrc!}
                alt={homeContent.processSteps[0].imageAlt ?? homeContent.processSteps[0].title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <Badge>Step 1</Badge>
              <h3 className="mt-4 font-display text-2xl text-walnut">
                {homeContent.processSteps[0].title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {homeContent.processSteps[0].description}
              </p>
            </div>
          </div>
        </Card>
        <div className="grid gap-6 lg:grid-cols-2">
          {homeContent.processSteps.slice(1).map((step, index) => (
            <Card key={step.title} className="overflow-hidden p-0">
              {step.imageSrc ? (
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
                  <Image
                    src={step.imageSrc}
                    alt={step.imageAlt ?? step.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className="p-6">
                <Badge>Step {index + 2}</Badge>
                <h3 className="mt-4 font-display text-2xl text-walnut">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

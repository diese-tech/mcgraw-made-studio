import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function ProcessSteps() {
  return (
    <Section
      eyebrow="How Custom Projects work"
      title="A cleaner intake flow than DMs and guesswork."
      description="Set expectations clearly, collect the right details, and make the follow-up quote easier to deliver."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {homeContent.processSteps.map((step, index) => (
          <Card key={step.title}>
            <Badge>Step {index + 1}</Badge>
            <h3 className="mt-4 font-display text-2xl text-walnut">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

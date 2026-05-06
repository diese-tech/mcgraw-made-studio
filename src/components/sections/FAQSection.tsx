import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function FAQSection() {
  return (
    <Section
      eyebrow="FAQ"
      title="Helpful answers before someone reaches out."
      description="Support the main flows with just enough clarity to reduce friction."
      className="bg-surface"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {homeContent.faqs.map((item) => (
          <Card key={item.question}>
            <h3 className="font-display text-2xl text-walnut">{item.question}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.answer}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

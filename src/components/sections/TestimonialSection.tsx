// SWAP PATH: When real customer testimonials are available, replace this section's
// content with verified quotes. Suggested approach:
//   1. Add a `testimonials` field to HomeContent in src/content/types.ts
//   2. Move testimonial content into src/content/home.ts
//   3. Rewrite this component to map over that array
// Until then, this section builds trust through fabrication specificity — no
// simulated customer feedback of any kind.

const details = [
  {
    heading: "Built in layers",
    body: "Most pieces start with two to four layers of shaped and cut wood, painted or stained separately before assembly. Dimension comes from building up, not carving out.",
  },
  {
    heading: "UV ink, direct to surface",
    body: "Color and detail print directly onto wood, acrylic, or painted stock — no vinyl, no transfer film. The result is crisp, flush, and durable.",
  },
  {
    heading: "Finished and checked by hand",
    body: "Lettering is placed, aligned, and reviewed before every piece ships. There is no automated finish step.",
  },
];

export function TestimonialSection() {
  return (
    <section className="border-y border-line bg-brass-soft/40 py-16 sm:py-20">
      <div className="page-shell space-y-10">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            How it&apos;s made
          </p>
          <h2 className="font-display text-3xl text-walnut sm:text-4xl">
            What goes into every piece
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.heading} className="space-y-3">
              <h3 className="font-display text-xl text-walnut">{detail.heading}</h3>
              <p className="text-sm leading-7 text-muted">{detail.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

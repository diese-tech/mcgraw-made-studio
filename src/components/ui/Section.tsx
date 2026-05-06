import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`.trim()}>
      <div className="page-shell">
        <div className="mb-8 max-w-2xl space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-4xl text-walnut sm:text-5xl">{title}</h2>
          {description ? <p className="text-lg leading-8 text-muted">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#dcc69b] bg-brass-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-walnut">
      {children}
    </span>
  );
}

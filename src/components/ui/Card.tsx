import type { ReactNode } from "react";

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`soft-card rounded-[28px] p-6 ${className}`.trim()}>
      {children}
    </div>
  );
}

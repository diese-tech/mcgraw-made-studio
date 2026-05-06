import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
};

const styles = {
  primary:
    "border-walnut bg-walnut !text-white hover:bg-[#1f1f1f] shadow-[0_14px_30px_rgba(43,43,43,0.14)]",
  secondary:
    "bg-brass-soft text-walnut hover:bg-[#e6d8bd] border-[#d8c39b]",
  ghost: "bg-transparent text-walnut hover:bg-white/60 border-line",
};

const shared =
  "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-medium transition-colors";

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = `${shared} ${styles[variant]} ${disabled ? " pointer-events-none opacity-50" : ""} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

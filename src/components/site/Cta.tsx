import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "text";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 rounded-[var(--radius)] bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition-opacity duration-200 hover:opacity-88",
  secondary:
    "inline-flex items-center gap-2 rounded-[var(--radius)] border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors duration-200 hover:border-foreground",
  ghost:
    "inline-flex items-center gap-2 rounded-[var(--radius)] px-2 py-1.5 text-sm font-medium text-foreground transition-opacity duration-200 hover:opacity-70",
  text:
    "inline-flex items-center gap-1 text-sm font-medium text-foreground transition-opacity duration-200 hover:opacity-70",
};

export function Cta({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative px-5 py-24 sm:px-8 lg:px-12 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

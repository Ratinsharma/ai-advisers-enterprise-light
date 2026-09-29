import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border px-5 pt-32 pb-16 sm:px-8 lg:px-10 lg:pt-40 lg:pb-20">
      {/* Subtle ambient texture — dot grid */}
      <div className="field-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-lg mt-6 max-w-[20ch] text-balance">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
        {actions && (
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">{actions}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

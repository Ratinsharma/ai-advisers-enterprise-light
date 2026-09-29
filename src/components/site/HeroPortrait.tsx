import { useRef, useState } from "react";

/**
 * Hero composition: a clean executive portrait on the left,
 * an iMe "resolve" panel on the right, divided by a draggable seam.
 */
export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos(Math.min(94, Math.max(6, ((e.clientX - r.left) / r.width) * 100)));
      }}
      onMouseLeave={() => setPos(50)}
      className="relative aspect-[5/6] w-full overflow-hidden rounded-[var(--radius)] border border-border bg-surface select-none"
    >
      {/* Left: executive portrait — Kenn Joyce */}
      <img
        src="/kenn-joyce.jpg"
        alt="Kenn Joyce, Founder and CEO of AI Advisers"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      {/* Soft gradient on the left to keep the seam readable */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/10 to-transparent" />

      {/* Right: iMe resolve */}
      <div
        className="absolute inset-y-0 right-0 overflow-hidden bg-gradient-to-bl from-surface to-surface-2"
        style={{ width: `${100 - pos}%` }}
      >
        {/* Faint dot grid for the right side */}
        <div className="absolute inset-0 field-grid opacity-50" />
        {/* iMe monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="font-display text-3xl tracking-[-0.04em]">iMe</span>
            <span className="eyebrow text-subtle">resolve</span>
          </div>
        </div>
      </div>

      {/* Header chip */}
      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="block h-1.5 w-1.5 rounded-full bg-foreground/40" />
        <span className="eyebrow text-muted-foreground mix-blend-difference text-white/85">
          Portrait · Kenn Joyce
        </span>
      </div>

      {/* Labels at the bottom */}
      <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between text-[0.7rem] tracking-[0.04em]">
        <span className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">Executive</span>
        <span className="text-subtle">iMe resolve</span>
      </div>

      {/* Drag seam */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-foreground/40"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-border bg-surface shadow-sm">
          <span className="text-[0.7rem] text-muted-foreground">⇆</span>
        </div>
      </div>
    </div>
  );
}

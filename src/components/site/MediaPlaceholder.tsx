import { IntelligenceField } from "./IntelligenceField";

/**
 * Refined placeholder — marks where approved media belongs.
 * Clean surface, fine border, sensible label. No brackets, no busy SVG.
 */
export function MediaPlaceholder({
  label,
  ratio = "4 / 5",
  tone = "ink",
  variant = "ambient",
  className = "",
}: {
  label: string;
  ratio?: string;
  tone?: "ink" | "gold" | "cyan";
  variant?: "ambient" | "blob" | "rule";
  className?: string;
}) {
  return (
    <figure
      style={{ aspectRatio: ratio }}
      className={`group relative w-full overflow-hidden rounded-[var(--radius)] border border-border bg-surface ${className}`}
    >
      <IntelligenceField
        variant={variant}
        tone={tone}
        className="absolute inset-0 h-full w-full opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-surface/0 via-transparent to-surface-2/50" />

      {/* Corner mark */}
      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="block h-1.5 w-1.5 rounded-full bg-foreground/40" />
        <span className="eyebrow text-subtle">Media</span>
      </div>

      {/* Label */}
      <figcaption className="absolute inset-x-5 bottom-5 flex items-end gap-4">
        <p className="max-w-[44ch] text-sm leading-relaxed text-muted-foreground">
          {label}
        </p>
      </figcaption>
    </figure>
  );
}

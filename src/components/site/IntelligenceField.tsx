/**
 * Subtle texture field — used sparingly for ambient depth, never as the focus.
 * Fine dot grid, gradient blobs, or single hairline rules depending on variant.
 */
export type FieldVariant = "ambient" | "blob" | "rule" | "monogram";

export function IntelligenceField({
  variant = "ambient",
  className = "",
  tone = "ink",
}: {
  variant?: FieldVariant;
  className?: string;
  tone?: "ink" | "gold" | "cyan";
}) {
  const color =
    tone === "gold"
      ? "var(--gold)"
      : tone === "cyan"
        ? "var(--signal-cyan)"
        : "var(--foreground)";

  if (variant === "blob") {
    return (
      <svg
        viewBox="0 0 800 800"
        aria-hidden="true"
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="blob-a" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="60%" stopColor={color} stopOpacity="0.04" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="400" cy="400" r="380" fill="url(#blob-a)" />
      </svg>
    );
  }

  if (variant === "rule") {
    return (
      <svg
        viewBox="0 0 800 60"
        aria-hidden="true"
        className={className}
        preserveAspectRatio="none"
      >
        <line x1="0" y1="30" x2="800" y2="30" stroke={color} strokeWidth="0.5" opacity="0.18" />
      </svg>
    );
  }

  if (variant === "monogram") {
    return (
      <svg
        viewBox="0 0 800 800"
        aria-hidden="true"
        className={className}
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke={color} fill="none" strokeWidth="0.5" opacity="0.5">
          <circle cx="400" cy="400" r="200" />
          <circle cx="400" cy="400" r="280" opacity="0.4" />
          <circle cx="400" cy="400" r="360" opacity="0.2" />
        </g>
      </svg>
    );
  }

  // ambient: hairline radial fan, very subtle
  return (
    <svg
      viewBox="0 0 800 800"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="amb-a" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.05" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="800" fill="url(#amb-a)" />
    </svg>
  );
}

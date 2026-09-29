import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { SectionShell } from "./Cta";
import { Reveal } from "./Reveal";

const NODES = [
  { key: "leadership", label: "Leadership", detail: "Boardroom AI Advisory", to: "/advisory", x: 18, y: 18 },
  { key: "presence", label: "Presence", detail: "iMe Executive AI", to: "/ime", x: 82, y: 18 },
  { key: "people", label: "People", detail: "iMe Live Trainer", to: "/live-trainer", x: 18, y: 78 },
  { key: "infrastructure", label: "Infrastructure", detail: "Private AI", to: "/private-ai", x: 82, y: 78 },
  { key: "communication", label: "Communication", detail: "AI Advisers Studio", to: "/studio", x: 50, y: 97 },
];

export function ConnectedSystem() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <SectionShell className="border-t border-border">
      <Reveal>
        <p className="eyebrow">One connected system</p>
        <h2 className="display-lg mt-8 max-w-[16ch]">
          Five capabilities. One enterprise AI capability.
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="relative mt-20 aspect-[4/3] w-full sm:aspect-[16/9]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
          >
            {NODES.map((n) => (
              <line
                key={n.key}
                x1="50"
                y1="50"
                x2={n.x}
                y2={n.y}
                stroke={hover === n.key ? "var(--gold)" : "var(--ivory)"}
                strokeWidth="0.15"
                opacity={hover === n.key ? 0.9 : hover ? 0.08 : 0.2}
                style={{ transition: "opacity 400ms, stroke 400ms" }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-border bg-background px-6 py-4 text-center">
            <span className="font-display text-[0.7rem] tracking-[0.3em]">AI ADVISERS</span>
          </div>

          {NODES.map((n) => (
            <Link
              key={n.key}
              to={n.to}
              onMouseEnter={() => setHover(n.key)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(n.key)}
              onBlur={() => setHover(null)}
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              className="absolute w-44 -translate-x-1/2 -translate-y-1/2 border border-border bg-background/80 px-4 py-3 text-center backdrop-blur-sm transition-colors duration-400 hover:border-foreground"
            >
              <span className="block text-[0.62rem] tracking-[0.22em] text-foreground uppercase">
                {n.label}
              </span>
              <span className="mt-2 block text-xs text-muted-foreground">{n.detail}</span>
            </Link>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

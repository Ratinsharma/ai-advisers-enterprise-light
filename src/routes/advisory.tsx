import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/advisory")({
  head: () => ({
    meta: [
      { title: "Boardroom AI Advisory | Board-Level AI Strategy — AI Advisers" },
      {
        name: "description",
        content:
          "Plain-English strategic advice for leaders deciding what AI means for their organisation: readiness, opportunity, risk, workforce and deployment.",
      },
      { property: "og:title", content: "AI at board level — AI Advisers" },
      {
        property: "og:description",
        content:
          "Founder-led, plain-English AI advisory for boards and executive teams. Value, risk, people and revenue.",
      },
    ],
  }),
  component: Advisory,
});

const PATHS: [string, string][] = [
  ["Value", "Where can AI materially improve the business?"],
  ["Risk", "Which information, decisions and processes require greater control?"],
  ["People", "Which activities should move from repetitive work to higher-value human roles?"],
  [
    "Revenue",
    "Can existing knowledge, IP, content or operational expertise create new AI-enabled opportunities?",
  ],
];

const SCOPE = [
  "AI readiness",
  "Opportunity mapping",
  "Business-model impact",
  "AI risk",
  "Workforce implications",
  "Existing IP",
  "Revenue opportunities",
  "Private deployment",
  "Implementation priorities",
];

function Advisory() {
  return (
    <>
      <PageHero
        eyebrow="Boardroom intelligence"
        title={
          <>
            AI at <span className="text-foreground">board level.</span>
          </>
        }
        lead="Plain-English strategic advice for leaders deciding what AI means for their organisation."
        actions={<Cta to="/contact">Begin an advisory conversation</Cta>}
      />

      <SectionShell>
        <Reveal>
          <h2 className="display-lg max-w-[12ch]">Clarity. Not complexity.</h2>
        </Reveal>
        <div className="mt-16 grid gap-px md:grid-cols-2">
          {PATHS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="h-full border-t border-border py-10 pr-10">
                <h3 className="font-display text-2xl tracking-[-0.03em] text-foreground">
                  {t.toUpperCase()}
                </h3>
                <p className="mt-4 max-w-[46ch] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[var(--radius)] border border-border">
              <img
                src="/kenn-joyce.jpg"
                alt="Kenn Joyce briefing a leadership group"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/55 to-transparent p-5 text-xs text-white">
                <span>Kenn Joyce · Executive briefing</span>
                <span className="text-white/70">Boardroom advisory</span>
              </figcaption>
            </figure>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="eyebrow">What an engagement covers</p>
              <ul className="mt-8 grid gap-px sm:grid-cols-2">
                {SCOPE.map((s) => (
                  <li
                    key={s}
                    className="border-t border-border py-4 pr-6 text-sm text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-[48ch] leading-relaxed text-muted-foreground">
                Founder-led throughout. The executive briefing is the usual starting point.
              </p>
              <Cta to="/contact" className="mt-10">
                Request an executive briefing
              </Cta>
            </Reveal>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

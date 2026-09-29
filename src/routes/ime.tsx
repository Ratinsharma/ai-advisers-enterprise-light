import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { HeroPortrait } from "@/components/site/HeroPortrait";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/ime")({
  head: () => ({
    meta: [
      { title: "iMe | Photorealistic executive digital humans — AI Advisers" },
      {
        name: "description",
        content:
          "iMe builds photorealistic, voice-matched avatars of business leaders that can only say what the leader has approved. 32 languages. Knowledge stays on your premises.",
      },
    ],
  }),
  component: Ime,
});

const BUILD: [string, string][] = [
  ["Voice", "Voice captured and matched to the executive."],
  ["Visual likeness", "Photorealistic capture in the AI Advisers in-house studio."],
  ["Approved knowledge", "Only material the organisation has reviewed and approved."],
  ["32 languages", "Interaction across languages, with consistent voice and tone."],
  ["Live engagement", "Real question and answer, not a recorded video."],
  ["Private deployment", "Knowledge stays on your premises, your cloud, or your air-gap."],
];

const PROMPTS = [
  "Tell me about our strategy.",
  "Explain this in French.",
  "What have I approved you to discuss?",
  "Summarise this for my leadership team.",
  "What would you say at the all-hands?",
];

function YouTubeEmbed({ id, title, eyebrow }: { id: string; title: string; eyebrow?: string }) {
  return (
    <figure className="relative w-full overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
      {eyebrow && (
        <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-3 text-xs text-muted-foreground">
          <span className="uppercase tracking-[0.12em]">{eyebrow}</span>
          <span>2-minute film · YouTube</span>
        </figcaption>
      )}
    </figure>
  );
}

function Ime() {
  return (
    <>
      <PageHero
        eyebrow="Executive presence"
        title={
          <>
            Your presence. <span className="display-serif italic text-muted-foreground">Beyond your calendar.</span>
          </>
        }
        lead="iMe is a photorealistic, voice-matched digital representation of an executive that presents, interacts and answers questions — using only what you have approved."
        actions={
          <>
            <Cta to="/contact">Request a demonstration</Cta>
            <Cta to="/live-trainer" variant="secondary">
              See Live Trainer
            </Cta>
          </>
        }
      />

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
              <YouTubeEmbed
                id="mrm-ZLzsg44"
                title="iMe — Meet the other Kenn Joyce (2-minute film)"
                eyebrow="Watch · iMe demonstration"
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="eyebrow">The 2-minute film</p>
              <h2 className="display-md mt-5 max-w-[18ch]">
                Kenn handed his face, his voice and his knowledge to an AI.
              </h2>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
                Everyone asks the same question: <span className="text-foreground">“What if it says something you never said?”</span> So Kenn tried to make it. He impersonated his own CFO. He told it to ignore its rules. He asked it for figures the company had never published.
              </p>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-muted-foreground">
                It refused. Every time. Politely, in his voice. That refusal is the product.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <Reveal>
            <HeroPortrait />
          </Reveal>
          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <h2 className="display-md max-w-[16ch]">
                The executive, and the version of the executive that can be everywhere.
              </h2>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
                iMe is built from approved likeness, approved voice and approved knowledge. It
                presents, answers and engages — without pretending to be anything other than
                a controlled digital representation.
              </p>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted-foreground">
                Knowledge stays on your premises. Tested before launch. Signed off by you.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <Reveal>
          <p className="eyebrow">EU AI Act · Trainer edition</p>
          <h2 className="display-lg mt-5 max-w-[16ch]">
            iMe Trainer, built for the EU AI Act.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
              <YouTubeEmbed
                id="wnA1YZsQgNc"
                title="iMe EU AI Act Trainer — promotional film"
                eyebrow="New · EU AI Act Trainer"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-[44ch] leading-relaxed text-muted-foreground">
              From <span className="text-foreground">2 August 2026</span>, organisations deploying interactive AI must disclose that users are speaking to an AI, mark generated content, and keep an audit trail. iMe is built to comply — by design, not retrofit.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="border-t border-border pt-3"><span className="text-foreground">Disclosure by design.</span> Users know they are speaking to iMe.</li>
              <li className="border-t border-border pt-3"><span className="text-foreground">Approved knowledge only.</span> The model refuses anything outside the brief.</li>
              <li className="border-t border-border pt-3"><span className="text-foreground">Auditable.</span> Every interaction is recorded for the implemented training model.</li>
              <li className="border-t border-border pt-3"><span className="text-foreground">On your terms.</span> Deploy on premises, in your cloud, or air-gapped.</li>
            </ul>
            <Cta to="/contact" variant="primary" className="mt-8">
              Discuss an EU AI Act pilot
            </Cta>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <Reveal>
          <p className="eyebrow">How it&rsquo;s built</p>
          <h2 className="display-lg mt-5 max-w-[14ch]">How the identity is created.</h2>
        </Reveal>
        <div className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {BUILD.map(([t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="h-full border-t border-border py-8 pr-8">
                <h3 className="font-display text-lg tracking-[-0.02em]">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Example use cases</p>
            <h2 className="display-md mt-5 max-w-[18ch]">Where iMe shows up.</h2>
            <ul className="mt-8 grid gap-px sm:grid-cols-2">
              {[
                "Executive communications",
                "Investor briefings",
                "All-hands presentations",
                "Multilingual engagement",
                "Conference booths",
                "Internal training at scale",
              ].map((u, i) => (
                <Reveal as="li" key={u} delay={i * 60}>
                  <div className="border-t border-border py-5 pr-6 font-display text-lg tracking-[-0.02em]">
                    {u}
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[var(--radius)] border border-border bg-surface p-8">
              <p className="eyebrow">Sample prompts</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Illustrative. A live interactive session is arranged as part of a demonstration.
              </p>
              <ul className="mt-6 space-y-3">
                {PROMPTS.map((p) => (
                  <li key={p} className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground">
                    “{p}”
                  </li>
                ))}
              </ul>
              <Cta to="/contact" className="mt-8">
                Request a demonstration
              </Cta>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { CapabilityScroller } from "@/components/site/CapabilityScroller";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";
import { ConnectedSystem } from "@/components/site/ConnectedSystem";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Advisers · Enterprise AI strategy, digital humans, private AI" },
      {
        name: "description",
        content:
          "AI Advisers partners with leadership teams on AI strategy, executive digital humans, workforce training, and private AI infrastructure — built for organisations where AI has consequences.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <WhatWeDo />
      <SectionShell className="border-t border-border">
        <CapabilityScroller />
      </SectionShell>
      <LiveExperience />
      <TrainerStory />
      <Deployment />
      <Founder />
      <WhyAdvisers />
      <Studio />
      <ConnectedSystem />
      <Engagement />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-28 pb-12 sm:px-8 lg:px-10 lg:pt-36">
      {/* Subtle ambient grid + soft top spotlight */}
      <div className="field-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="absolute -top-44 left-1/2 h-[560px] w-[920px] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-surface-2/70 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px]">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1">
            <span className="block h-1.5 w-1.5 rounded-full bg-foreground" />
            <span className="text-[0.7rem] tracking-[0.04em] text-muted-foreground">
              Enterprise AI · 2026
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display-xl mt-8 max-w-[18ch]">
            <span className="block">Enterprise AI,</span>
            <span className="block">
              <span className="display-serif italic text-muted-foreground">explained</span> at the
            </span>
            <span className="block">board level.</span>
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">
            AI Advisers helps senior leadership move from AI conversation to
            operational capability — through executive digital humans, board-level
            advisory, workforce training, and private AI infrastructure.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Cta to="/contact">Request a briefing</Cta>
            <Cta to="/ime" variant="secondary">
              See iMe in action
            </Cta>
          </div>
        </Reveal>

        {/* Proof strip */}
        <Reveal delay={480}>
          <dl className="mt-16 grid grid-cols-2 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {[
              { k: "25", l: "Years advising senior leadership" },
              { k: "32", l: "Languages · Live engagement" },
              { k: "EU AI Act", l: "Compliant by 2 August 2026" },
              { k: "Founder-led", l: "Every engagement" },
            ].map((s) => (
              <div key={s.l} className="border-l border-border pl-6 first:border-l-0 first:pl-0 sm:border-l sm:pl-6 sm:first:border-l sm:first:pl-6">
                <dt className="font-display text-2xl tracking-[-0.03em] text-foreground sm:text-3xl">
                  {s.k}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Sector pill row */}
        <Reveal delay={580}>
          <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <span className="eyebrow mr-2 text-subtle">Operating in</span>
            {["Financial services", "Energy & utilities", "Life sciences", "Professional services", "Public sector"].map(
              (s, i) => (
                <span key={s} className="inline-flex items-center gap-3">
                  <span>{s}</span>
                  {i < 4 && <span aria-hidden className="text-subtle/60">·</span>}
                </span>
              ),
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const PARTNERS = [
  "Financial services",
  "Energy & utilities",
  "Life sciences",
  "Professional services",
  "Public sector",
];

function Logos() {
  return (
    <SectionShell className="border-y border-border bg-surface-2/40 py-12">
      <div className="grid items-center gap-6 lg:grid-cols-[0.4fr_1fr] lg:gap-12">
        <p className="eyebrow text-subtle">Sectors we serve</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-3 text-base font-medium text-muted-foreground">
          {PARTNERS.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}

const PILLARS = [
  { word: "Leadership", detail: "Boardroom Advisory", to: "/advisory" },
  { word: "People", detail: "iMe Live Trainer", to: "/live-trainer" },
  { word: "Knowledge", detail: "Executive AI / iMe", to: "/ime" },
  { word: "Infrastructure", detail: "Private AI", to: "/private-ai" },
];

function WhatWeDo() {
  return (
    <SectionShell className="border-b border-border">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="display-lg mt-5 max-w-[18ch]">
            AI for the people who make the decisions.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-[54ch] leading-relaxed text-muted-foreground sm:text-lg">
            We help organisations see where AI creates strategic advantage, deploy it under
            the right level of control, and turn it into practical capability for executives
            and employees.
          </p>
        </Reveal>
      </div>

      <ul className="mt-16 grid gap-px border-t border-border sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => (
          <Reveal as="li" key={p.word} delay={i * 80}>
            <Link
              to={p.to}
              className="group flex h-full flex-col justify-between border-b border-border px-1 py-8 transition-colors duration-300 hover:bg-surface-2/60"
            >
              <span className="font-display text-xl tracking-[-0.02em] text-foreground sm:text-2xl">
                {p.word}
              </span>
              <span className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                {p.detail}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </SectionShell>
  );
}

function LiveExperience() {
  return (
    <SectionShell className="border-b border-border">
      <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Live experience</p>
          <h2 className="display-lg mt-5 max-w-[16ch]">
            Don&rsquo;t explain iMe. <span className="display-serif italic text-muted-foreground">Meet it.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-[44ch] text-base leading-relaxed text-muted-foreground">
            iMe is an interactive digital executive. It carries an organisation&rsquo;s
            knowledge, voice and presence — and answers questions in real time, in 32
            languages, with audit-grade records.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Cta to="/ime" variant="primary">Watch the demo</Cta>
            <Cta to="/ime" variant="ghost">How iMe works</Cta>
          </div>
        </Reveal>
      </div>

      <Reveal delay={140}>
        <figure className="relative mt-12 overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube-nocookie.com/embed/mrm-ZLzsg44?rel=0&modestbranding=1"
              title="iMe — Meet the other Kenn Joyce (2-minute film)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
          <figcaption className="flex items-center justify-between gap-4 border-t border-border px-5 py-3 text-xs text-muted-foreground">
            <span className="uppercase tracking-[0.12em]">Watch · iMe demonstration</span>
            <span>2-minute film · YouTube</span>
          </figcaption>
        </figure>
      </Reveal>

      <ul className="mt-10 grid grid-cols-2 gap-y-4 text-sm text-muted-foreground sm:grid-cols-5">
        {["Real face", "Real voice", "Controlled knowledge", "32 languages", "Audited"].map(
          (f) => (
            <li key={f} className="flex items-center gap-2">
              <span aria-hidden className="block h-1 w-1 rounded-full bg-foreground" />
              {f}
            </li>
          ),
        )}
      </ul>
    </SectionShell>
  );
}

const STEPS = [
  {
    n: "01",
    t: "Your material",
    d: "Policies, training manuals, onboarding documents and approved knowledge.",
  },
  {
    n: "02",
    t: "Knowledge build",
    d: "We work with your team to build the tutor around approved material.",
  },
  {
    n: "03",
    t: "Your tutor",
    d: "A synthetic tutor or an approved digital person — your call.",
  },
  {
    n: "04",
    t: "Your people ask",
    d: "Employees interact using natural voice, in the language they prefer.",
  },
  {
    n: "05",
    t: "Training record",
    d: "Evidence and records provided to the implemented training model.",
  },
];

function TrainerStory() {
  return (
    <SectionShell className="border-b border-border">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">Live Trainer</p>
            <h2 className="display-lg mt-5 max-w-[12ch]">
              From policy to conversation.
            </h2>
            <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted-foreground">
              Training content stops being read and starts being answered. Live Trainer turns
              your material into a private conversation at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta to="/live-trainer" variant="primary">Explore Live Trainer</Cta>
            </div>
          </div>
        </div>
        <ol className="space-y-px">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60}>
              <div className="border-t border-border py-8">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-sm text-muted-foreground">{s.n}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-[-0.02em]">{s.t}</h3>
                    <p className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

const DEVICES = ["Phone", "Laptop", "Group display", "In-venue kiosk"];

function Deployment() {
  return (
    <SectionShell className="border-b border-border bg-surface-2/40">
      <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="eyebrow">Deployment</p>
          <h2 className="display-lg mt-5 max-w-[14ch]">
            One tutor. Where your people are.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-[44ch] text-base leading-relaxed text-muted-foreground">
            Same knowledge, same voice, same controls — across every surface where employees
            learn, decide, and ask.
          </p>
        </Reveal>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DEVICES.map((d, i) => (
          <Reveal key={d} delay={i * 80}>
            <MediaPlaceholder
              label={`Approved ${d.toLowerCase()} interface photography`}
              ratio="3 / 4"
              variant="ambient"
            />
            <p className="mt-3 text-sm text-foreground">{d}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

function Founder() {
  return (
    <SectionShell className="border-b border-border">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal>
          <figure className="relative overflow-hidden rounded-[var(--radius)] border border-border">
            <img
              src="/kenn-joyce.jpg"
              alt="Kenn Joyce, Founder and CEO of AI Advisers"
              className="aspect-[4/5] w-full object-cover object-[center_15%]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/55 to-transparent p-5 text-xs text-white">
              <span>Kenn Joyce · Dublin</span>
              <span className="text-white/70">Founder &amp; CEO</span>
            </figcaption>
          </figure>
        </Reveal>
        <div className="flex flex-col justify-center">
          <Reveal delay={100}>
            <p className="eyebrow">Founder &amp; CEO</p>
            <h2 className="display-lg mt-5">
              Kenn Joyce
            </h2>
            <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
              After twenty-five years advising senior executives, Kenn Joyce founded AI Advisers
              to make AI understandable at the level where consequential decisions are made.
              Plain English. Non-technical. Strategic.
            </p>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-muted-foreground">
              His work starts with one question: <span className="text-foreground">“What can AI do for us — now?”</span>
              For some, the answer is productivity and automation. For others, new business
              models, competitive positioning or risk.
            </p>
            <p className="mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
              Postgraduate, Artificial Intelligence for Business — The Wharton School · MBA, Macquarie · BFA, UCD
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta to="/founder">Read full bio</Cta>
              <Cta to="/contact" variant="secondary">Request a briefing</Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}

const WHY = [
  {
    n: "01",
    t: "C-suite to board level",
    d: "AI strategy at the point where technology, business, people and risk meet.",
  },
  {
    n: "02",
    t: "Private by design",
    d: "Data sovereignty and organisational control considered from the beginning.",
  },
  {
    n: "03",
    t: "Strategy plus execution",
    d: "Advice combined with practical AI products and production capability.",
  },
  {
    n: "04",
    t: "Studio-grade delivery",
    d: "Video, audio, photography, voice and executive communications produced in-house.",
  },
];

function WhyAdvisers() {
  return (
    <SectionShell className="border-b border-border">
      <Reveal>
        <p className="eyebrow">Why Advisers</p>
        <h2 className="display-lg mt-5 max-w-[18ch]">
          Built for organisations where AI has consequences.
        </h2>
      </Reveal>
      <div className="mt-14">
        {WHY.map((row, i) => (
          <Reveal key={row.n} delay={i * 70}>
            <div className="grid grid-cols-1 gap-4 border-t border-border py-10 md:grid-cols-[auto_1fr_1.4fr] md:items-baseline md:gap-12">
              <span className="font-display text-4xl text-muted-foreground md:text-5xl">{row.n}</span>
              <h3 className="font-display text-xl tracking-[-0.02em] md:text-2xl">{row.t}</h3>
              <p className="max-w-[54ch] leading-relaxed text-muted-foreground">{row.d}</p>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-border" />
      </div>
    </SectionShell>
  );
}

function Studio() {
  return (
    <SectionShell className="border-b border-border bg-surface-2/40">
      <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="eyebrow">AI Advisers Studio</p>
          <h2 className="display-lg mt-5 max-w-[18ch]">
            The technology is AI.{" "}
            <span className="display-serif italic text-muted-foreground">The standard is broadcast.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-[44ch] text-base leading-relaxed text-muted-foreground">
            In-house production capability for everything an executive AI programme requires
            — from brand to broadcast.
          </p>
          <div className="mt-6">
            <Cta to="/studio" variant="ghost">Enter the studio</Cta>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Reveal>
          <MediaPlaceholder
            label="Approved AI Advisers studio wide shot"
            ratio="16 / 10"
            variant="ambient"
          />
        </Reveal>
        <div className="grid gap-6">
          <Reveal delay={80}>
            <MediaPlaceholder
              label="Approved microphone and recording detail"
              ratio="16 / 9"
              variant="ambient"
            />
          </Reveal>
          <Reveal delay={140}>
            <MediaPlaceholder
              label="Approved camera and lighting rig photography"
              ratio="16 / 9"
              variant="ambient"
            />
          </Reveal>
        </div>
      </div>

      <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
        {[
          "Podcast production",
          "TV and video",
          "AI video and avatars",
          "Executive photography",
          "Branding",
          "Communications",
          "Voiceover and audio",
        ].map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </SectionShell>
  );
}

const ENGAGEMENT: [string, string, string][] = [
  ["01", "Briefing", "Understand the organisation, decision context and objective."],
  ["02", "Opportunity", "Identify where AI creates practical value."],
  ["03", "Design", "Define the advisory, training, avatar or infrastructure solution."],
  ["04", "Build", "Create and configure the capability."],
  ["05", "Review", "Client reviews and approves content and configuration."],
  ["06", "Deploy", "Deploy into the agreed environment."],
  ["07", "Evolve", "Continue refining the capability where required."],
];

function Engagement() {
  return (
    <SectionShell className="border-b border-border">
      <Reveal>
        <p className="eyebrow">Engagement</p>
        <h2 className="display-lg mt-5 max-w-[14ch]">From question to capability.</h2>
      </Reveal>
      <ol className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-7">
        {ENGAGEMENT.map(([n, t, d], i) => (
          <Reveal as="li" key={n} delay={i * 50}>
            <div className="h-full border-t border-border pt-5 pr-4">
              <span className="font-display text-xs text-muted-foreground">{n}</span>
              <h3 className="mt-3 font-display text-base tracking-[-0.01em]">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}

function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-border px-5 py-28 sm:px-8 lg:px-10">
      <div className="field-grid pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="display-lg mt-5 max-w-[16ch]">
            Start with a private conversation.
          </h2>
          <p className="mt-6 max-w-[48ch] leading-relaxed text-muted-foreground">
            Tell us what your organisation is trying to achieve. Your enquiry will be treated
            confidentially and replied to within one business day.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Cta to="/contact">Request a briefing</Cta>
            <Cta to="/founder" variant="secondary">Meet the founder</Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

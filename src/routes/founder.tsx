import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Kenn Joyce | Founder & CEO — AI Advisers" },
      {
        name: "description",
        content:
          "Kenn Joyce founded AI Advisers in 2016 after 25 years advising senior executives. Post-graduate in AI for Business at Wharton. Founder of iMe and Live Trainer.",
      },
      { property: "og:title", content: "Kenn Joyce — Founder & CEO, AI Advisers" },
      {
        property: "og:description",
        content: "Plain-English AI briefings for CEOs and boards. Founder of iMe. 25+ years advising senior leaders.",
      },
    ],
  }),
  component: FounderPage,
});

const PRINCIPLES = [
  {
    n: "01",
    t: "Plain English, not jargon",
    d: "Executives are entitled to understand what they are approving. Jargon is a failure of explanation, not a sign of depth.",
  },
  {
    n: "02",
    t: "Where AI creates decisions",
    d: "The work begins with the decision in front of the leadership team — not with the technology, and not with the trend.",
  },
  {
    n: "03",
    t: "Control over convenience",
    d: "Where information is sensitive, control over the environment matters more than convenience. Private AI is a default, not an upgrade.",
  },
  {
    n: "04",
    t: "Refusal is the product",
    d: "iMe can only say what the executive has approved. Tested by impersonating his own CFO and asking it to ignore its rules — it refused, every time, in his voice. That refusal is the product.",
  },
  {
    n: "05",
    t: "Studio-grade delivery",
    d: "Production capability in-house — video, audio, photography, voice — means the standard of the output is never outsourced.",
  },
];

const CAREER = [
  {
    role: "Founder & CEO",
    company: "AI Advisers",
    period: "2016 — Present",
    place: "Dublin",
    detail: "iMe digital humans, iMe Live Trainer, executive briefings, private AI infrastructure.",
  },
  {
    role: "CEO",
    company: "GravityElectricity.Net",
    period: "2017 — 2024",
    place: "Ireland · Hong Kong · Sydney · New York · San Francisco",
    detail: "Proved a viable way to produce electricity from gravity (with Trinity College Dublin, Columbia University and Enterprise Ireland). Patent filed.",
  },
  {
    role: "Founder / Managing Creative Director",
    company: "Metropolis Interactive",
    period: "1996 — 2012",
    place: "Dublin · London · New York · Singapore · Sydney",
    detail: "Built the early-adopter agency into an international digital business — including large-scale data mining, the forerunner of today's AI.",
  },
  {
    role: "Founder / CEO",
    company: "Ulysses Investments Asia Pacific",
    period: "2004 — 2021",
    place: "Hong Kong",
    detail: "Asia-Pacific investment vehicle.",
  },
  {
    role: "Founder / Managing & Creative Director",
    company: "Virtu Advertising Sydney",
    period: "1992 — 2004",
    place: "Sydney",
    detail: "Brand campaigns for Guinness, Visa, Knight Frank, Citibank, Savills, Commonwealth Bank Australia.",
  },
  {
    role: "Founding Chairman & Board Member",
    company: "The Ireland Fund of China",
    period: "2005 — Present",
    place: "China",
    detail: "Cultural and bilateral relations.",
  },
];

const EDUCATION = [
  { inst: "The Wharton School", detail: "Postgraduate — Artificial Intelligence for Business", period: "2021 — 2023" },
  { inst: "Harvard Innovation Lab (i-lab)", detail: "Startup Secrets · Entrepreneurship", period: "2019 — 2021" },
  { inst: "Macquarie Business School", detail: "MBA — Marketing", period: "" },
  { inst: "University College Dublin", detail: "Bachelor of Fine Arts (BFA)", period: "" },
  { inst: "BBC", detail: "Broadcasting", period: "" },
  { inst: "RTÉ", detail: "TV Presentation · Documentary Making", period: "" },
  { inst: "TAFE NSW", detail: "Advanced Advertising", period: "" },
  { inst: "Blackrock College", detail: "Secondary", period: "" },
];

function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder & CEO"
        title={
          <>
            Kenn <span className="display-serif italic text-muted-foreground">Joyce.</span>
          </>
        }
        lead="After twenty-five years advising senior executives, Kenn Joyce founded AI Advisers to make AI understandable at the level where consequential decisions are made. Plain English. Non-technical. Strategic."
        actions={
          <>
            <Cta to="/contact">Request a private briefing</Cta>
            <Cta to="/ime" variant="secondary">Meet the iMe</Cta>
          </>
        }
      />

      <SectionShell>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <figure className="relative overflow-hidden rounded-[var(--radius)] border border-border">
              <img
                src="/kenn-joyce.jpg"
                alt="Kenn Joyce, Founder and CEO of AI Advisers"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/55 to-transparent p-5 text-xs text-white">
                <span>Kenn Joyce · Dublin</span>
                <span className="text-white/70">Founder &amp; CEO</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal delay={100}>
              <p className="font-serif text-2xl leading-snug italic text-foreground sm:text-3xl">
                “AI without hype, jargon or fear.”
              </p>
              <p className="mt-8 max-w-[54ch] leading-relaxed text-muted-foreground">
                Kenn works with boards, C-suites and entrepreneurs to cut through the noise
                and find where AI drives real business outcomes. His work starts with one
                question: <span className="text-foreground">“What can AI do for us — now?”</span>
              </p>
              <p className="mt-5 max-w-[54ch] leading-relaxed text-muted-foreground">
                For some, the answer is productivity and automation. For others, new business
                models, competitive positioning, or risk. For all of them, it takes
                leadership that balances vision with realism.
              </p>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Principles</p>
            <h2 className="display-lg mt-5 max-w-[16ch]">How Kenn works.</h2>
          </Reveal>
          <div>
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <div className="grid grid-cols-1 gap-3 border-t border-border py-7 md:grid-cols-[auto_1fr] md:items-baseline md:gap-12">
                  <span className="font-display text-2xl text-muted-foreground md:text-3xl">{p.n}</span>
                  <div>
                    <h3 className="font-display text-lg tracking-[-0.02em] md:text-xl">{p.t}</h3>
                    <p className="mt-2 max-w-[58ch] leading-relaxed text-muted-foreground">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Career</p>
            <h2 className="display-lg mt-5 max-w-[16ch]">Thirty years of building.</h2>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground">
              Founder and operator across digital agencies, energy, investment, and now AI.
              Five companies. Two continents. One through-line: turning complex subjects
              into plain language.
            </p>
          </Reveal>
          <div>
            {CAREER.map((c, i) => (
              <Reveal key={c.company} delay={i * 60}>
                <div className="grid grid-cols-1 gap-3 border-t border-border py-7 md:grid-cols-[1fr_1.4fr] md:items-baseline md:gap-12">
                  <div>
                    <h3 className="font-display text-lg tracking-[-0.02em]">{c.role}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.company} · {c.place}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{c.detail}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-subtle">{c.period}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Education</p>
            <h2 className="display-lg mt-5 max-w-[16ch]">Studied where it counts.</h2>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground">
              AI, innovation and strategy at Wharton and Harvard Innovation Lab.
              MBA at Macquarie. BFA at UCD. Early broadcast training at BBC and RTÉ.
            </p>
          </Reveal>
          <div>
            {EDUCATION.map((e, i) => (
              <Reveal key={e.inst} delay={i * 50}>
                <div className="grid grid-cols-1 gap-2 border-t border-border py-5 md:grid-cols-[1fr_1.4fr] md:items-baseline md:gap-12">
                  <h3 className="font-display text-base tracking-[-0.02em] md:text-lg">{e.inst}</h3>
                  <div className="md:flex md:items-baseline md:justify-between md:gap-6">
                    <p className="text-sm text-muted-foreground">{e.detail}</p>
                    {e.period && <p className="mt-1 text-xs uppercase tracking-[0.12em] text-subtle md:mt-0">{e.period}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 className="display-lg mt-5 max-w-[16ch]">
              Kenn reads every enquiry personally.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-3 lg:items-end">
              <Cta to="/contact">Request a private briefing</Cta>
              <a
                href="mailto:kenn.joyce@aiadvisers.io"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                kenn.joyce@aiadvisers.io →
              </a>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </>
  );
}

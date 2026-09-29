import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AI Advisers | A founder-led strategic AI partner" },
      {
        name: "description",
        content:
          "AI Advisers is a founder-led strategic AI intelligence partner. Founded by Kenn Joyce in 2016. Working at the intersection of strategy, executive identity, training, private infrastructure and communications.",
      },
    ],
  }),
  component: About,
});

const PRINCIPLES: [string, string][] = [
  ["Clarity", "Plain English at the level where consequential decisions are made."],
  ["Control", "Data sovereignty and organisational control considered from the beginning."],
  ["Human accountability", "AI supports decisions. People remain accountable for them."],
  ["Strategic value", "Work begins with where AI materially improves the business."],
  ["Execution", "Advice is delivered alongside the capability to build it."],
];

const BEFORE = [
  {
    role: "Founder & CEO, AI Advisers",
    period: "2016 — Present",
    detail: "iMe, Live Trainer, executive briefings, private AI.",
  },
  {
    role: "CEO, GravityElectricity.Net",
    period: "2017 — 2024",
    detail: "Patented electricity-from-gravity technology with Trinity College Dublin, Columbia University and Enterprise Ireland.",
  },
  {
    role: "Founder & MD, Metropolis Interactive",
    period: "1996 — 2012",
    detail: "International digital agency. Dublin, London, New York, Singapore, Sydney. Large-scale data mining — the forerunner of today's AI.",
  },
  {
    role: "Founder & Creative Director, Virtu Advertising Sydney",
    period: "1992 — 2004",
    detail: "Brand campaigns for Guinness, Visa, Knight Frank, Citibank, Savills, Commonwealth Bank.",
  },
  {
    role: "Founding Chairman, The Ireland Fund of China",
    period: "2005 — Present",
    detail: "Cultural and bilateral relations across Greater China.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            AI should become clearer as the <span className="display-serif italic text-muted-foreground">decisions get bigger.</span>
          </>
        }
        lead="AI Advisers is a founder-led strategic AI intelligence partner, not simply an IT vendor — working at the intersection of strategy, executive identity, training, private infrastructure and communications."
        actions={
          <>
            <Cta to="/contact">Request a private briefing</Cta>
            <Cta to="/founder" variant="secondary">Meet the founder</Cta>
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
              <p className="eyebrow">Founder &amp; CEO</p>
              <h2 className="display-md mt-5">
                Kenn Joyce
              </h2>
              <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
                After twenty-five years advising senior executives, Kenn Joyce founded AI Advisers
                in 2016 to make AI understandable at the level where consequential decisions
                are made.
              </p>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-muted-foreground">
                His approach is deliberately plain-English: separate real strategic opportunity
                from hype, identify where control matters, and help leadership move from AI
                discussion to practical action.
              </p>
              <p className="mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
                Postgraduate in AI for Business — The Wharton School · MBA, Macquarie · BFA, University College Dublin
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Cta to="/founder">Read full bio</Cta>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <Reveal>
          <p className="eyebrow">Principles</p>
          <h2 className="display-lg mt-5 max-w-[14ch]">How the firm operates.</h2>
        </Reveal>
        <div className="mt-12">
          {PRINCIPLES.map(([t, d], i) => (
            <Reveal key={t} delay={i * 70}>
              <div className="grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_1.4fr] md:gap-14">
                <h3 className="font-display text-xl tracking-[-0.02em] md:text-2xl">{t}</h3>
                <p className="max-w-[54ch] leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Founder's track record</p>
            <h2 className="display-lg mt-5 max-w-[16ch]">
              Twenty-five years before the AI hype.
            </h2>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground">
              The founder has been building and operating companies across digital, energy,
              investment and media since the early 1990s — long before AI was a board-level
              topic.
            </p>
          </Reveal>
          <div>
            {BEFORE.map((b, i) => (
              <Reveal key={b.role} delay={i * 60}>
                <div className="grid grid-cols-1 gap-2 border-t border-border py-7 md:grid-cols-[1.2fr_2fr] md:items-baseline md:gap-12">
                  <div>
                    <h3 className="font-display text-lg tracking-[-0.02em]">{b.role}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.12em] text-subtle">{b.period}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </SectionShell>
    </>
  );
}

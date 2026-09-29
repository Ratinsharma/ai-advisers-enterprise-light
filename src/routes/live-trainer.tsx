import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/live-trainer")({
  head: () => ({
    meta: [
      { title: "iMe Live Trainer | Interactive AI Training — AI Advisers" },
      {
        name: "description",
        content:
          "Interactive AI tutors built around your approved organisational knowledge: onboarding, policy, compliance and internal knowledge, in 32 languages.",
      },
      { property: "og:title", content: "iMe Live Trainer — Training that answers back" },
      {
        property: "og:description",
        content:
          "Turn approved policies and training material into an interactive AI tutor your people can talk to.",
      },
    ],
  }),
  component: LiveTrainer,
});

const PROCESS: [string, string, string][] = [
  ["01", "Send material", "Share the approved policies and training documents in scope."],
  ["02", "Review knowledge", "We review the material with you and agree what the tutor may discuss."],
  ["03", "Build tutor", "The tutor is built around the approved knowledge."],
  ["04", "Client approval", "The organisation reviews and approves before anything goes live."],
  ["05", "Deploy", "Deploy to the environments your people already use."],
  ["06", "Train", "Employees interact using natural voice, whenever they need to."],
];

function LiveTrainer() {
  return (
    <>
      <PageHero
        eyebrow="Workforce intelligence"
        title={
          <>
            Training <span className="text-foreground">that answers back.</span>
          </>
        }
        lead="Interactive AI tutors built around your approved organisational knowledge."
        actions={
          <>
            <Cta to="/contact">Build a pilot</Cta>
            <Cta to="/ime" variant="ghost">
              See iMe
            </Cta>
          </>
        }
      />

      <SectionShell>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Static learning</p>
            <p className="mt-6 max-w-[46ch] leading-relaxed text-subtle">
              A document is issued. It is read once, if at all. Questions go unanswered, and
              understanding is assumed rather than demonstrated.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow text-foreground">Interactive conversation</p>
            <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
              An employee asks a question in their own words and receives an answer drawn only
              from material the organisation has approved — at any hour, in their language.
            </p>
          </Reveal>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <Reveal>
          <MediaPlaceholder
            label="Approved Live Trainer product demonstration video"
            ratio="16 / 9"
          />
        </Reveal>
        <ul className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {["Onboarding", "Policy", "Compliance", "Internal knowledge"].map((u, i) => (
            <Reveal as="li" key={u} delay={i * 70}>
              <div className="border-t border-border py-8 pr-6 font-display text-lg tracking-[-0.02em]">
                {u}
              </div>
            </Reveal>
          ))}
        </ul>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <Reveal>
          <h2 className="display-lg max-w-[14ch]">A managed implementation.</h2>
        </Reveal>
        <ol className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map(([n, t, d], i) => (
            <Reveal as="li" key={n} delay={i * 60}>
              <div className="h-full border-t border-border py-8 pr-8">
                <span className="font-display text-xs text-foreground">{n}</span>
                <h3 className="mt-4 font-display text-lg tracking-[-0.02em]">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </SectionShell>

      <SectionShell className="border-t border-border">
        <Reveal>
          <h2 className="display-lg max-w-[12ch]">Send us one policy.</h2>
          <p className="mt-8 max-w-[50ch] leading-relaxed text-muted-foreground">
            Show us one approved policy or training document and we will discuss what a pilot
            could look like for your organisation.
          </p>
          <Cta to="/contact" className="mt-12">
            Build a pilot
          </Cta>
        </Reveal>
      </SectionShell>
    </>
  );
}

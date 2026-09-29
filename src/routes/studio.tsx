import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "AI Advisers Studio · Video, podcast, voice, executive photography" },
      {
        name: "description",
        content:
          "Broadcast-standard video, podcast, AI avatar capture, voice, photography and executive communications produced in-house by AI Advisers Studio.",
      },
    ],
  }),
  component: Studio,
});

const WORK = [
  "Video",
  "Podcast",
  "AI avatar capture",
  "Voice",
  "Photography",
  "Branding",
  "Executive communications",
];

function Studio() {
  return (
    <>
      <PageHero
        eyebrow="AI Advisers Studio"
        title={
          <>
            Created <span className="display-serif italic text-muted-foreground">in-house.</span>
          </>
        }
        lead="The technology is AI. The standard is broadcast."
        actions={<Cta to="/contact">Discuss a production</Cta>}
      />

      <SectionShell>
        <Reveal>
          <MediaPlaceholder
            label="Approved studio reel — wide shot poster frame"
            ratio="16 / 9"
            variant="ambient"
          />
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Approved microphone close-up",
            "Approved camera and lighting rig",
            "Approved podcast recording",
            "Approved iMe capture process",
            "Approved video control desk",
            "Approved executive portrait",
          ].map((label, i) => (
            <Reveal key={label} delay={i * 60}>
              <MediaPlaceholder
                label={label}
                ratio="4 / 3"
                variant="ambient"
              />
            </Reveal>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {WORK.map((w, i) => (
            <Reveal as="li" key={w} delay={i * 60}>
              <div className="border-t border-border py-8 pr-6 font-display text-lg tracking-[-0.02em]">
                {w}
              </div>
            </Reveal>
          ))}
        </ul>
      </SectionShell>
    </>
  );
}

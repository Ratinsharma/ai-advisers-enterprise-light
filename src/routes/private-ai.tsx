import { createFileRoute } from "@tanstack/react-router";
import { Cta, SectionShell } from "@/components/site/Cta";
import { PageHero } from "@/components/site/PageHero";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/private-ai")({
  head: () => ({
    meta: [
      { title: "Private AI & Bot in a Box | Client-Controlled AI — AI Advisers" },
      {
        name: "description",
        content:
          "Private AI infrastructure for organisations that need greater control: on-premise architecture, air-gapped options, organisational knowledge and data sovereignty.",
      },
      { property: "og:title", content: "Your AI. Your infrastructure. Your control." },
      {
        property: "og:description",
        content:
          "Private, client-controlled AI infrastructure, including the Bot in a Box approach to dedicated on-premise capability.",
      },
    ],
  }),
  component: PrivateAi,
});

const ARCH = [
  "User",
  "Private interface",
  "Private AI system",
  "Organisational knowledge",
  "Client-controlled environment",
];

const CONCEPTS = [
  "Private deployment",
  "On-premise architecture",
  "Air-gapped options",
  "Organisational knowledge",
  "Dedicated hardware",
  "Local models where applicable",
  "Client control",
];

function PrivateAi() {
  return (
    <>
      <PageHero
        eyebrow="Private AI"
        title={
          <>
            Your intelligence should not have to{" "}
            <span className="text-foreground">leave your business.</span>
          </>
        }
        lead="AI infrastructure designed for organisations that need greater control over sensitive information and organisational knowledge."
        actions={<Cta to="/contact">Discuss Private AI</Cta>}
      />

      <SectionShell>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Architecture</p>
              <ol className="mt-8">
                {ARCH.map((a, i) => (
                  <li key={a}>
                    <div className="border border-border px-6 py-5 font-display text-lg tracking-[-0.02em]">
                      {a}
                    </div>
                    {i < ARCH.length - 1 && (
                      <div className="mx-auto h-8 w-px bg-gradient-to-b from-gold/60 to-transparent" />
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center">
            <Reveal delay={120}>
              <h2 className="display-md max-w-[14ch]">Public cloud versus private AI.</h2>
              <p className="mt-8 max-w-[50ch] leading-relaxed text-muted-foreground">
                Public cloud services process information in environments the organisation does
                not control. A private deployment keeps the system and the knowledge inside an
                environment the client defines, with the trade-offs made explicit rather than
                promised away.
              </p>
              <ul className="mt-10 grid gap-px sm:grid-cols-2">
                {CONCEPTS.map((c) => (
                  <li
                    key={c}
                    className="border-t border-border py-4 pr-6 text-sm text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="border-t border-border bg-surface-2/40">
        <Reveal>
          <p className="eyebrow">Bot in a Box</p>
          <h2 className="display-lg mt-8 max-w-[14ch]">Your own AI. Under your control.</h2>
          <p className="mt-8 max-w-[54ch] leading-relaxed text-muted-foreground">
            Bot in a Box represents AI Advisers' private infrastructure approach: dedicated AI
            capability designed to operate within the client's environment.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <MediaPlaceholder
            label="Approved Bot in a Box hardware photography"
            ratio="16 / 9"
            className="mt-14"
          />
        </Reveal>
        <Cta to="/contact" className="mt-12">
          Discuss Private AI
        </Cta>
      </SectionShell>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import { Cta } from "./Cta";
import { MediaPlaceholder } from "./MediaPlaceholder";

type Capability = {
  index: string;
  label: string;
  title: string[];
  copy: string;
  facts: string[];
  ctas: { label: string; to: string }[];
  media: string;
};

const CAPABILITIES: Capability[] = [
  {
    index: "01",
    label: "Workforce intelligence",
    title: ["Training", "that answers back."],
    copy: "Turn approved company knowledge, onboarding material, policies and compliance content into an interactive AI tutor employees can actually talk to.",
    facts: [
      "Photorealistic",
      "Voice-interactive",
      "Built from client-approved material",
      "32 languages",
      "Available 24/7",
      "Laptops, phones, group screens, chat booths",
    ],
    ctas: [
      { label: "Explore Live Trainer", to: "/live-trainer" },
      { label: "Build a pilot", to: "/contact" },
    ],
    media: "Approved iMe Live Trainer demonstration",
  },
  {
    index: "02",
    label: "Executive presence",
    title: ["Be in the room", "without another", "meeting."],
    copy: "A photorealistic, voice-accurate digital representation of an executive designed to present, interact and answer questions using approved knowledge.",
    facts: [
      "Photorealistic",
      "Voice matched",
      "Approved knowledge",
      "32 languages",
      "Interactive",
      "Private deployment options",
    ],
    ctas: [
      { label: "Watch iMe", to: "/ime" },
      { label: "Request a demonstration", to: "/contact" },
    ],
    media: "Approved Kenn / iMe demonstration",
  },
  {
    index: "03",
    label: "Boardroom intelligence",
    title: ["Clarity.", "Not complexity."],
    copy: "Plain-English strategic guidance for leadership teams determining where AI creates value, where it creates risk and how their organisation should respond.",
    facts: [
      "Value — where can AI materially improve the business?",
      "Risk — which information and decisions require greater control?",
      "People — which activities should move to higher-value human roles?",
      "Revenue — can existing knowledge or IP create AI-enabled opportunities?",
    ],
    ctas: [{ label: "Begin an advisory conversation", to: "/advisory" }],
    media: "Approved executive briefing photography",
  },
  {
    index: "04",
    label: "Private AI",
    title: ["Your AI.", "Your infrastructure.", "Your control."],
    copy: "AI infrastructure designed for organisations that need greater control over sensitive information and organisational knowledge.",
    facts: [
      "Private",
      "On-premise",
      "Air-gapped option",
      "Client control",
      "Organisational knowledge",
      "Data sovereignty",
    ],
    ctas: [{ label: "Explore Private AI", to: "/private-ai" }],
    media: "Approved hardware photography",
  },
];

export function CapabilityScroller() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset["idx"]);
            setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[minmax(0,32%)_minmax(0,68%)] lg:gap-16 lg:px-10">
      <div className="hidden lg:block">
        <div className="sticky top-32">
          <p className="eyebrow">Four capabilities</p>
          <ul className="mt-10 space-y-6">
            {CAPABILITIES.map((c, i) => (
              <li key={c.index} className="flex items-baseline gap-5">
                <span
                  className={`font-display text-3xl transition-colors duration-500 ${
                    active === i ? "text-foreground" : "text-subtle/40"
                  }`}
                >
                  {c.index}
                </span>
                <span
                  className={`text-sm transition-colors duration-500 ${
                    active === i ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {c.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-12 h-px w-full bg-border">
            <div
              className="h-px bg-foreground transition-all duration-700 ease-[var(--ease-cinema)]"
              style={{ width: `${((active + 1) / CAPABILITIES.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="space-y-28 lg:space-y-40">
        {CAPABILITIES.map((c, i) => (
          <div
            key={c.index}
            data-idx={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-2xl text-foreground lg:hidden">{c.index}</span>
              <p className="eyebrow">{c.label}</p>
            </div>
            <h3 className="display-md mt-6">
              {c.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-6 max-w-[56ch] leading-relaxed text-muted-foreground">{c.copy}</p>

            <MediaPlaceholder
              label={c.media}
              ratio="16 / 9"
              variant="ambient"
              className="mt-10"
            />

            <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {c.facts.map((f) => (
                <li
                  key={f}
                  className="border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {c.ctas.map((cta, k) => (
                <Cta key={cta.to + cta.label} to={cta.to} variant={k === 0 ? "primary" : "secondary"}>
                  {cta.label}
                </Cta>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

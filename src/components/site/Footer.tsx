import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-base font-medium text-foreground">
              <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background text-[0.7rem] font-semibold">Ai</span>
              <span>AI Advisers</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Enterprise AI strategy, intelligent digital humans, executive training, and private AI infrastructure for organisations that intend to lead.
            </p>
          </div>

          <FooterCol
            title="Capabilities"
            links={[
              { label: "iMe Executive AI", to: "/ime" },
              { label: "iMe Live Trainer", to: "/live-trainer" },
              { label: "Boardroom Advisory", to: "/advisory" },
              { label: "Private AI", to: "/private-ai" },
              { label: "Studio", to: "/studio" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { label: "About", to: "/about" },
              { label: "Kenn Joyce", to: "/founder" },
              { label: "Contact", to: "/contact" },
            ]}
          />

          <div>
            <p className="eyebrow">Enquiries</p>
            <p className="mt-4 text-sm text-muted-foreground">
              For board-level engagements, partnerships, and press.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-88"
            >
              Request a briefing
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-subtle">
          <span>© {new Date().getFullYear()} AI Advisers. All rights reserved.</span>
          <span>Enterprise AI intelligence</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

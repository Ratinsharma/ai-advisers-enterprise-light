import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "iMe", to: "/ime" },
  { label: "Training", to: "/live-trainer" },
  { label: "Advisory", to: "/advisory" },
  { label: "Private AI", to: "/private-ai" },
  { label: "Studio", to: "/studio" },
  { label: "About", to: "/about" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-[0.95rem] font-medium tracking-[-0.01em] text-foreground"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background text-[0.7rem] font-semibold">Ai</span>
          <span>AI Advisers</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-[0.875rem] text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              activeProps={{ className: "text-foreground bg-surface-2" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-foreground"
          >
            Talk to us
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-88"
          >
            Get started
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 block h-px w-4 bg-foreground transition-transform duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col px-5 py-4 sm:px-8">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Get started
              <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

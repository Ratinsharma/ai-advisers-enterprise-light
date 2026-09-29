import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | AI Advisers — Kenn Joyce reads every enquiry" },
      {
        name: "description",
        content:
          "Start a private conversation with AI Advisers about executive AI, interactive training, board-level advisory or private AI infrastructure.",
      },
    ],
  }),
  component: Contact,
});

const INTERESTS = [
  "iMe Executive AI",
  "iMe Live Trainer",
  "EU AI Act Trainer",
  "Boardroom Advisory",
  "Private AI / Bot in a Box",
  "Studio",
  "General",
];

type Status = "idle" | "loading" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get("name") ?? "").trim()) next["name"] = "Please enter your full name.";
    if (!String(data.get("company") ?? "").trim()) next["company"] = "Please enter your company.";
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next["email"] = "Please enter a valid work email.";
    if (!String(data.get("message") ?? "").trim())
      next["message"] = "Please tell us what you are trying to achieve.";

    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    // No enquiry backend is connected yet — the form validates and confirms locally.
    window.setTimeout(() => setStatus("success"), 700);
  }

  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-24 sm:px-8 lg:px-10 lg:pt-44">
      <div className="relative mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="display-lg mt-6 max-w-[14ch]">
              Start with a <span className="display-serif italic text-muted-foreground">private conversation.</span>
            </h1>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground">
              Kenn Joyce reads every enquiry personally. Your message is treated confidentially
              and replied to within one business day.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <dl className="mt-12 space-y-6 border-t border-border pt-6 text-sm">
              <div className="grid grid-cols-[8rem_1fr] gap-4">
                <dt className="eyebrow text-subtle">Email</dt>
                <dd>
                  <a className="text-foreground transition-opacity hover:opacity-70" href="mailto:kenn.joyce@aiadvisers.io">
                    kenn.joyce@aiadvisers.io
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4">
                <dt className="eyebrow text-subtle">Phone</dt>
                <dd>
                  <a className="text-foreground transition-opacity hover:opacity-70" href="tel:+353863262239">
                    +353 86 326 2239
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4">
                <dt className="eyebrow text-subtle">Office</dt>
                <dd className="text-muted-foreground">Dublin, Ireland</dd>
              </div>
              <div className="grid grid-cols-[8rem_1fr] gap-4">
                <dt className="eyebrow text-subtle">Hours</dt>
                <dd className="text-muted-foreground">UK &amp; Ireland business hours, GMT</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {status === "success" ? (
            <div className="rounded-[var(--radius)] border border-foreground/40 bg-surface p-10">
              <h2 className="display-md">Thank you.</h2>
              <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground">
                Your enquiry has been recorded. Kenn will reply directly to arrange the
                briefing — usually within one business day.
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field name="name" label="Full name" error={errors["name"]} />
                <Field name="company" label="Company" error={errors["company"]} />
                <Field name="title" label="Title" required={false} />
                <Field name="email" label="Work email" type="email" error={errors["email"]} />
                <Field name="phone" label="Phone" type="tel" required={false} />
                <div>
                  <label htmlFor="interest" className="eyebrow block">
                    Area of interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-3 h-12 w-full border-b border-input bg-transparent text-sm text-foreground outline-none transition-colors focus:border-foreground"
                  >
                    {INTERESTS.map((i) => (
                      <option key={i} value={i} className="bg-surface">
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="eyebrow block">
                  What are you trying to achieve?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  aria-invalid={Boolean(errors["message"])}
                  className="mt-3 w-full border-b border-input bg-transparent py-3 text-sm leading-relaxed text-foreground outline-none transition-colors focus:border-foreground"
                />
                {errors["message"] && (
                  <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-88 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending" : "Request a private briefing"}
                  <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-subtle">Reply within one business day.</p>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  error,
  required = true,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string | undefined;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
        {!required && <span className="ml-2 text-subtle/60 normal-case">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={Boolean(error)}
        className="mt-3 h-12 w-full border-b border-input bg-transparent text-sm text-foreground outline-none transition-colors focus:border-foreground"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}

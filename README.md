# AI Advisers — Enterprise Light · v1

**Historical source snapshot** · Exported 29 September 2026

The complete earlier Enterprise Light website. It uses Instrument Serif and Inter Tight, pearl surfaces, dark ink and warm gold accents. Company capabilities and executive positioning lead the design. This is a historical reference, not the recommended current website.

## What is included

- Complete application source and existing public media assets.
- Package manifest, frozen Bun lockfile and build/tooling configuration.
- Version overview, change notes and contribution instructions.

## Run locally

Use Bun 1.4.2, the runtime used for this export.

```sh
git clone https://github.com/Ratinsharma/ai-advisers-enterprise-light.git
cd ai-advisers-enterprise-light
bun install --frozen-lockfile
bun run dev --host 127.0.0.1 --port 5173
```

Open http://127.0.0.1:5173/. The development server is separate from the existing workspace preview on port 8084; localhost links work only on the machine running them.

```sh
bun run typecheck
bun run lint
bun run build
```

See [docs/OVERVIEW.md](docs/OVERVIEW.md) for the page map and implementation notes.

## Historical-content notice

Pricing, regulatory dates, security promises, media embeds and enquiry/privacy behaviour are preserved as historical source. They have not been updated or verified for current production use. Use the latest repository for the redesigned training-led website. Publishing this snapshot does not deploy it.

## Version family

- [Cabinet · iMe training edition](https://github.com/Ratinsharma/ai-advisers-website)
- [Original Cabinet edition](https://github.com/Ratinsharma/ai-advisers-cabinet-original)
- [Enterprise Light · v1](https://github.com/Ratinsharma/ai-advisers-enterprise-light)
- [Portrait First · v2 documentation archive](https://github.com/Ratinsharma/ai-advisers-portrait-first-archive)

## Rights and publication scope

Public repository visibility is not an open-source licence grant. No new licence is assigned in this export. Company marks, historical client logos, portraits and other media retain their respective rights. Historical client marks do not identify current iMe customers.

Private research, prospect lists, sales documents, internal audit reports, credentials, environment files, runtime logs, dependencies and generated deployment outputs are excluded.

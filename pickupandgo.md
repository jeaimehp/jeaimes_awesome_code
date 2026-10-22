# Pick Up and Go

Handoff notes for the next AI session working in this repo. Read this first, then
update it (see "Keeping this file current" at the bottom) before ending your session.

_Last updated: 2026-10-21_

## What this project is

A single-page personal portfolio site for **Jeaime Powell** (Systems Analyst &
Community Building Specialist, TACC). It's built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4 and
shadcn/ui. It's exported as a **static site** (`output: "export"`) and hosted on
**GitHub Pages**.

- Repo: https://github.com/jeaimehp/jeaimes_awesome_code (branch `main`)
- Local path: `/Users/jeaimehp/Documents/jeaimes_awesome_code`
- **Live site:** https://jeaimehpc.com/jeaimes_awesome_code/
  (`jeaimehp.github.io/jeaimes_awesome_code/` redirects there, because the owner's GitHub
  user site has the custom domain `jeaimehpc.com`)

The repo used to hold only a joke README ("million dollar app"). On 2026-10-21 it
was replaced with the portfolio site from an exported workspace tarball
(`~/Downloads/workspace-ce50e9d5-....tar`). That workspace came from an AI site builder, which
explains the extra `.zscripts/`, `mini-services/`, `examples/`, `prisma/`, `db/`
and unused shadcn components. The site itself doesn't use any of them.

## Where things live

| What | Where |
| --- | --- |
| **All page content** (profile, stats, skills, experience, honors, publications, education) | `src/lib/portfolio-data.ts` |
| Page assembly | `src/app/page.tsx` |
| Section components | `src/components/sections/*.tsx` |
| Metadata, fonts, favicon | `src/app/layout.tsx` |
| Theme tokens | `src/app/globals.css` |
| Photo | `public/jeaime-powell.jpg` |
| Static JSON at `/api` | `src/app/api/route.ts` (`force-static`) |
| Static export + basePath config | `next.config.ts` |
| Deploy workflow | `.github/workflows/deploy.yml` |

## How it builds and deploys

- On every push to `main`, `.github/workflows/deploy.yml` runs: Bun, then
  `bun install --frozen-lockfile`, then `bun run build`, then it uploads `./out` to GitHub Pages.
- **basePath:** the workflow sets `NEXT_BASE_PATH=/<repo-name>`, or leaves it empty for
  `<user>.github.io` repos. Any hard-coded asset URL (`/foo.jpg`) **must** be
  prefixed with `process.env.NEXT_BASE_PATH ?? ""`, or it 404s on Pages. See
  `hero.tsx` and `layout.tsx`.
- Pages source is **GitHub Actions** (`build_type: workflow`). It was previously
  "deploy from branch" (legacy) and was switched on 2026-10-21. Check with
  `gh api repos/jeaimehp/jeaimes_awesome_code/pages`.

### Test locally the way CI does

Bun isn't installed globally on this Mac. Run it through npx:

```bash
cd /Users/jeaimehp/Documents/jeaimes_awesome_code
npx -y bun@1.3.4 install --frozen-lockfile
NEXT_BASE_PATH=/jeaimes_awesome_code npx -y bun@1.3.4 run build
npx -y bun@1.3.4 run lint
```

To preview under the real sub-path, serve a directory that has a symlink
`jeaimes_awesome_code -> out`, then open `http://localhost:<port>/jeaimes_awesome_code/`.

## Current state

- [x] Tarball extracted into the repo. Its embedded `.git` was **excluded**, so GitHub
      history and the `origin` remote are intact.
- [x] Pages build passes. Lint is clean. Site verified in a browser under
      `/jeaimes_awesome_code/`: all assets 200, no console errors, `/api` returns JSON.
- [x] Fixed: the favicon in `layout.tsx` was missing the basePath prefix.
- [x] `upload/` (CV PDF + original photo), `db/custom.db` and `.zscripts/dev.pid`
      are gitignored. They're kept locally but never committed.
- [x] Portfolio committed and pushed to `main` (2026-10-21).
- [x] Pages source switched to GitHub Actions. The deploy workflow succeeded, and the live site was
      verified in a browser: page, photo and favicon load, no console errors.

## Where to pick up

The site is deployed and working. There's no blocking work. Optional next steps:

1. Cleanup: remove the unused builder scaffolding (`.zscripts/`, `Caddyfile`,
   `mini-services/`, `examples/`, `prisma/`, `src/lib/db.ts`, `tests/`) and
   unused dependencies. Check that the build still passes afterwards.
2. Workflow maintenance: GitHub warns that `actions/checkout@v4`,
   `upload-pages-artifact@v3` and `deploy-pages@v4` target the deprecated Node 20. Bump them
   to newer major versions when they're available.
3. Content edits go in `src/lib/portfolio-data.ts`. Pushing to `main` redeploys automatically.

## Gotchas

- `.env` (just `DATABASE_URL` for the unused Prisma setup) is gitignored. Keep it that way.
- `next.config.ts` sets `typescript.ignoreBuildErrors: true`. That means type errors won't fail
  the build. Run `npx tsc --noEmit` if you want real type checking.
- Content changes belong in `portfolio-data.ts`, not in the section components.
- `/api` exports as an extensionless file (`out/api`). Pages serves it at
  `/jeaimes_awesome_code/api` (no trailing slash) as `application/octet-stream`,
  and `/api/` 404s. Nothing on the site uses it.

## Keeping this file current

Every session that changes the repo must update this file before finishing:
bump "Last updated", tick or add items in **Current state**, and rewrite
**Where to pick up** so the next session knows exactly what to do next.

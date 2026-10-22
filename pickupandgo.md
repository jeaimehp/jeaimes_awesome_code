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
- Expected live URL once deployed: https://jeaimehp.github.io/jeaimes_awesome_code/

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
- The repo needs **Settings → Pages → Source = GitHub Actions**. Unconfirmed
  whether this has been set.

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
- [ ] **GitHub Pages is not enabled on the repo.** As of the push,
      `gh api repos/jeaimehp/jeaimes_awesome_code/pages` returned 404. The workflow's
      `build` job can pass, but `deploy` fails until Pages is turned on.

## Where to pick up

1. The owner needs to go to GitHub → repo **Settings → Pages → Source → GitHub Actions**.
   Alternatively, with their OK:
   `gh api -X POST repos/jeaimehp/jeaimes_awesome_code/pages -f build_type=workflow`.
2. Re-run the workflow (`gh workflow run deploy.yml`, or Actions tab → Re-run), then
   confirm https://jeaimehp.github.io/jeaimes_awesome_code/ loads with the photo.
3. Optional cleanup: remove the unused builder scaffolding (`.zscripts/`, `Caddyfile`,
   `mini-services/`, `examples/`, `prisma/`, `src/lib/db.ts`, `tests/`) and
   unused dependencies. Check that the build still passes afterwards.

## Gotchas

- `.env` (just `DATABASE_URL` for the unused Prisma setup) is gitignored. Keep it that way.
- `next.config.ts` sets `typescript.ignoreBuildErrors: true`. That means type errors won't fail
  the build. Run `npx tsc --noEmit` if you want real type checking.
- Content changes belong in `portfolio-data.ts`, not in the section components.

## Keeping this file current

Every session that changes the repo must update this file before finishing:
bump "Last updated", tick or add items in **Current state**, and rewrite
**Where to pick up** so the next session knows exactly what to do next.

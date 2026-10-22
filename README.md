# Jeaime Powell — Portfolio

A modern, single-page portfolio site for **Jeaime Powell**, Systems Analyst & Community Building Specialist. Built with Next.js 16, TypeScript, Tailwind CSS 4, and shadcn/ui — exported as a static site and deployable to **GitHub Pages** for free.

## ✨ Features

- **Single-page scroll** with sticky nav: About · Skills · Experience · Honors · Publications · Education · Contact
- **Light & dark mode** with persisted preference
- **Responsive** — mobile-first, looks great on phones, tablets, and desktops
- **Fast & static** — `next export` output runs on GitHub Pages with no server
- **Auto-deploys** to GitHub Pages via a bundled GitHub Actions workflow
- **Auto basePath** — works whether deployed at `username.github.io` or `username.github.io/<repo>`
- **Accessible** — semantic HTML, ARIA labels, keyboard-friendly navigation
- **No tracking, no cookies** — fully client-side

## 🚀 Local Development

Requirements: [Bun](https://bun.sh/) (or Node 18+).

```bash
bun install         # or: npm install
bun run dev         # or: npm run dev
# open http://localhost:3000
```

## 📦 Static Export (for GitHub Pages)

```bash
bun run build       # produces ./out/  (static HTML)
```

The `./out/` directory can be uploaded to any static host, including GitHub Pages.

## 🐙 Deploy to GitHub Pages (Automated)

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys the site on every push to `main`.

### Steps

1. **Create a new repository on GitHub**
   - For a top-level `https://<username>.github.io/` URL, name the repo `<username>.github.io`.
   - Otherwise, name it whatever you like (e.g. `portfolio`) — the site will live at `https://<username>.github.io/portfolio/`.

2. **Push this project to the repo**

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to the repo on GitHub → **Settings → Pages**.
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch").
   - That's it. The included workflow will run on the next push and deploy the site.

4. **Watch the workflow**
   - Go to the **Actions** tab to see the build & deploy in progress.
   - When it finishes, the URL will be printed in the workflow summary.

> The `basePath` is **auto-detected** from the repo name in the workflow — no manual config edits required. If you rename the repo later, it just works.

## 🛠️ Customization

All content lives in **`src/lib/portfolio-data.ts`** — edit that single file to change:

- Profile info (name, title, summary, email, links)
- Stats shown in the hero
- Skill categories & items
- Experience entries
- Honors, certifications
- Publications
- Education

The professional photo lives in **`public/jeaime-powell.jpg`** — replace it with another photo at the same path to update.

## 🎨 Tech Stack

| Layer        | Tech                                                            |
| ------------ | -------------------------------------------------------------- |
| Framework    | Next.js 16 (App Router, static export)                         |
| Language     | TypeScript 5                                                   |
| Styling      | Tailwind CSS 4 + shadcn/ui (New York)                          |
| Icons        | lucide-react                                                   |
| Fonts        | Geist Sans / Geist Mono (via `next/font/google`)               |
| Hosting      | GitHub Pages (via GitHub Actions)                              |

## 📁 Project Structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deployment workflow
├── public/
│   ├── jeaime-powell.jpg          # Professional photo
│   └── .nojekyll                  # Bypass Jekyll on GitHub Pages
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Metadata, fonts, root layout
│   │   ├── page.tsx               # Assembles all sections
│   │   └── globals.css            # Tailwind + theme tokens
│   ├── components/
│   │   ├── section-heading.tsx
│   │   └── sections/
│   │       ├── site-header.tsx
│   │       ├── hero.tsx
│   │       ├── about.tsx
│   │       ├── skills.tsx
│   │       ├── experience.tsx
│   │       ├── honors.tsx
│   │       ├── publications-education.tsx
│   │       └── contact.tsx
│   └── lib/
│       └── portfolio-data.ts      # ← edit this file to update content
├── next.config.ts                 # static export + basePath
└── package.json
```

## 📝 License

Personal portfolio content © Jeaime Powell. Code structure is yours to adapt.

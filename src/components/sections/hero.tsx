import { profile, stats } from "@/lib/portfolio-data";
import { MapPin, Mailbox, Linkedin, Github, ArrowDown } from "lucide-react";

// Prefix static asset URLs with the Next.js basePath so that images
// resolve correctly when the site is deployed under
// <username>.github.io/<repo-name>/ as well as at a root domain.
const BASE = process.env.NEXT_BASE_PATH ?? "";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 bg-grid"
    >
      {/* Gradient halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent), transparent)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for collaborations & advisory
            </span>

            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
                {profile.title}
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="max-w-xl text-pretty text-lg text-muted-foreground">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
              >
                <Mailbox className="h-4 w-4 text-accent" />
                {profile.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative mx-auto lg:mx-0">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] opacity-60 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-primary))",
              }}
            />
            <div className="relative aspect-[4/5] w-56 overflow-hidden rounded-[1.75rem] border-2 border-background/80 bg-card shadow-2xl sm:w-64 lg:w-72">
              <img
                src={`${BASE}${profile.photo}`}
                alt={`Portrait of ${profile.name}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border/60 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                20+ years
              </p>
              <p className="text-sm font-semibold">in IT &amp; HPC</p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background/80 px-5 py-6 text-center backdrop-blur transition-colors hover:bg-accent/5"
            >
              <dd className="text-3xl font-bold tracking-tight text-foreground">
                {s.value}
              </dd>
              <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mt-14 flex justify-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent"
          >
            Scroll
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

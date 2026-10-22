import { profile } from "@/lib/portfolio-data";
import { Mailbox, Linkedin, Building2, Github, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 shadow-sm sm:p-12 lg:p-16">
          {/* Decorative gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-accent), transparent)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full opacity-20 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, var(--color-primary), transparent)",
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <span className="h-px w-6 bg-accent" />
                Get in touch
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Let&apos;s build reliable systems — and the teams behind them.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base text-muted-foreground">
                Open to advisory roles, HPC &amp; IoT consulting, AI application
                development, and STEM education collaborations. Reach out via
                email or any of the channels below.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
              >
                <Mailbox className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/80 px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/80 px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={profile.links.company}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/80 px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:border-accent/40 hover:bg-accent/5"
              >
                <Building2 className="h-4 w-4" />
                TACC Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with Next.js &middot; Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}

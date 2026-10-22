import { honors, certifications } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { Award, BadgeCheck, Trophy, Microscope, FileText, FileBadge } from "lucide-react";

export function Honors() {
  return (
    <section id="honors" className="scroll-mt-20 border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Honors & Awards"
          title="Recognized research leadership and professional certifications."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {/* Honors */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <Trophy className="h-4 w-4 text-accent" />
              Honors &amp; Awards
            </h3>
            <ul className="mt-4 space-y-3">
              {honors.map((h) => (
                <li
                  key={h.title}
                  className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm transition-all hover:border-accent/40"
                >
                  <div className="flex items-start gap-3">
                    <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{h.title}</p>
                      {(h.org || h.year) && (
                        <p className="text-xs text-muted-foreground">
                          {[h.org, h.year].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      {h.description && (
                        <p className="mt-1.5 text-sm text-pretty text-muted-foreground">
                          {h.description}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <BadgeCheck className="h-4 w-4 text-accent" />
              Certifications
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((c) => (
                <li
                  key={c.name}
                  className="rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm transition-all hover:border-accent/40"
                >
                  <div className="flex items-start gap-3">
                    <FileBadge className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{c.name}</p>
                      {(c.org || c.year) && (
                        <p className="text-xs text-muted-foreground">
                          {[c.org, c.year].filter(Boolean).join(" · ")}
                        </p>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative banner */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-card/60 p-5">
            <Microscope className="h-6 w-6 text-accent" />
            <p className="mt-3 text-sm font-medium">Principal Investigator</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Led federally funded research on micro-controller telemetry &amp; federated science gateways
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/60 p-5">
            <FileText className="h-6 w-6 text-accent" />
            <p className="mt-3 text-sm font-medium">Published Researcher</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Coastal AVHRR buoy prediction, ecological loggers, and neural-network land cover classification
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-card/60 p-5">
            <Trophy className="h-6 w-6 text-accent" />
            <p className="mt-3 text-sm font-medium">Field Deployment</p>
            <p className="mt-1 text-xs text-muted-foreground">
              PolarGrid Greenland cyberinfrastructure field team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

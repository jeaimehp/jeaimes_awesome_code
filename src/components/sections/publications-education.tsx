import { publications, education } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { FileText, GraduationCap, BookOpen } from "lucide-react";

export function PublicationsEducation() {
  return (
    <section
      id="publications"
      className="scroll-mt-20 border-b border-border/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Research & Education"
          title="Scholarship and lifelong learning."
          description="Peer-reviewed publications, funded research, and formal education across computer science, applied mathematics, and information systems."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
          {/* Publications */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="h-4 w-4 text-accent" />
              Publications &amp; Funded Research
            </h3>
            <ul className="mt-4 space-y-3">
              {publications.map((p, idx) => (
                <li
                  key={p.title}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card/60 p-4 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 font-mono text-xs font-semibold text-accent ring-1 ring-accent/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-pretty font-medium leading-snug text-foreground">
                      {p.title}
                    </p>
                    {p.venue && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {p.venue}
                      </p>
                    )}
                  </div>
                  <FileText className="ml-auto mt-1 h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-accent" />
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              <GraduationCap className="h-4 w-4 text-accent" />
              Education
            </h3>
            <ul className="mt-4 space-y-3">
              {education.map((e) => (
                <li
                  key={`${e.degree}-${e.org}`}
                  className="rounded-xl border border-border/60 bg-card/60 p-5 shadow-sm transition-all hover:border-accent/40"
                >
                  <p className="text-base font-semibold text-foreground">
                    {e.degree}
                  </p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {e.field}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {e.period}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-dashed border-border/60 bg-muted/30 p-5">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">PhD research</span>{" "}
                at Dakota State University focused on Information Systems, building
                on a Master&apos;s in Applied Mathematics with a Remote Sensing
                concentration and a Bachelor&apos;s in Computer Science from
                Elizabeth City State University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

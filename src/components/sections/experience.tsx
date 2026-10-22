import { experiences } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Two decades across supercomputers, sensors, and classrooms."
          description="Selected roles from a 20+ year career in IT, HPC, IoT, and education."
        />

        <div className="relative mt-12">
          {/* Vertical timeline rail */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-[11px]"
          />

          <ol className="space-y-10">
            {experiences.map((exp) => (
              <li
                key={`${exp.org}-${exp.role}`}
                className="relative pl-8 sm:pl-12"
              >
                {/* Timeline dot */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full ring-4 ring-background sm:h-6 sm:w-6 ${
                    exp.current
                      ? "bg-accent"
                      : "bg-border"
                  }`}
                >
                  {exp.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
                  )}
                </span>

                <article className="group rounded-2xl border border-border/60 bg-card/60 p-5 shadow-sm transition-all hover:border-accent/40 hover:shadow-md sm:p-6">
                  <header className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {exp.org}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-1 text-xs text-muted-foreground sm:items-end">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                      <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                        {exp.duration}
                      </span>
                    </div>
                  </header>

                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {exp.highlights.slice(0, 5).map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span className="text-pretty leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.highlights.length > 5 && (
                    <details className="group/details mt-3 text-sm">
                      <summary className="cursor-pointer list-none text-xs font-medium uppercase tracking-wider text-accent hover:underline">
                        + {exp.highlights.length - 5} more highlights
                      </summary>
                      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                        {exp.highlights.slice(5).map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span className="text-pretty leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 rounded-xl border border-dashed border-border/60 bg-muted/30 px-4 py-3 text-center text-xs text-muted-foreground">
          <Briefcase className="mx-auto mb-1 h-4 w-4 text-accent" />
          Earlier roles include Computer Technician at The DataBank,
          Network Hardware Technician at InteliPort, ONR Undergraduate Researcher,
          NMR Imaging Researcher at Norfolk State University, Computer Aide at Betac,
          and Store Manager at Carolina Computers. Full history on LinkedIn.
        </div>
      </div>
    </section>
  );
}

import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="A career built at the intersection of supercomputing, sensors, and people."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
            <p>
              {profile.summary}
            </p>
            <p>
              Over a 20+ year career, I have managed national-critical Cray
              supercomputers (XC40 Surge, XC30, Lonestar5) for agencies
              including the U.S. government, architected cloud-based decision
              support systems across AWS, Azure, and Google Cloud, and deployed
              low-cost environmental IoT sensors for multi-million-dollar
              funded research projects at the Texas Advanced Computing Center.
            </p>
            <p>
              I bring the same rigor to people as to infrastructure. As chair of
              the HackHPC.org organizing committee, I have run dozens of
              hackathons that bring HPC and cyberinfrastructure skills to
              students, faculty, and underserved communities. As a University
              Lecturer at UT Austin, I built the curriculum for SDS 322/392 —
              Introduction to Scientific Programming in C and Fortran — and
              mentored hundreds of students into research careers.
            </p>
            <p>
              Today I work as a Systems Analyst at Omnibond Systems in Orlando,
              Florida, while continuing to advise on Agentic AI development,
              IoT sensor systems, and STEM education initiatives. I am
              passionate about building technology that is reliable, accessible,
              and that opens doors for the next generation of technologists.
            </p>
          </div>

          <aside className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Focus Areas
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "High-Performance Computing operations",
                "Cloud infrastructure (AWS / Azure / GCP)",
                "Environmental IoT & embedded systems",
                "Agentic AI application development",
                "Cybersecurity & secure infrastructure",
                "STEM education & workforce development",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border/60 pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Languages &amp; Tooling
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {["C", "Fortran 95/2003", "C++", "Python", "Bash", "SQL", "MQTT", "Solidity"].map(
                  (lang) => (
                    <span
                      key={lang}
                      className="rounded-md border border-border/60 bg-background/80 px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {lang}
                    </span>
                  ),
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

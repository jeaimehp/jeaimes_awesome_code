import { skillCategories } from "@/lib/portfolio-data";
import { SectionHeading } from "@/components/section-heading";
import {
  Server,
  Cloud,
  Cpu,
  Brain,
  GraduationCap,
  Code,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  server: Server,
  cloud: Cloud,
  cpu: Cpu,
  brain: Brain,
  "graduation-cap": GraduationCap,
  code: Code,
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="From kernel modules to smart contracts — and the classrooms in between."
          description="Six domains spanning 20+ years of professional practice across national labs, universities, and industry."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? Code;
            return (
              <div
                key={cat.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                />
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border/60 bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground/75"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

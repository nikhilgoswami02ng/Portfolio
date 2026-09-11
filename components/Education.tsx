import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-content border-t border-space-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-sm font-medium text-accent-blue">Education</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        Academic foundation.
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex gap-4 rounded-xl border border-space-border bg-space-panel/60 p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-gold/10 text-accent-gold">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-text-primary">
                {item.degree}
              </h3>
              {item.field && (
                <p className="mt-1 text-sm text-text-muted">{item.field}</p>
              )}
              <p className="mt-2 text-sm text-text-muted">{item.school}</p>
              <p className="mt-1 text-sm text-text-faint">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Briefcase } from "lucide-react";
import { bankingExperience, earlyCareer, ExperienceItem } from "@/lib/data";

function TimelineGroup({
  heading,
  items,
  startIndex,
}: {
  heading: string;
  items: ExperienceItem[];
  startIndex: number;
}) {
  return (
    <div>
      <h3 className="mb-6 text-sm font-medium uppercase tracking-wide text-text-faint">
        {heading}
      </h3>
      <ol className="space-y-0">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.company}-${item.period}`} className="relative pl-14 sm:pl-16">
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute left-[19px] top-10 bottom-0 w-px bg-space-border sm:left-[23px]"
                />
              )}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-display font-semibold sm:h-12 sm:w-12 ${
                  item.current
                    ? "border-accent-blue/60 bg-accent-blue/10 text-accent-blue"
                    : "border-space-borderStrong bg-space-panel text-text-muted"
                }`}
              >
                {String(startIndex + idx + 1).padStart(2, "0")}
              </span>

              <div className="pb-12">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
                    {item.role}
                  </h4>
                  <span className="text-sm text-text-faint">{item.period}</span>
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm text-accent-gold">
                  <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.company} — {item.location}
                </p>

                {item.overview && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
                    {item.overview}
                  </p>
                )}

                <ul className="mt-4 space-y-2.5">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="relative max-w-2xl pl-4 text-sm leading-relaxed text-text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent-blue/70"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-content border-t border-space-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-sm font-medium text-accent-blue">Experience</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        A career built across trade desks and client-facing operations.
      </h2>

      <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-12">
        <TimelineGroup heading="Banking Domain" items={bankingExperience} startIndex={0} />
        <TimelineGroup
          heading="Early Career"
          items={earlyCareer}
          startIndex={bankingExperience.length}
        />
      </div>
    </section>
  );
}

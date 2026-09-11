import {
  Landmark,
  FileText,
  ShieldCheck,
  SendToBack,
  Network,
  Radio,
  ClipboardCheck,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { competencies, CompetencyGroup } from "@/lib/data";

const iconMap: Record<CompetencyGroup["icon"], LucideIcon> = {
  landmark: Landmark,
  fileText: FileText,
  shieldCheck: ShieldCheck,
  sendToBack: SendToBack,
  network: Network,
  radio: Radio,
  clipboardCheck: ClipboardCheck,
  gauge: Gauge,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-content border-t border-space-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-sm font-medium text-accent-blue">Expertise</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        Core competencies across the trade lifecycle.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {competencies.map((group) => {
          const Icon = iconMap[group.icon];
          return (
            <div
              key={group.title}
              className="card-glow rounded-xl p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-text-primary">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm leading-snug text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

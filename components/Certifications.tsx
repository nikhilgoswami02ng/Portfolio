import { Award, Wrench, Globe } from "lucide-react";
import { certifications, technicalTools, languages } from "@/lib/data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="mx-auto max-w-content border-t border-space-border px-5 py-20 sm:px-8 sm:py-28"
    >
      <p className="text-sm font-medium text-accent-blue">Certifications & Tools</p>
      <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
        Credentials and systems behind the work.
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        <div className="card-glow rounded-xl p-6">
          <div className="flex items-center gap-2.5 text-accent-gold">
            <Award className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-sm font-semibold text-text-primary">
              Certifications
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="text-sm leading-relaxed text-text-muted">
                {cert}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glow rounded-xl p-6">
          <div className="flex items-center gap-2.5 text-accent-blue">
            <Wrench className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-sm font-semibold text-text-primary">
              Technical Tools
            </h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {technicalTools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-space-border px-3 py-1 text-xs text-text-muted"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glow rounded-xl p-6">
          <div className="flex items-center gap-2.5 text-accent-violet">
            <Globe className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-display text-sm font-semibold text-text-primary">
              Languages
            </h3>
          </div>
          <ul className="mt-4 space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between text-sm text-text-muted"
              >
                <span className="text-text-primary">{lang.name}</span>
                <span>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

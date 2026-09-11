import { profile } from "@/lib/data";

const stats = [
  { value: "3+", label: "Years in trade forex" },
  { value: "2", label: "Banking institutions" },
  { value: "5", label: "SWIFT message types handled" },
  { value: "0", label: "Major audit observations" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium text-accent-blue">About</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Grounded in regulation. Fluent in cross-border trade.
          </h2>
        </div>

        <div>
          <p className="max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {profile.summary}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-text-primary">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

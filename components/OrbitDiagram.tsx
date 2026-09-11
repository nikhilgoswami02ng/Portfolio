import { orbitSkills } from "@/lib/data";

const ringConfig = [
  { diameter: 130, duration: 16, reverse: false },
  { diameter: 190, duration: 22, reverse: true },
  { diameter: 250, duration: 28, reverse: false },
  { diameter: 310, duration: 34, reverse: true },
];

export default function OrbitDiagram() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[400px]"
      role="img"
      aria-label="Diagram of core expertise areas orbiting Nikhil's trade finance specialty: Trade Finance, Foreign Exchange, Compliance, and Risk & Audit."
    >
      {/* Central sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent-blue via-accent-violet to-accent-gold shadow-[0_0_40px_rgba(91,127,255,0.45)]">
          <span className="font-display text-sm sm:text-base font-semibold tracking-tight text-space-bg">
            NG
          </span>
        </div>
      </div>

      {ringConfig.map((ring, i) => (
        <div
          key={ring.diameter}
          className="orbit-ring"
          style={{ width: ring.diameter, height: ring.diameter }}
        >
          <div
            className={ring.reverse ? "orbit-spin-reverse" : "orbit-spin"}
            style={{ animationDuration: `${ring.duration}s` }}
          >
            <div className="orbit-node">
              <div
                className="orbit-node-counter"
                style={{
                  animationDuration: `${ring.duration}s`,
                  animationDirection: ring.reverse ? "reverse" : "normal",
                }}
              >
                <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-space-borderStrong bg-space-panel/90 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-text-primary backdrop-blur-sm shadow-[0_0_16px_rgba(91,127,255,0.15)]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: ["#5b7fff", "#8b6bff", "#cba135", "#5b7fff"][
                        i % 4
                      ],
                    }}
                  />
                  {orbitSkills[i % orbitSkills.length]}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

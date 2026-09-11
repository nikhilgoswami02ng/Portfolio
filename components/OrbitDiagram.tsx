import Image from "next/image";
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
      aria-label="Portrait of Nikhil Goswami surrounded by core expertise areas: Trade Finance, Foreign Exchange, Compliance, and Risk & Audit."
    >
      {/* Central portrait */}
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-2xl bg-gradient-to-br from-accent-blue via-accent-violet to-accent-gold p-[2px] shadow-[0_0_50px_rgba(255,45,75,0.35)]">
          <div className="overflow-hidden rounded-[14px] bg-space-elevated">
            <Image
              src="/portrait.jpg"
              alt="Nikhil Goswami"
              width={675}
              height={900}
              className="h-auto w-44 sm:w-56"
              priority
            />
          </div>
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
                <span className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-space-borderStrong bg-space-panel/90 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-text-primary backdrop-blur-sm shadow-[0_0_16px_rgba(255,45,75,0.18)]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: ["#ff2d4b", "#ff6b88", "#ffb030", "#ff2d4b"][
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

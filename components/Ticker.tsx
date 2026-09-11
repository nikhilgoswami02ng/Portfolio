import { orbitSkills } from "@/lib/data";

const tickerItems = [
  ...orbitSkills,
  "LC / BG / SBLC",
  "SWIFT MT700 · MT710 · MT202 · MT103 · MT760",
  "FEMA & RBI Compliance",
  "FDI / ECB",
  "EDPMS / IDPMS",
  "Cross-Border Settlements",
  "Risk & Audit Closure",
];

export default function Ticker() {
  return (
    <div className="relative z-10 border-y border-accent-blue/20 bg-space-elevated/60 py-3.5 overflow-hidden backdrop-blur-sm">
      <div className="ticker-track" style={{ animation: "tickerScroll 28s linear infinite" }}>
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="gap-10 pr-10"
            aria-hidden={copy === 1}
          >
            {tickerItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-text-muted"
              >
                {item}
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(255,45,75,0.8)]"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
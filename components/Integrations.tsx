import Image from "next/image";

const integrations = [
  { name: "Google Calendar",   icon: "/googlekalendar.png" },
  { name: "Microsoft Calendar",icon: "/outlook.jpeg" },
  { name: "Mollie",            icon: "/mollie.png" },
  { name: "WhatsApp",          icon: "/whatsapp.avif" },
  { name: "Meta",              icon: "https://cdn.simpleicons.org/meta/0866FF" },
  { name: "E-mail",            icon: "/mail.jpeg" },
  { name: "Claude",            icon: "/claude.png" },
  { name: "ChatGPT",           icon: "/chatgpt.png" },
];

// Positions 8 icons evenly around a circle (start from top = -90°)
function getPosition(index: number, total: number, radius: number, containerSize: number) {
  const angle = ((index * 360) / total - 90) * (Math.PI / 180);
  const cx = containerSize / 2;
  const cy = containerSize / 2;
  return {
    left: cx + radius * Math.cos(angle),
    top: cy + radius * Math.sin(angle),
  };
}

const CONTAINER = 420;
const RADIUS = 160;
const ICON = 42;


export default function Integrations() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="flex flex-col gap-5">
            <span className="inline-block w-fit px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
              Integraties
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Integreer met de tools{" "}
              <span className="text-gradient">die je al gebruikt</span>
            </h2>
            <p className="text-[17px] text-gray-400 leading-relaxed">
              Reuzenpanda koppelt aan je agenda, betaalsysteem, WhatsApp,
              e-mail en AI — alles in één platform, zonder gedoe.
            </p>
            <div className="flex gap-3 mt-2">
              <button className="px-6 py-3 rounded-full bg-gray-900 text-white font-semibold text-[15px] hover:bg-gray-700 transition-colors">
                Gratis starten
              </button>
              <button className="px-6 py-3 rounded-full border border-gray-200 text-gray-600 font-medium text-[15px] hover:border-gray-300 transition-colors">
                Alle integraties
              </button>
            </div>
          </div>

          {/* Orbit */}
          <div className="flex items-center justify-center">
            <div
              className="relative shrink-0"
              style={{ width: CONTAINER, height: CONTAINER }}
            >
              {/* Pulse rings */}
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute rounded-full border border-primary/30 pointer-events-none"
                  style={{
                    width: 110 + ring * 60,
                    height: 110 + ring * 60,
                    left: CONTAINER / 2 - (110 + ring * 60) / 2,
                    top: CONTAINER / 2 - (110 + ring * 60) / 2,
                    animation: `pulseRing 2.4s ease-out infinite`,
                    animationDelay: `${ring * 0.6}s`,
                  }}
                />
              ))}

              {/* Orbit ring */}
              <div
                className="absolute rounded-full border border-dashed border-primary/20"
                style={{
                  width: RADIUS * 2 + ICON,
                  height: RADIUS * 2 + ICON,
                  left: CONTAINER / 2 - RADIUS - ICON / 2,
                  top: CONTAINER / 2 - RADIUS - ICON / 2,
                }}
              />

              {/* Center logo */}
              <div
                className="absolute flex items-center justify-center bg-white rounded-[24px] shadow-xl border border-primary/20 z-10"
                style={{
                  width: 100,
                  height: 100,
                  left: CONTAINER / 2 - 50,
                  top: CONTAINER / 2 - 50,
                  boxShadow: "0 0 0 6px rgba(167,208,148,0.15), 0 8px 32px rgba(0,0,0,0.08)",
                  animation: "centerPulse 2.4s ease-in-out infinite",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Reuzenpanda"
                  width={161}
                  height={51}
                  className="w-16 h-auto"
                />
              </div>

              {/* Integration icons */}
              {integrations.map((item, i) => {
                const pos = getPosition(i, integrations.length, RADIUS, CONTAINER);
                return (
                  <div
                    key={item.name}
                    title={item.name}
                    className="absolute flex flex-col items-center gap-1.5 group"
                    style={{
                      width: ICON + 40,
                      left: pos.left - (ICON + 40) / 2,
                      top: pos.top - ICON / 2 - 4,
                    }}
                  >
                    <div
                      className="overflow-hidden rounded-2xl shadow-md shadow-black/6 border border-white/80 group-hover:-translate-y-1 transition-transform duration-200"
                      style={{ width: ICON, height: ICON, margin: "0 auto" }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.icon}
                        alt={item.name}
                        width={ICON}
                        height={ICON}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-gray-400 text-center leading-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

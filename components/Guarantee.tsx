import { Trophy, Zap, Clock, Shield } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Live of je betaalt niets",
    description:
      "Jouw app is live en jouw bedrijfsprocessen zijn geautomatiseerd. Zo snel mogelijk, gegarandeerd. Niet live? Dan betaal je niets.",
  },
  {
    icon: Shield,
    title: "Geen verplichtingen",
    description:
      "Geen betaalmethode nodig om te starten. Geen langetermijncontract. Stop wanneer je wilt.",
  },
  {
    icon: Zap,
    title: "Persoonlijke begeleiding",
    description:
      "Jij krijgt niet alleen software. Je krijgt ook de kennis en begeleiding om het maximale eruit te halen.",
  },
];

export default function Guarantee() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Main block */}
        <div className="bg-[#f2f9ef] rounded-[32px] p-10 md:p-16 text-center border border-primary/20">
          <div className="w-14 h-14 rounded-3xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Trophy size={24} className="text-primary-deep" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4">
            Jouw succes is{" "}
            <span className="text-gradient">gegarandeerd</span>
          </h2>
          <p className="text-[17px] text-gray-500 max-w-lg mx-auto leading-relaxed mb-8">
            Reuzenpanda hielp al honderden bedrijven om doelgericht te groeien.
            We geloven zó sterk in onze aanpak, dat we resultaat durven te garanderen.
          </p>
          <button className="px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-[16px] hover:bg-gray-700 transition-colors">
            Gratis starten
          </button>
        </div>

        {/* 3 cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {items.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.title}
                className="p-7 rounded-[32px] bg-gray-50 border border-gray-100 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon size={17} className="text-primary-deep" />
                </div>
                <h3 className="font-bold text-[17px] text-gray-900 mb-2">
                  {g.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  {g.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    company: "Hartog Dakkapellen",
    person: "Carlo van Hartog",
    result: "3× meer aanvragen",
    detail:
      "Van 100 naar 300 aanvragen per maand. Volledig geautomatiseerd verkoopproces — Carlo stuurt zijn team nu in zijn eentje aan zonder extra mensen of stress.",
    metric: "3×",
    metricLabel: "Meer aanvragen",
    bg: "bg-[#f2f9ef]",
    metricColor: "text-primary-deep",
  },
  {
    company: "Kitchenmakeover",
    person: "Renzo",
    result: "3× meer leads, zelfde budget",
    detail:
      "Offerte configurator, automatisch opgemaakte offertes, slimme routeplanning en automatische opvolging voor meerdere locaties.",
    metric: "3×",
    metricLabel: "Meer aanvragen",
    bg: "bg-amber-50",
    metricColor: "text-amber-600",
  },
  {
    company: "MB Veranda",
    person: "MB Veranda",
    result: "30+ dealers geautomatiseerd",
    detail:
      "MB Veranda sluit al hun dealers aan op Reuzenpanda. 3D configurator, live prijscalculaties, automatische WhatsApp-updates en compleet dashboard voor elk dealerkanaal.",
    metric: "30+",
    metricLabel: "Dealers live",
    bg: "bg-blue-50",
    metricColor: "text-blue-600",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-28 px-6 bg-gray-50" id="use-cases">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-gray-200/70 text-[12px] font-semibold text-gray-500 uppercase tracking-wide mb-4">
            Klantverhalen
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Echte resultaten,{" "}
            <span className="text-gradient">echte bedrijven</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.company}
              className={`${c.bg} rounded-[32px] p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="w-11 h-11 rounded-3xl bg-white/80 flex items-center justify-center text-lg font-bold text-gray-700 shadow-sm">
                {c.company.charAt(0)}
              </div>
              <div>
                <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
                  {c.company}
                </p>
                <p className="text-[22px] font-bold text-gray-900 leading-snug mt-1">
                  {c.result}
                </p>
              </div>
              <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
                {c.detail}
              </p>
              <div className="flex items-end gap-2 pt-5 border-t border-black/5">
                <span className={`text-4xl font-bold tracking-tight leading-none ${c.metricColor}`}>
                  {c.metric}
                </span>
                <span className="text-[13px] text-gray-400 mb-0.5">{c.metricLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

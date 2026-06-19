"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ArrowRight } from "lucide-react";

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <Link href="/">
        <Image src="/logo.png" alt="Reuzenpanda" width={161} height={51} className="h-7 w-auto" />
      </Link>
      <a
        href="#quiz-form"
        className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-[14px] font-semibold hover:bg-gray-700 transition-colors"
      >
        Aanmelden
      </a>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
          Voor directeuren van groeiende bedrijven
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 leading-[1.06] tracking-tight">
          Stop met groeien{" "}
          <span className="text-gradient">op hoop.</span>{" "}
          Bouw een Growth Machine.
        </h1>

        <p className="text-[18px] md:text-[20px] text-gray-500 max-w-xl leading-relaxed">
          Reuzenpanda verbindt je marketing, sales en backoffice — zodat elke ingelegde euro een voorspelbaar resultaat oplevert. Zonder operationele frictie.
        </p>

        {/* Video */}
        <div id="video" className="w-full mt-2">
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-black/10 border border-gray-200 bg-gray-900 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/nZlxviJOonA?rel=0"
              title="Reuzenpanda VSL"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#quiz-form"
            className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] transition-colors shadow-lg shadow-primary/25"
          >
            Bereken mijn groeiprognose →
          </a>
        </div>

        <p className="text-[13px] text-gray-400">
          Live binnen 14 dagen · Gebouwd voor groei · Of geld terug
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2">
            {["A","M","R","C","T"].map((initial) => (
              <div key={initial} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[11px] font-bold text-primary-deep">
                {initial}
              </div>
            ))}
          </div>
          <p className="text-[13px] text-gray-500">
            <span className="font-semibold text-gray-900">300+ bedrijven</span> gebouwd op dit fundament
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────────

const problems = [
  { icon: "🧱", title: "Silo's die groei remmen", desc: "Marketing brengt leads binnen die sales niet opvolgt. Sales sluit deals die de backoffice niet aankan. Iedereen werkt hard, maar niemand werkt samen." },
  { icon: "📉", title: "Churn die je marge vreet", desc: "Klanten lopen weg omdat opvolging te traag is. Je verliest maandelijks omzet die je al verdiend had — terwijl je team denkt dat alles goed gaat." },
  { icon: "💸", title: "Hoge overhead, lage marge", desc: "Je hebt een team van 10-25 mensen, maar de winst groeit niet mee. Meer mensen aangenomen voor problemen die een systeem had kunnen oplossen." },
  { icon: "📊", title: "Rapportages die niet kloppen", desc: "Je CRM is halfleeg, je data klopt niet en je neemt beslissingen op buikgevoel. Terwijl je juist data-driven wil werken." },
  { icon: "🔥", title: "Opgezogen door de operatie", desc: "Je wilde strategie bepalen. In plaats daarvan los je interne conflicten op, zit je in eindeloze meetings en dicht je operationele gaten." },
  { icon: "🔄", title: "Recruitment als nooduitgang", desc: "Elk groeiplafond wordt opgelost met een nieuwe hire. Maar meer mensen betekent meer coördinatie, meer overhead en meer chaos." },
];

function Problems() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-red-50 text-[12px] font-semibold text-red-500 uppercase tracking-wide">
            De operationele modder
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Groei zonder systeem is{" "}
            <span className="text-gradient">chaos met meer mensen</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Je ziet de knelpunten. Je weet wat er mis gaat. Maar je hebt geen tijd om het zelf op te lossen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="flex flex-col gap-3 p-6 rounded-[24px] border border-gray-100 bg-gray-50 hover:border-gray-200 transition-colors">
              <span className="text-[28px]">{p.icon}</span>
              <h3 className="font-bold text-gray-900 text-[16px]">{p.title}</h3>
              <p className="text-[14px] text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Solution ─────────────────────────────────────────────────────────────────

const solutions = [
  { step: "01", title: "Marketing en sales in één systeem", desc: "Leads die binnenkomen via ads of content gaan direct naar het juiste salesproces. Geen handmatig doorsturen, geen verloren context, geen silo's meer." },
  { step: "02", title: "Voorspelbare pipeline", desc: "Je CRM vult zich automatisch met gekwalificeerde leads. Elke stap in je salesproces wordt gevolgd. Jij ziet live waar omzet vandaan komt — en wat het kost." },
  { step: "03", title: "Churn stoppen vóór het gebeurt", desc: "Automatische opvolging van bestaande klanten zorgt dat niemand tussen wal en schip valt. Signalen van opzegging worden eerder opgepikt dan je team dat kan." },
  { step: "04", title: "Backoffice op autopilot", desc: "Facturatie, onboarding, statusupdates — alles loopt automatisch door. Je team focust op werk met impact, niet op administratie die een systeem kan doen." },
];

function Solution() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf5e4 50%, #d4ecca 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            De Growth Machine
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Elke euro die je inlegt{" "}
            <span className="text-gradient">levert een voorspelbaar resultaat op.</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Reuzenpanda verbindt alle losse systemen tot één geolied geheel — van eerste lead tot loyale klant.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div key={s.step} className="flex gap-5 p-7 rounded-[28px] bg-white border border-white shadow-sm">
              <span className="text-[13px] font-black text-primary-deep shrink-0 mt-1">{s.step}</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-gray-900 text-[17px]">{s.title}</h3>
                <p className="text-[14px] text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "3×", label: "meer pipeline uit hetzelfde budget" },
            { number: "−40%", label: "operationele overhead" },
            { number: "14", label: "dagen tot live systeem" },
            { number: "€0", label: "extra headcount nodig" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-2 p-6 rounded-[24px] bg-white border border-primary/20 text-center">
              <span className="text-[36px] font-black text-primary-deep">{m.number}</span>
              <span className="text-[13px] text-gray-500 leading-snug">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

const reviews = [
  {
    quote: "We hadden al een CRM, Slack en Monday. Maar alles stond los van elkaar. Reuzenpanda maakte er één geheel van. Onze pipeline is drie keer zo voorspelbaar geworden.",
    name: "Marco B.",
    company: "MB Veranda — 4+ jaar klant",
    initial: "M",
    stars: 5,
  },
  {
    quote: "Ik dacht dat onze processen te complex waren. Maar Reuzenpanda paste zich aan ons aan — niet andersom. We besparen nu meer dan €15.000 per maand aan overhead.",
    name: "Renzo V.",
    company: "Kitchenmakeover",
    initial: "R",
    stars: 5,
  },
  {
    quote: "Van 100 naar 300 aanvragen per maand, en mijn team handelt alles zelf af. Ik stuur nu op cijfers in plaats van op gevoel.",
    name: "Carlo van Hartog",
    company: "Hartog Dakkapellen",
    initial: "C",
    stars: 5,
  },
];

function Reviews() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            Resultaten
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Bedrijven die kozen voor{" "}
            <span className="text-gradient">systeem boven aannames</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="flex flex-col gap-4 p-6 rounded-[24px] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm transition-all">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`text-[14px] ${i < r.stars ? "text-yellow-400" : "text-gray-200"}`}>★</span>
                ))}
              </div>
              <p className="text-[14px] text-gray-600 leading-relaxed flex-1">&ldquo;{r.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary-deep text-[13px] font-bold shrink-0">
                  {r.initial}
                </div>
                <div>
                  <p className="font-semibold text-[13px] text-gray-900">{r.name}</p>
                  <p className="text-[11px] text-gray-400">{r.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  { q: "Onze processen zijn te complex voor automatisering.", a: "Dat horen we vaker — en het klopt nooit. Complexe processen zijn juist het meest gebaat bij een strak systeem. Wij bouwen op maat, inclusief alle uitzonderingen die jullie dagelijks tegenkomen. Geen standaard template." },
  { q: "We hebben al veel tools (CRM, Slack, Asana). Wat voegt Reuzenpanda toe?", a: "Reuzenpanda verbindt je bestaande tools tot één werkend geheel. Je CRM vult zich automatisch, je projectmanagement synchroniseert met salesstatus en je backoffice draait op data die al in je systemen zit. Geen nieuwe tool — een verbindende laag." },
  { q: "Mijn team werkt niet mee aan veranderingen.", a: "Veranderingsbereidheid volgt als het systeem hun werk makkelijker maakt, niet moeilijker. Wij implementeren stap voor stap, betrekken je team in het proces en zorgen dat adoptie geen project op zichzelf wordt." },
  { q: "Kan AI echt onze complexe salesprocessen aan?", a: "Ja. We hebben agencies, SaaS-bedrijven en detacheerders geautomatiseerd met processen die veel complexer zijn dan de meeste denken. AI in ons systeem volgt jouw logica — niet andersom." },
  { q: "Wat kost het en wat is de ROI?", a: "De meeste klanten van 10-25 fte besparen €10.000-€30.000 per maand aan overhead en verloren omzet door trage opvolging. De investering verdient zichzelf doorgaans terug binnen 60 dagen." },
  { q: "Wat als het niet werkt?", a: "Dan betaal je niets. We garanderen dat je systeem live staat binnen 14 dagen en dat de afgesproken processen geautomatiseerd zijn. Lukt dat niet? Volledig bedrag terug." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            Veelgestelde vragen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Jouw bezwaren,{" "}
            <span className="text-gradient">eerlijk beantwoord</span>
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-gray-200 bg-white rounded-[28px] border border-gray-100 px-7 shadow-sm">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-[16px] font-semibold text-gray-900 group-hover:text-primary-deep transition-colors">{faq.q}</span>
                <ChevronDown size={18} className={`text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-64 pb-5" : "max-h-0"}`}>
                <p className="text-[15px] text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quiz funnel ──────────────────────────────────────────────────────────────

const quizSteps = [
  {
    id: "team_size",
    question: "Hoe groot is jouw vaste team?",
    options: [
      { label: "5 tot 10 fte", value: "5-10" },
      { label: "10 tot 25 fte", value: "10-25" },
      { label: "Meer dan 25 fte", value: "25plus" },
    ],
  },
  {
    id: "revenue",
    question: "Wat is je huidige maandomzet?",
    options: [
      { label: "€50.000 – €100.000", value: "50-100k" },
      { label: "€100.000 – €250.000", value: "100-250k" },
      { label: "Meer dan €250.000", value: "250kplus" },
    ],
  },
  {
    id: "biggest_pain",
    question: "Waar verlies je de meeste omzet?",
    options: [
      { label: "Silo's tussen marketing & sales", value: "silos" },
      { label: "Churn door trage opvolging", value: "churn" },
      { label: "Hoge overhead, te weinig marge", value: "overhead" },
    ],
  },
  {
    id: "tools",
    question: "Welke tools gebruik je al?",
    options: [
      { label: "CRM + losse tools", value: "crm_loose" },
      { label: "CRM + Slack + projecttool", value: "full_stack" },
      { label: "Weinig — alles nog handmatig", value: "manual" },
    ],
  },
  {
    id: "growth_goal",
    question: "Wat is jouw primaire groeidoel?",
    options: [
      { label: "Marktleider worden in mijn sector", value: "market_leader" },
      { label: "Exit-ready bouwen", value: "exit" },
      { label: "Winstmarge structureel verhogen", value: "margin" },
    ],
  },
  {
    id: "blocker",
    question: "Wat houdt je nu nog tegen?",
    options: [
      { label: "Te veel tools, geen samenhang", value: "too_many_tools" },
      { label: "Team gaat niet mee in verandering", value: "change_resistance" },
      { label: "Geen tijd voor implementatie", value: "no_time" },
    ],
  },
];

function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const total = quizSteps.length + 1;
  const isContactStep = step === quizSteps.length;
  const current = quizSteps[step];

  const select = (val: string) => {
    setAnswers((prev) => ({ ...prev, [current.id]: val }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const submitContact = (e: React.FormEvent) => {
    e.preventDefault();
    const antwoorden: Record<string, string> = {};
    quizSteps.forEach((s) => {
      if (answers[s.id]) {
        const option = s.options.find((o) => o.value === answers[s.id]);
        antwoorden[s.question] = option?.label ?? answers[s.id];
      }
    });
    fetch("https://hooks.zapier.com/hooks/catch/14955932/43jrnv1/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        voornaam: contact.name,
        email: contact.email,
        telefoon: contact.phone,
        source: "avatar-3",
        ...antwoorden,
      }),
    }).catch(() => {});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 text-center py-8">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-[32px]">🎉</div>
        <div>
          <h3 className="text-[24px] font-bold text-gray-900">We nemen contact op!</h3>
          <p className="text-[15px] text-gray-500 mt-2 max-w-sm">
            {contact.name ? `Hey ${contact.name.split(" ")[0]}, we` : "We"} analyseren jouw situatie en plannen een strategiegesprek in.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl px-6 py-4 text-left flex flex-col gap-2 w-full max-w-sm">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">Wat je kunt verwachten</p>
          {["Reactie binnen 24 uur", "Gratis groeiscan van 45 minuten", "Concreet groeiplan voor jouw bedrijf"].map(item => (
            <div key={item} className="flex items-center gap-2 text-[14px] text-gray-700">
              <Check size={14} className="text-primary-deep shrink-0" />{item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
            Stap {step + 1} van {total}
          </p>
          <p className="text-[12px] text-gray-400">{Math.round(((step + 1) / total) * 100)}%</p>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${((step + 1) / total) * 100}%` }}
          />
        </div>
      </div>

      {!isContactStep ? (
        <>
          <h3 className="text-[20px] font-bold text-gray-900">{current.question}</h3>
          <div className="flex flex-col gap-2.5">
            {current.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => select(opt.value)}
                className={`flex items-center justify-between px-5 py-4 rounded-2xl border-2 text-left transition-all ${
                  answers[current.id] === opt.value
                    ? "border-primary bg-primary/10"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                }`}
              >
                <span className={`text-[15px] font-semibold ${answers[current.id] === opt.value ? "text-primary-deep" : "text-gray-800"}`}>
                  {opt.label}
                </span>
                {answers[current.id] === opt.value && (
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check size={11} className="text-white" />
                  </span>
                )}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={() => setStep((s) => s - 1)} className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors text-center">
              ← Vorige stap
            </button>
          )}
        </>
      ) : (
        <form onSubmit={submitContact} className="flex flex-col gap-5">
          <div>
            <h3 className="text-[20px] font-bold text-gray-900">Bijna klaar — waar mogen we je bereiken?</h3>
            <p className="text-[14px] text-gray-400 mt-1">We sturen je een op maat gemaakt groeiplan op basis van jouw antwoorden.</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Jouw naam"
              required
              value={contact.name}
              onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-[15px] text-gray-800 placeholder-gray-400 outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="E-mailadres"
              required
              value={contact.email}
              onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-[15px] text-gray-800 placeholder-gray-400 outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Telefoonnummer"
              value={contact.phone}
              onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-[15px] text-gray-800 placeholder-gray-400 outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-900 text-white font-bold text-[16px] hover:bg-gray-700 transition-colors"
          >
            Stuur mijn gratis groeiplan →
            <ArrowRight size={16} />
          </button>
          <p className="text-[12px] text-gray-400 text-center">
            Geen spam. Alleen een eerlijk gesprek over jouw groeistrategie.
          </p>
          <button type="button" onClick={() => setStep((s) => s - 1)} className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors text-center">
            ← Vorige stap
          </button>
        </form>
      )}
    </div>
  );
}

function QuizSection() {
  return (
    <section id="quiz" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <span className="inline-block w-fit px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
              Gratis groeiscan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Ontdek in 2 minuten{" "}
              <span className="text-gradient">waar jouw groei vastloopt</span>
            </h2>
            <p className="text-[16px] text-gray-400 leading-relaxed">
              Beantwoord 6 vragen. We sturen je een concreet groeiplan inclusief de processen die het meeste geld laten lekken in jouw bedrijf.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Gratis groeiscan van 45 minuten",
                "Concreet groeiplan op maat",
                "ROI-berekening voor jouw situatie",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-gray-600">
                  <Check size={15} className="text-primary-deep shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="p-6 rounded-[24px] bg-gray-50 border border-gray-100">
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-[16px]">★</span>)}
              </div>
              <p className="text-[14px] text-gray-600 italic leading-relaxed">
                &ldquo;We dachten dat AI ons complexe proces niet aankon. Binnen 14 dagen liep alles. Onze marge steeg in de eerste maand al met 22%.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-deep text-[12px] font-bold">M</div>
                <div>
                  <p className="font-semibold text-[13px] text-gray-900">Marco B.</p>
                  <p className="text-[11px] text-gray-400">MB Veranda — 4+ jaar klant</p>
                </div>
              </div>
            </div>
          </div>

          <div id="quiz-form" className="bg-gray-50 rounded-[32px] border border-gray-200 p-8 shadow-sm">
            <QuizFunnel />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer CTA ───────────────────────────────────────────────────────────────

function FooterCta() {
  return (
    <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #eaf5e4 0%, #c4e3b5 100%)" }}>
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
          Klaar om te stoppen met<br />
          <span className="text-primary-deep">groeien op gevoel?</span>
        </h2>
        <p className="text-[17px] text-gray-600 max-w-md">
          Live binnen 14 dagen. Of je betaalt niets.
        </p>
        <a
          href="#quiz-form"
          className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-[16px] hover:bg-gray-700 transition-colors"
        >
          Ja, ik wil een voorspelbare Growth Machine →
        </a>
        <p className="text-[13px] text-gray-500">Geen betaalmethode nodig · Gratis groeiscan · Direct starten</p>
      </div>
    </section>
  );
}

// ─── Minimal footer ───────────────────────────────────────────────────────────

function MinimalFooter() {
  return (
    <footer className="py-8 px-6 bg-gray-950 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-4">
        <Image src="/logo.png" alt="Reuzenpanda" width={161} height={51} className="h-6 w-auto brightness-0 invert" />
        <p className="text-[12px] text-gray-500">© {new Date().getFullYear()} Reuzenpanda B.V. · Alle rechten voorbehouden.</p>
        <div className="flex gap-4 text-[12px] text-gray-500">
          <Link href="#" className="hover:text-gray-300 transition-colors">Privacybeleid</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Algemene voorwaarden</Link>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Avatar3Page() {
  return (
    <>
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Reviews />
      <QuizSection />
      <FAQ />
      <FooterCta />
      <MinimalFooter />
    </>
  );
}

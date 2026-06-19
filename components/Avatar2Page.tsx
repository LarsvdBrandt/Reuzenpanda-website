"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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
          Voor ZZP&apos;ers met een schil van zzp&apos;ers
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 leading-[1.06] tracking-tight">
          Stop met{" "}
          <span className="text-gradient">tussenpersoon spelen</span>{" "}
          in je eigen bedrijf.
        </h1>

        <p className="text-[18px] md:text-[20px] text-gray-500 max-w-xl leading-relaxed">
          Reuzenpanda laat informatie vloeiend van lead naar oplevering stromen — zonder dat jij elke dag de schakel bent tussen klant en uitvoerder.
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

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href="#quiz-form"
            className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] transition-colors shadow-lg shadow-primary/25"
          >
            Bereken wat dit jou oplevert →
          </a>
        </div>

        <p className="text-[13px] text-gray-400">
          Live binnen 14 dagen · Geen technische kennis nodig · Of geld terug
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2">
            {["R","C","M","J","S"].map((initial) => (
              <div key={initial} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[11px] font-bold text-primary-deep">
                {initial}
              </div>
            ))}
          </div>
          <p className="text-[13px] text-gray-500">
            <span className="font-semibold text-gray-900">300+ ondernemers</span> gingen je voor
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────────

const problems = [
  { icon: "📱", title: "Jij bent de helpdesk van je team", desc: "De hele dag berichten van zzp'ers die iets niet weten. Terwijl jij gewoon wil werken, ben je hun vraagbaak, planner en postbode ineen." },
  { icon: "🔥", title: "Altijd brandjes blussen", desc: "Iets gaat fout bij een klant. Jij hoort het als laatste, maar moet het als eerste oplossen. Elke dag weer." },
  { icon: "📋", title: "Facturatie loopt achter", desc: "Drie projecten afgerond, maar de facturen staan er nog niet uit. Geld dat je al verdiend hebt maar nog niet op je rekening staat." },
  { icon: "🔍", title: "Kwaliteit checken in de avonduren", desc: "Jij controleert het werk van je zzp'ers als iedereen naar huis is. Want als het fout gaat, ben jij degene die de klant een uitleg schuldig is." },
  { icon: "🤝", title: "Geen goede verkoper gevonden", desc: "Je doet zelf alle sales maar hebt er geen tijd voor. Iemand inhuren die het net zo goed doet als jij? Die bestaat kennelijk niet." },
  { icon: "📈", title: "Groei = meer chaos", desc: "Elke nieuwe klant betekent meer coördinatie, meer appjes, meer controle. Je wil groeien, maar voelt alleen meer druk." },
];

function Problems() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-red-50 text-[12px] font-semibold text-red-500 uppercase tracking-wide">
            Herken jij dit?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Dit is de realiteit van de{" "}
            <span className="text-gradient">regelaar met een schil</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Je hebt mensen om je heen, maar je werkt harder dan ooit. Dat klopt niet.
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
  { step: "01", title: "Van lead naar uitvoerder zonder Rick", desc: "Informatie gaat automatisch van de klant naar de juiste zzp'er. Briefings, checklists en deadlines — zonder dat jij de tussenpersoon bent." },
  { step: "02", title: "Kwaliteitsborging op afstand", desc: "Je zzp'ers werken met vaste checklists en statusupdates. Jij ziet in één dashboard of alles klopt — zonder op de bouwplaats te staan." },
  { step: "03", title: "Facturatie op autopilot", desc: "Zodra een project klaar wordt gemeld, gaat de factuur er automatisch uit. Nooit meer achter je eigen geld aanzitten." },
  { step: "04", title: "Verkoop die doorloopt", desc: "Leads worden automatisch opgevolgd terwijl jij coördineert. Je hoeft niet meer te kiezen tussen klanten binnenhalen of klanten bedienen." },
];

function Solution() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf5e4 50%, #d4ecca 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            De oplossing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Wat als informatie{" "}
            <span className="text-gradient">vanzelf op de juiste plek belandt?</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Reuzenpanda automatiseert de informatiestroom van A tot Z — van eerste lead tot afgerond project.
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

        {/* Before / after */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-7 rounded-[28px] bg-red-50 border border-red-100">
            <p className="text-[12px] font-black text-red-400 uppercase tracking-wide mb-4">Zonder Reuzenpanda</p>
            <ul className="flex flex-col gap-3">
              {[
                "Jij stuurt informatie handmatig door",
                "Kwaliteitscontrole in de avond",
                "Facturen die je vergeet te sturen",
                "Altijd bereikbaar voor je eigen team",
                "Groei = meer werk voor jou",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-red-700">
                  <span className="text-red-400 font-bold shrink-0">✕</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 rounded-[28px] bg-primary/10 border border-primary/20">
            <p className="text-[12px] font-black text-primary-deep uppercase tracking-wide mb-4">Met Reuzenpanda</p>
            <ul className="flex flex-col gap-3">
              {[
                "Informatie gaat automatisch de juiste kant op",
                "Kwaliteitschecks zonder aanwezig te zijn",
                "Facturen gaan vanzelf uit na oplevering",
                "Je team werkt zelfstandig",
                "Groei = meer omzet, zelfde rust",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-gray-700">
                  <Check size={14} className="text-primary-deep shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

const reviews = [
  {
    quote: "Ik stuurde vroeger elk detail zelf door naar mijn mensen. Nu gaat dat automatisch. Ik hoef alleen nog in te grijpen als er echt iets niet klopt.",
    name: "Carlo van Hartog",
    company: "Hartog Dakkapellen",
    initial: "C",
    stars: 5,
  },
  {
    quote: "Van 100 naar 300 leads per maand, en mijn team handelt het grotendeels zelf af. Ik ben eindelijk de eigenaar geworden in plaats van de uitvoerder.",
    name: "Renzo V.",
    company: "Kitchenmakeover",
    initial: "R",
    stars: 5,
  },
  {
    quote: "Mijn zzp'ers weten precies wat ze moeten doen zonder dat ik ze elke ochtend hoef te bellen. Dat alleen al is de investering waard.",
    name: "Marco B.",
    company: "MB Veranda",
    initial: "M",
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
            Eigenaren die{" "}
            <span className="text-gradient">stopten met alles zelf doen</span>
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
  { q: "Werkt dit ook als mijn zzp'ers niet technisch zijn?", a: "Ja. Je zzp'ers krijgen eenvoudige checklists en statusupdates via WhatsApp of een simpele app. Ze hoeven niets te leren — het systeem werkt zo dat zij gewoon hun werk kunnen doen." },
  { q: "Is het systeem niet te rigide voor mijn flexibele bedrijf?", a: "Reuzenpanda past zich aan jouw proces aan, niet andersom. We bouwen het systeem volledig op maat — inclusief de uitzonderingen die jij elke week tegenkomt." },
  { q: "Ik heb geen tijd om dit in te richten.", a: "Dat hoef je ook niet. Wij richten alles voor je in op basis van een intake. Gemiddeld staat alles binnen 14 dagen live. Jij hoeft alleen te vertellen hoe jouw bedrijf werkt." },
  { q: "Wat als mijn zzp'ers het anders aanpakken dan ik wil?", a: "Dat is precies waarom Reuzenpanda werkt. Het systeem borgt jouw werkwijze — checklists, briefings, kwaliteitschecks. Jij bepaalt de standaard, het systeem zorgt dat die gevolgd wordt." },
  { q: "Kan ik de kwaliteit nog waarborgen zonder er zelf bij te zijn?", a: "Absoluut. Elke zzp'er rapporteert via het systeem. Jij ziet in één dashboard de status van elk project, welke stappen zijn afgerond en waar actie nodig is. Zonder één appje te hoeven sturen." },
  { q: "Wat als het niet werkt?", a: "Dan betaal je niets. We garanderen dat je systeem live staat binnen 14 dagen. Lukt dat niet, of zijn de processen niet geautomatiseerd zoals afgesproken? Volledig bedrag terug." },
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
            Jouw twijfels,{" "}
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
    question: "Hoeveel zzp'ers werken er in jouw schil?",
    options: [
      { label: "1 tot 3", value: "1-3" },
      { label: "4 tot 8", value: "4-8" },
      { label: "Meer dan 8", value: "8plus" },
    ],
  },
  {
    id: "biggest_pain",
    question: "Waar verlies je de meeste tijd aan?",
    options: [
      { label: "Communicatie bijhouden", value: "communication" },
      { label: "Kwaliteit controleren", value: "quality" },
      { label: "Facturatie en administratie", value: "invoicing" },
    ],
  },
  {
    id: "revenue",
    question: "Wat is je huidige maandomzet?",
    options: [
      { label: "Minder dan €50.000", value: "lt50k" },
      { label: "€50.000 – €100.000", value: "50-100k" },
      { label: "Meer dan €100.000", value: "100kplus" },
    ],
  },
  {
    id: "growth_blocker",
    question: "Wat houdt jouw groei tegen?",
    options: [
      { label: "Meer klanten = meer chaos", value: "chaos" },
      { label: "Geen tijd voor sales", value: "no_sales_time" },
      { label: "Kwaliteit kan ik niet waarborgen", value: "quality_risk" },
    ],
  },
  {
    id: "ai_worry",
    question: "Wat maakt je het meest sceptisch?",
    options: [
      { label: "Mijn zzp'ers werken er niet mee", value: "team_adoption" },
      { label: "Te rigide voor mijn flexibele bedrijf", value: "too_rigid" },
      { label: "Duurt te lang om in te richten", value: "setup_time" },
    ],
  },
  {
    id: "dream",
    question: "Wat is jouw droomscenario?",
    options: [
      { label: "Zelfsturende schil, ik stuur bij", value: "self_managing" },
      { label: "Meer klanten zonder meer werk", value: "scalable_growth" },
      { label: "Rust in de kop en overzicht", value: "peace_of_mind" },
    ],
  },
];

function QuizFunnel() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "", dialCode: "+31" });
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
    quizSteps.forEach((s, i) => {
      if (answers[s.id]) {
        const option = s.options.find((o) => o.value === answers[s.id]);
        antwoorden[`vraag_${i + 1}`] = `${s.question} → ${option?.label ?? answers[s.id]}`;
      }
    });
    fetch("https://hooks.zapier.com/hooks/catch/14955932/43jrnv1/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        voornaam: contact.name,
        email: contact.email,
        telefoon: `${contact.dialCode} ${contact.phone}`,
        source: "avatar-2",
        ...antwoorden,
      }),
    }).catch(() => {});
    router.push("/bedankt");
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 text-center py-8">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-[32px]">🎉</div>
        <div>
          <h3 className="text-[24px] font-bold text-gray-900">We nemen contact op!</h3>
          <p className="text-[15px] text-gray-500 mt-2 max-w-sm">
            {contact.name ? `Hey ${contact.name.split(" ")[0]}, we` : "We"} kijken naar jouw antwoorden en plannen een gratis gesprek in.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl px-6 py-4 text-left flex flex-col gap-2 w-full max-w-sm">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">Wat je kunt verwachten</p>
          {["Reactie binnen 24 uur", "Gratis strategiegesprek van 30 min", "Concreet plan voor jouw situatie"].map(item => (
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
            <p className="text-[14px] text-gray-400 mt-1">We sturen je een persoonlijk plan op basis van jouw antwoorden.</p>
          </div>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Voornaam"
              required
              value={contact.name}
              onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-[15px] text-gray-800 placeholder-gray-400 outline-none focus:border-primary/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Zakelijke e-mail"
              required
              value={contact.email}
              onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
              className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 text-[15px] text-gray-800 placeholder-gray-400 outline-none focus:border-primary/50 transition-colors"
            />
            <div className="flex rounded-2xl border border-gray-200 overflow-hidden focus-within:border-primary/50 transition-colors">
              <select
                value={contact.dialCode}
                onChange={(e) => setContact((p) => ({ ...p, dialCode: e.target.value }))}
                className="px-3 py-3.5 bg-gray-50 border-r border-gray-200 text-[15px] text-gray-700 outline-none shrink-0"
              >
                <option value="+31">🇳🇱 +31</option>
                <option value="+32">🇧🇪 +32</option>
                <option value="+49">🇩🇪 +49</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+33">🇫🇷 +33</option>
                <option value="+34">🇪🇸 +34</option>
                <option value="+1">🇺🇸 +1</option>
              </select>
              <input
                type="tel"
                placeholder="Telefoonnummer"
                value={contact.phone}
                onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                className="flex-1 px-4 py-3.5 text-[15px] text-gray-800 placeholder-gray-400 outline-none bg-white"
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-gray-900 text-white font-bold text-[16px] hover:bg-gray-700 transition-colors"
          >
            Stuur mijn gratis plan →
            <ArrowRight size={16} />
          </button>
          <p className="text-[12px] text-gray-400 text-center">
            Geen spam. Alleen een eerlijk gesprek over wat wij voor jou kunnen doen.
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
              Gratis analyse
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Bereken in 2 minuten{" "}
              <span className="text-gradient">hoeveel tijd je terugkrijgt</span>
            </h2>
            <p className="text-[16px] text-gray-400 leading-relaxed">
              Beantwoord 6 vragen. We sturen je een persoonlijk plan met exacte stappen voor jouw bedrijf — gratis, geen verplichtingen.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Gratis strategiegesprek van 30 minuten",
                "Concreet actieplan voor jouw situatie",
                "Geen verkooppraatje, gewoon eerlijk advies",
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
                &ldquo;Ik stuurde vroeger elk detail handmatig door. Nu rapporteren mijn mensen zelf en zie ik in één oogopslag of alles klopt. Dat is rust.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-deep text-[12px] font-bold">C</div>
                <div>
                  <p className="font-semibold text-[13px] text-gray-900">Carlo van Hartog</p>
                  <p className="text-[11px] text-gray-400">Hartog Dakkapellen</p>
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
          <span className="text-primary-deep">alles zelf regelen?</span>
        </h2>
        <p className="text-[17px] text-gray-600 max-w-md">
          Live binnen 14 dagen. Of je betaalt niets.
        </p>
        <a
          href="#quiz-form"
          className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-[16px] hover:bg-gray-700 transition-colors"
        >
          Ja, ik wil dit voor mijn bedrijf →
        </a>
        <p className="text-[13px] text-gray-500">Geen betaalmethode nodig · Gratis gesprek · Direct starten</p>
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

export default function Avatar2Page() {
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

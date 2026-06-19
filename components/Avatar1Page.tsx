"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, Play, ArrowRight } from "lucide-react";

// ─── Minimal header ───────────────────────────────────────────────────────────

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
  const [playing, setPlaying] = useState(false);

  return (
    <section className="pt-32 pb-20 px-6 bg-white relative overflow-hidden">
      {/* Dot grid */}
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
          Voor eigenaren die meer rust willen
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 leading-[1.06] tracking-tight">
          Stop met 's avonds{" "}
          <span className="text-gradient">leads bellen</span>{" "}
          die toch niet opnemen.
        </h1>

        <p className="text-[18px] md:text-[20px] text-gray-500 max-w-xl leading-relaxed">
          Reuzenpanda volgt jouw leads automatisch op — terwijl jij werkt, slaapt of bij je gezin bent. Meer omzet, zonder meer uren.
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
          <a href="#quiz-form" className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] transition-colors shadow-lg shadow-primary/25">
            Bereken wat dit jou oplevert →
          </a>
        </div>

        <p className="text-[13px] text-gray-400">
          Gratis account · Geen betaalmethode nodig · Live binnen 14 dagen
        </p>

        {/* Social proof strip */}
        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2">
            {["C","R","L","K","T"].map((initial) => (
              <div key={initial} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[11px] font-bold text-primary-deep">
                {initial}
              </div>
            ))}
          </div>
          <p className="text-[13px] text-gray-500">
            <span className="font-semibold text-gray-900">300+ eigenaren</span> gingen je voor
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────────

const problems = [
  { icon: "🌙", title: "Je belt 's avonds leads terug", desc: "Na een volle dag werken pak je je telefoon weer op. Die lead van 14:00? Die heeft inmiddels iemand anders ingehuurd." },
  { icon: "📵", title: "Geen antwoord, geen deal", desc: "Je reageert te laat, de lead is koud geworden. Je weet het zelf ook — maar je hebt gewoon geen tijd eerder." },
  { icon: "🗓️", title: "Agenda chaos", desc: "Oriënterende gesprekken die nergens toe leiden. Klanten die niet komen opdagen. Geen structuur in je salesproces." },
  { icon: "😓", title: "Weekenden kwijt", desc: "Zaterdag administratie, zondag offertes. Terwijl je vrienden barbecueën, zit jij achter je laptop." },
  { icon: "📉", title: "Geen omzet als je niet werkt", desc: "Stop jij, stopt je bedrijf. Geen vaste structuur, geen passief inkomen, geen groei zonder jouw aanwezigheid." },
  { icon: "🤯", title: "Alles in je hoofd", desc: "Welke lead had ik ook alweer nog moeten bellen? Geen overzicht, geen systeem. Het draait op jouw geheugen." },
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
            <span className="text-gradient">drukke eigenaar</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Je bent eigenaar, uitvoerder én salesmanager tegelijk. En dat vreet tijd.
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
  { step: "01", title: "Leads reageren automatisch", desc: "Zodra iemand een formulier invult of WhatsApp stuurt, reageert Reuzenpanda direct — ook om 22:00. Jij hoeft er niets voor te doen." },
  { step: "02", title: "Alleen warme gesprekken", desc: "Het systeem kwalificeert je leads voordat ze in je agenda komen. Je spreekt alleen nog met mensen die serieus zijn." },
  { step: "03", title: "Jouw sales draait door", desc: "Of je nou op de bouwplaats staat, bij je gezin bent of slaapt — je pijplijn loopt door. Nooit meer een lead vergeten." },
  { step: "04", title: "Overzicht in één dashboard", desc: "Zie precies welke leads waar staan. Geen aparte notities, apps of spreadsheets. Alles op één plek." },
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
            Wat als je bedrijf doorliep{" "}
            <span className="text-gradient">terwijl jij dat niet doet?</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Reuzenpanda automatiseert je volledige salesproces — van eerste contact tot ondertekende offerte.
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
            <p className="text-[13px] font-bold text-red-400 uppercase tracking-wide mb-4">Zonder Reuzenpanda</p>
            <ul className="flex flex-col gap-3">
              {["'s Avonds leads bellen die niet opnemen","Leads vergeten op te volgen","Weekenden kwijt aan administratie","Groeien betekent meer uren maken","Geen idee welke lead nog warm is"].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-red-700">
                  <span className="shrink-0 mt-0.5">✕</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 rounded-[28px] bg-white border border-primary/30">
            <p className="text-[13px] font-bold text-primary-deep uppercase tracking-wide mb-4">Met Reuzenpanda</p>
            <ul className="flex flex-col gap-3">
              {["Leads worden binnen 2 minuten automatisch beantwoord","Nooit meer een lead vergeten","Weekenden vrij — het systeem werkt door","Groei zonder extra personeel","Overzicht in één dashboard"].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-700">
                  <Check size={15} className="text-primary-deep shrink-0 mt-0.5" />{item}
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
  { initial: "C", name: "Carlo van Hartog", company: "Hartog Dakkapellen", stars: 5, quote: "Van 100 naar 300 aanvragen per maand. Ik stuur mijn team nu in mijn eentje aan — iets wat zonder automatisering nooit mogelijk was." },
  { initial: "R", name: "Renzo", company: "Kitchenmakeover", stars: 5, quote: "3x zoveel aanvragen uit hetzelfde marketingbudget. Offerte configurator, automatische opvolging — alles werkt perfect." },
  { initial: "K", name: "Kenan Evran", company: "Ondernemer", stars: 5, quote: "We zijn erg blij met Reuzenpanda! Klanten vinden het makkelijker om een offerte aan te vragen en wij hoeven er bijna niets voor te doen." },
  { initial: "T", name: "Tim Groot", company: "CEO", stars: 5, quote: "Door de grote stijging in leads hebben we als een gek onze systemen beter moeten inrichten. Een luxeprobleem dat je wilt hebben." },
  { initial: "R", name: "Roel de Klein", company: "Eigenaar", stars: 5, quote: "Ik ben zeer tevreden over hoe de jongens van Reuzenpanda te werk gaan. Ze werken snel en luisteren goed naar je behoeftes." },
  { initial: "L", name: "Lars van den Brandt", company: "Directeur", stars: 5, quote: "Makkelijk te leren en te begrijpen. Het heeft gezorgd voor meer conversie — aanrader voor iedere eigenaar die wil groeien." },
];

function Reviews() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            Wat anderen zeggen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Eigenaren die je al{" "}
            <span className="text-gradient">voorgingen</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
  { q: "Werkt dit ook voor mijn branche?", a: "Ja. Reuzenpanda werkt voor bouw, coaching, agencies en vrijwel elke dienstverlener. Het systeem past zich aan jouw proces aan — niet andersom. We hebben al 300+ bedrijven geholpen in tientallen branches." },
  { q: "Verlies ik het persoonlijke contact met mijn klanten?", a: "Nee. Reuzenpanda handelt de eerste stappen af — snelle reactie, kwalificatie, agenda-inplannen — zodat jij alleen nog maar echte gesprekken voert met klanten die serieus zijn. Meer persoonlijk contact, niet minder." },
  { q: "Ik heb geen tijd of kennis om dit in te richten.", a: "Dat hoef je ook niet. Wij richten alles voor je in. Je hoeft niets te programmeren of technisch te snappen. Gemiddeld staat alles binnen 14 dagen live." },
  { q: "Mijn bedrijf is nog te klein voor automatisering.", a: "Juist bedrijven van 1-2 fte hebben het meeste baat. Jij bent eigenaar én uitvoerder — elke geautomatiseerde stap geeft je direct meer tijd en omzet terug." },
  { q: "Wat als het niet werkt voor mij?", a: "Dan betaal je niets. We garanderen dat je app live staat binnen 14 dagen en dat je bedrijfsprocessen geautomatiseerd zijn. Lukt dat niet? Volledig bedrag terug, geen vragen." },
  { q: "Hoe snel zie ik resultaat?", a: "De meeste klanten zien al in de eerste week verschil: snellere leadopvolging, meer reacties, minder tijdverlies. Binnen een maand staat het volledige systeem." },
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
    id: "sells_to",
    question: "Ik verkoop aan",
    options: [
      { label: "Bedrijven (B2B)", value: "b2b" },
      { label: "Consumenten (B2C)", value: "b2c" },
      { label: "Beide", value: "both" },
    ],
  },
  {
    id: "leads",
    question: "Hoeveel leads genereer je per maand?",
    options: [
      { label: "Minder dan 50", value: "lt50" },
      { label: "50 tot 100", value: "50-100" },
      { label: "100+", value: "100plus" },
    ],
  },
  {
    id: "revenue_loss",
    question: "Waar laat je de meeste omzet liggen?",
    options: [
      { label: "Trage opvolging", value: "slow_followup" },
      { label: "Geen structuur/overzicht", value: "no_structure" },
      { label: "Geen tijd voor sales", value: "no_time" },
    ],
  },
  {
    id: "improve",
    question: "Wat wil je verbeteren?",
    options: [
      { label: "Meer omzet", value: "more_revenue" },
      { label: "Meer rust & tijd", value: "more_time" },
      { label: "Meer afspraken", value: "more_appointments" },
    ],
  },
  {
    id: "ai_blocker",
    question: "Wat houdt je tegen om AI te gebruiken?",
    options: [
      { label: "AI voelt onpersoonlijk", value: "impersonal" },
      { label: "Geen tijd/kennis voor implementatie", value: "no_time_knowledge" },
      { label: "Twijfel of het werkt voor mijn branche", value: "doubt_industry" },
    ],
  },
  {
    id: "ideal",
    question: "Wat zou jouw ideale situatie zijn?",
    options: [
      { label: "Meer omzet met minder werk", value: "more_less" },
      { label: "Leads automatisch opvolgen", value: "auto_followup" },
      { label: "Alleen warme leads spreken", value: "warm_leads" },
    ],
  },
];

function QuizFunnel() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const total = quizSteps.length + 1; // +1 for contact step
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
        source: "avatar-1",
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
            {contact.name ? `Hey ${contact.name.split(" ")[0]}, we` : "We"} kijken naar jouw antwoorden en plannen een gratis gesprek in.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl px-6 py-4 text-left flex flex-col gap-2 w-full max-w-sm">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">Wat je kunt verwachten</p>
          {["Reactie binnen 24 uur","Gratis strategiegesprek van 30 min","Concreet plan voor jouw bedrijf"].map(item => (
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
      {/* Progress */}
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
          {/* Left */}
          <div className="flex flex-col gap-6">
            <span className="inline-block w-fit px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
              Gratis analyse
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Bereken in 2 minuten{" "}
              <span className="text-gradient">wat dit voor jou oplevert</span>
            </h2>
            <p className="text-[16px] text-gray-400 leading-relaxed">
              Beantwoord 6 korte vragen. We sturen je een persoonlijk plan met exacte stappen voor jouw bedrijf — gratis, geen verplichtingen.
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
                &ldquo;Door de grote stijging in leads hebben we als een gek onze systemen beter moeten inrichten. Een luxeprobleem dat je wilt hebben.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-deep text-[12px] font-bold">T</div>
                <div>
                  <p className="font-semibold text-[13px] text-gray-900">Tim Groot</p>
                  <p className="text-[11px] text-gray-400">CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: quiz card */}
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
          Klaar om je avonden<br />
          <span className="text-primary-deep">terug te krijgen?</span>
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

export default function Avatar1Page() {
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

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
        href="#form"
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
          Voor ondernemers die slimmer willen bouwen
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 leading-[1.06] tracking-tight">
          Stop met werken{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a7d094, #5ca044)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in je bedrijf.
          </span>{" "}
          Bouw een bedrijf dat werkt zonder jou.
        </h1>

        <p className="text-[18px] md:text-[20px] text-gray-500 max-w-xl leading-relaxed">
          Reuzenpanda automatiseert je volledige bedrijf — van eerste lead tot ondertekende offerte. Meer omzet, minder uren, zonder extra personeel.
        </p>

        {/* Video */}
        <div className="w-full mt-2">
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
          <a href="#form" className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] transition-colors shadow-lg shadow-primary/25">
            Bereken wat dit jou oplevert →
          </a>
        </div>

        <p className="text-[13px] text-gray-400">
          Gratis account · Geen betaalmethode nodig · Live binnen 14 dagen
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2">
            {["C","R","M","K","T"].map((initial) => (
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
  { icon: "🌀", title: "Je werkt hard, maar groeit niet", desc: "Je maakt lange dagen maar de omzet staat stil. Meer uren maken is geen optie — je zit al op je max." },
  { icon: "📵", title: "Leads vallen af door trage opvolging", desc: "Je reageert te laat, de lead is al verder. Elke dag dat je wacht, kost je geld." },
  { icon: "🤯", title: "Alles draait op jou", desc: "Jij bent de spil van alles. Als jij er niet bent, staat alles stil. Dat maakt schalen bijna onmogelijk." },
  { icon: "📋", title: "Handmatig werk dat tijd vreet", desc: "Offertes, facturen, opvolging — allemaal handmatig. Terwijl AI dit in seconden doet." },
  { icon: "📉", title: "Geen inzicht in je cijfers", desc: "Je weet niet precies wat werkt en wat niet. Beslissingen neem je op gevoel, niet op data." },
  { icon: "😓", title: "Groeien betekent meer stress", desc: "Meer klanten, meer mensen, meer chaos. Groei voelt als een straf in plaats van een beloning." },
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
            De rem op{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a7d094, #5ca044)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              jouw groei
            </span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Bijna elk groeiend bedrijf loopt op een gegeven moment tegen dezelfde muur.
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
  { step: "01", title: "Leads automatisch opvolgen", desc: "Zodra iemand binnenkomt, reageert Reuzenpanda direct — ook midden in de nacht. Jij spreekt alleen nog warme leads." },
  { step: "02", title: "Offertes & sales op autopiloot", desc: "Van aanvraag tot ondertekende offerte zonder dat jij er iets voor doet. Het systeem doet het zware werk." },
  { step: "03", title: "Interne processen geautomatiseerd", desc: "Facturen, klantcommunicatie, onboarding — allemaal automatisch. Je team werkt slimmer, niet harder." },
  { step: "04", title: "Grip op je cijfers", desc: "Alles in één overzicht. Je weet precies wat er speelt, welke leads warm zijn en waar je omzet vandaan komt." },
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
            <span
              style={{
                background: "linear-gradient(135deg, #a7d094, #5ca044)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              terwijl jij dat niet doet?
            </span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Reuzenpanda automatiseert jouw bedrijf van A tot Z — op maat, live binnen 14 dagen.
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
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: "300+", label: "Klanten geholpen" },
            { value: "14 dagen", label: "Gemiddeld live" },
            { value: "€46K+", label: "Maandelijkse waarde bespaard" },
            { value: "4+ jaar", label: "Langste klantrelatie" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col items-center gap-1 p-6 rounded-[24px] bg-white border border-white shadow-sm text-center">
              <span className="text-[28px] md:text-[32px] font-black text-primary-deep">{m.value}</span>
              <span className="text-[13px] text-gray-400 leading-snug">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Before / after */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-7 rounded-[28px] bg-red-50 border border-red-100">
            <p className="text-[13px] font-bold text-red-400 uppercase tracking-wide mb-4">Zonder Reuzenpanda</p>
            <ul className="flex flex-col gap-3">
              {[
                "Alles draait op jou — stop jij, stopt je bedrijf",
                "Leads vallen af door trage opvolging",
                "Handmatig werk dat uren kost",
                "Groeien betekent meer mensen aannemen",
                "Geen overzicht, beslissingen op gevoel",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-red-700">
                  <span className="shrink-0 mt-0.5">✕</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 rounded-[28px] bg-white border border-primary/30">
            <p className="text-[13px] font-bold text-primary-deep uppercase tracking-wide mb-4">Met Reuzenpanda</p>
            <ul className="flex flex-col gap-3">
              {[
                "Je bedrijf draait ook als jij er niet bent",
                "Leads worden binnen 2 minuten automatisch beantwoord",
                "Offertes, facturen en opvolging volledig automatisch",
                "Groei zonder extra personeel of extra stress",
                "Alles in één dashboard, real-time inzicht",
              ].map(item => (
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
  { initial: "M", name: "Mark", company: "MB Veranda", stars: 5, quote: "Al meer dan 4 jaar klant. We halen 2x zoveel aanvragen uit hetzelfde marketingbudget. Alles werkt automatisch — van offerte tot ondertekening." },
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
            Ondernemers die je al{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a7d094, #5ca044)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              voorgingen
            </span>
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
  { q: "Voor welk type bedrijf werkt Reuzenpanda?", a: "Voor vrijwel elk bedrijf van 1 tot 100+ fte. Of je nu ZZP'er bent met een schil, een scale-up van 10-25 fte of een gevestigd MKB-bedrijf — wij passen het systeem aan jouw situatie aan. We hebben al 300+ bedrijven geholpen in tientallen branches." },
  { q: "Hoe lang duurt het voordat alles live staat?", a: "Gemiddeld 14 dagen. Wij richten alles voor je in — jij hoeft niets te programmeren of technisch te begrijpen. Jij levert de input, wij bouwen het." },
  { q: "Kan ik mijn bestaande systemen koppelen?", a: "Ja. Reuzenpanda koppelt met vrijwel alle tools die je al gebruikt: WhatsApp, e-mail, CRM, agenda, boekhouding en meer. We beginnen met wat je hebt." },
  { q: "Verlies ik het persoonlijke contact met klanten?", a: "Nee — juist niet. Automatisering neemt het routinewerk over zodat jij meer tijd hebt voor de gesprekken die er écht toe doen. Je klanten merken snellere reacties, geen robotachtige communicatie." },
  { q: "Wat als het niet werkt?", a: "Dan betaal je niets. We garanderen dat je app live staat binnen 14 dagen en dat je bedrijfsprocessen geautomatiseerd zijn. Lukt dat niet? Volledig bedrag terug, geen vragen." },
  { q: "Wat kost het?", a: "Dat hangt af van jouw situatie en wat je wil automatiseren. Daarom stellen we je eerst een paar vragen. Op basis van jouw antwoorden geeft onze AI-agent je een eerlijk beeld van wat het oplevert versus wat het kost." },
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
            <span
              style={{
                background: "linear-gradient(135deg, #a7d094, #5ca044)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              eerlijk beantwoord
            </span>
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
    question: "Hoe groot is jouw bedrijf?",
    options: [
      { label: "Solo of met 1-2 mensen", value: "solo" },
      { label: "3-10 medewerkers / zzp'ers", value: "3-10" },
      { label: "10-25 medewerkers", value: "10-25" },
      { label: "25+ medewerkers", value: "25plus" },
    ],
  },
  {
    id: "biggest_pain",
    question: "Wat kost jou op dit moment de meeste tijd?",
    options: [
      { label: "Leads opvolgen en bellen", value: "leads" },
      { label: "Offertes en administratie", value: "admin" },
      { label: "Coördinatie tussen mensen/processen", value: "coordination" },
      { label: "Alles — ik doe teveel zelf", value: "everything" },
    ],
  },
  {
    id: "revenue",
    question: "Wat is je huidige maandomzet?",
    options: [
      { label: "Minder dan €10.000", value: "lt10k" },
      { label: "€10.000 – €50.000", value: "10-50k" },
      { label: "€50.000 – €150.000", value: "50-150k" },
      { label: "Meer dan €150.000", value: "gt150k" },
    ],
  },
  {
    id: "automate",
    question: "Wat wil je het liefst automatiseren?",
    options: [
      { label: "Leadopvolging & sales", value: "sales" },
      { label: "Offertes & documenten", value: "quotes" },
      { label: "Interne processen & communicatie", value: "internal" },
      { label: "Alles van A tot Z", value: "everything" },
    ],
  },
  {
    id: "ai_experience",
    question: "Hoe ver ben je met AI in je bedrijf?",
    options: [
      { label: "Nog niet mee begonnen", value: "not_started" },
      { label: "Ik gebruik wat losse tools", value: "some_tools" },
      { label: "Al bezig, maar niet structureel", value: "partial" },
      { label: "Serieus bezig, wil professioneler", value: "serious" },
    ],
  },
  {
    id: "goal",
    question: "Wat is jouw belangrijkste doel voor de komende 12 maanden?",
    options: [
      { label: "Meer omzet zonder meer uren", value: "more_revenue" },
      { label: "Meer vrijheid en rust", value: "more_freedom" },
      { label: "Schalen zonder chaos", value: "scale" },
      { label: "Mijn bedrijf draait zonder mij", value: "independent" },
    ],
  },
];

function QuizFunnel() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", email: "", phone: "", dialCode: "+31" });

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
      keepalive: true,
      body: JSON.stringify({
        voornaam: contact.name,
        email: contact.email,
        telefoon: `${contact.dialCode} ${contact.phone}`,
        source: "aanmelden",
        ...antwoorden,
      }),
    }).catch(() => {});
    router.push("/bedankt");
  };

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
          <button onClick={() => setStep((s) => s - 1)} type="button" className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors text-center">
            ← Vorige stap
          </button>
        </form>
      )}
    </div>
  );
}

// ─── Quiz section ─────────────────────────────────────────────────────────────

function QuizSection() {
  return (
    <section id="quiz-form" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="inline-block w-fit px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
                Gratis analyse
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                Bereken wat automatisering jou{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a7d094, #5ca044)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  oplevert
                </span>
              </h2>
              <p className="text-[16px] text-gray-500 leading-relaxed">
                Beantwoord 6 vragen. Op basis van jouw antwoorden kijkt onze AI-agent direct of en hoe we jou kunnen helpen.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: "⚡", title: "Geen wachtrij", desc: "Je krijgt direct een appje van onze AI-agent." },
                { icon: "🎯", title: "Op maat", desc: "Het plan is gebaseerd op jouw situatie, niet een standaard pitch." },
                { icon: "🔒", title: "Garantie", desc: "Live binnen 14 dagen of je betaalt niets." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-[20px] bg-gray-50 border border-gray-100">
                  <span className="text-[24px] shrink-0">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-[15px]">{item.title}</p>
                    <p className="text-[13px] text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quiz card */}
          <div id="form" className="scroll-mt-24 bg-gray-50 rounded-[32px] border border-gray-100 p-5 sm:p-8 shadow-sm overflow-hidden">
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
    <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}>
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Klaar om slimmer te bouwen?
          </h2>
          <p className="text-[17px] text-gray-400 leading-relaxed">
            300+ ondernemers gingen je voor. De vraag is niet óf je automatiseert, maar wanneer.
          </p>
        </div>
        <a
          href="#form"
          className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] transition-colors shadow-lg shadow-primary/25"
        >
          Start gratis analyse →
        </a>
        <p className="text-[13px] text-gray-500">Geen betaalmethode nodig · Live binnen 14 dagen · Of je geld terug</p>
      </div>
    </section>
  );
}

// ─── Minimal footer ───────────────────────────────────────────────────────────

function MinimalFooter() {
  return (
    <footer className="py-6 px-6 text-center bg-white border-t border-gray-100">
      <p className="text-[12px] text-gray-400">© {new Date().getFullYear()} Reuzenpanda B.V.</p>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AanmeldenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Reviews />
      <QuizSection />
      <FAQ />
      <FooterCta />
      <MinimalFooter />
    </div>
  );
}

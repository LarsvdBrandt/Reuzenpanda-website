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
          Voor directeuren van gevestigde bedrijven
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-[68px] font-bold text-gray-900 leading-[1.06] tracking-tight">
          Jouw aanwezigheid moet een{" "}
          <span className="text-gradient">keuze zijn.</span>{" "}
          Geen noodzaak.
        </h1>

        <p className="text-[18px] md:text-[20px] text-gray-500 max-w-xl leading-relaxed">
          Reuzenpanda moderniseert jouw operatie stap voor stap — zonder alles omver te gooien. Zodat jouw bedrijf maximale winst genereert, met of zonder jou erbij.
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
            Bereken mijn bedrijfswaarde stijging →
          </a>
        </div>

        <p className="text-[13px] text-gray-400">
          Geen IT-project van jaren · Geen miljoeneninvestering · Live binnen 14 dagen
        </p>

        <div className="flex items-center gap-3 pt-2">
          <div className="flex -space-x-2">
            {["V","M","R","C","J"].map((initial) => (
              <div key={initial} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-[11px] font-bold text-primary-deep">
                {initial}
              </div>
            ))}
          </div>
          <p className="text-[13px] text-gray-500">
            <span className="font-semibold text-gray-900">300+ directeuren</span> gingen je voor
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Problems ─────────────────────────────────────────────────────────────────

const problems = [
  { icon: "📊", title: "Geen realtime inzicht", desc: "Jij stuurt op rapporten die twee weken oud zijn. Tegen de tijd dat je een probleem ziet, heeft het al schade aangericht." },
  { icon: "🔑", title: "Afhankelijk van key-employees", desc: "Als jouw operationeel directeur morgen vertrekt, gaat er veel kennis mee. Processen zitten in mensen, niet in systemen." },
  { icon: "💡", title: "Innovatieschuld loopt op", desc: "De concurrentie moderniseert. Jij weet het, je team weet het. Maar de legacy-systemen en gewoontes houden iedereen gevangen." },
  { icon: "💰", title: "Te hoge kosten per fte", desc: "Mensen die handmatig doen wat een systeem goedkoper en foutloos kan. Elke maand laat je marge liggen die je niet ziet." },
  { icon: "🐌", title: "Starheid die groei blokkeert", desc: "Elke verandering duurt maanden. Beslissingen worden uitgesteld. Jouw organisatie reageert trager dan de markt om je heen beweegt." },
  { icon: "🏷️", title: "Bedrijf nog niet verkoopklaar", desc: "Een koper wil een machine die draait zonder de eigenaar. Zolang jouw aanwezigheid cruciaal is, betaal je de prijs in waardering." },
];

function Problems() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-red-50 text-[12px] font-semibold text-red-500 uppercase tracking-wide">
            De legacy-stilstand
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Groot zijn beschermt je niet{" "}
            <span className="text-gradient">tegen irrelevantie</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            De bedrijven die het zwaarst getroffen worden door technologische disruptie zijn precies de bedrijven die dachten dat ze te groot waren om te veranderen.
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
  { step: "01", title: "Realtime sturen, niet terugkijken", desc: "Jij ziet live wat er in je bedrijf gebeurt — zonder te hoeven vragen. Eén dashboard geeft je de controle terug zonder dat je erin hoeft te duiken." },
  { step: "02", title: "Kennis uit mensen, in systemen", desc: "Processen die nu in je beste medewerkers zitten worden geborgd in systemen. Jouw bedrijf is overdraagbaar, schaalbaar en onafhankelijk van individuen." },
  { step: "03", title: "Modernisering naast je ERP", desc: "We bouwen naast je bestaande software — niet in plaats ervan. Geen disruptie, geen data-risico. Stap voor stap, met jouw IT-team erbij." },
  { step: "04", title: "Minder overhead, hogere marge", desc: "Handmatige processen worden geautomatiseerd. Kosten per fte dalen structureel. Jouw EBITDA verbetert zonder dat je fte-count of kwaliteit inlevert." },
];

function Solution() {
  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf5e4 50%, #d4ecca 100%)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            De aanpak
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Moderniseren zonder{" "}
            <span className="text-gradient">alles omver te gooien.</span>
          </h2>
          <p className="text-[16px] text-gray-400 max-w-lg">
            Geen IT-megaproject. Geen cultuurshock. Bewezen aanpak die werkt naast je bestaande operatie.
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

        {/* Trust signals */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "500K+", label: "maandomzet ondersteund per klant" },
            { number: "14", label: "dagen tot eerste live module" },
            { number: "−30%", label: "operationele kosten gemiddeld" },
            { number: "4+", label: "jaar langste klantrelatie" },
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
    quote: "Ik was sceptisch. We draaien al 18 jaar op hetzelfde systeem. Maar Reuzenpanda bouwde ernaast — niet erin. Binnen een kwartaal hadden we realtime inzicht dat we daarvoor niet hadden.",
    name: "Marco B.",
    company: "MB Veranda — 4+ jaar klant",
    initial: "M",
    stars: 5,
  },
  {
    quote: "Ons project was meer dan €120.000. Elke euro was terugverdiend binnen het eerste jaar. De kwaliteit van beslissingen die we nu nemen is een andere orde van grootte.",
    name: "Renzo V.",
    company: "Kitchenmakeover",
    initial: "R",
    stars: 5,
  },
  {
    quote: "We verwerken nu meer dan 300 leads per maand zonder extra mensen. Mijn directie-team stuurt op data. Dat was voor Reuzenpanda ondenkbaar.",
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
            Bewezen aanpak
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Directeuren die kozen voor{" "}
            <span className="text-gradient">vooruitgang boven stilstand</span>
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
  { q: "Onze organisatie is te groot om nu iets te veranderen.", a: "Dat is precies de reden waarom we met modules werken. We starten met één proces — het meest impactvolle knelpunt — zonder de rest te raken. Geen big-bang implementatie, geen bedrijfsstilstand." },
  { q: "IT-projecten duren altijd jaren en kosten miljoenen.", a: "Wij zijn geen IT-bedrijf in de klassieke zin. We bouwen naast je bestaande systemen. Eerste module live in 14 dagen. Geen tonnen consultancy-uren, geen eindeloze specificatieronden." },
  { q: "Hoe zit het met veiligheid en privacy van onze data?", a: "Terechte vraag. Wij werken conform AVG/GDPR, bouwen op ISO-gecertificeerde infrastructuur en jouw data blijft altijd van jou. We tekenen een verwerkersovereenkomst en onze technische architectuur wordt besproken met jouw IT-afdeling voor implementatie." },
  { q: "Mijn personeel verandert niet zo gemakkelijk.", a: "Systemen die het werk makkelijker maken krijgen adoptie vanzelf. We implementeren stap voor stap, met begeleiding van je team. Weerstand smelt als mensen zien dat het hun werk verlicht, niet vervangt." },
  { q: "Wat maakt Reuzenpanda anders dan een groot consultancybureau?", a: "Wij bouwen en leveren. Geen dure rapporten die in laden verdwijnen. Geen teams van junior consultants. Directe lijn met de bouwers. En een garantie: live binnen 14 dagen of geld terug." },
  { q: "Wat als het niet oplevert wat we verwachten?", a: "Dan betaal je niets. We spreken vooraf af welke resultaten we opleveren. Staat het systeem niet live binnen 14 dagen, of leveren de geautomatiseerde processen niet wat afgesproken? Volledig bedrag terug." },
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
    question: "Hoe groot is jouw organisatie?",
    options: [
      { label: "20 tot 50 fte", value: "20-50" },
      { label: "50 tot 100 fte", value: "50-100" },
      { label: "Meer dan 100 fte", value: "100plus" },
    ],
  },
  {
    id: "revenue",
    question: "Wat is je huidige maandomzet?",
    options: [
      { label: "€250.000 – €500.000", value: "250-500k" },
      { label: "€500.000 – €1.000.000", value: "500k-1m" },
      { label: "Meer dan €1.000.000", value: "1mplus" },
    ],
  },
  {
    id: "systems",
    question: "Welke systemen gebruik je nu?",
    options: [
      { label: "ERP + Office 365", value: "erp_office" },
      { label: "Maatwerksoftware (legacy)", value: "legacy_custom" },
      { label: "Mix van losse systemen", value: "mixed" },
    ],
  },
  {
    id: "biggest_pain",
    question: "Wat is jouw grootste knelpunt?",
    options: [
      { label: "Geen realtime inzicht", value: "no_insight" },
      { label: "Afhankelijkheid van key-employees", value: "key_people" },
      { label: "Hoge overhead, dalende marge", value: "overhead" },
    ],
  },
  {
    id: "goal",
    question: "Wat is jouw einddoel?",
    options: [
      { label: "Bedrijf verkoopklaar maken", value: "exit" },
      { label: "Passief aansturen vanuit afstand", value: "passive" },
      { label: "Marge en efficiency verbeteren", value: "margin" },
    ],
  },
  {
    id: "timeline",
    question: "Op welke termijn wil je dit gerealiseerd hebben?",
    options: [
      { label: "Zo snel mogelijk (< 6 maanden)", value: "asap" },
      { label: "Binnen 1 jaar", value: "1year" },
      { label: "2 tot 3 jaar", value: "2-3year" },
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
        source: "avatar-4",
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
            {contact.name ? `Hey ${contact.name.split(" ")[0]}, we` : "We"} analyseren jouw situatie en plannen een directiegesprek in.
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl px-6 py-4 text-left flex flex-col gap-2 w-full max-w-sm">
          <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">Wat je kunt verwachten</p>
          {["Reactie binnen 24 uur", "Strategiegesprek op directieniveau", "Concreet moderniseringsplan op maat"].map(item => (
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
            <p className="text-[14px] text-gray-400 mt-1">We sturen je een op maat gemaakt moderniseringsplan op basis van jouw antwoorden.</p>
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
            Stuur mijn gratis moderniseringsplan →
            <ArrowRight size={16} />
          </button>
          <p className="text-[12px] text-gray-400 text-center">
            Vertrouwelijk behandeld. Geen spam. Alleen een strategisch gesprek op directieniveau.
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
              Gratis directiescan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Ontdek in 2 minuten{" "}
              <span className="text-gradient">wat jouw operatie kost aan gemiste waarde</span>
            </h2>
            <p className="text-[16px] text-gray-400 leading-relaxed">
              Beantwoord 6 vragen. We sturen je een concreet moderniseringsplan inclusief een ROI-berekening voor jouw specifieke situatie.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Strategiegesprek op directieniveau",
                "ROI-berekening op maat",
                "Moderniseringsplan zonder IT-megaproject",
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
                &ldquo;We draaien al 18 jaar op hetzelfde systeem. Reuzenpanda bouwde ernaast — niet erin. Binnen een kwartaal hadden we realtime inzicht dat we daarvoor niet hadden.&rdquo;
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
          Jouw aanwezigheid als keuze,<br />
          <span className="text-primary-deep">niet als verplichting.</span>
        </h2>
        <p className="text-[17px] text-gray-600 max-w-md">
          Eerste module live binnen 14 dagen. Of je betaalt niets.
        </p>
        <a
          href="#quiz-form"
          className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-[16px] hover:bg-gray-700 transition-colors"
        >
          Ja, ik wil een autonoom bedrijf →
        </a>
        <p className="text-[13px] text-gray-500">Geen betaalmethode nodig · Directiegesprek · Vertrouwelijk</p>
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

export default function Avatar4Page() {
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

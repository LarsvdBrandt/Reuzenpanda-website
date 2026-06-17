"use client";

import { useState } from "react";
import { ArrowRight, RotateCcw, Check } from "lucide-react";
import Link from "next/link";

// ─── Quiz data ────────────────────────────────────────────────────────────────

const steps = [
  {
    id: "size",
    question: "Hoe groot is jouw bedrijf?",
    subtitle: "We passen het platform aan op jouw situatie.",
    options: [
      { label: "Alleen ikzelf",     icon: "🧑",  value: "solo" },
      { label: "2 – 5 medewerkers", icon: "👥",  value: "small" },
      { label: "6 – 15 medewerkers",icon: "🏢",  value: "medium" },
      { label: "15+ medewerkers",   icon: "🏗️",  value: "large" },
    ],
  },
  {
    id: "goals",
    question: "Wat wil je automatiseren?",
    subtitle: "Selecteer alles wat van toepassing is.",
    multi: true,
    options: [
      { label: "Leads binnenhalen",      icon: "🎯", value: "leads" },
      { label: "Klantopvolging & CRM",   icon: "📋", value: "crm" },
      { label: "Offertes & documenten",  icon: "📄", value: "offertes" },
      { label: "WhatsApp & AI agents",   icon: "💬", value: "whatsapp" },
    ],
  },
  {
    id: "volume",
    question: "Hoeveel aanvragen krijg je per maand?",
    subtitle: "Dit bepaalt welke staffel het beste bij je past.",
    options: [
      { label: "Minder dan 50",   icon: "🌱", value: "xs" },
      { label: "50 – 200",        icon: "📈", value: "sm" },
      { label: "200 – 500",       icon: "🚀", value: "md" },
      { label: "500+",            icon: "⚡", value: "lg" },
    ],
  },
  {
    id: "support",
    question: "Wil je een onboarding?",
    subtitle: "We zetten alles voor je op en zorgen dat je vliegende start maakt.",
    options: [
      { label: "Nee, ik ga zelf aan de slag",        icon: "💪", value: "none" },
      { label: "Ja, graag een onboarding (+€2.000 eenmalig)", icon: "🚀", value: "onboarding" },
    ],
  },
];

// ─── Price calculation ────────────────────────────────────────────────────────

function calculatePrice(answers: Record<string, string | string[]>) {
  let min = 0;
  let max = 0;

  const goals = (answers.goals as string[]) ?? [];
  const volume = answers.volume as string;
  const size   = answers.size as string;
  const support = answers.support as string;

  // Formulieren
  if (goals.includes("leads")) {
    const tiers: Record<string, [number, number]> = {
      xs: [0, 49], sm: [49, 69], md: [89, 129], lg: [219, 439],
    };
    const [a, b] = tiers[volume] ?? [49, 69];
    min += a; max += b;
  }

  // CRM
  if (goals.includes("crm")) {
    const users: Record<string, number> = { solo: 0, small: 49, medium: 127, large: 205 };
    const p = users[size] ?? 49;
    min += p; max += p + 39;
  }

  // Automatisering (offertes)
  if (goals.includes("offertes")) {
    const tiers: Record<string, [number, number]> = {
      xs: [0, 59], sm: [59, 134], md: [134, 224], lg: [224, 399],
    };
    const [a, b] = tiers[volume] ?? [59, 134];
    min += a; max += b;
  }

  // Agents + Gesprekken (whatsapp)
  if (goals.includes("whatsapp")) {
    const tiers: Record<string, [number, number]> = {
      xs: [0, 99], sm: [119, 219], md: [219, 519], lg: [519, 999],
    };
    const [a, b] = tiers[volume] ?? [119, 219];
    min += a; max += b;
  }

  const onboarding = support === "onboarding" ? 2000 : 0;

  return { min, max, onboarding };
}

// ─── Option card ──────────────────────────────────────────────────────────────

function OptionCard({
  label, icon, selected, onClick,
}: { label: string; icon: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-3 px-5 py-4 rounded-2xl border-2 text-left transition-all duration-150 group ${
        selected
          ? "border-primary bg-primary/10 shadow-sm"
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
      }`}
    >
      <span className="text-[22px] leading-none shrink-0">{icon}</span>
      <span className={`text-[14px] font-semibold ${selected ? "text-primary-deep" : "text-gray-800"}`}>
        {label}
      </span>
      {selected && (
        <span className="ml-auto shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
          <Check size={11} className="text-white" />
        </span>
      )}
    </button>
  );
}

// ─── Result screen ────────────────────────────────────────────────────────────

function Result({ min, max, onboarding, onReset }: { min: number; max: number; onboarding: number; onReset: () => void }) {
  const isFree = max === 0;

  return (
    <div className="flex flex-col items-center gap-6 text-center py-4">
      <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-[28px]">
        🎉
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[14px] text-gray-400 mb-1">Jouw geschatte prijs</p>
        {isFree ? (
          <p className="text-[52px] font-black text-gray-900 tracking-tight leading-none">Gratis</p>
        ) : (
          <p className="text-[52px] font-black text-gray-900 tracking-tight leading-none">
            €{min}
            {max > min && <span className="text-gray-400"> – €{max}</span>}
          </p>
        )}
        {!isFree && <p className="text-[14px] text-gray-400">per maand</p>}
        {onboarding > 0 && (
          <p className="text-[14px] font-semibold text-primary-deep mt-1">
            + €{onboarding.toLocaleString("nl-NL")} eenmalige onboarding
          </p>
        )}
      </div>
      <p className="text-[14px] text-gray-500 max-w-xs">
        Dit is een schatting op basis van jouw keuzes. Bekijk de exacte staffels op de prijzenpagina.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Link
          href="/prijzen"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-900 text-white font-semibold text-[15px] hover:bg-gray-700 transition-colors"
        >
          Bekijk exacte prijzen
          <ArrowRight size={15} />
        </Link>
        <Link
          href="/prijzen"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-primary hover:bg-primary-dark text-white font-semibold text-[15px] transition-colors"
        >
          Gratis starten
        </Link>
      </div>
      <button
        onClick={onReset}
        className="flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors"
      >
        <RotateCcw size={13} />
        Opnieuw berekenen
      </button>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function PricingCalculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [done, setDone] = useState(false);

  const current = steps[step];
  const isMulti  = !!current?.multi;
  const selected  = answers[current?.id] ?? (isMulti ? [] : "");

  const isSelected = (val: string) =>
    isMulti ? (selected as string[]).includes(val) : selected === val;

  const toggle = (val: string) => {
    if (isMulti) {
      const arr = selected as string[];
      setAnswers((prev) => ({
        ...prev,
        [current.id]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val],
      }));
    } else {
      setAnswers((prev) => ({ ...prev, [current.id]: val }));
      // auto-advance on single-select
      setTimeout(() => {
        if (step < steps.length - 1) setStep((s) => s + 1);
        else setDone(true);
      }, 200);
    }
  };

  const canAdvance = isMulti
    ? (selected as string[]).length > 0
    : false;

  const advance = () => {
    if (step < steps.length - 1) setStep((s) => s + 1);
    else setDone(true);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  const { min, max, onboarding } = done ? calculatePrice(answers) : { min: 0, max: 0, onboarding: 0 };
  const progress = done ? 100 : (step / steps.length) * 100;

  return (
    <section className="py-28 px-6 bg-white" id="prijzen">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div className="flex flex-col gap-5">
            <span className="inline-block w-fit px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
              Prijzen
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Wat kost het voor{" "}
              <span className="text-gradient">jouw bedrijf?</span>
            </h2>
            <p className="text-[17px] text-gray-400 leading-relaxed">
              Geen standaardpakket. Beantwoord vier vragen en bereken direct wat Reuzenpanda voor jou kost.
            </p>
            <ul className="flex flex-col gap-3 mt-2">
              {[
                "Geen verborgen kosten",
                "Gratis starten, betaal alleen wat je gebruikt",
                "Maandelijks opzegbaar",
                "Live of je betaalt niets",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-gray-500">
                  <Check size={15} className="text-primary-deep shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: quiz card */}
          <div className="bg-gray-50 rounded-[32px] border border-gray-200 p-8 flex flex-col gap-6">
            {/* Progress bar */}
            {!done && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-gray-400 uppercase tracking-wide">
                    Stap {step + 1} van {steps.length}
                  </p>
                  <p className="text-[12px] text-gray-400">{Math.round(progress)}%</p>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {done ? (
              <Result min={min} max={max} onboarding={onboarding} onReset={reset} />
            ) : (
              <>
                <div>
                  <h3 className="text-[20px] font-bold text-gray-900">{current.question}</h3>
                  <p className="text-[14px] text-gray-400 mt-1">{current.subtitle}</p>
                </div>

                <div className="flex flex-col gap-2.5">
                  {current.options.map((opt) => (
                    <OptionCard
                      key={opt.value}
                      label={opt.label}
                      icon={opt.icon}
                      selected={isSelected(opt.value)}
                      onClick={() => toggle(opt.value)}
                    />
                  ))}
                </div>

                {isMulti && (
                  <button
                    onClick={advance}
                    disabled={!canAdvance}
                    className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-900 text-white font-semibold text-[15px] hover:bg-gray-700 disabled:opacity-30 transition-colors"
                  >
                    Volgende
                    <ArrowRight size={15} />
                  </button>
                )}

                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="text-[13px] text-gray-400 hover:text-gray-600 transition-colors text-center"
                  >
                    ← Vorige stap
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

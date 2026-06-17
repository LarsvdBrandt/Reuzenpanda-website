"use client";

import { useState } from "react";
import { FileText, Users, File, MessageCircle, Bot, Zap } from "lucide-react";

const features = [
  {
    id: "formulieren",
    icon: FileText,
    label: "Formulieren",
    title: "Leads direct de juiste plek in",
    description:
      "Bouw slimme formulieren en offerteconfiguratoren. Klanten vullen in, jij ontvangt een kant-en-klare lead — inclusief alle gegevens die je nodig hebt om direct op te volgen.",
    badge: "3× meer aanvragen",
    visual: (
      <div className="flex flex-col gap-3 p-5 h-full">
        <div className="h-3 w-28 bg-gray-100 rounded-full" />
        {["Naam", "Bedrijf", "Telefoonnummer"].map((f) => (
          <div key={f} className="h-11 w-full bg-gray-50 rounded-2xl border border-gray-200 px-4 flex items-center">
            <span className="text-[13px] text-gray-300">{f}</span>
          </div>
        ))}
        <div className="h-11 w-full rounded-2xl bg-primary flex items-center justify-center mt-1">
          <span className="text-white text-[13px] font-semibold">Offerte aanvragen →</span>
        </div>
      </div>
    ),
  },
  {
    id: "crm",
    icon: Users,
    label: "CRM",
    title: "Jouw volledige pipeline, overzichtelijk",
    description:
      "Volg elke lead van eerste contact tot getekende offerte. Gebouwd voor MKB-bedrijven die snel schakelen en geen tijd hebben voor ingewikkelde systemen.",
    badge: "Altijd inzicht",
    visual: (
      <div className="flex flex-col gap-2 p-5 h-full">
        {[
          { label: "Nieuw", count: 8, color: "bg-blue-400" },
          { label: "In gesprek", count: 5, color: "bg-yellow-400" },
          { label: "Offerte verstuurd", count: 3, color: "bg-orange-400" },
          { label: "Gewonnen", count: 12, color: "bg-primary" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
            <div className={`w-2.5 h-2.5 rounded-full ${s.color} shrink-0`} />
            <span className="text-[13px] font-medium text-gray-700 flex-1">{s.label}</span>
            <span className="text-[12px] font-semibold text-gray-400">{s.count}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "documenten",
    icon: File,
    label: "Documenten",
    title: "Van aanvraag naar PDF-offerte in seconden",
    description:
      "Nooit meer handmatig offertes opmaken. Reuzenpanda genereert automatisch professionele documenten op basis van klantgegevens. Verstuurd, ondertekend, klaar.",
    badge: "Automatisch gegenereerd",
    visual: (
      <div className="flex flex-col gap-3 p-5 h-full">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-9 h-9 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
            <File size={15} className="text-primary-deep" />
          </div>
          <div className="flex-1">
            <div className="h-2.5 w-24 bg-gray-200 rounded-full mb-1.5" />
            <div className="h-2 w-16 bg-gray-100 rounded-full" />
          </div>
          <span className="text-[11px] font-semibold px-2.5 py-1 bg-primary/10 text-primary-deep rounded-full">
            ✓ Ondertekend
          </span>
        </div>
        <div className="flex flex-col gap-2 py-2">
          {[80, 60, 90, 50, 70].map((w, i) => (
            <div key={`doc-line-${i}`} className="h-2 bg-gray-100 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[12px] text-gray-400">Totaal excl. BTW</span>
          <span className="text-[15px] font-bold text-gray-900">€4.850</span>
        </div>
      </div>
    ),
  },
  {
    id: "gesprekken",
    icon: MessageCircle,
    label: "Gesprekken",
    badge: "New",
    title: "Alle klantcommunicatie op één plek",
    description:
      "E-mail, WhatsApp en chat samengevoegd in één inbox. Je team reageert razendsnel, klanten krijgen persoonlijke aandacht — zonder dat het je uren kost.",
    highlight: "80% minder tijd",
    visual: (
      <div className="flex flex-col gap-2 p-5 h-full">
        {[
          { name: "Renzo V.", msg: "Wanneer kan ik de offerte verwachten?", time: "09:41", unread: true },
          { name: "Carlo H.", msg: "Top, dan zien we jullie dinsdag!", time: "09:12" },
          { name: "MB Veranda", msg: "Factuur ontvangen, bedankt!", time: "gisteren" },
        ].map((c) => (
          <div key={c.name} className={`flex items-start gap-3 p-3 rounded-2xl border ${c.unread ? "bg-primary/10 border-primary/20" : "bg-gray-50 border-gray-100"}`}>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-[11px] font-bold text-primary-deep shrink-0">
              {c.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[13px] font-semibold text-gray-900">{c.name}</span>
                <span className="text-[11px] text-gray-400 shrink-0">{c.time}</span>
              </div>
              <p className="text-[12px] text-gray-500 truncate mt-0.5">{c.msg}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "ai-agent",
    icon: Bot,
    label: "AI Agent",
    badge: "New",
    title: "Slimme assistenten die 24/7 voor je werken",
    description:
      "Zet AI-agents in die automatisch leads opvolgen, afspraken inplannen en vragen beantwoorden — via WhatsApp, e-mail of je website. Alsof je een medewerker hebt die nooit slaapt.",
    highlight: "24/7 actief",
    visual: (
      <div className="flex flex-col gap-2 p-4 h-full justify-end">
        {[
          { from: "user", msg: "Kan ik nog een offerte aanvragen?" },
          { from: "ai", msg: "Zeker! Ik heb je beschikbare tijden al opgezocht. Vrijdag 15 maart om 9:00 of maandag 18 maart om 10:00 — welk tijdstip past het beste?" },
          { from: "user", msg: "Vrijdag 9:00 graag" },
          { from: "ai", msg: "Afspraak gepland voor vrijdag 15 maart om 9:00 ✓" },
        ].map((m, i) => (
          <div key={`ai-msg-${i}`} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] px-3.5 py-2 rounded-3xl text-[12px] leading-relaxed ${m.from === "user" ? "bg-primary text-white rounded-br-sm" : "bg-gray-100 text-gray-700 rounded-bl-sm"}`}>
              {m.msg}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "automatisering",
    icon: Zap,
    label: "Automatisering",
    title: "Koppel alles en laat het voor je werken",
    description:
      "Verbind je tools, triggers en acties. Wanneer een lead binnenkomt, een offerte getekend is of een factuur verstuurd moet worden — Reuzenpanda handelt het automatisch af.",
    badge: "€46K bespaard/maand",
    visual: (
      <div className="flex flex-col gap-2.5 p-5 h-full justify-center">
        {[
          { trigger: "Formulier ingevuld", action: "Lead aangemaakt in CRM", on: true },
          { trigger: "Offerte getekend", action: "Factuur automatisch aangemaakt", on: true },
          { trigger: "Geen reactie na 3 dagen", action: "WhatsApp follow-up verstuurd", on: false },
        ].map((flow) => (
          <div key={flow.trigger} className={`flex items-center gap-3 p-3 rounded-2xl border text-[12px] ${flow.on ? "bg-primary/10 border-primary/20" : "bg-gray-50 border-gray-100"}`}>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-gray-400 block">Als</span>
              <span className="font-medium text-gray-700 truncate block">{flow.trigger}</span>
            </div>
            <span className="text-gray-300 font-light">→</span>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] text-gray-400 block">Dan</span>
              <span className="font-medium text-gray-700 truncate block">{flow.action}</span>
            </div>
            <div className={`w-2 h-2 rounded-full shrink-0 ${flow.on ? "bg-primary" : "bg-gray-200"}`} />
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  const [active, setActive] = useState("ai-agent");
  const af = features.find((f) => f.id === active) ?? features[0];

  return (
    <section className="py-28 px-6 bg-white" id="oplossingen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Thuiskomen in het{" "}
            <span className="text-gradient">alles-in-één systeem</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 font-light">
            Alle tools die je nodig hebt om te groeien, gebundeld in één platform.
          </p>
        </div>

        <div className="grid md:grid-cols-[260px_1fr] gap-6 items-start">
          {/* Sidebar */}
          <div className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-visible pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {features.map((f) => {
              const Icon = f.icon;
              const on = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-3xl text-left transition-colors shrink-0 md:shrink md:w-full ${
                    on
                      ? "bg-primary/10 text-primary-deep"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Icon size={16} className="shrink-0" />
                  <span className="text-[14px] font-medium whitespace-nowrap">{f.label}</span>
                  {"badge" in f && f.badge === "New" && (
                    <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-primary text-white shrink-0">
                      New
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="grid md:grid-cols-2 gap-0 bg-gray-50 rounded-[32px] border border-gray-100 overflow-hidden min-h-[420px]">
            {/* Text side */}
            <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
              {"badge" in af && af.badge !== "New" && (
                <span className="inline-flex items-center gap-1.5 w-fit px-3 py-1.5 rounded-full bg-primary/10 text-primary-deep text-[12px] font-semibold">
                  ✓ {af.badge}
                </span>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {af.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                {af.description}
              </p>
              <button className="w-fit px-5 py-2.5 rounded-full bg-gray-900 text-white text-[14px] font-semibold hover:bg-gray-700 transition-colors">
                Leer meer →
              </button>
            </div>

            {/* Visual side */}
            <div className="bg-white border-t md:border-t-0 md:border-l border-gray-100 min-h-[280px]">
              {af.visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

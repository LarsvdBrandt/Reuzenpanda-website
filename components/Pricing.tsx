"use client";

import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";

// ─── Shared card shell ────────────────────────────────────────────────────────

function Card({ title, subtitle, description, priceBlock, stepper, included }: {
  title: string;
  subtitle: string;
  description: string;
  priceBlock: React.ReactNode;
  stepper: React.ReactNode;
  included: string[];
}) {
  return (
    <div className="flex flex-col rounded-[28px] border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-7 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-[22px] font-bold text-gray-900">{title}</h3>
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mt-1">{subtitle}</p>
        </div>
        <p className="text-[14px] text-gray-400 leading-relaxed">{description}</p>
        {stepper}
        {priceBlock}
      </div>
      <div className="px-7 py-4 border-t border-gray-100" style={{ background: "rgba(167,208,148,0.08)" }}>
        <button className="w-full text-[14px] font-semibold text-primary-deep hover:text-primary transition-colors">
          Gratis starten
        </button>
      </div>
      <div className="px-7 py-6 flex flex-col gap-4">
        <p className="text-[13px] font-semibold text-gray-700">Wat is er inbegrepen in betaald?</p>
        <ul className="flex flex-col gap-2.5">
          {included.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-[13px] text-gray-500">
              <Check size={14} className="text-primary-deep shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <button className="w-full mt-2 py-3 rounded-2xl bg-primary hover:bg-primary-dark text-white font-semibold text-[14px] transition-colors">
          Gratis starten
        </button>
      </div>
    </div>
  );
}

function PriceDisplay({ price, yearly }: { price: number; yearly: boolean }) {
  const p = yearly ? Math.round(price * 0.9) : price;
  return (
    <div className="mt-1 flex items-baseline gap-1.5">
      {p === 0 ? (
        <span className="text-[42px] font-bold text-gray-900 tracking-tight leading-none">Gratis</span>
      ) : (
        <>
          <span className="text-[42px] font-bold text-gray-900 tracking-tight leading-none">€{p}</span>
          <span className="text-[13px] text-gray-400 font-medium">per maand</span>
        </>
      )}
    </div>
  );
}

function Stepper({ label, index, max, onDec, onInc }: {
  label: string; index: number; max: number; onDec: () => void; onInc: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3 mt-2 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
      <span className="text-[14px] font-medium text-gray-700">{label}</span>
      <div className="flex items-center gap-2">
        <button onClick={onDec} disabled={index === 0}
          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors">
          <Minus size={12} />
        </button>
        <button onClick={onInc} disabled={index === max}
          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors">
          <Plus size={12} />
        </button>
      </div>
    </div>
  );
}

// ─── Formulieren ──────────────────────────────────────────────────────────────

const formulierenTiers = [
  { label: "10 inzendingen",     price: 0 },
  { label: "100 inzendingen",    price: 49 },
  { label: "250 inzendingen",    price: 69 },
  { label: "500 inzendingen",    price: 89 },
  { label: "1.000 inzendingen",  price: 129 },
  { label: "2.000 inzendingen",  price: 219 },
  { label: "5.000 inzendingen",  price: 439 },
  { label: "10.000 inzendingen", price: 799 },
];

function FormulierenCard({ yearly }: { yearly: boolean }) {
  const [i, setI] = useState(1);
  const tier = formulierenTiers[i];
  return (
    <Card
      title="Formulieren"
      subtitle="Voor ondernemers die meer leads willen binnenhalen"
      description="Scoor meer leads door hen zichzelf te laten kwalificeren"
      stepper={<Stepper label={tier.label} index={i} max={formulierenTiers.length - 1} onDec={() => setI(v => Math.max(0, v - 1))} onInc={() => setI(v => Math.min(formulierenTiers.length - 1, v + 1))} />}
      priceBlock={<PriceDisplay price={tier.price} yearly={yearly} />}
      included={["Verwijdering branding", "Redirect eigen URL", "Analytics"]}
    />
  );
}

// ─── CRM ─────────────────────────────────────────────────────────────────────

function crmPrice(users: number) {
  if (users <= 1) return 0;
  return 49 + (users - 2) * 39;
}

function CRMCard({ yearly }: { yearly: boolean }) {
  const [users, setUsers] = useState(2);
  const price = crmPrice(users);
  const displayPrice = yearly ? Math.round(price * 0.9) : price;

  return (
    <Card
      title="CRM"
      subtitle="Voor ondernemers die meer klanten willen beheren"
      description="Scoor meer klanten door deze efficiënt te beheren samen met jouw team"
      stepper={
        <div className="flex items-center justify-between gap-3 mt-2 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
          <span className="text-[14px] font-medium text-gray-700">{users} gebruiker{users !== 1 ? "s" : ""}</span>
          <div className="flex items-center gap-2">
            <button onClick={() => setUsers(v => Math.max(1, v - 1))} disabled={users === 1}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors">
              <Minus size={12} />
            </button>
            <button onClick={() => setUsers(v => v + 1)}
              className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors">
              <Plus size={12} />
            </button>
          </div>
        </div>
      }
      priceBlock={
        <div className="mt-1 flex flex-col gap-0.5">
          <div className="flex items-baseline gap-1.5">
            {displayPrice === 0 ? (
              <span className="text-[42px] font-bold text-gray-900 tracking-tight leading-none">Gratis</span>
            ) : (
              <>
                <span className="text-[42px] font-bold text-gray-900 tracking-tight leading-none">€{displayPrice}</span>
                <span className="text-[13px] text-gray-400 font-medium">per maand</span>
              </>
            )}
          </div>
          {users > 2 && (
            <p className="text-[12px] text-gray-400">€49 basis + {users - 2} × €39 extra</p>
          )}
        </div>
      }
      included={["Meerdere teamgenoten", "Meer pipelines", "Opdrachten beheren"]}
    />
  );
}

// ─── Automatisering ───────────────────────────────────────────────────────────

const automatiseringTiers = [
  { label: "25 acties",      price: 0 },
  { label: "1.000 acties",   price: 59 },
  { label: "2.500 acties",   price: 134 },
  { label: "5.000 acties",   price: 224 },
  { label: "10.000 acties",  price: 399 },
  { label: "20.000 acties",  price: 799 },
];

function AutomatiseringCard({ yearly }: { yearly: boolean }) {
  const [i, setI] = useState(1);
  const tier = automatiseringTiers[i];
  return (
    <Card
      title="Automatisering"
      subtitle="Voor ondernemers die meer tijd over willen houden"
      description="Houd meer tijd over voor belangrijke taken binnen jouw bedrijf"
      stepper={<Stepper label={tier.label} index={i} max={automatiseringTiers.length - 1} onDec={() => setI(v => Math.max(0, v - 1))} onInc={() => setI(v => Math.min(automatiseringTiers.length - 1, v + 1))} />}
      priceBlock={<PriceDisplay price={tier.price} yearly={yearly} />}
      included={["Onbeperkt flows", "Offertes automatiseren", "Slimme triggers"]}
    />
  );
}

// ─── Agents ───────────────────────────────────────────────────────────────────

const agentsTiers = [
  { label: "100 tokens",    price: 0 },
  { label: "1.000 tokens",  price: 99 },
  { label: "2.500 tokens",  price: 219 },
  { label: "5.000 tokens",  price: 519 },
  { label: "10.000 tokens", price: 700 },
  { label: "20.000 tokens", price: 999 },
];

function AgentsCard({ yearly }: { yearly: boolean }) {
  const [i, setI] = useState(1);
  const tier = agentsTiers[i];
  return (
    <Card
      title="Agents"
      subtitle="Voor afspraken via WhatsApp"
      description="Scoor meer afspraken door intelligente AI agents in te zetten op WhatsApp"
      stepper={<Stepper label={tier.label} index={i} max={agentsTiers.length - 1} onDec={() => setI(v => Math.max(0, v - 1))} onInc={() => setI(v => Math.min(agentsTiers.length - 1, v + 1))} />}
      priceBlock={<PriceDisplay price={tier.price} yearly={yearly} />}
      included={["Meerdere agents", "Afspraken inplannen", "WhatsApp koppeling"]}
    />
  );
}

// ─── Gesprekken ───────────────────────────────────────────────────────────────

function gesprekkenPrice(email: number, qr: number, meta: number) {
  if (email <= 1 && qr === 0 && meta === 0) return 0;
  const base = email >= 1 && qr >= 1 ? 119 : 0;
  const extraEmail = Math.max(0, email - 1) * 19;
  const extraQr = Math.max(0, qr - 1) * 89;
  const extraMeta = meta * 119;
  return base + extraEmail + extraQr + extraMeta;
}

function CountRow({ label, value, onDec, onInc, min = 0 }: {
  label: string; value: number; onDec: () => void; onInc: () => void; min?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5 border border-gray-100">
      <span className="text-[13px] font-medium text-gray-700">{label}: <span className="font-bold">{value}</span></span>
      <div className="flex items-center gap-2">
        <button onClick={onDec} disabled={value <= min}
          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors">
          <Minus size={12} />
        </button>
        <button onClick={onInc}
          className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors">
          <Plus size={12} />
        </button>
      </div>
    </div>
  );
}

function GesprekkenCard({ yearly }: { yearly: boolean }) {
  const [email, setEmail] = useState(1);
  const [qr, setQr] = useState(1);
  const [meta, setMeta] = useState(0);
  const price = gesprekkenPrice(email, qr, meta);
  const displayPrice = yearly ? Math.round(price * 0.9) : price;

  return (
    <Card
      title="Gesprekken"
      subtitle="Al jouw contact op één plek"
      description="Beheer al je klantcontact centraal via E-mail, QR WhatsApp of Meta WhatsApp"
      stepper={
        <div className="flex flex-col gap-2 mt-2">
          <CountRow label="E-mail accounts" value={email} min={1} onDec={() => setEmail(v => Math.max(1, v - 1))} onInc={() => setEmail(v => v + 1)} />
          <CountRow label="QR WhatsApp" value={qr} min={0} onDec={() => setQr(v => Math.max(0, v - 1))} onInc={() => setQr(v => v + 1)} />
          <CountRow label="Meta WhatsApp" value={meta} min={0} onDec={() => setMeta(v => Math.max(0, v - 1))} onInc={() => setMeta(v => v + 1)} />
        </div>
      }
      priceBlock={
        <div className="mt-1 flex flex-col gap-0.5">
          <div className="flex items-baseline gap-1.5">
            {displayPrice === 0 ? (
              <span className="text-[42px] font-bold text-gray-900 tracking-tight leading-none">Gratis</span>
            ) : (
              <>
                <span className="text-[42px] font-bold text-gray-900 tracking-tight leading-none">€{displayPrice}</span>
                <span className="text-[13px] text-gray-400 font-medium">per maand</span>
              </>
            )}
          </div>
        </div>
      }
      included={["E-mail & WhatsApp accounts", "Accounts delen met team", "Multi-channel support"]}
    />
  );
}

// ─── Support addon ────────────────────────────────────────────────────────────

function SupportAddon({ yearly }: { yearly: boolean }) {
  const [plan, setPlan] = useState<"none" | "standard" | "plus">("none");
  const price = plan === "standard" ? (yearly ? 89 : 99) : plan === "plus" ? (yearly ? 269 : 299) : 0;

  return (
    <div className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm">
      <div className="flex flex-col gap-2 mb-5">
        <h3 className="text-[20px] font-bold text-gray-900">Support & Ondersteuning</h3>
        <p className="text-[14px] text-gray-400">Persoonlijke begeleiding bij het bouwen en optimaliseren van jouw automatiseringen.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        {[
          { key: "none",     label: "Geen support",   desc: "Zelf aan de slag",          price: 0 },
          { key: "standard", label: "Standaard",       desc: "E-mail & chat support",     price: yearly ? 89 : 99 },
          { key: "plus",     label: "Plus",            desc: "Dedicated account manager", price: yearly ? 269 : 299 },
        ].map((opt) => (
          <button
            key={opt.key}
            onClick={() => setPlan(opt.key as typeof plan)}
            className={`flex-1 text-left p-4 rounded-2xl border-2 transition-all ${
              plan === opt.key
                ? "border-primary bg-primary/10"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className={`text-[14px] font-bold ${plan === opt.key ? "text-primary-deep" : "text-gray-900"}`}>{opt.label}</p>
            <p className="text-[12px] text-gray-400 mt-0.5">{opt.desc}</p>
            <p className={`text-[16px] font-bold mt-2 ${plan === opt.key ? "text-primary-deep" : "text-gray-700"}`}>
              {opt.price === 0 ? "Gratis" : `€${opt.price}/mnd`}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-28 px-6 bg-gray-50" id="prijzen">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-5">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
            Transparante <span className="text-gradient">prijzen</span>
          </h2>
          <p className="text-[17px] text-gray-400 max-w-md">
            Geen verborgen kosten · Geen lange contracten · Altijd opzegbaar
          </p>
          <div className="flex items-center gap-1 bg-white rounded-full border border-gray-200 p-1 shadow-sm">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${!yearly ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Per maand
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-semibold transition-all ${yearly ? "bg-gray-900 text-white shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              Per jaar
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary-deep">bespaar 10%</span>
            </button>
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FormulierenCard yearly={yearly} />
          <CRMCard yearly={yearly} />
          <AutomatiseringCard yearly={yearly} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3 mx-auto w-full">
          <AgentsCard yearly={yearly} />
          <GesprekkenCard yearly={yearly} />
        </div>

        {/* Support addon */}
        <SupportAddon yearly={yearly} />
      </div>
    </section>
  );
}

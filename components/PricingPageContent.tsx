"use client";

import { useState } from "react";
import { Check, Minus, Plus, ChevronDown } from "lucide-react";
import Link from "next/link";

// ─── Tier data ────────────────────────────────────────────────────────────────

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

const automatiseringTiers = [
  { label: "25 acties",      price: 0 },
  { label: "1.000 acties",   price: 59 },
  { label: "2.500 acties",   price: 134 },
  { label: "5.000 acties",   price: 224 },
  { label: "10.000 acties",  price: 399 },
  { label: "20.000 acties",  price: 799 },
];

const agentsTiers = [
  { label: "100 tokens",    price: 0 },
  { label: "1.000 tokens",  price: 99 },
  { label: "2.500 tokens",  price: 219 },
  { label: "5.000 tokens",  price: 519 },
  { label: "10.000 tokens", price: 700 },
  { label: "20.000 tokens", price: 999 },
];

function crmPrice(users: number) {
  if (users <= 1) return 0;
  return 49 + (users - 2) * 39;
}

function gesprekkenPrice(email: number, qr: number, meta: number) {
  if (email <= 1 && qr === 0 && meta === 0) return 0;
  const base = 119;
  const extraEmail = Math.max(0, email - 1) * 19;
  const extraQr = Math.max(0, qr - 1) * 89;
  const extraMeta = meta * 119;
  return base + extraEmail + extraQr + extraMeta;
}

// ─── Shared sub-components ────────────────────────────────────────────────────

function PriceDisplay({ price, yearly }: { price: number; yearly: boolean }) {
  const p = yearly ? Math.round(price * 0.9) : price;
  return (
    <div className="mt-1 flex items-baseline gap-1.5">
      {p === 0 ? (
        <span className="text-[38px] font-bold text-gray-900 tracking-tight leading-none">Gratis</span>
      ) : (
        <>
          <span className="text-[38px] font-bold text-gray-900 tracking-tight leading-none">€{p}</span>
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
      <span className="text-[14px] font-medium text-gray-700 truncate">{label}</span>
      <div className="flex items-center gap-2 shrink-0">
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

function Card({ title, subtitle, description, priceBlock, stepper, included }: {
  title: string; subtitle: string; description: string;
  priceBlock: React.ReactNode; stepper: React.ReactNode; included: string[];
}) {
  return (
    <div className="flex flex-col rounded-[28px] border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-7 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-[20px] font-bold text-gray-900">{title}</h3>
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
      </div>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Kan ik modules apart gebruiken?",
    a: "Ja. Je kiest zelf welke modules je activeert. Je betaalt alleen voor wat je daadwerkelijk gebruikt. Formulieren, CRM, Automatisering, Agents en Gesprekken staan los van elkaar.",
  },
  {
    q: "Hoe werkt de gratis versie?",
    a: "Iedere module heeft een gratis laag. Zo kun je de software volledig uitproberen zonder betaalmethode. De gratis laag heeft limieten, maar is ruim genoeg om te zien of Reuzenpanda bij jouw bedrijf past.",
  },
  {
    q: "Kan ik op elk moment opzeggen?",
    a: "Ja. Er zijn geen lange contracten. Je kunt maandelijks opzeggen. Bij jaarlijks betalen krijg je 10% korting maar zit je wel vast aan het jaar.",
  },
  {
    q: "Wat is het verschil tussen QR WhatsApp en Meta WhatsApp?",
    a: "QR WhatsApp koppelt je bestaande nummer via een QR-code, ideaal voor kleinere volumes. Meta WhatsApp (officiële Business API) is geschikt voor grotere volumes, automatisering en meerdere gebruikers op één nummer.",
  },
  {
    q: "Wat houdt de garantie precies in?",
    a: "Als je app niet live is binnen 30 dagen en je bedrijfsprocessen niet geautomatiseerd zijn, betaal je niets. We geven je het volledige bedrag terug zonder vragen.",
  },
  {
    q: "Hoe lang duurt het voordat mijn app live is?",
    a: "Gemiddeld 2 tot 4 weken. We beginnen direct na onboarding. Je krijgt wekelijkse updates en een live demo zodra de eerste versie klaarstaat.",
  },
  {
    q: "Kan ik de staffel tussentijds aanpassen?",
    a: "Ja. Je kunt op elk moment naar een hogere of lagere staffel. Wijzigingen gaan direct in en worden pro-rato verrekend.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 flex flex-col items-center gap-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Veelgestelde <span className="text-gradient">vragen</span>
          </h2>
          <p className="text-[16px] text-gray-400">Staat jouw vraag er niet bij? Mail naar info@reuzenpanda.nl</p>
        </div>
        <div className="flex flex-col divide-y divide-gray-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-[16px] font-semibold text-gray-900 group-hover:text-primary-deep transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48 pb-5" : "max-h-0"}`}
              >
                <p className="text-[15px] text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function PricingPageContent() {
  const [yearly, setYearly] = useState(false);

  // Module states
  const [formIndex, setFormIndex] = useState(1);
  const [crmUsers, setCrmUsers] = useState(2);
  const [autoIndex, setAutoIndex] = useState(1);
  const [agentsIndex, setAgentsIndex] = useState(1);
  const [emailAccounts, setEmailAccounts] = useState(1);
  const [qrAccounts, setQrAccounts] = useState(1);
  const [metaAccounts, setMetaAccounts] = useState(0);
  const [support, setSupport] = useState<"none" | "standard" | "plus">("none");

  const formPrice     = formulierenTiers[formIndex].price;
  const crmPriceVal   = crmPrice(crmUsers);
  const autoPrice     = automatiseringTiers[autoIndex].price;
  const agentsPrice   = agentsTiers[agentsIndex].price;
  const gesprekkenVal = gesprekkenPrice(emailAccounts, qrAccounts, metaAccounts);
  const supportPrice  = support === "standard" ? 99 : support === "plus" ? 299 : 0;
  // support has fixed pricing — no yearly discount

  const discountable = formPrice + crmPriceVal + autoPrice + agentsPrice + gesprekkenVal;
  const subtotal     = discountable + supportPrice;
  const total        = yearly ? Math.round(discountable * 0.9) + supportPrice : subtotal;

  const fmt = (n: number, fixed = false) =>
    n === 0 ? "Gratis" : `€${fixed || !yearly ? n : Math.round(n * 0.9)}`;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-primary/10 text-[12px] font-semibold text-primary-deep uppercase tracking-wide">
            Prijzen
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
            Start direct,<br />
            <span className="text-gradient">kies later</span>
          </h1>
          <p className="text-[18px] text-gray-400 max-w-md leading-relaxed">
            Gratis starten, maandelijks opzegbaar en geen betaalmethode nodig om een account te maken.
          </p>
          <Link
            href="#modules"
            className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-[16px] transition-colors shadow-lg shadow-primary/20"
          >
            Gratis starten
          </Link>
          {/* Monthly/yearly toggle */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
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
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/20 text-primary-deep">
                bespaar 10%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Module cards */}
      <section id="modules" className="py-10 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col gap-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Formulieren */}
            <Card
              title="Formulieren"
              subtitle="Voor ondernemers die meer leads willen binnenhalen"
              description="Scoor meer leads door hen zichzelf te laten kwalificeren"
              stepper={<Stepper label={formulierenTiers[formIndex].label} index={formIndex} max={formulierenTiers.length - 1} onDec={() => setFormIndex(v => Math.max(0, v - 1))} onInc={() => setFormIndex(v => Math.min(formulierenTiers.length - 1, v + 1))} />}
              priceBlock={<PriceDisplay price={formPrice} yearly={yearly} />}
              included={["Verwijdering branding", "Redirect eigen URL", "Analytics"]}
            />
            {/* CRM */}
            <Card
              title="CRM"
              subtitle="Voor ondernemers die meer klanten willen beheren"
              description="Scoor meer klanten door deze efficiënt te beheren samen met jouw team"
              stepper={
                <div className="flex items-center justify-between gap-3 mt-2 bg-gray-50 rounded-2xl px-4 py-3 border border-gray-100">
                  <span className="text-[14px] font-medium text-gray-700">{crmUsers} gebruiker{crmUsers !== 1 ? "s" : ""}</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setCrmUsers(v => Math.max(1, v - 1))} disabled={crmUsers === 1}
                      className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 disabled:opacity-30 transition-colors">
                      <Minus size={12} />
                    </button>
                    <button onClick={() => setCrmUsers(v => v + 1)}
                      className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors">
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              }
              priceBlock={
                <div className="mt-1 flex flex-col gap-0.5">
                  <PriceDisplay price={crmPriceVal} yearly={yearly} />
                  {crmUsers > 2 && (
                    <p className="text-[12px] text-gray-400">€49 basis + {crmUsers - 2} × €39 extra</p>
                  )}
                </div>
              }
              included={["Meerdere teamgenoten", "Meer pipelines", "Opdrachten beheren"]}
            />
            {/* Automatisering */}
            <Card
              title="Automatisering"
              subtitle="Voor ondernemers die meer tijd over willen houden"
              description="Houd meer tijd over voor belangrijke taken binnen jouw bedrijf"
              stepper={<Stepper label={automatiseringTiers[autoIndex].label} index={autoIndex} max={automatiseringTiers.length - 1} onDec={() => setAutoIndex(v => Math.max(0, v - 1))} onInc={() => setAutoIndex(v => Math.min(automatiseringTiers.length - 1, v + 1))} />}
              priceBlock={<PriceDisplay price={autoPrice} yearly={yearly} />}
              included={["Onbeperkt flows", "Offertes automatiseren", "Slimme triggers"]}
            />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3 mx-auto w-full">
            {/* Agents */}
            <Card
              title="Agents"
              subtitle="Voor afspraken via WhatsApp"
              description="Scoor meer afspraken door intelligente AI agents in te zetten op WhatsApp"
              stepper={<Stepper label={agentsTiers[agentsIndex].label} index={agentsIndex} max={agentsTiers.length - 1} onDec={() => setAgentsIndex(v => Math.max(0, v - 1))} onInc={() => setAgentsIndex(v => Math.min(agentsTiers.length - 1, v + 1))} />}
              priceBlock={<PriceDisplay price={agentsPrice} yearly={yearly} />}
              included={["Meerdere agents", "Afspraken inplannen", "WhatsApp koppeling"]}
            />
            {/* Gesprekken */}
            <Card
              title="Gesprekken"
              subtitle="Al jouw contact op één plek"
              description="Beheer al je klantcontact centraal via E-mail, QR WhatsApp of Meta WhatsApp"
              stepper={
                <div className="flex flex-col gap-2 mt-2">
                  <CountRow label="E-mail accounts" value={emailAccounts} min={1} onDec={() => setEmailAccounts(v => Math.max(1, v - 1))} onInc={() => setEmailAccounts(v => v + 1)} />
                  <CountRow label="QR WhatsApp" value={qrAccounts} min={0} onDec={() => setQrAccounts(v => Math.max(0, v - 1))} onInc={() => setQrAccounts(v => v + 1)} />
                  <CountRow label="Meta WhatsApp" value={metaAccounts} min={0} onDec={() => setMetaAccounts(v => Math.max(0, v - 1))} onInc={() => setMetaAccounts(v => v + 1)} />
                </div>
              }
              priceBlock={<PriceDisplay price={gesprekkenVal} yearly={yearly} />}
              included={["E-mail & WhatsApp accounts", "Accounts delen met team", "Multi-channel support"]}
            />
          </div>

          {/* Support addon */}
          <div className="rounded-[28px] border border-gray-200 bg-white px-7 py-5 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-gray-900">Support & Ondersteuning</p>
              <p className="text-[13px] text-gray-400 mt-0.5">Doorlopende ondersteuning, nieuwe modules direct implementeren, wijzigingen uitbesteden & je eigen succesmanager</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              {/* Toggle */}
              <button
                onClick={() => setSupport(v => v === "none" ? "standard" : "none")}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${support !== "none" ? "bg-primary" : "bg-gray-200"}`}
                aria-label="Support aan/uit"
              >
                <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${support !== "none" ? "translate-x-5" : "translate-x-0"}`} />
              </button>
              {/* Dropdown — only visible when on */}
              <div className={`transition-all duration-200 ${support !== "none" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <select
                  value={support === "none" ? "standard" : support}
                  onChange={(e) => setSupport(e.target.value as "standard" | "plus")}
                  className="text-[14px] font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="standard">Standaard — €99/mnd</option>
                  <option value="plus">Plus — €299/mnd</option>
                </select>
              </div>
              {support !== "none" && (
                <span className="text-[14px] font-bold text-primary-deep shrink-0">
                  €{support === "standard" ? 99 : 299}/mnd
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Total price */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[32px] bg-gray-900 p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-gray-400 text-[14px] font-medium uppercase tracking-wide">Totaal kom je uit op</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[56px] md:text-[72px] font-black text-white tracking-tighter leading-none tabular-nums">
                  {total === 0 ? "Gratis" : `€${total.toLocaleString("nl-NL")}`}
                </span>
                {total > 0 && <span className="text-gray-400 text-[16px] font-medium">per maand</span>}
              </div>
              {yearly && subtotal > 0 && (
                <p className="text-primary text-[14px] font-medium">
                  Je bespaart €{Math.round(subtotal * 0.1).toLocaleString("nl-NL")} per maand met jaarlijks betalen
                </p>
              )}
            </div>
            {/* Breakdown */}
            <div className="flex flex-col gap-2 min-w-[220px]">
              {[
                { label: "Formulieren",   price: formPrice },
                { label: "CRM",           price: crmPriceVal },
                { label: "Automatisering", price: autoPrice },
                { label: "Agents",        price: agentsPrice },
                { label: "Gesprekken",    price: gesprekkenVal },
                { label: "Support", price: supportPrice, fixed: true },
              ].map(({ label, price, fixed }) => (
                <div key={label} className="flex items-center justify-between gap-6">
                  <span className="text-[13px] text-gray-400">{label}</span>
                  <span className={`text-[13px] font-semibold ${price === 0 ? "text-gray-600" : "text-white"}`}>
                    {fmt(price, fixed)}
                  </span>
                </div>
              ))}
              <div className="border-t border-white/10 mt-1 pt-2 flex items-center justify-between">
                <span className="text-[13px] font-bold text-white">Totaal</span>
                <span className="text-[13px] font-bold text-primary">{total === 0 ? "Gratis" : `€${total.toLocaleString("nl-NL")}/mnd`}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="py-24 px-6" style={{ background: "linear-gradient(135deg, #eaf5e4 0%, #c4e3b5 100%)" }}>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Gratis starten.<br />
            <span className="text-primary-deep">Live of je betaalt niets.</span>
          </h2>
          <p className="text-[17px] text-gray-600 max-w-md">
            Sluit je aan bij 300+ ondernemers die hun bedrijf hebben geautomatiseerd met Reuzenpanda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold text-[16px] hover:bg-gray-700 transition-colors">
              Gratis starten →
            </button>
            <button className="px-8 py-4 rounded-full bg-white/60 border border-gray-200 text-gray-700 font-semibold text-[16px] hover:bg-white transition-colors">
              Bekijk demo
            </button>
          </div>
          <p className="text-[13px] text-gray-500">Geen betaalmethode vereist · Direct live · Resultaatgarantie</p>
        </div>
      </section>
    </>
  );
}

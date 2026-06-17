"use client";

import { useState } from "react";
import ChatInterface from "./ChatInterface";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <section className="relative py-28 px-6 bg-gray-900 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        </div>

        {/* Scrolling bg text */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden opacity-[0.04] select-none pointer-events-none">
          <div className="flex animate-marquee w-max whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`marquee-${i}`} className="text-[96px] md:text-[140px] font-black text-white mx-8 tracking-tight">
                MAAK JE GRATIS ACCOUNT →
              </span>
            ))}
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Start vandaag.
            <br />
            <span className="text-primary">Gratis, geen kaart nodig.</span>
          </h2>
          <p className="text-[17px] text-gray-400 max-w-lg leading-relaxed">
            Sluit je aan bij 300+ ondernemers die hun bedrijf hebben
            geautomatiseerd met Reuzenpanda. Live of je betaalt niets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={() => setChatOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-[16px] transition-colors shadow-lg shadow-primary/20"
            >
              Gratis starten
              <ArrowRight size={16} />
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium text-[16px] transition-colors">
              Bekijk demo
            </button>
          </div>
          <p className="text-[12px] text-gray-600">
            Geen betaalmethode vereist · Direct live · Resultaatgarantie
          </p>
        </div>
      </section>

      {chatOpen && <ChatInterface onClose={() => setChatOpen(false)} />}
    </>
  );
}

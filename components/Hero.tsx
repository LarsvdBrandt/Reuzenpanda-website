"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, Play } from "lucide-react";

const SUGGESTIONS = [
  "Automatiseer mijn offerteproces",
  "Bouw een AI agent voor WhatsApp",
  "Verbind mijn CRM met mijn website",
  "Versnel mijn klantopvolging",
];

// Swap this URL for the real YouTube/Vimeo embed URL when ready
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";
const VIDEO_DURATION = "7 min";

function VideoEmbed() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="animate-fade-up delay-300 w-full max-w-3xl mx-auto">
      <div className="relative rounded-[32px] overflow-hidden shadow-2xl shadow-black/10 border border-gray-100 bg-gray-900 aspect-video">
        {playing ? (
          <iframe
            src={`${VIDEO_EMBED_URL}?autoplay=1&rel=0&modestbranding=1`}
            title="Reuzenpanda demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            {/* Thumbnail gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black" />

            {/* Decorative UI mockup in background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
              <div className="w-[80%] h-[70%] rounded-3xl border border-white/20 bg-white/5 flex flex-col gap-3 p-6">
                <div className="h-3 w-32 bg-white/30 rounded-full" />
                <div className="flex gap-3 flex-1">
                  <div className="w-1/3 bg-white/10 rounded-2xl" />
                  <div className="flex-1 flex flex-col gap-2">
                    {[90, 60, 80, 50].map((w, i) => (
                      <div key={i} className="h-2 bg-white/20 rounded-full" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panda logo watermark */}
            <div className="absolute top-6 left-6 flex items-center gap-2 opacity-60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="" width={28} height={28} />
              <span className="text-white font-semibold text-[13px]">Reuzenpanda</span>
            </div>

            {/* Duration badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10">
              <Play size={10} className="text-white fill-white" />
              <span className="text-white text-[12px] font-medium">{VIDEO_DURATION}</span>
            </div>

            {/* Play button */}
            <button
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 group"
              aria-label="Video afspelen"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl shadow-black/30 group-hover:scale-110 transition-transform duration-200">
                <Play size={24} className="text-gray-900 fill-gray-900 ml-1" />
              </div>
              <span className="text-white/80 text-[14px] font-medium">
                Bekijk de demo van {VIDEO_DURATION}
              </span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const openChat = (msg?: string) => {
    const text = msg ?? prompt;
    const params = text.trim() ? `?msg=${encodeURIComponent(text)}` : "";
    router.push(`/chat${params}`);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden bg-white">
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            opacity: 0.35,
          }}
        />
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary/10 blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary-light/20 blur-[100px]" />
        </div>

        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[13px] font-medium text-primary-deep">
            <Sparkles size={12} />
            AI-first bedrijfsautomatisering
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold leading-[1.04] tracking-tight text-gray-900">
            Automatiseer je{" "}
            <span className="text-gradient">hele&nbsp;business.</span>
          </h1>

          {/* Sub */}
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-gray-400 max-w-lg font-light leading-relaxed -mt-2">
            Reuzenpanda brengt AI, CRM, offertes, klantcommunicatie en
            automatisering samen in één platform.
          </p>

          {/* Video */}
          <VideoEmbed />

          {/* Prompt bar */}
          <div id="hero-prompt" className="animate-fade-up delay-400 w-full max-w-2xl">
            <div className="flex items-center gap-3 bg-white rounded-[50px] border border-gray-200 shadow-lg shadow-black/5 px-5 py-3.5 focus-within:border-primary/50 focus-within:shadow-primary/10 transition-all">
              <Sparkles size={17} className="text-primary shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && prompt.trim()) openChat();
                }}
                placeholder="Beschrijf wat je wilt automatiseren..."
                className="flex-1 text-[15px] text-gray-800 placeholder-gray-400 outline-none bg-transparent min-w-0"
              />
              <button
                onClick={() => openChat()}
                disabled={!prompt.trim()}
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gray-900 text-white text-[14px] font-semibold hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Start
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Suggestion chips */}
            <div className="flex flex-wrap gap-2 mt-3 justify-center">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => openChat(s)}
                  className="px-3.5 py-1.5 rounded-full bg-gray-50 hover:bg-primary/10 border border-gray-200 hover:border-primary/30 text-[13px] text-gray-500 hover:text-primary-deep transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Trust line */}
          <p className="animate-fade-up delay-500 text-[12px] text-gray-400">
            Geen betaalmethode vereist · Gratis account · Live of je betaalt niets
          </p>

          {/* Stats */}
          <div className="animate-fade-up delay-500 grid grid-cols-3 gap-10 md:gap-20 border-t border-gray-100 pt-8 w-full max-w-xl">
            {[
              { number: "300+", label: "Bedrijven geholpen" },
              { number: "€3.4M", label: "Deals gegenereerd" },
              { number: "100%", label: "Garantie of gratis" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  {s.number}
                </span>
                <span className="text-[12px] text-gray-400 text-center">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}

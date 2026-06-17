"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Maximize2 } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const videos = [
  { src: "/Brothers_Captions_Reel.mp4",            name: "Brothers",           company: "Brothers B.V." },
  { src: "/Camera_Installatie_Engels_Reel.mp4",     name: "Camera Installatie", company: "Camera Installatie" },
  { src: "/Ruud_Smolenaers_Captions_Reel.mp4",      name: "Ruud Smolenaers",    company: "Smolenaers" },
  { src: "/Timber_Projects_Captions_Reel.mp4",      name: "Timber Projects",    company: "Timber Projects" },
  { src: "/Uw_Keukenwrappen_Captions.mp4",          name: "Abdi Suleiman",      company: "Uw Keukenwrappen" },
];

const textTestimonials = [
  { name: "Carlo van Hartog",  company: "Hartog Dakkapellen",  initial: "C", quote: "Aanvragen gingen 3x met deze configurator. Van 100 aanvragen naar 300 aanvragen per maand gegaan.", stars: 5 },
  { name: "Roel de Klein",     company: "Eigenaar",            initial: "R", quote: "Ik ben zeer tevreden over hoe de jongens van Reuzenpanda te werk gaan. Ze werken snel en luisteren goed naar je behoeftes.", stars: 5 },
  { name: "Lars van den Brandt", company: "Directeur",         initial: "L", quote: "Reuzenpanda's platform is makkelijk om te leren en te begrijpen. Het heeft gezorgd voor meer conversie — aanrader!", stars: 5 },
  { name: "Kenan Evran",       company: "Ondernemer",          initial: "K", quote: "We zijn erg blij met Reuzenpanda! Door de offertewidget op de website vinden klanten het makkelijker om een offerte aan te vragen.", stars: 5 },
  { name: "Tim Groot",         company: "CEO",                 initial: "T", quote: "Door de grote stijging in leads hebben we als een gek onze systemen beter in moeten richten. Een luxe probleem die je wilt hebben.", stars: 5 },
  { name: "Dennis Goedhart",   company: "Eigenaar",            initial: "D", quote: "Configurator laten maken — naar tevredenheid opgeleverd. Een aanhouder die het heeft opgelost.", stars: 4 },
  { name: "Renzo",             company: "Kitchenmakeover",     initial: "R", quote: "3x zoveel aanvragen uit hetzelfde marketingbudget. Offerte configurator en automatische opvolging werken perfect.", stars: 5 },
  { name: "MB Veranda",        company: "MB Veranda",          initial: "M", quote: "Al meer dan 4 jaar klant. Alle 30+ dealers aangesloten via Reuzenpanda. Onze dealers verkopen meer, wij verkopen meer.", stars: 5 },
];

// ─── Count-up hook ────────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1800, started = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);
  return value;
}

// ─── Animated Headline ────────────────────────────────────────────────────────

function AnimatedHeadline() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const deals = useCountUp(867, 1600, started);
  const revenue = useCountUp(3455000, 2000, started);

  const formattedRevenue = new Intl.NumberFormat("nl-NL", {
    style: "currency", currency: "EUR", maximumFractionDigits: 0,
  }).format(revenue);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-4 transition-all duration-700 ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/60 text-[12px] font-semibold text-gray-500 uppercase tracking-wide border border-white/80">
        In de laatste 30 dagen
      </span>

      <div
        className={`text-gradient text-[72px] md:text-[96px] font-black leading-none tracking-tighter tabular-nums transition-transform duration-500 ${started ? "scale-100" : "scale-90"}`}
      >
        {deals.toLocaleString("nl-NL")}
      </div>

      <span className="text-[20px] md:text-[24px] font-bold text-gray-700 -mt-2">
        deals gegenereerd
      </span>

      <span className="text-[14px] font-medium text-gray-400">voor</span>

      <div className={`transition-all duration-700 delay-200 ${started ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
        <div className="bg-gray-900 text-white px-6 py-3 rounded-2xl">
          <span className="text-[36px] md:text-[48px] font-black leading-none tracking-tighter tabular-nums">
            {formattedRevenue}
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Video Card ───────────────────────────────────────────────────────────────

function VideoCard({ video }: { video: typeof videos[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    setPlaying(true);
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setPlaying(false);
  };

  const handleClick = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
    v.muted = false;
    v.play().catch(() => {});
  };

  return (
    <div
      className="relative shrink-0 w-44 rounded-3xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "9/16" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={video.src}
        loop
        playsInline
        muted
        preload="metadata"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${playing ? "opacity-0" : "opacity-100"}`} />

      {/* Play button */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${playing ? "opacity-0" : "opacity-100"}`}>
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play size={18} className="text-white fill-white ml-0.5" />
        </div>
      </div>

      {/* Fullscreen hint on hover */}
      <div className={`absolute top-3 right-3 transition-opacity duration-200 ${playing ? "opacity-100" : "opacity-0"}`}>
        <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <Maximize2 size={12} className="text-white" />
        </div>
      </div>

      {/* Name bottom */}
      <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-[11px] font-semibold leading-tight">{video.name}</p>
        <p className="text-white/60 text-[10px]">{video.company}</p>
      </div>
    </div>
  );
}

// ─── Text Card ────────────────────────────────────────────────────────────────

function TextCard({ t }: { t: typeof textTestimonials[0] }) {
  return (
    <div className="shrink-0 w-72 bg-white/70 border border-white/80 rounded-3xl p-5 flex flex-col gap-4 hover:bg-white transition-colors shadow-sm">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-[14px] ${i < t.stars ? "text-yellow-400" : "text-gray-200"}`}>★</span>
        ))}
      </div>
      <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-deep text-[12px] font-bold shrink-0">
          {t.initial}
        </div>
        <div>
          <p className="font-semibold text-[12px] text-gray-900">{t.name}</p>
          <p className="text-[11px] text-gray-400">{t.company}</p>
        </div>
      </div>
    </div>
  );
}

// ─── Marquee rows ─────────────────────────────────────────────────────────────

function Row({ children, reverse = false }: { children: React.ReactNode; reverse?: boolean }) {
  return (
    <div className="flex overflow-hidden">
      <div className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: "40s" }}>
        {children}
        {children}
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SocialProof() {
  // Interleave videos and text cards for two rows
  const row1Items = [
    <TextCard key="t0" t={textTestimonials[0]} />,
    <VideoCard key="v0" video={videos[0]} />,
    <TextCard key="t1" t={textTestimonials[1]} />,
    <TextCard key="t2" t={textTestimonials[2]} />,
    <VideoCard key="v1" video={videos[1]} />,
    <TextCard key="t3" t={textTestimonials[3]} />,
  ];

  const row2Items = [
    <VideoCard key="v2" video={videos[2]} />,
    <TextCard key="t4" t={textTestimonials[4]} />,
    <TextCard key="t5" t={textTestimonials[5]} />,
    <VideoCard key="v3" video={videos[3]} />,
    <TextCard key="t6" t={textTestimonials[6]} />,
    <VideoCard key="v4" video={videos[4]} />,
    <TextCard key="t7" t={textTestimonials[7]} />,
  ];

  return (
    <section className="py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #eaf5e4 8%, #d4ecca 100%)", borderRadius: "60px 60px 0 0", marginTop: "-30px" }}>
      {/* Headline */}
      <div className="max-w-3xl mx-auto px-6 text-center mb-16">
        <AnimatedHeadline />
      </div>

      {/* Two marquee rows */}
      <div className="flex flex-col gap-3">
        <Row>{row1Items}</Row>
        <Row reverse>{row2Items}</Row>
      </div>
    </section>
  );
}

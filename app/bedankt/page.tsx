import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Bijna klaar — Reuzenpanda",
  description: "Je krijgt zo een appje van onze AI-agent.",
};

export default function BedanktPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-center px-6 py-5 border-b border-gray-100">
        <Link href="/">
          <Image src="/logo.png" alt="Reuzenpanda" width={161} height={51} className="h-7 w-auto" />
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full text-center flex flex-col items-center gap-8">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center text-[40px]">
            📱
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
              Bijna klaar.{" "}
              <span
                className="text-gradient"
                style={{
                  background: "linear-gradient(135deg, #a7d094, #5ca044)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Eén stap te gaan.
              </span>
            </h1>

            <p className="text-[18px] md:text-[20px] text-gray-500 leading-relaxed">
              Je krijgt zo een appje van onze AI-agent. Geen wachtmuziek, geen terugbelverzoek, geen gemiste oproep tussen twee meetings door.
            </p>

            <p className="text-[18px] md:text-[20px] text-gray-500 leading-relaxed">
              De agent stelt je een paar vragen en kijkt direct of je profiel past bij wat we doen. Past het, dan plan je meteen je afspraak in.
            </p>

            <p className="text-[17px] text-gray-700 font-semibold leading-relaxed">
              Wij bellen nog maar 2x per dag, dus dit is sneller. Houd je telefoon in de buurt — het kan elk moment binnenkomen.
            </p>
          </div>

          {/* Pulse indicator */}
          <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-deep"></span>
            </span>
            <span className="text-[14px] font-semibold text-primary-deep">Agent staat klaar</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-6 text-center border-t border-gray-100">
        <p className="text-[12px] text-gray-400">© {new Date().getFullYear()} Reuzenpanda B.V.</p>
      </footer>
    </div>
  );
}

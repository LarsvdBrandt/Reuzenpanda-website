import Link from "next/link";

const handige_links = [
  { label: "Contact",             href: "#" },
  { label: "Team",                href: "#" },
  { label: "Trajecten",           href: "#" },
  { label: "Vacatures",           href: "#" },
  { label: "Documentatie",        href: "#" },
  { label: "Veelgestelde vragen", href: "/prijzen#faq" },
  { label: "Hulpcentrum",         href: "#" },
  { label: "Partner",             href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.02a8.17 8.17 0 0 0 4.78 1.52V7.1a4.85 4.85 0 0 1-1.01-.41z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[22px] font-bold">Reuzenpanda</h3>
          <p className="text-[14px] text-gray-400 leading-relaxed max-w-sm">
            Reuzenpanda biedt een revolutionair systeem aan dat zorgt voor buitengewone resultaten.
          </p>
          <p className="text-[13px] text-gray-500">Gemaakt met ❤️ door Reuzenpanda</p>
          <div className="flex flex-col gap-2 text-[13px] text-gray-400">
            <span>🏢 Reuzenpanda B.V.</span>
            <span>🏠 Schoutlaan 26</span>
            <span>📍 6002EA Weert</span>
            <span>💼 KvK nummer: 93566972</span>
            <span>💼 D-U-N-S nummer: 965478562</span>
            <span>⚙️ BTW nummer: NL866452126B01</span>
          </div>
          <p className="text-[12px] text-gray-600 mt-2">
            © {new Date().getFullYear()} Reuzenpanda. Alle rechten voorbehouden.
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-bold">Handige links</h3>
          <ul className="flex flex-col gap-3">
            {handige_links.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[14px] text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                {s.icon}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6 text-[13px] text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">Algemene voorwaarden</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy beleid</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Voor wie",
    href: "#voor-wie",
    children: [
      { label: "MKB ondernemers", href: "#mkb" },
      { label: "Dienstverleners", href: "#dienstverleners" },
      { label: "Installatiebedrijven", href: "#installatie" },
    ],
  },
  {
    label: "Oplossingen",
    href: "#oplossingen",
    children: [
      { label: "CRM & Pipeline", href: "#crm" },
      { label: "Offertes & Documenten", href: "#documenten" },
      { label: "AI Agent", href: "#ai-agent" },
      { label: "Automatisering", href: "#automatisering" },
    ],
  },
  {
    label: "Use cases",
    href: "#use-cases",
    children: [
      { label: "Dakkapellen", href: "#dakkapellen" },
      { label: "Keukens", href: "#keukens" },
      { label: "Veranda's", href: "#veranda" },
    ],
  },
  { label: "Prijzen", href: "/prijzen" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col items-center pt-4 px-4 pointer-events-none">
      {/* Floating bar */}
      <nav
        className={`pointer-events-auto w-full max-w-5xl rounded-[50px] border transition-all duration-300 ${
          scrolled
            ? "bg-white/75 backdrop-blur-xl border-gray-200/80 shadow-lg shadow-black/[0.06]"
            : "bg-white/60 backdrop-blur-xl border-white/60 shadow-md shadow-black/[0.04]"
        }`}
      >
        <div className="h-18 px-5 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="Reuzenpanda" width={161} height={51} priority className="h-7 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-2xl text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-colors"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl shadow-black/[0.08] p-1.5 min-w-[190px] border border-gray-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-3.5 py-2.5 rounded-2xl text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/inloggen"
              className="px-4 py-2 rounded-2xl text-[13px] font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-colors"
            >
              Inloggen
            </Link>
            <Link
              href="#hero-prompt"
              className="px-4 py-2 rounded-2xl text-[13px] font-semibold bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              Gratis starten
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-2xl hover:bg-black/5 transition-colors text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — also floating */}
      {mobileOpen && (
        <div className="pointer-events-auto w-full max-w-5xl mt-2 bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-100 shadow-lg shadow-black/[0.06] overflow-hidden">
          <div className="px-4 py-3 flex flex-col gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 px-2 text-[15px] font-medium text-gray-700 border-b border-gray-100 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3 pb-1">
              <Link
                href="/inloggen"
                className="flex-1 text-center py-2.5 rounded-2xl border border-gray-200 text-[14px] font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Inloggen
              </Link>
              <Link
                href="#hero-prompt"
                className="flex-1 text-center py-2.5 rounded-2xl bg-primary text-white font-semibold text-[14px] hover:bg-primary-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Gratis starten
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

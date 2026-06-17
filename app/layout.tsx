import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Reuzenpanda — AI software die jouw business automatiseert",
  description:
    "Creëer groei, winst & vrijheid met software die jouw gehele business automatiseert. Formulieren, CRM, Documenten, AI Agent en meer — alles in één platform.",
  keywords: [
    "bedrijfsautomatisering",
    "AI software",
    "CRM",
    "offerte software",
    "automatisering MKB",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`h-full antialiased ${poppins.variable}`}>
      <body className="min-h-full flex flex-col font-poppins">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

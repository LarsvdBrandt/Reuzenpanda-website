import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingPageContent from "@/components/PricingPageContent";

export const metadata = {
  title: "Prijzen — Reuzenpanda",
  description: "Transparante prijzen zonder verborgen kosten. Gratis starten, maandelijks opzegbaar.",
};

export default function PrijzenPage() {
  return (
    <>
      <Navigation />
      <PricingPageContent />
      <Footer />
    </>
  );
}

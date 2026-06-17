import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import Integrations from "@/components/Integrations";
import PricingCalculator from "@/components/PricingCalculator";
import Guarantee from "@/components/Guarantee";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <Features />
      <CaseStudies />
      <Integrations />
      <PricingCalculator />
      <Guarantee />
      <CtaBanner />
      <Footer />
    </main>
  );
}

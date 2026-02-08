"use client";

import { AboutMe } from "@/components/about-me";
import { Benefits } from "@/components/benefit-section";
import { FinalCTA } from "@/components/cta";
import { Empathy } from "@/components/empathy-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { Objections } from "@/components/objections-section";
import { Offer } from "@/components/offer-section";
import { Principles } from "@/components/principles-section";
import { Problem } from "@/components/problem-section";
import { Process } from "@/components/process-section";
import { TargetAudience } from "@/components/target-audience";
import { Testimonials } from "@/components/testimonials-section";

export default function Home() {
  const PHONE_NUMBER = "33660989463";
  const PREFILLED_MESSAGE = encodeURIComponent(
    "Bonjour Diane, j'ai vu votre présentation Freedom Digital et j'aimerais réserver mon appel gratuit de découverte. Je suis prêt à bâtir ma liberté financière durablement. Pouvons-nous en discuter ?"
  );

  const handleCTA = () => {
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${PREFILLED_MESSAGE}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar onCTA={handleCTA} />
      <main className="pt-20">
        <HeroSection onCTA={handleCTA} />
        <Empathy onCTA={handleCTA} />
        <Problem />
        <Principles />
        <Offer onCTA={handleCTA} />
        <Benefits />
        <TargetAudience />
        <Objections onCTA={handleCTA} />
        <Process />
        <AboutMe onCTA={handleCTA} />
        <Testimonials />
        <FinalCTA onCTA={handleCTA} />
        <Footer />
      </main>
    </div>
  );
}

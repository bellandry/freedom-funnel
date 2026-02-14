"use client";

import { AboutMe } from "@/components/about-me";
import { Benefits } from "@/components/benefit-section";
import { FinalCTA } from "@/components/cta";
import { Empathy } from "@/components/empathy-section";
import FilterForm from "@/components/filter-form";
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
import Modal from "@/components/ui/modal";
import { useState } from "react";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTA = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar onCTA={handleCTA} />
      <main className="pt-20">
        <HeroSection onCTA={handleCTA} />

        <ScrollReveal>
          <Empathy onCTA={handleCTA} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Problem />
        </ScrollReveal>

        <ScrollReveal>
          <Principles />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Offer onCTA={handleCTA} />
        </ScrollReveal>

        <ScrollReveal>
          <Benefits />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <TargetAudience />
        </ScrollReveal>

        <ScrollReveal>
          <Objections onCTA={handleCTA} />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <Process />
        </ScrollReveal>

        <ScrollReveal>
          <AboutMe onCTA={handleCTA} />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <FinalCTA onCTA={handleCTA} />
        </ScrollReveal>

        <Footer />
      </main>

      {/* Modal avec le formulaire de filtrage */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <FilterForm />
      </Modal>
    </div>
  );
}

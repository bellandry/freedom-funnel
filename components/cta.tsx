"use client";

import { PhoneCall } from "lucide-react";
import { memo } from "react";
import { SectionProps } from "./hero-section";

export const FinalCTA = memo(({ onCTA }: SectionProps) => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
        <div>
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 leading-tight italic tracking-tight font-serif-luxury">
            PRÊT À BÂTIR VOTRE <br />
            <span className="text-gradient-gold">VRAIE LIBERTÉ ?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            « Je ne veux plus stresser pour l&apos;argent. Je veux bâtir une
            liberté flexible et durable. »
          </p>
          <button
            onClick={onCTA}
            className="cta-red text-white px-8 md:px-16 py-6 md:py-8 rounded-full font-bold text-lg md:text-2xl shadow-2xl flex items-center gap-4 mx-auto uppercase tracking-widest"
          >
            DÉMARRER MAINTENANT
            <PhoneCall size={32} />
          </button>
        </div>
      </div>
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gold rounded-full blur-[150px] opacity-10"></div>
    </section>
  );
});

FinalCTA.displayName = "FinalCTA";

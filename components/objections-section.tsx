"use client";

import { memo } from "react";
import { SectionProps } from "./hero-section";

export const Objections = memo(({ onCTA }: SectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container  mx-auto px-4">
        <div
          className={`bg-slate-900 rounded-[3rem] p-12 text-center border border-gold/20 shadow-3xl`}
        >
          <h3 className="text-3xl font-bold text-white mb-6 font-serif-luxury italic">
            Encore un doute ?
          </h3>
          <p className="text-slate-400 text-lg mb-10 font-light">
            C&apos;est tout à fait normal. La liberté financière est un projet
            sérieux. Testez le modèle sans aucune pression via notre appel
            gratuit de découverte.
          </p>
          <button
            onClick={onCTA}
            className="cta-red text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl uppercase tracking-widest inline-flex items-center gap-3"
          >
            Réserver mon appel gratuit
          </button>
        </div>
      </div>
    </section>
  );
});

Objections.displayName = "Objections";

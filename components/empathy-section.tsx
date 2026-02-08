"use client";

import { ArrowRight } from "lucide-react";
import { SectionProps } from "./hero-section";

export const Empathy: React.FC<SectionProps> = ({ onCTA }) => {
  return (
    <section className="py-24 container mx-auto rounded-4xl bg-dark-gold-gradient text-white border-y border-gold/20 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center font-serif-luxury leading-tight">
            Vous n&apos;êtes pas seul dans cette galère. <br />
            <span className="text-gold italic">
              Mais vous pouvez en sortir dès maintenant.
            </span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-300 leading-relaxed font-light">
            <p>
              Un job épuisant, une retraite qui s&apos;effrite, ou
              l&apos;angoisse des fins de mois... vous avez déjà tout tenté. Le
              problème n&apos;est pas votre manque de volonté, c&apos;est que
              vous jouez avec un{" "}
              <span className="text-white font-bold font-serif-luxury italic">
                modèle obsolète
              </span>
              .
            </p>
            <div className="bg-white/5 border-l-4 border-gold p-8 rounded-r-2xl my-10 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500">
              <p className="italic text-white text-xl font-serif-luxury leading-relaxed">
                &quot;Dépendre d&apos;un seul revenu fixe aujourd&apos;hui est
                le plus grand risque financier que vous puissiez prendre.&quot;
              </p>
            </div>
            <p>
              Freedom Digital change la donne en vous aidant à structurer des{" "}
              <span className="text-white font-medium">
                actifs digitaux durables
              </span>
              , adaptés à votre rythme de vie.
            </p>
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={onCTA}
              className="text-gold hover:text-white font-bold flex items-center justify-center gap-2 mx-auto transition-colors group text-lg tracking-wide uppercase"
            >
              Changer de modèle aujourd&apos;hui
              <ArrowRight className="group-hover:translate-x-3 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

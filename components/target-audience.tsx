"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFFDF9]">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-slate-900 italic tracking-tight font-serif-luxury">
          EST-CE FAIT POUR VOUS ?
        </h2>
        <div className={`grid md:grid-cols-2 gap-12`}>
          <div className="space-y-6">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">
              Profil Idéal :
            </h4>
            {[
              "Vous avez un parcours solide (salarié, retraité).",
              "Vous êtes prêt à investir du temps réfléchi.",
              "Vous pensez long-terme et stabilité.",
              "Vous voulez des revenus sans tout révolutionner.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-white border border-gold/10 rounded-2xl shadow-sm"
              >
                <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
          <div className="space-y-6 opacity-65">
            <h4 className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-4">
              Ce n&apos;est pas pour vous si :
            </h4>
            {[
              "Vous cherchez de l'argent facile sans effort.",
              "Vous voulez tester sans engagement réel.",
              "Vous refusez un cadre structuré.",
              "Vous cherchez des solutions 'miracles'.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-red-100/50 border border-red-300 rounded-2xl"
              >
                <XCircle className="text-red-300 shrink-0" size={24} />
                <span className="text-slate-800 italic">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

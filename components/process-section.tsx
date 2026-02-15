"use client";

import { process } from "@/constants";
import { memo } from "react";

export const Process = memo(() => {
  return (
    <section className="py-24 bg-dark-gold-gradient text-white overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h2
          className={`text-3xl md:text-6xl font-bold mb-12 italic tracking-tight font-serif-luxury`}
        >
          VOTRE ACCÈS PROGRESSIF
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 py-10">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20 hidden md:block"></div>
          {process.map((item, i) => (
            <div
              key={i}
              className={`relative z-10 flex flex-col items-center group`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-gold text-slate-900 rounded-full flex items-center justify-center font-bold text-2xl mb-6 shadow-gold-glow group-hover:scale-125 transition-all duration-500 font-serif-luxury italic">
                {item.step}
              </div>
              <h4 className="text-2xl font-bold mb-2 font-serif-luxury italic">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 uppercase tracking-widest">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-gold font-bold italic text-sm uppercase tracking-[0.3em] font-serif-luxury">
          Places Limitées pour un Accompagnement Qualitatif
        </p>
      </div>
    </section>
  );
});

Process.displayName = "Process";

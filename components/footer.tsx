"use client";

import { memo } from "react";

export const Footer = memo(() => (
  <footer className="py-20 bg-slate-950 text-white border-t border-gold/10">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
        <div>
          <div className="text-3xl font-black tracking-tighter italic mb-4 font-serif-luxury">
            FREEDOM<span className="text-gold">DIGITAL</span>
          </div>
          <p className="text-slate-500 max-w-xs font-light text-sm italic">
            &quot;La liberté financière ne vient plus d&apos;un système rigide.
            Elle se construit. Et elle se transmet.&quot;
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gold font-bold text-2xl mb-4 italic tracking-widest font-serif-luxury">
            Diane
          </p>
          <div className="font-serif-luxury italic text-5xl text-white/5 select-none pointer-events-none">
            Diane
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] text-slate-600 border-t border-white/5 pt-10 uppercase tracking-[0.2em] font-bold">
        <a href="#" className="hover:text-gold transition-colors">
          Mentions Légales
        </a>
        <a href="#" className="hover:text-gold transition-colors">
          Confidentialité
        </a>
        <a href="#" className="hover:text-gold transition-colors">
          Contact
        </a>
        <span className="md:ml-auto">
          © {new Date().getFullYear()} FREEDOM DIGITAL. TOUS DROITS RÉSERVÉS.
        </span>
      </div>
    </div>
  </footer>
));

Footer.displayName = "Footer";

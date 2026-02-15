"use client";

import { memo } from "react";
import { SectionProps } from "./hero-section";

export const Navbar = memo(({ onCTA }: SectionProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="text-2xl font-black text-slate-900 tracking-tighter font-serif-luxury italic">
          FREEDOM<span className="text-gold">DIGITAL</span>
        </div>
        <button
          onClick={onCTA}
          className="hidden md:block cta-red text-white px-8 py-3 rounded-full font-bold transition-all text-sm md:text-base uppercase tracking-widest"
        >
          Réserver mon appel
        </button>
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";

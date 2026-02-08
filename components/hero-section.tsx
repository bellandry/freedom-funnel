"use client";

import { motion } from "framer-motion";
import { Layers, PhoneCall } from "lucide-react";

export interface SectionProps {
  onCTA?: () => void;
}

export const HeroSection = ({ onCTA }: SectionProps) => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#FFFDF9]">
      <div className="container max-w-5xl mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-slate-900 border border-gold/30 px-5 py-2 rounded-full text-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-8 shadow-gold-glow"
        >
          <Layers size={14} />
          <span>L&apos;Architecture de la Liberté</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] mb-8 font-serif-luxury"
        >
          La liberté financière ne tombe pas du ciel. <br />
          <span className="text-gradient-gold italic">Elle se construit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Un modèle accessible pour ceux qui en ont marre des fins de mois
          tendues et qui refusent de dépendre éternellement d&apos;un{" "}
          <span className="text-slate-900 font-semibold italic">
            salaire fixe
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={onCTA}
            className="cta-red w-full md:w-auto text-white px-6 md:px-12 py-6 rounded-full font-bold md:text-xl shadow-2xl flex items-center justify-center gap-3 tracking-wider uppercase"
          >
            <PhoneCall size={22} />
            Réserver mon appel gratuit
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 pt-8 border-t border-slate-100 max-w-2xl mx-auto"
        >
          <p className="text-slate-400 italic font-light">
            <strong>Ce n&apos;est pas une astuce miracle.</strong> C&apos;est un
            cadre <span className="font-semibold text-gold">stratégique</span>{" "}
            pour une stabilité durable.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";
import { SectionProps } from "./hero-section";

export const Offer: React.FC<SectionProps> = ({ onCTA }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-20 items-center`}>
          <div className="relative group">
            <div className="absolute -inset-10 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-700"></div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/illustration.jpg"
                width={400}
                height={400}
                className="relative w-full aspect-4xl object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                alt="Diane "
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-[1.1] font-serif-luxury">
              Le Modèle{" "}
              <span className="text-gold italic">Freedom Digital.</span>
            </h2>
            <div className="space-y-8 text-slate-600 text-lg font-light mb-12">
              <p>
                Un accompagnement guidé pour mettre en place un système digital
                : accessible sans expertise tech, flexible pour s&apos;adapter à
                votre emploi ou retraite, pensé pour durer.
              </p>
              <ul className="grid gap-5">
                {[
                  "Accessible sans expertise tech préalable.",
                  "S'adapte à votre planning actuel.",
                  "Modèle légal et international.",
                  "Pensé pour générer des revenus sans repartir de zéro.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <CheckCircle2
                        className="text-gold group-hover:text-white"
                        size={14}
                      />
                    </div>
                    <span className="text-slate-800 font-medium group-hover:text-gold transition-colors">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={onCTA}
              className="cta-red w-full text-white px-6 md:px-10 py-6 rounded-full font-bold md:text-xl shadow-2xl flex items-center justify-center gap-4 tracking-widest uppercase"
            >
              Réserver mon appel gratuit
              <ChevronRight size={24} className="group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import { SectionProps } from "./hero-section";

export const AboutMe: React.FC<SectionProps> = ({ onCTA }) => {
  return (
    <section className="py-24 bg-[#FFFDF9] relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-16 items-start`}>
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest border border-gold/20 rounded-full">
              L&apos;Histoire Derrière le Modèle
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif-luxury leading-tight">
              Je suis Diane . <br />
              <span className="text-gold italic">
                J&apos;ai été l&apos;esclave du système.
              </span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <p>
                Pendant plus de 10 ans, j&apos;ai été{" "}
                <span className="text-slate-900 font-bold italic">
                  infirmière
                </span>
                . Mes journées se résumaient à des gardes interminables, des
                nuits blanches et une pression constante.
              </p>
              <p className="font-serif-luxury italic text-2xl text-slate-800 border-l-4 border-gold pl-6 py-2">
                &quot;Je pensais qu&apos;il fallait &quot;tenir&quot;...
                jusqu&apos;au jour où j&apos;ai réalisé que ma vie passait sans
                moi.&quot;
              </p>
              <div className="grid grid-cols-2 gap-4 my-8">
                {[
                  { text: "Épuisement total", icon: "❌" },
                  { text: "Absente pour mes enfants", icon: "❌" },
                  { text: "Stress permanent", icon: "❌" },
                  { text: "Zéro stabilité réelle", icon: "❌" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <p>
                Aujourd&apos;hui, j&apos;aide ceux qui refusent de subir ce que
                j&apos;ai vécu. J&apos;ai trouvé un modèle digital simple, légal
                et puissant. Désormais, je travaille de chez moi, je profite de
                mes garçons et je vis avec une{" "}
                <span className="text-gold font-bold">sérénité absolue</span>.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col pt-12 gap-8">
            <div className="relative group">
              <div className="absolute -inset-10 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-700"></div>
              <motion.div
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/ppdiane.png"
                  width={400}
                  height={400}
                  className="relative w-full aspect-quare object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                  alt="Diane "
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 p-8 bg-slate-900 text-white rounded-2xl shadow-2xl z-20 border border-gold/30 transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                <p className="font-bold text-gold text-xl italic tracking-widest uppercase font-serif-luxury">
                  DIANE
                </p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                  Architecte de Liberté
                </p>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative z-10 shadow-2xl border border-gold/20">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote size={120} className="text-gold" />
              </div>
              <h3 className="text-2xl font-bold mb-8 font-serif-luxury text-gold italic">
                Mon Engagement envers vous :
              </h3>
              <ul className="space-y-8">
                {[
                  {
                    title: "Pas de vente directe",
                    desc: "Oubliez la pression commerciale traditionnelle.",
                  },
                  {
                    title: "Pas de barrière tech",
                    desc: "Le système est pensé pour être accessible à tous.",
                  },
                  {
                    title: "Accompagnement humain",
                    desc: "Vous ne serez jamais seul face à votre écran.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm font-light">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>
          </div>
        </div>
        <div className="pt-12 items-center justify-center flex">
          <button
            onClick={onCTA}
            className="cta-red text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl flex items-center gap-3 uppercase tracking-widest"
          >
            C&apos;est votre tour de changer
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

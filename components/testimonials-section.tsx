"use client";

import { testimonials } from "@/constants";
import { Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16`}>
          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 italic tracking-tight font-serif-luxury mb-4">
            Ils ont déjà commencé à bâtir.
          </h2>
          <p className="text-slate-500 font-light text-lg">
            La preuve par l&apos;action de la communauté Freedom Digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`p-10 bg-[#FFFDF9] border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-slate-600 font-serif-luxury italic text-lg leading-relaxed mb-8">
                &quot;{item.text}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center font-bold text-gold font-serif-luxury italic">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

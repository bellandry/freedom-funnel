"use client";

import { benefits } from "@/constants";
import React from "react";

export const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="container max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16`}>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 uppercase italic tracking-tighter mb-4 font-serif-luxury">
            VOTRE NOUVELLE RÉALITÉ
          </h2>
          <div className="h-0.5 w-32 bg-gold mx-auto mb-2"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={i}
                className="bg-white p-10 rounded-4xl border border-slate-100 flex flex-col gap-6 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-slate-900 text-gold rounded-2xl flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-500">
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 font-serif-luxury italic">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-500 font-light">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

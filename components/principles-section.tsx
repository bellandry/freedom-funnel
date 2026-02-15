import { principles } from "@/constants";
import { memo } from "react";

export const Principles = memo(() => {
  return (
    <section className="py-24 bg-dark-gold-gradient text-white">
      <div className="container max-w-5xl mx-auto px-4">
        <div className={`text-center mb-16`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif-luxury italic">
            LE PRINCIPE DU BÂTISSEUR
          </h2>
          <div className="h-0.5 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`p-10 bg-white/5 rounded-3xl border border-white/10 hover:border-gold/50 transition-all duration-500 group cursor-default`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                  <Icon size={36} />
                </div>
                <h4 className="text-2xl font-bold mb-3 font-serif-luxury">
                  {item.title}
                </h4>
                <p className="text-slate-400 font-light leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Principles.displayName = "Principles";

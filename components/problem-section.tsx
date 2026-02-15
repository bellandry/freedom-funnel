"use client";

import { incomeData } from "@/constants";
import { memo } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Problem = memo(() => {
  return (
    <section className="py-24 bg-[#FFFDF9]">
      <div className="container max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-20 items-center`}>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-serif-luxury leading-tight">
              Pourquoi votre système actuel{" "}
              <span className="text-gold italic">est plafonné.</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>
                Échanger votre temps contre de l&apos;argent crée un plafond
                invisible. Une fois vos heures vendues, votre croissance
                s&apos;arrête. Sans levier digital, vous restez vulnérable aux
                imprévus de la vie.
              </p>
              <p className="font-medium text-slate-800 font-serif-luxury text-xl italic">
                La vraie liberté ne s&apos;attend pas : elle se structure avec
                un modèle scalable.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-4xl border border-gold/10 shadow-2xl relative group">
            <div className="absolute -top-4 -right-4 bg-gold text-slate-900 font-black px-4 py-2 rounded-lg text-[10px] transform rotate-3 tracking-widest uppercase group-hover:rotate-0 transition-transform">
              RÉSULTATS PROJETÉS
            </div>
            <h3 className="text-center font-bold text-slate-400 mb-8 uppercase tracking-widest text-[10px]">
              Croissance exponentielle Freedom
            </h3>
            <div className="h-72 w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%" minHeight={280}>
                <LineChart data={incomeData}>
                  <XAxis
                    dataKey="name"
                    stroke="#cbd5e1"
                    tick={{ fontSize: 10, fontWeight: 700 }}
                  />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "1px solid #C5A028",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                      color: "#fff",
                      fontSize: "12px",
                      padding: "12px",
                    }}
                    itemStyle={{ color: "#C5A028", fontWeight: "bold" }}
                    labelStyle={{ marginBottom: "4px", color: "#94a3b8" }}
                    cursor={{
                      stroke: "#C5A028",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                    }}
                    formatter={(value: any) => [`${value}€`, "Revenus Digital"]}
                    labelFormatter={(label) => `Étape : ${label}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="digital"
                    stroke="#C5A028"
                    strokeWidth={4}
                    dot={{ fill: "#C5A028", strokeWidth: 2, r: 6 }}
                    activeDot={{
                      r: 8,
                      stroke: "#fff",
                      strokeWidth: 2,
                      fill: "#C5A028",
                    }}
                    animationDuration={2500}
                  />
                  <Line
                    type="monotone"
                    dataKey="fixe"
                    stroke="#e2e8f0"
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray="5 5"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Problem.displayName = "Problem";

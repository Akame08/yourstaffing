"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/Shell';

const content = {
  en: {
    hero: { h1: "Stop Hiring Employees.", h1_b: "Start Integrating Intelligence.", sub: "The top 1% of global talent is already pre-verified in our Neural Network.", cta: "INITIATE RECRUITMENT", stats: "Live Talent Map Active" },
    roi: { title: "Inefficiency Calculator", label: "Weekly Budget ($)", result: "Est. Monthly Loss:" }
  },
  es: {
    hero: { h1: "Deja de Contratar Empleados.", h1_b: "Empieza a Integrar Inteligencia.", sub: "El 1% del talento global ya está pre-verificado en nuestra Red Neuronal.", cta: "INICIAR RECLUTAMIENTO", stats: "Mapa de Talento Activo" },
    roi: { title: "Calculadora de Ineficiencia", label: "Presupuesto Semanal ($)", result: "Pérdida Mensual Est.:" }
  }
};

export default function Page() {
    const { language } = useLanguage();
    const t = content[language] || content['es'];
    return (
        <div className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-7xl mx-auto text-center space-y-12">
                <div className="text-blue-500 text-sm font-bold animate-pulse">{t.hero.stats}</div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                    <span className="block">{t.hero.h1}</span>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{t.hero.h1_b}</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">{t.hero.sub}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all">
                    {t.hero.cta} <ChevronRight className="w-5 h-5" />
                </Link>
                <div className="max-w-4xl mx-auto p-8 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 mt-20">
                    <h3 className="text-2xl font-bold mb-8">{t.roi.title}</h3>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <input type="range" className="w-full accent-blue-600" />
                        <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
                            <div className="text-xs text-blue-400 uppercase mb-1">{t.roi.result}</div>
                            <div className="text-3xl font-black">$2,800.00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

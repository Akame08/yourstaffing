"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/Shell';

const content = {
  en: {
    hero: {
      h1: "Stop Hiring Employees.",
      h1_b: "Start Integrating Intelligence.",
      sub: "The top 1% of global talent is already pre-verified in our Neural Network. Your competition reads PDFs; you are one click away from evolution.",
      cta: "INITIATE RECRUITMENT SEQUENCE",
      stats: "Live Talent Map Active"
    },
    roi: { title: "Inefficiency Calculator", label: "Weekly Budget ($)", result: "Est. Monthly Loss:" }
  },
  es: {
    hero: {
      h1: "Deja de Contratar Empleados.",
      h1_b: "Empieza a Integrar Inteligencia.",
      sub: "El 1% del talento global ya está pre-verificado en nuestra Red Neuronal. Tu competencia lee PDFs; tú estás a un clic de la evolución.",
      cta: "INICIAR SECUENCIA DE RECLUTAMIENTO",
      stats: "Mapa de Talento Activo"
    },
    roi: { title: "Calculadora de Ineficiencia", label: "Presupuesto Semanal ($)", result: "Pérdida Mensual Est.:" }
  }
};

export default function Page() {
    const { language } = useLanguage();
    const t = content[language] || content['es'];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center space-y-8 mb-32">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium animate-pulse">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        {t.hero.stats}
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                        <span className="text-white block">{t.hero.h1}</span>
                        <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-purple-600 bg-clip-text text-transparent block">
                            {t.hero.h1_b}
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
                        {t.hero.sub}
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <Link href="/contact" className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="relative z-10 flex items-center gap-2">
                                {t.hero.cta} <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 

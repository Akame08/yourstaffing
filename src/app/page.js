cat << 'EOF' > src/app/page.js
"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/Shell'; // Importamos el hook que arreglamos antes

// TEXTOS con estructura de idiomas
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
    
    // Seleccionamos el idioma actual o español por defecto para evitar 'undefined'
    const t = content[language] || content['es'];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* HERO SECTION */}
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
                        <Link href="/services" className="px-10 py-5 text-white font-bold border border-white/10 rounded-full hover:bg-white/5 transition-all">
                            EXPLORE SERVICES
                        </Link>
                    </div>
                </div>

                {/* CALCULATOR PREVIEW (Simplified) */}
                <div className="max-w-4xl mx-auto p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem]">
                    <div className="bg-[#0a0a0a] rounded-[1.9rem] p-12 border border-white/5">
                        <h3 className="text-2xl font-bold mb-8 text-center">{t.roi.title}</h3>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                                <label className="text-sm text-gray-500 uppercase tracking-widest">{t.roi.label}</label>
                                <input type="range" className="w-full accent-blue-600" />
                            </div>
                            <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-2xl text-center">
                                <div className="text-sm text-blue-400 uppercase mb-2">{t.roi.result}</div>
                                <div className="text-4xl font-black text-white">$4,200</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
EOF

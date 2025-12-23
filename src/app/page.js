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
      sub: "The top 1% of global talent is already pre-verified in our Neural Network.",
      cta: "INITIATE RECRUITMENT SEQUENCE",
      stats: "Live Talent Map Active"
    }
  },
  es: {
    hero: {
      h1: "Deja de Contratar Empleados.",
      h1_b: "Empieza a Integrar Inteligencia.",
      sub: "El 1% del talento global ya está pre-verificado en nuestra Red Neuronal.",
      cta: "INICIAR SECUENCIA DE RECLUTAMIENTO",
      stats: "Mapa de Talento Activo"
    }
  }
};

export default function Page() {
    const { language } = useLanguage();
    const t = content[language] || content['es'];

    return (
        <div className="min-h-screen bg-black text-white pt-32 px-6">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <div className="text-blue-400 text-sm font-medium">{t.hero.stats}</div>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
                    <span className="block">{t.hero.h1}</span>
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {t.hero.h1_b}
                    </span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.hero.sub}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black font-bold rounded-full">
                    {t.hero.cta} <ChevronRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
}

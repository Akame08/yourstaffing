"use client";
import React, { useState } from 'react'; // Ya no necesitamos useState para el idioma
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/Shell'; // Importamos el hook del Shell

// TEXTOS
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

const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-blue-500 rounded-full opacity-20"
        initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}
        animate={{ y: [null, Math.random() * -100 + "%"], opacity: [0, 0.5, 0] }}
        transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
        style={{ width: Math.random() * 4 + "px", height: Math.random() * 4 + "px" }}
      />
    ))}
  </div>
);

export default function YourStaffingQuantum() {
  // CONEXIÓN CON EL SHELL
  const { lang, toggleLang } = useLanguage();
  const [budget, setBudget] = useState(2000);
  const t = content[lang];
  const loss = (budget * 0.35 * 4).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="relative overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0" />
      <ParticleBackground />

      <main className="relative z-10 pt-20 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center space-x-2 mb-6 text-blue-400 text-xs font-mono uppercase tracking-widest">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /><span>{t.hero.stats}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="block text-gray-500">{t.hero.h1}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-200">{t.hero.h1_b}</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl border-l-2 border-blue-500/50 pl-6">{t.hero.sub}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/post-job">
              <button className="group relative px-8 py-4 border border-blue-500 bg-blue-600/10 text-blue-400 font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                {t.hero.cta} <ChevronRight className="w-4 h-4" />
              </button>
            </Link>
            {/* ESTE BOTÓN AHORA CAMBIA TODO EL SITIO */}
            <button onClick={toggleLang} className="px-8 py-4 border border-white/10 text-gray-400 hover:text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all w-full sm:w-auto">
              {lang === 'en' ? 'SWITCH TO ES' : 'CAMBIAR A EN'}
            </button>
          </div>

        </motion.div>

        {/* PARTE DERECHA (CUBO) */}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative h-[400px] w-full bg-gradient-to-br from-gray-900 to-black rounded-xl border border-white/10 p-6 backdrop-blur-sm hidden lg:block">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">{[...Array(36)].map((_, i) => <div key={i} className="border border-blue-500/30" />)}</div>
          <div className="absolute bottom-6 left-6 text-xs font-mono text-green-400">&gt; SYSTEM: TALENT NODE SYNCHRONIZED...<br />&gt; STATUS: READY.</div>
        </motion.div>
      </main>

      {/* ROI */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8">{t.roi.title}</h2>
          <div className="mb-8">
            <label className="block text-sm text-gray-400 mb-4">{t.roi.label}</label>
            <input type="range" min="1000" max="10000" step="500" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full max-w-lg h-2 bg-gray-700 rounded-lg accent-blue-500" />
            <div className="mt-4 text-2xl font-mono text-blue-400">${budget}</div>
          </div>
          <div className="text-red-400 text-xs uppercase tracking-widest mb-2">{t.roi.result}</div>
          <div className="text-4xl font-bold text-red-500 font-mono">{loss}</div>
        </div>
      </section>
    </div>
  );
}
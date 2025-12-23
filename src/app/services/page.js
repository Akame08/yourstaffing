"use client";
import React from 'react';
import { useLanguage } from '@/components/Shell';
import { Target, Users, Zap, ShieldCheck } from 'lucide-react';

const servicesContent = {
  en: {
    title: "Intelligence Integration Models",
    sub: "We don't just send resumes. We integrate pre-verified neural nodes into your organization.",
    models: [
      {
        title: "Direct Hire",
        desc: "Permanent placement of the top 1% global talent. Performance guaranteed.",
        icon: Target
      },
      {
        title: "Contract-to-Hire",
        desc: "Try the talent for 3-6 months before making a permanent commitment.",
        icon: Users
      },
      {
        title: "Executive Search",
        desc: "Confidential headhunting for C-Level positions and critical leadership.",
        icon: ShieldCheck
      }
    ]
  },
  es: {
    title: "Modelos de Integración de Inteligencia",
    sub: "No enviamos CVs. Integramos nodos neuronales pre-verificados en tu organización.",
    models: [
      {
        title: "Contratación Directa",
        desc: "Colocación permanente del top 1% del talento global. Rendimiento garantizado.",
        icon: Target
      },
      {
        title: "Temporal a Permanente",
        desc: "Prueba al talento durante 3-6 meses antes de realizar un compromiso definitivo.",
        icon: Users
      },
      {
        title: "Búsqueda Ejecutiva",
        desc: "Headhunting confidencial para posiciones C-Level y liderazgo crítico.",
        icon: ShieldCheck
      }
    ]
  }
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const t = servicesContent[language] || servicesContent.es;

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">{t.title}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">{t.sub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.models.map((model, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors">
                <model.icon className="w-7 h-7 text-blue-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{model.title}</h3>
              <p className="text-gray-500 leading-relaxed">{model.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

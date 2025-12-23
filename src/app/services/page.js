"use client";
import { useLanguage } from '@/components/Shell';
import { Target, Users, ShieldCheck } from 'lucide-react';

const content = {
  en: { title: "Our Services", models: [{t:"Direct Hire", d:"Top 1% placement."}, {t:"Contract-to-Hire", d:"Trial period."}, {t:"Exec Search", d:"C-Level focus."}] },
  es: { title: "Nuestros Servicios", models: [{t:"Contratación Directa", d:"Colocación del top 1%."}, {t:"Temporal a Permanente", d:"Periodo de prueba."}, {t:"Búsqueda Ejecutiva", d:"Foco en C-Level."}] }
};

export default function Services() {
  const { language } = useLanguage();
  const t = content[language] || content.es;
  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <h1 className="text-5xl font-black text-center mb-16">{t.title}</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {t.models.map((m, i) => (
          <div key={i} className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">{m.t}</h3>
            <p className="text-gray-400">{m.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

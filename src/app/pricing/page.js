"use client";
import React, { useState } from 'react';
import { Check, Zap, Shield, Crown } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [billing, setBilling] = useState('monthly'); // 'monthly' | 'yearly'

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Inversión en <span className="text-blue-500">Talento</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Elige el nivel de acceso a nuestra Red Neuronal. 
            Cancela en cualquier momento.
          </p>

          {/* TOGGLE MENSUAL/ANUAL */}
          <div className="inline-flex items-center bg-[#111] p-1 rounded-xl border border-white/10">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billing === 'monthly' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              Mensual
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billing === 'yearly' ? 'bg-white text-black shadow-lg' : 'text-gray-500 hover:text-white'}`}
            >
              Anual (-20%)
            </button>
          </div>
        </div>

        {/* TABLA DE PRECIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* PLAN STARTUP */}
          <PricingCard 
            tier="Observer" 
            price={billing === 'monthly' ? "0" : "0"} 
            desc="Para ver el mercado y probar."
            icon={<Shield className="w-6 h-6 text-gray-400" />}
            features={[
              "Ver perfiles públicos",
              "Publicar 1 Oferta / mes",
              "Acceso básico al Dashboard",
              "Soporte por Email"
            ]}
          />

          {/* PLAN SCALE-UP (EL QUE QUEREMOS VENDER) */}
          <PricingCard 
            tier="Recruiter Pro" 
            price={billing === 'monthly' ? "99" : "79"} 
            desc="Para contratación activa y rápida."
            icon={<Zap className="w-6 h-6 text-blue-400" />}
            popular
            features={[
              "Publicaciones Ilimitadas",
              "Acceso al Sniper Bot (IA)",
              "Ver Video-CVs completos",
              "Contactar candidatos directos",
              "Soporte Prioritario 24/7"
            ]}
          />

          {/* PLAN ENTERPRISE */}
          <PricingCard 
            tier="Dominion" 
            price={billing === 'monthly' ? "499" : "399"} 
            desc="Para corporaciones globales."
            icon={<Crown className="w-6 h-6 text-yellow-500" />}
            features={[
              "API de Acceso Completo",
              "Headhunter Humano Dedicado",
              "Auditoría de Código (IA)",
              "Contratos Legales Automáticos",
              "SLA de 99.9% Uptime"
            ]}
          />
        </div>

        <div className="mt-16 text-center">
           <p className="text-gray-500 text-sm">¿Dudas? <Link href="/contact" className="text-blue-500 hover:underline">Habla con ventas</Link>.</p>
        </div>

      </div>
    </div>
  );
}

function PricingCard({ tier, price, desc, features, icon, popular }) {
  return (
    <div className={`relative p-8 rounded-2xl border flex flex-col ${popular ? 'bg-[#0A0A0A] border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)]' : 'bg-[#050505] border-white/10'}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
          Más Elegido
        </div>
      )}
      
      <div className="mb-6">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
            {icon}
        </div>
        <h3 className="text-xl font-bold">{tier}</h3>
        <p className="text-sm text-gray-400 mt-2 h-10">{desc}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold font-mono">${price}</span>
        <span className="text-gray-500 text-sm"> / mes</span>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
            <Check className={`w-4 h-4 ${popular ? 'text-blue-500' : 'text-gray-500'}`} />
            {feat}
          </div>
        ))}
      </div>

      <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${
        popular 
        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/25' 
        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
      }`}>
        ELEGIR {tier.toUpperCase()}
      </button>
    </div>
  );
}

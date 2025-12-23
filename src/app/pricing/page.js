"use client";
import React, { useState } from 'react';
import { Check, Zap, Shield, Crown, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [billing, setBilling] = useState('one-time'); 

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Planes de <span className="text-blue-500">Acceso</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Sin suscripciones ocultas. Paga por lo que usas o adquiere un pase de temporada.
          </p>
        </div>

        {/* TABLA DE PRECIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* PLAN BÁSICO */}
          <PricingCard 
            tier="Single Post" 
            price="49" 
            period="/ oferta"
            desc="Para una necesidad puntual."
            icon={<Shield className="w-6 h-6 text-gray-400" />}
            features={[
              "1 Publicación de Oferta",
              "Visible por 30 días",
              "Panel de Control Básico",
              "Sin acceso a la Base de Datos"
            ]}
          />

          {/* PLAN ESTRELLA (3 MESES) */}
          <div className="relative p-8 rounded-2xl border bg-[#0A0A0A] border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.2)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
              <Clock className="w-3 h-3" /> Oferta Limitada
            </div>
            
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-white">Quarterly Pass</h3>
              <p className="text-sm text-yellow-500 font-bold mt-2">Acceso Total por 3 Meses</p>
            </div>

            <div className="mb-8 text-center border-y border-white/10 py-6">
              <span className="text-5xl font-bold font-mono text-white">$99</span>
              <span className="text-gray-400 text-sm block mt-1">Pago Único (No recurrente)</span>
            </div>

            <div className="space-y-4 mb-8">
              <FeatureItem text="Publicaciones ILIMITADAS (90 Días)" highlight />
              <FeatureItem text="Destacado en Amarillo (Más Vistas)" highlight />
              <FeatureItem text="Email a Candidatos Top (Sniper Bot)" />
              <FeatureItem text="Soporte Prioritario 24/7" />
              <FeatureItem text="Acceso a Video-CVs" />
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-sm bg-yellow-500 hover:bg-yellow-400 text-black transition-all shadow-lg hover:shadow-yellow-500/25 uppercase tracking-wide">
              COMPRAR ACCESO 3 MESES
            </button>
            
            <p className="text-[10px] text-gray-500 text-center mt-4">
              *El acceso se revoca automáticamente tras 90 días.
            </p>
          </div>

          {/* PLAN ENTERPRISE */}
          <PricingCard 
            tier="Agency Lifetime" 
            price="499" 
            period="/ único"
            desc="Para agencias de reclutamiento."
            icon={<Crown className="w-6 h-6 text-purple-500" />}
            features={[
              "Todo lo del plan trimestral",
              "Licencia DE POR VIDA",
              "API de Acceso",
              "Marca Blanca (White Label)",
              "Gestor de Cuenta Dedicado"
            ]}
          />
        </div>

        <div className="mt-16 text-center">
           <p className="text-gray-500 text-sm">¿Necesitas un plan a medida? <Link href="/contact" className="text-blue-500 hover:underline">Contáctanos</Link>.</p>
        </div>

      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES
function PricingCard({ tier, price, period, desc, features, icon }) {
  return (
    <div className="p-8 rounded-2xl border bg-[#050505] border-white/10 hover:border-white/20 transition">
      <div className="mb-6">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
            {icon}
        </div>
        <h3 className="text-xl font-bold">{tier}</h3>
        <p className="text-sm text-gray-400 mt-2">{desc}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-bold font-mono">${price}</span>
        <span className="text-gray-500 text-sm"> {period}</span>
      </div>

      <div className="space-y-4 mb-8">
        {features.map((feat, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
            <Check className="w-4 h-4 text-gray-500" />
            {feat}
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl font-bold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 transition">
        ELEGIR PLAN
      </button>
    </div>
  );
}

function FeatureItem({ text, highlight }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className={`p-0.5 rounded-full ${highlight ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-400'}`}>
        <Check className="w-3 h-3" />
      </div>
      <span className={highlight ? 'text-white font-bold' : 'text-gray-300'}>{text}</span>
    </div>
  )
}

"use client";
import React, { useState } from 'react';
import { Check, Zap, Shield, Crown, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const [billing, setBilling] = useState('one-time'); 

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Planes de <span className="text-blue-500">Acceso</span></h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Sin suscripciones mensuales. Paga una vez, usa el servicio, renueva si quieres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* PLAN BÁSICO */}
          <div className="p-8 rounded-2xl border bg-[#050505] border-white/10 hover:border-white/20 transition">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4"><Shield className="w-6 h-6 text-gray-400" /></div>
              <h3 className="text-xl font-bold">Single Post</h3>
              <p className="text-sm text-gray-400 mt-2">Para una urgencia.</p>
            </div>
            <div className="mb-8"><span className="text-4xl font-bold font-mono">$49</span></div>
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> 1 Publicación</li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> Visible 30 días</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold text-sm bg-white/5 text-white border border-white/10">ELEGIR</button>
          </div>

          {/* PLAN TRIMESTRAL (LA ESTRELLA) */}
          <div className="relative p-8 rounded-2xl border bg-[#0A0A0A] border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.2)] transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
              <Clock className="w-3 h-3" /> OFERTA LIMITADA
            </div>
            
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-bold text-white">Quarterly Pass</h3>
              <p className="text-sm text-yellow-500 font-bold mt-2">Acceso Total por 3 Meses</p>
            </div>

            <div className="mb-8 text-center border-y border-white/10 py-6">
              <span className="text-5xl font-bold font-mono text-white">$99</span>
              <span className="text-gray-400 text-sm block mt-1">Pago Único (3 Meses)</span>
            </div>

            <div className="space-y-4 mb-8 text-sm">
              <div className="flex gap-3"><div className="bg-yellow-500 text-black rounded-full p-0.5"><Check className="w-3 h-3"/></div> <span className="font-bold text-white">Publicaciones ILIMITADAS</span></div>
              <div className="flex gap-3"><div className="bg-yellow-500 text-black rounded-full p-0.5"><Check className="w-3 h-3"/></div> <span className="font-bold text-white">Destacado Amarillo</span></div>
              <div className="flex gap-3"><div className="bg-gray-800 text-gray-400 rounded-full p-0.5"><Check className="w-3 h-3"/></div> <span className="text-gray-300">Soporte Prioritario</span></div>
              <div className="flex gap-3"><div className="bg-gray-800 text-gray-400 rounded-full p-0.5"><Check className="w-3 h-3"/></div> <span className="text-gray-300">Acceso a Video-CVs</span></div>
            </div>

            <button className="w-full py-4 rounded-xl font-bold text-sm bg-yellow-500 hover:bg-yellow-400 text-black transition-all shadow-lg uppercase tracking-wide">
              COMPRAR ACCESO 3 MESES
            </button>
          </div>

          {/* PLAN LIFETIME */}
          <div className="p-8 rounded-2xl border bg-[#050505] border-white/10 hover:border-white/20 transition">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4"><Crown className="w-6 h-6 text-purple-500" /></div>
              <h3 className="text-xl font-bold">Lifetime</h3>
              <p className="text-sm text-gray-400 mt-2">Para siempre.</p>
            </div>
            <div className="mb-8"><span className="text-4xl font-bold font-mono">$499</span></div>
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> Licencia de por vida</li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> API Access</li>
            </ul>
            <button className="w-full py-3 rounded-xl font-bold text-sm bg-white/5 text-white border border-white/10">ELEGIR</button>
          </div>

        </div>
      </div>
    </div>
  );
}

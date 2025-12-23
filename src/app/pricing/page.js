"use client";
import React from 'react';
import { Check, Shield, Crown, Clock } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto text-center">

                <h1 className="text-5xl font-bold mb-6">Planes de Acceso</h1>
                <p className="text-gray-400 mb-16">Sin suscripciones mensuales. Paga una vez.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                    {/* BASICO */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-[#050505]">
                        <h3 className="text-xl font-bold mb-2">Single Post</h3>
                        <div className="text-4xl font-bold mb-6">$49</div>
                        <p className="text-sm text-gray-400 mb-6">1 Publicación por 30 días.</p>
                        <button className="w-full py-3 bg-white/10 rounded-xl font-bold">Elegir</button>
                    </div>

                    {/* 3 MESES (OFERTA) */}
                    <div className="p-8 border border-yellow-500 rounded-2xl bg-[#0A0A0A] relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase flex gap-2">
                            <Clock className="w-3 h-3" /> Oferta Limitada
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">Quarterly Pass</h3>
                        <div className="text-5xl font-bold mb-2 text-white">$99</div>
                        <p className="text-sm text-yellow-500 font-bold mb-6">Acceso por 3 Meses (Pago Único)</p>

                        <ul className="space-y-3 mb-8 text-sm text-gray-300">
                            <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500" /> Publicaciones Ilimitadas</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500" /> Destacado Amarillo</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500" /> Soporte Prioritario</li>
                        </ul>

                        <button className="w-full py-4 bg-yellow-500 text-black rounded-xl font-bold hover:bg-yellow-400 transition">
                            COMPRAR 3 MESES
                        </button>
                    </div>

                    {/* LIFETIME */}
                    <div className="p-8 border border-white/10 rounded-2xl bg-[#050505]">
                        <h3 className="text-xl font-bold mb-2">Agency Lifetime</h3>
                        <div className="text-4xl font-bold mb-6">$499</div>
                        <p className="text-sm text-gray-400 mb-6">Licencia de por vida.</p>
                        <button className="w-full py-3 bg-white/10 rounded-xl font-bold">Elegir</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

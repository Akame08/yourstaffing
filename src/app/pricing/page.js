"use client";
import React from 'react';
import { Check, Shield, Crown, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        
        <h1 className="text-5xl font-bold mb-6">Planes de Acceso</h1>
        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          Elige la flexibilidad de un pago único o el ahorro de un compromiso anual.
          Cancela cuando quieras.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* BASICO ($25) -> Va a /post-job */}
          <div className="p-8 border border-white/10 rounded-2xl bg-[#050505] hover:border-white/20 transition flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-white">Single Post</h3>
              <div className="text-4xl font-bold mb-4">$25</div>
              <p className="text-sm text-gray-400">Perfecto para una necesidad puntual urgente.</p>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm text-gray-300 flex-grow">
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> 1 Publicación de Oferta</li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> Visible por 30 días</li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-gray-500"/> Panel de Control Básico</li>
            </ul>

            <Link href="/post-job" className="w-full">
              <button className="w-full py-3 bg-white/10 rounded-xl font-bold hover:bg-white/20 transition">
                ELEGIR BÁSICO
              </button>
            </Link>
          </div>

          {/* 3 MESES ($99) -> Va a /post-job */}
          <div className="p-8 border border-yellow-500 rounded-2xl bg-[#0A0A0A] relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(234,179,8,0.2)] flex flex-col">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase flex gap-2 shadow-lg">
              <Clock className="w-3 h-3" /> Más Vendido
            </div>
            
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold mb-2 text-white">Quarterly Pass</h3>
              <div className="text-5xl font-bold mb-2 text-white">$99</div>
              <p className="text-xs text-yellow-500 font-bold uppercase tracking-widest">Acceso Total por 3 Meses</p>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm text-gray-300 flex-grow">
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500"/> <strong>Publicaciones Ilimitadas</strong></li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500"/> Destacado Amarillo (x3 Vistas)</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500"/> Acceso a Base de Datos de Video</li>
              <li className="flex gap-2"><Check className="w-4 h-4 text-yellow-500"/> Soporte Prioritario 24/7</li>
            </ul>

            <Link href="/post-job" className="w-full">
              <button className="w-full py-4 bg-yellow-500 text-black rounded-xl font-bold hover:bg-yellow-400 transition shadow-lg uppercase tracking-wide">
                COMPRAR 3 MESES
              </button>
            </Link>
          </div>

          {/* ANUAL CORPORATIVO ($299) -> Va a /contact */}
          <div className="p-8 border border-blue-500/30 rounded-2xl bg-[#050505] hover:border-blue-500 transition flex flex-col relative overflow-hidden">
             {/* Brillo de fondo */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                 Annual Elite <Crown className="w-4 h-4 text-blue-500" />
              </h3>
              <div className="text-4xl font-bold mb-4">$299<span className="text-sm font-normal text-gray-500">/año</span></div>
              <p className="text-sm text-blue-400 font-bold">Ahorras un 25% vs Trimestral.</p>
            </div>
            
            <ul className="space-y-4 mb-8 text-sm text-gray-300 flex-grow">
              <li className="flex gap-3"><Check className="w-4 h-4 text-blue-500"/> <strong>Todo lo del plan Trimestral</strong></li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-blue-500"/> Facturación Anual (Deducible)</li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-blue-500"/> API Access (Integración ATS)</li>
              <li className="flex gap-3"><Check className="w-4 h-4 text-blue-500"/> Gestor de Cuenta Dedicado</li>
            </ul>

            <Link href="/contact" className="w-full">
              <button className="w-full py-3 bg-blue-600/10 text-blue-400 border border-blue-600/50 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition">
                CONTACTAR VENTAS
              </button>
            </Link>
          </div>

        </div>

        <div className="mt-16 border-t border-white/5 pt-10">
            <h4 className="text-lg font-bold mb-4">¿Preguntas Frecuentes?</h4>
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
                <div>
                    <h5 className="font-bold text-white mb-2">¿Puedo cancelar el plan Anual?</h5>
                    <p className="text-sm text-gray-400">Sí, puedes cancelar la renovación automática en cualquier momento desde tu Dashboard.</p>
                </div>
                <div>
                    <h5 className="font-bold text-white mb-2">¿Qué incluye el acceso a la API?</h5>
                    <p className="text-sm text-gray-400">Permite conectar YourStaffing directamente con tu software de RRHH para publicar ofertas automáticamente.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}

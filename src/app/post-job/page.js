"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

export default function PostJobPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Publica tu Oferta. <span className="text-blue-500">Contrata Leyendas.</span></h1>
        <p className="text-xl text-gray-400">Elige el nivel de acceso a nuestra red neuronal.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* PLAN BÁSICO */}
        <div className="border border-white/10 bg-white/5 rounded-2xl p-8 hover:border-white/30 transition-all">
          <h3 className="text-2xl font-bold mb-2">Standard Post</h3>
          <div className="text-4xl font-bold mb-6">$49 <span className="text-sm font-normal text-gray-400">/oferta</span></div>
          <ul className="space-y-4 mb-8 text-left text-gray-300">
            <li className="flex gap-3"><Check className="text-blue-500" /> Publicación activa por 30 días</li>
            <li className="flex gap-3"><Check className="text-blue-500" /> Panel de control básico</li>
            <li className="flex gap-3"><Check className="text-blue-500" /> Soporte por email</li>
          </ul>
          <button className="w-full py-4 border border-white/20 rounded-lg font-bold hover:bg-white/10 transition">
            SELECCIONAR
          </button>
        </div>

        {/* PLAN PREMIUM (LIFETIME DEAL) */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative border-2 border-blue-500 bg-blue-900/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(37,99,235,0.2)]"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Recomendado por IA
          </div>
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2 text-blue-400">
            <Zap className="fill-blue-400" /> Lifetime Access
          </h3>
          <div className="text-4xl font-bold mb-6 text-white">$99 <span className="text-sm font-normal text-gray-400">/pago único</span></div>
          <p className="text-sm text-blue-300 mb-6 font-mono border-b border-blue-500/30 pb-4">
            OFERTA LIMITADA: Paga una vez, publica para siempre.
          </p>
          <ul className="space-y-4 mb-8 text-left text-gray-200">
            <li className="flex gap-3"><Star className="text-yellow-400 fill-yellow-400" /> <strong>Publicaciones ILIMITADAS</strong></li>
            <li className="flex gap-3"><Check className="text-blue-400" /> Destacado en Amarillo</li>
            <li className="flex gap-3"><Check className="text-blue-400" /> Email a candidatos Top</li>
            <li className="flex gap-3"><Check className="text-blue-400" /> Soporte Prioritario</li>
          </ul>
          <button className="w-full py-4 bg-blue-600 rounded-lg font-bold hover:bg-blue-500 transition shadow-lg">
            COMPRAR ACCESO ILIMITADO
          </button>
        </motion.div>

      </div>
    </div>
  );
}

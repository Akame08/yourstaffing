"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, MapPin, Phone, MessageSquare, Send, 
  Globe, ChevronDown, ChevronUp, HelpCircle 
} from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Nexus de <span className="text-blue-500">Contacto</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nuestros nodos de comunicación están abiertos 24/7. 
            Inicia una transmisión segura con nuestro equipo humano o IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y FAQ */}
          <div className="space-y-8">
            
            {/* TARJETAS DE CONTACTO RÁPIDO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactCard 
                icon={<Mail className="text-blue-400" />} 
                title="Soporte Digital" 
                value="help@yourstaffing.agency" 
                sub="Respuesta en < 2h"
              />
              <ContactCard 
                icon={<Phone className="text-green-400" />} 
                title="Línea Corporativa" 
                value="+1 (555) 019-2834" 
                sub="Solo Emergencias B2B"
              />
            </div>

            {/* MAPA DE SEDES (VISUAL) */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                 {/* Aquí iría un mapa real, simulamos con grid */}
                 <div className="w-full h-full bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>
              <h3 className="relative z-10 text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400" /> Nodos Físicos
              </h3>
              <div className="relative z-10 space-y-3">
                <LocationRow city="San Francisco" address="HQ - Silicon Valley Labs" status="Online" />
                <LocationRow city="Madrid" address="Torre Europa, Planta 24" status="Online" />
                <LocationRow city="Buenos Aires" address="Distrito Tecnológico" status="Online" />
                <LocationRow city="Tokyo" address="Shibuya Scramble Square" status="Sleep Mode" />
              </div>
            </div>

            {/* PREGUNTAS FRECUENTES (FAQ) */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-yellow-500" /> Protocolos Frecuentes
              </h3>
              <div className="space-y-2">
                <FaqItem q="¿Cómo verifican el talento?" a="Usamos un sistema híbrido: IA para escaneo de hard-skills y entrevistas con avatares para soft-skills." />
                <FaqItem q="¿El pago es reembolsable?" a="Sí. Si no encuentras talento en 14 días con el Plan Premium, te devolvemos el 100% de tu inversión." />
                <FaqItem q="¿Aceptan Crypto?" a="Sí. Aceptamos USDC, USDT, BTC y ETH a través de nuestra pasarela Web3." />
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: FORMULARIO */}
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <MessageSquare className="w-32 h-32" />
            </div>
            
            <h2 className="text-2xl font-bold mb-6 relative z-10">Iniciar Transmisión</h2>
            
            <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Nombre</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="Tu nombre" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">Empresa</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="Opcional" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Email Corporativo</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="nombre@empresa.com" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Departamento</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition">
                  <option className="bg-black">Soporte Técnico</option>
                  <option className="bg-black">Ventas / Enterprise</option>
                  <option className="bg-black">Reportar un Bug</option>
                  <option className="bg-black">Prensa</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase">Mensaje</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="Describa su solicitud..." />
              </div>

              <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition shadow-lg flex items-center justify-center gap-2 mt-4">
                ENVIAR MENSAJE <Send className="w-4 h-4" />
              </button>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                Tiempo de respuesta promedio: <span className="text-green-400">14 minutos</span>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES
function ContactCard({ icon, title, value, sub }) {
  return (
    <div className="bg-[#111] p-4 rounded-xl border border-white/5 hover:border-white/20 transition flex items-start gap-4">
      <div className="p-3 bg-white/5 rounded-lg">{icon}</div>
      <div>
        <h4 className="font-bold text-sm text-gray-400">{title}</h4>
        <div className="font-mono text-sm md:text-base font-bold text-white mb-1">{value}</div>
        <div className="text-[10px] text-green-500 bg-green-900/10 inline-block px-2 py-0.5 rounded border border-green-500/20">{sub}</div>
      </div>
    </div>
  );
}

function LocationRow({ city, address, status }) {
  return (
    <div className="flex items-center justify-between text-sm py-2 border-b border-white/5 last:border-0">
      <div>
        <span className="font-bold text-white block">{city}</span>
        <span className="text-gray-500 text-xs">{address}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className={`w-1.5 h-1.5 rounded-full ${status === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
        <span className="text-[10px] uppercase font-bold text-gray-400">{status}</span>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-lg bg-[#0A0A0A] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition"
      >
        <span className="font-bold text-sm text-gray-300">{q}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 pb-4 text-sm text-gray-500 leading-relaxed border-t border-white/5 pt-2"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

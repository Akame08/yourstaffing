"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, ShieldAlert, Zap, Globe, Lock, Brain, 
  Coins, UserCheck, EyeOff, Scale, Radio, Crosshair 
} from 'lucide-react';

export default function ServicesPage() {
  const [region, setRegion] = useState('Global');

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 pb-20">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-[#050505] to-[#050505] z-0" />
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        
        {/* HEADER */}
        <div className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Corporativo</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Herramientas de nivel militar para la adquisición y gestión de talento. 
            Selecciona tu protocolo.
          </p>
        </div>

        {/* NÚCLEO 1: NEURONAL (IA) */}
        <SectionTitle title="NÚCLEO NEURONAL" subtitle="Inteligencia Artificial & Filtrado" icon={<Brain className="w-6 h-6 text-pink-500" />} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          <ServiceCard 
            icon={<Bot className="text-blue-400" />}
            title="Avatar Interviewer 24/7"
            desc="Nuestros avatares entrevistan a 1,000 candidatos simultáneamente. Sin sesgos, sin cansancio."
            tags={["High Tech", "Ahorro de Tiempo"]}
          />
          
          <ServiceCard 
            icon={<EyeOff className="text-purple-400" />}
            title="Blind Auditions Protocol"
            desc="Elimina el nombre, género y foto. Tu equipo solo ve el código y el talento. Diversidad garantizada."
            tags={["Woke Friendly", "Anti-Sesgo"]}
          />

          <ServiceCard 
            icon={<Radio className="text-green-400" />}
            title="Voice Clone Support"
            desc="Escucha cómo sonaría ese candidato de Filipinas atendiendo a tus clientes de España antes de contratarlo."
            tags={["ElevenLabs API", "Call Centers"]}
          />

          <ServiceCard 
            icon={<UserCheck className="text-yellow-400" />}
            title="Soft-Skills Calibration"
            desc="Análisis de micro-expresiones en video para detectar Energía y Confianza. Algoritmo auditado para evitar sesgos raciales."
            warning="*Auditoría de Ética IA incluida."
            tags={["Psych-Ops"]}
          />
        </div>

        {/* NÚCLEO 2: TÁCTICO (HEADHUNTING) */}
        <SectionTitle title="NÚCLEO TÁCTICO" subtitle="Adquisición Agresiva" icon={<Crosshair className="w-6 h-6 text-red-500" />} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          <ServiceCard 
            icon={<Zap className="text-yellow-500" />}
            title="Sniper Bot (AI Headhunter)"
            desc="Dinos 'Ingenieros de Uber'. Nuestro bot localiza sus emails personales y envía ofertas irrechazables."
            warning="⚠️ Uso responsable requerido. Cumple con CAN-SPAM Act."
            tags={["Agresivo", "High Ticket"]}
            highlight
          />

          <ServiceCard 
            icon={<UsersGroup className="text-blue-500" />}
            title="Rent-a-Squad (Flash Teams)"
            desc="No contrates individuos. Despliega un equipo completo (Dev + Diseño + PM) que ya ha trabajado junto."
            tags={["Speed", "Pre-Sincronizado"]}
          />

          <ServiceCard 
            icon={<ShieldAlert className="text-red-500" />}
            title="Reputation Ledger (Blacklist)"
            desc="Base de datos descentralizada de incidentes graves. Protege tu empresa de actores maliciosos."
            warning="🚫 NO DISPONIBLE EN UNIÓN EUROPEA (GDPR RESTRICTED). Solo Jurisdicciones Offshore."
            tags={["Web3", "Restricted"]}
            opacity={60} // Visualmente indica restricción
          />
        </div>

        {/* NÚCLEO 3: FINANCIERO (DEFI) */}
        <SectionTitle title="NÚCLEO FINANCIERO" subtitle="Liquidez y Smart Contracts" icon={<Coins className="w-6 h-6 text-green-500" />} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          
          <ServiceCard 
            icon={<Zap className="text-purple-500" />}
            title="Superfluid Streaming"
            desc="Paga por segundo, no por mes. El dinero fluye a la wallet del empleado en tiempo real."
            tags={["Crypto", "Web3 Only"]}
          />

          <ServiceCard 
            icon={<Scale className="text-blue-400" />}
            title="Smart Contract Generator"
            desc="Generación automática de contratos internacionales vinculantes. Sin abogados."
            warning="*Válido en jurisdicciones Common Law."
            tags={["LegalTech", "$29/contrato"]}
          />

           <ServiceCard 
            icon={<ShieldAlert className="text-orange-500" />}
            title="Firing Insurance / Factoring"
            desc="Adelantamos nóminas a freelancers o cubrimos despidos imprevistos."
            warning="*Requiere licencia financiera. Disponible en: Dubai, Panamá, El Salvador."
            tags={["Fintech", "Restricted"]}
          />
        </div>

      </main>
    </div>
  );
}

// COMPONENTES AUXILIARES
function SectionTitle({ title, subtitle, icon }) {
  return (
    <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
      <div className="p-3 bg-white/5 rounded-lg border border-white/10">{icon}</div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, desc, tags, warning, highlight, opacity = 100 }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative p-6 rounded-xl border ${highlight ? 'border-blue-500 bg-blue-900/10' : 'border-white/10 bg-white/5'} backdrop-blur-sm transition-all opacity-${opacity}`}
    >
      {highlight && <div className="absolute -top-3 right-4 bg-blue-600 text-xs font-bold px-2 py-1 rounded uppercase">Most Popular</div>}
      
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">{desc}</p>
      
      {warning && (
        <div className="text-[10px] text-yellow-500 font-mono bg-yellow-500/10 p-2 rounded mb-4 border border-yellow-500/20">
          {warning}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/10 text-gray-300">
            {tag}
          </span>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 border border-white/20 rounded hover:bg-white text-sm font-bold hover:text-black transition-colors">
        ACTIVAR
      </button>
    </motion.div>
  );
}

// Icono faltante
function UsersGroup({className}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
}

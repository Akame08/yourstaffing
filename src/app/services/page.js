"use client";
import React, { useState } from 'react';
import { 
  Cpu, Globe, Users, Shield, Zap, 
  Search, CheckCircle2, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [activeTab, setActiveTab] = useState('hunting'); // 'hunting' | 'staffing' | 'eor'

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Cpu className="w-3 h-3" /> Arquitectura de Soluciones
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Ingeniería de <span className="text-blue-500">Talento</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          No enviamos currículums. Enviamos soluciones verificadas biométricamente y 
          validadas por algoritmos de predicción de rendimiento.
        </p>
      </div>

      {/* CONTROL DE PESTAÑAS (SELECTOR) */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#111] p-1 rounded-2xl border border-white/10">
          <ServiceTab 
            id="hunting" 
            label="IA Headhunting" 
            icon={<Search className="w-4 h-4" />} 
            active={activeTab === 'hunting'} 
            onClick={setActiveTab} 
          />
          <ServiceTab 
            id="staffing" 
            label="Staff Augmentation" 
            icon={<Users className="w-4 h-4" />} 
            active={activeTab === 'staffing'} 
            onClick={setActiveTab} 
          />
          <ServiceTab 
            id="eor" 
            label="EOR / Nómina Global" 
            icon={<Globe className="w-4 h-4" />} 
            active={activeTab === 'eor'} 
            onClick={setActiveTab} 
          />
        </div>
      </div>

      {/* CONTENIDO DINÁMICO */}
      <div className="max-w-7xl mx-auto">
        
        {/* VISTA: IA HEADHUNTING */}
        {activeTab === 'hunting' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">El "Sniper Bot" en acción.</h2>
                <p className="text-gray-400 leading-relaxed">
                  Nuestro algoritmo de búsqueda directa no espera a que los candidatos apliquen. 
                  Escanea GitHub, LinkedIn y StackOverflow para encontrar ingenieros pasivos 
                  que coinciden al 99% con tu stack tecnológico.
                </p>
                <ul className="space-y-4">
                  <FeatureItem text="Búsqueda proactiva (Candidatos que no buscan empleo)" />
                  <FeatureItem text="Validación de código automática" />
                  <FeatureItem text="Entrevista técnica grabada en Video" />
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition text-white">
                    ACTIVAR BÚSQUEDA <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                {/* Mockup visual de la IA - CORREGIDO CON &gt; */}
                <div className="space-y-4 font-mono text-xs text-blue-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>&gt; Target_Role:</span> <span className="text-white">Senior Backend Dev</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>&gt; Stack_Req:</span> <span className="text-white">Node.js + Rust</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>&gt; Candidates_Scanned:</span> <span className="text-white">14,502</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>&gt; Match_Rate &gt; 95%:</span> <span className="text-green-400">3 Profiles Found</span>
                  </div>
                  <div className="mt-4 p-4 bg-blue-900/20 rounded border border-blue-500/30 text-center">
                    <span className="animate-pulse">● INITIATING CONTACT SEQUENCE...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: STAFF AUGMENTATION */}
        {activeTab === 'staffing' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <h2 className="text-3xl font-bold">Tu equipo elástico.</h2>
                <p className="text-gray-400 leading-relaxed">
                  Escala tu equipo de desarrollo en 48 horas. Nosotros tenemos a los desarrolladores 
                  en nuestra nómina, tú gestionas sus tareas diarias. Sin riesgos laborales, 
                  sin despidos complicados.
                </p>
                <ul className="space-y-4">
                  <FeatureItem text="Contratos flexibles (Mes a Mes)" />
                  <FeatureItem text="Zona horaria alineada (LATAM/US)" />
                  <FeatureItem text="Reemplazo garantizado en 7 días" />
                </ul>
                <Link href="/pricing" className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold transition text-white">
                    VER TARIFAS <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-purple-500/20 relative overflow-hidden order-1 lg:order-2">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#111] p-4 rounded-lg border border-white/5 text-center">
                       <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                       <div className="text-2xl font-bold">48h</div>
                       <div className="text-xs text-gray-500">Tiempo de Despliegue</div>
                    </div>
                    <div className="bg-[#111] p-4 rounded-lg border border-white/5 text-center">
                       <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                       <div className="text-2xl font-bold">0%</div>
                       <div className="text-xs text-gray-500">Riesgo Laboral</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* VISTA: EOR GLOBAL */}
        {activeTab === 'eor' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Contrata en 140 países.</h2>
                <p className="text-gray-400 leading-relaxed">
                  ¿Encontraste al candidato perfecto en Argentina o España pero no tienes entidad legal allí? 
                  Nosotros lo contratamos legalmente por ti. YourStaffing actúa como el "Employer of Record" (EOR).
                </p>
                <ul className="space-y-4">
                  <FeatureItem text="Cumplimiento legal local automático" />
                  <FeatureItem text="Pagos en moneda local o USD/Crypto" />
                  <FeatureItem text="Gestión de beneficios y seguros" />
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition text-white">
                    HABLÁ CON UN EXPERTO <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-green-500/20 relative overflow-hidden text-center">
                 <Globe className="w-32 h-32 text-green-500/20 mx-auto animate-pulse" />
                 <div className="mt-6 text-sm text-gray-400">
                   Soportando nómina en <span className="text-white font-bold">NA, LATAM, EMEA, APAC</span>.
                 </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER CTA */}
      <div className="mt-32 text-center border-t border-white/10 pt-16">
        <h3 className="text-2xl font-bold mb-6">¿No sabes qué servicio necesitas?</h3>
        <Link href="/contact">
           <span className="text-blue-500 hover:text-blue-400 font-bold cursor-pointer text-lg underline underline-offset-4">
             Agenda una auditoría gratuita de 15 min.
           </span>
        </Link>
      </div>

    </div>
  );
}

// COMPONENTES AUXILIARES
function ServiceTab({ id, label, icon, active, onClick }) {
  return (
    <button 
      onClick={() => onClick(id)}
      className={`flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${
        active 
        ? 'bg-white text-black shadow-lg' 
        : 'text-gray-500 hover:text-white hover:bg-white/5'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-3 text-lg">
      <div className="bg-blue-900/30 p-1 rounded-full text-blue-400">
        <CheckCircle2 className="w-5 h-5" />
      </div>
      <span>{text}</span>
    </div>
  );
}

"use client";
import React, { useState } from 'react';
import { 
  Cpu, Globe, Users, Shield, Zap, 
  Search, CheckCircle2, ArrowRight,
  Briefcase, Layout, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const [activeTab, setActiveTab] = useState('hunting'); // 'hunting' | 'staffing' | 'eor'

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Cpu className="w-3 h-3" /> Arquitectura de Soluciones
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Ingeniería de <span className="text-blue-500">Talento</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Centralizamos todas las herramientas de RRHH en una sola plataforma.
          Elige tu modalidad de contratación:
        </p>
      </div>

      {/* --- SECCIÓN PRINCIPAL: SERVICIOS B2B (EMPRESAS) --- */}
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

      {/* CONTENIDO DINÁMICO DE PESTAÑAS */}
      <div className="max-w-7xl mx-auto mb-32">
        
        {/* VISTA: IA HEADHUNTING */}
        {activeTab === 'hunting' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">El "Sniper Bot" en acción.</h2>
                <p className="text-gray-400 leading-relaxed">
                  Búsqueda directa de candidatos pasivos. Escaneamos GitHub y LinkedIn para encontrar 
                  talento que no está buscando empleo activamente.
                </p>
                <ul className="space-y-4">
                  <FeatureItem text="Ideal para: Contrataciones Directas" />
                  <FeatureItem text="Validación de código automática" />
                  <FeatureItem text="Fee: % del salario anual (Éxito)" />
                </ul>
                <Link href="/post-job" className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition text-white">
                    INICIAR BÚSQUEDA <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-blue-500/20 relative overflow-hidden">
                <div className="space-y-4 font-mono text-xs text-blue-300">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>&gt; Service_Mode:</span> <span className="text-white">Direct Placement</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>&gt; Speed:</span> <span className="text-white">2-3 Weeks</span>
                  </div>
                  <div className="mt-4 p-4 bg-blue-900/20 rounded border border-blue-500/30 text-center">
                    <span className="animate-pulse">● READY TO SCAN</span>
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
                  Te "prestamos" desarrolladores senior de nuestra nómina. Tú gestionas el día a día, 
                  nosotros pagamos los salarios y beneficios.
                </p>
                <ul className="space-y-4">
                  <FeatureItem text="Ideal para: Proyectos Temporales" />
                  <FeatureItem text="Sin pasivos laborales" />
                  <FeatureItem text="Fee: Tarifa Mensual Fija" />
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold transition text-white">
                    CONSULTAR PERFILES <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-purple-500/20 relative overflow-hidden order-1 lg:order-2">
                 <div className="text-center">
                    <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                    <p className="text-sm text-gray-400">Accede a 5,000+ Devs Pre-vetados</p>
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
                <h2 className="text-3xl font-bold">Contrata legalmente donde sea.</h2>
                <p className="text-gray-400 leading-relaxed">
                  Actuamos como el empleador legal en más de 140 países para que tú no tengas 
                  que abrir una filial.
                </p>
                <ul className="space-y-4">
                  <FeatureItem text="Ideal para: Equipos Remotos Permanentes" />
                  <FeatureItem text="Cumplimiento de leyes locales" />
                  <FeatureItem text="Fee: Mensual por empleado" />
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition text-white">
                    HABLAR CON LEGAL <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-[#0A0A0A] p-8 rounded-2xl border border-green-500/20 relative overflow-hidden text-center">
                 <Globe className="w-12 h-12 text-green-500 mx-auto mb-4" />
                 <p className="text-sm text-gray-400">Cobertura en 140+ Países</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- NUEVA SECCIÓN: ECOSISTEMA Y NAVEGACIÓN (LO QUE FALTABA) --- */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
        <h3 className="text-2xl font-bold mb-10 text-center">Explora el resto del Ecosistema</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* OPCIÓN 1: BUSCAR EMPLEO (CANDIDATOS) */}
          <Link href="/jobs" className="group">
            <div className="p-6 bg-[#111] border border-white/5 rounded-xl hover:border-blue-500/50 transition h-full">
              <div className="w-10 h-10 bg-blue-900/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:text-white transition">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-2">Soy Candidato</h4>
              <p className="text-sm text-gray-400">
                Accede a nuestro Job Board y aplica a ofertas verificadas.
              </p>
            </div>
          </Link>

          {/* OPCIÓN 2: VER PRECIOS (AUTO-SERVICIO) */}
          <Link href="/pricing" className="group">
            <div className="p-6 bg-[#111] border border-white/5 rounded-xl hover:border-yellow-500/50 transition h-full">
              <div className="w-10 h-10 bg-yellow-900/20 rounded-lg flex items-center justify-center mb-4 text-yellow-400 group-hover:text-white transition">
                <Layout className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-2">Ver Planes y Precios</h4>
              <p className="text-sm text-gray-400">
                Publica una oferta desde $25 o adquiere pases de temporada.
              </p>
            </div>
          </Link>

          {/* OPCIÓN 3: SOPORTE (CONTACTO) */}
          <Link href="/contact" className="group">
            <div className="p-6 bg-[#111] border border-white/5 rounded-xl hover:border-green-500/50 transition h-full">
              <div className="w-10 h-10 bg-green-900/20 rounded-lg flex items-center justify-center mb-4 text-green-400 group-hover:text-white transition">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white mb-2">Ayuda y Soporte</h4>
              <p className="text-sm text-gray-400">
                ¿Dudas sobre el servicio? Habla con nuestro equipo humano.
              </p>
            </div>
          </Link>

        </div>
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

"use client";
import React from 'react';
import Link from "next/link";
import { 
  ArrowRight, CheckCircle2, Globe, Shield, 
  Zap, Users, Briefcase, ChevronRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-blue-500 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        
        {/* Fondo Cibernético */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 hover:bg-blue-500/20 transition cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Sistema Operativo v2.0 Online
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
            El Futuro del <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Reclutamiento</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Conectamos el 1% del talento global con empresas Fortune 500 utilizando 
            algoritmos de Inteligencia Artificial y análisis biométrico.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/jobs">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <Briefcase className="w-5 h-5" /> BUSCAR EMPLEO
              </button>
            </Link>
            <Link href="/post-job">
              <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
                CONTRATAR TALENTO <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- LOGO STRIP --- */}
      <div className="border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Logos simulados con texto para evitar errores de imágenes */}
           <span className="text-xl font-bold font-mono">GOOGLE</span>
           <span className="text-xl font-bold font-mono">MICROSOFT</span>
           <span className="text-xl font-bold font-mono">SPOTIFY</span>
           <span className="text-xl font-bold font-mono">UBER</span>
           <span className="text-xl font-bold font-mono hidden md:block">AMAZON</span>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="text-blue-500" />}
              title="Alcance Global"
              desc="Accede a talento en más de 140 países sin barreras legales ni complicaciones de nómina."
            />
            <FeatureCard 
              icon={<Zap className="text-yellow-400" />}
              title="Velocidad IA"
              desc="Nuestro algoritmo 'Sniper Bot' encuentra al candidato perfecto en menos de 48 horas."
            />
            <FeatureCard 
              icon={<Shield className="text-green-500" />}
              title="Verificación Total"
              desc="Identidad, antecedentes y habilidades técnicas verificadas automáticamente."
            />
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para el siguiente nivel?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Únete a las más de 500 empresas que ya han automatizado su reclutamiento con YourStaffing.
            </p>
            <Link href="/login">
               <button className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/40">
                 CREAR CUENTA GRATIS
               </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 bg-[#0A0A0A] border border-white/10 rounded-2xl hover:border-blue-500/50 transition-colors group">
      <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/10 transition">
        {React.cloneElement(icon, { className: `w-6 h-6 ${icon.props.className}` })}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}

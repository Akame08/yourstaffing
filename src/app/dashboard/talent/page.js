"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, Video, FileText, Zap, Shield, Briefcase, 
  Eye, TrendingUp, Star, Lock, CheckCircle2, UploadCloud
} from 'lucide-react';

export default function TalentDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 pt-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO: BIENVENIDA Y ESTADÍSTICAS RÁPIDAS */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Centro de Mando</h1>
            <p className="text-gray-400 text-sm">Bienvenido de nuevo, <span className="text-white font-bold">Alex</span>. Tu perfil está activo.</p>
          </div>
          <div className="flex gap-4">
            <StatBadge icon={<Eye className="w-4 h-4 text-blue-400" />} value="128" label="Vistas" />
            <StatBadge icon={<TrendingUp className="w-4 h-4 text-green-400" />} value="14" label="Apariciones" />
            <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span className="text-xs font-bold">BOOST PERFIL ($5)</span>
            </div>
          </div>
        </div>

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* COLUMNA IZQUIERDA: ESTADO DEL PERFIL (GAMIFICACIÓN) */}
          <div className="space-y-6">
            
            {/* TARJETA DE NIVEL */}
            <div className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <User className="w-32 h-32" />
              </div>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" /> Nivel de Perfil
              </h3>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-blue-500/30 border-t-blue-500">
                  <span className="text-lg font-bold">65%</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Intermedio</div>
                  <div className="text-xs text-gray-400">Completa 2 pasos más para llegar a "Elite".</div>
                </div>
              </div>

              <div className="space-y-3">
                <CheckItem done={true} text="Verificar Email" />
                <CheckItem done={true} text="Subir CV Básico" />
                <CheckItem done={false} text="Grabar Video-CV (IA Analysis)" highlight />
                <CheckItem done={false} text="Verificar Identidad (Badge)" />
              </div>
            </div>

            {/* TARJETA DE VIDEO ESTUDIO (FEATURE ESTRELLA) */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-6 relative group cursor-pointer hover:border-blue-500 transition-colors">
              <div className="absolute top-3 right-3 bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 animate-pulse">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> REC
              </div>
              
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Video Studio IA</h3>
              <p className="text-xs text-gray-400 mb-4">
                Graba una presentación de 60s. Nuestra IA analizará tus micro-expresiones y generará subtítulos automáticos.
              </p>
              <button className="w-full py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition">
                ENTRAR AL ESTUDIO
              </button>
            </div>

          </div>

          {/* COLUMNA CENTRAL: OFERTAS RECOMENDADAS (ALGORITMO) */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" /> Recomendado para ti
              </h3>
              <button className="text-xs text-gray-400 hover:text-white">Ver todo</button>
            </div>

            {/* LISTA DE TRABAJOS */}
            <div className="space-y-3">
              <JobRow 
                title="Senior React Developer" 
                company="TechFlow Inc." 
                match="98%" 
                salary="$120k" 
                color="text-green-400"
              />
              <JobRow 
                title="Frontend Architect" 
                company="Global Systems" 
                match="92%" 
                salary="$145k" 
                color="text-green-400"
              />
              <JobRow 
                title="UI/UX Designer Lead" 
                company="Creative Studio" 
                match="85%" 
                salary="$90k" 
                color="text-yellow-400"
              />
               <JobRow 
                title="Product Manager" 
                company="Startup Stealth" 
                match="78%" 
                salary="$110k" 
                color="text-yellow-400"
              />
            </div>

            {/* SECCIÓN DE MEJORA DE CV (MONETIZACIÓN) */}
            <div className="bg-[#111] border border-dashed border-gray-700 rounded-2xl p-8 text-center mt-6">
              <FileText className="w-10 h-10 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tu CV actual es aburrido.</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                El algoritmo lo está ignorando. Usa nuestra IA generativa para reescribirlo con palabras clave de alto impacto.
              </p>
              <button className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                MEJORAR CV CON IA ($5)
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES
function StatBadge({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3 bg-[#111] px-4 py-2 rounded-lg border border-white/5">
      {icon}
      <div className="text-left">
        <div className="text-sm font-bold leading-none">{value}</div>
        <div className="text-[10px] text-gray-500 uppercase">{label}</div>
      </div>
    </div>
  );
}

function CheckItem({ done, text, highlight }) {
  return (
    <div className={`flex items-center gap-3 text-sm p-2 rounded-lg ${highlight ? 'bg-blue-900/20 border border-blue-500/20' : ''}`}>
      {done ? (
        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
      ) : (
        <div className="w-4 h-4 rounded-full border border-gray-600 flex-shrink-0" />
      )}
      <span className={done ? 'text-gray-500 line-through' : 'text-gray-300'}>
        {text}
      </span>
      {highlight && !done && (
        <span className="ml-auto text-[10px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded">
          +20%
        </span>
      )}
    </div>
  );
}

function JobRow({ title, company, match, salary, color }) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#0A0A0A] border border-white/5 rounded-xl hover:border-white/20 transition-all group">
      <div>
        <h4 className="font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h4>
        <div className="text-xs text-gray-500">{company}</div>
      </div>
      <div className="text-right flex items-center gap-6">
        <div className="hidden md:block">
          <div className={`text-sm font-bold ${color}`}>{match} Match</div>
          <div className="text-[10px] text-gray-500">IA Score</div>
        </div>
        <div className="text-sm font-mono text-gray-300 bg-white/5 px-3 py-1 rounded">
          {salary}
        </div>
        <button className="p-2 hover:bg-white/10 rounded-lg transition">
            <UploadCloud className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

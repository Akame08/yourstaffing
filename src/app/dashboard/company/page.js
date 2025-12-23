"use client";
import React, { useState } from 'react';
import { 
  Briefcase, Users, CreditCard, TrendingUp, Plus, 
  Search, MoreHorizontal, Lock, CheckCircle2, XCircle, 
  Zap, MessageSquare, Eye
} from 'lucide-react';

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 pt-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO Y ACCIONES */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Panel Corporativo</h1>
            <p className="text-gray-400 text-sm">Empresa: <span className="text-white font-bold">Tesla Inc.</span> (Plan Pro)</p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-bold hover:bg-gray-200 transition shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Plus className="w-4 h-4" /> NUEVA OFERTA
             </button>
          </div>
        </div>

        {/* ESTADÍSTICAS (KPIs) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Briefcase className="text-blue-400" />} value="3" label="Ofertas Activas" />
          <StatCard icon={<Users className="text-purple-400" />} value="142" label="Candidatos Totales" />
          <StatCard icon={<Eye className="text-green-400" />} value="1.2k" label="Vistas Perfil" />
          <StatCard icon={<CreditCard className="text-yellow-400" />} value="$450" label="Gasto este mes" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* COLUMNA IZQUIERDA: GESTIÓN DE OFERTAS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Ofertas en Curso</h3>
              <button className="text-xs text-gray-500 hover:text-white">Ver todas</button>
            </div>

            <div className="space-y-4">
              <ActiveJobCard 
                title="Senior React Engineer" 
                location="Remoto" 
                applicants={45} 
                newApps={12} 
                status="Active"
              />
              <ActiveJobCard 
                title="Product Manager (AI)" 
                location="San Francisco" 
                applicants={28} 
                newApps={3} 
                status="Active"
              />
              <ActiveJobCard 
                title="UX Designer Lead" 
                location="Madrid" 
                applicants={89} 
                newApps={0} 
                status="Paused"
              />
            </div>

            {/* UPSELL: SNIPER BOT */}
            <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-6 flex items-center justify-between mt-8">
              <div>
                <h4 className="font-bold text-blue-400 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Activar Sniper Bot
                </h4>
                <p className="text-xs text-gray-400 mt-1 max-w-md">
                  No esperes a que apliquen. Nuestra IA buscará activamente perfiles en LinkedIn que coincidan con tus ofertas y les enviará un mensaje.
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition">
                ACTIVAR ($99)
              </button>
            </div>
          </div>

          {/* COLUMNA DERECHA: CANDIDATOS RECIENTES (CON BLUR) */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Postulaciones Recientes</h3>
            <p className="text-xs text-gray-400 mb-6">Los perfiles más compatibles de las últimas 24h.</p>

            <div className="space-y-4">
              <CandidateRow name="Sofia G." role="React Dev" match="98%" locked={false} />
              <CandidateRow name="Mark T." role="Product Owner" match="92%" locked={true} />
              <CandidateRow name="Elena R." role="UX Designer" match="89%" locked={true} />
              <CandidateRow name="John D." role="Data Scientist" match="85%" locked={true} />
              <CandidateRow name="Carlos M." role="Backend Dev" match="78%" locked={true} />
            </div>

            <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-xs font-bold hover:bg-white hover:text-black transition flex items-center justify-center gap-2">
              VER TODOS LOS CANDIDATOS <Users className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// --- COMPONENTES AUXILIARES ---

function StatCard({ icon, value, label }) {
  return (
    <div className="bg-[#111] border border-white/5 p-4 rounded-xl flex items-center gap-4">
      <div className="p-3 bg-white/5 rounded-lg">
        {React.cloneElement(icon, { className: `w-6 h-6 ${icon.props.className}` })}
      </div>
      <div>
        <div className="text-2xl font-bold font-mono">{value}</div>
        <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );
}

function ActiveJobCard({ title, location, applicants, newApps, status }) {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 p-5 rounded-xl hover:border-white/30 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-bold text-lg">{title}</h4>
          <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
            status === 'Active' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'
          }`}>
            {status}
          </span>
        </div>
        <div className="text-sm text-gray-400 flex items-center gap-2">
          <Briefcase className="w-3 h-3" /> {location}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="text-center">
          <div className="text-xl font-bold">{applicants}</div>
          <div className="text-[10px] text-gray-500">Total</div>
        </div>
        <div className="text-center relative">
          {newApps > 0 && <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
          <div className="text-xl font-bold text-white">{newApps}</div>
          <div className="text-[10px] text-green-400 font-bold">Nuevos</div>
        </div>
        <button className="p-2 hover:bg-white/10 rounded-lg">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}

function CandidateRow({ name, role, match, locked }) {
  const [isUnlocked, setIsUnlocked] = useState(!locked);

  return (
    <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-white/20 transition-all group">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-sm flex items-center gap-2">
            {name}
            <span className="text-[10px] text-green-400 bg-green-900/20 px-1.5 rounded">{match}</span>
          </div>
          <div className="text-xs text-gray-400">{role}</div>
        </div>
      </div>

      <div>
        {isUnlocked ? (
          <div className="flex gap-2">
            <button className="p-2 bg-blue-600/20 text-blue-400 rounded hover:bg-blue-600 hover:text-white transition" title="Mensaje">
              <MessageSquare className="w-4 h-4" />
            </button>
            <button className="p-2 bg-green-600/20 text-green-400 rounded hover:bg-green-600 hover:text-white transition" title="Aprobar">
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button 
            onClick={() => setIsUnlocked(true)}
            className="flex items-center gap-1 px-3 py-1.5 bg-black border border-white/10 rounded text-[10px] font-bold text-gray-300 hover:text-white hover:border-green-500/50 transition group/btn"
          >
            <Lock className="w-3 h-3 group-hover/btn:text-green-400" /> 
            <span>Desbloquear</span>
          </button>
        )}
      </div>
    </div>
  );
}

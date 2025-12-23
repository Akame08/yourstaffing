"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, MapPin, DollarSign, Lock, Clock, 
  Code, Zap, Globe, ShieldCheck, Filter, Search
} from 'lucide-react';

// DATOS DE EJEMPLO (MOCK DATA)
const JOBS = [
  {
    id: 1, title: "Senior Neuro-Interface Engineer", company: "NeuralLink Corp",
    location: "Remote (Global)", type: "Full-time",
    salary: 120000, salaryVisible: false,
    tags: ["React", "Brain.js", "Python"],
    ppp: "🇺🇾 En Uruguay vives como rico ($8k/mes)",
    hot: true
  },
  {
    id: 2, title: "Ghost Writer (AI Trained)", company: "Stealth Startup",
    location: "New York / Hybrid", type: "Contract",
    salary: 5000, salaryVisible: true, // Este sí se ve
    tags: ["GPT-5", "Copywriting"],
    ppp: null,
    hot: false
  },
  {
    id: 3, title: "Blockchain Security Auditor", company: "DeFi Protocol A",
    location: "Remote (Offshore)", type: "Project",
    salary: 85000, salaryVisible: false,
    tags: ["Solidity", "Rust", "Security"],
    ppp: "🇵🇦 Tax Free Zone",
    hot: true
  }
];

const BOUNTIES = [
  {
    id: 101, title: "Fix Memory Leak in Production", company: "Fintech X",
    reward: 500, currency: "USDC",
    difficulty: "Hard", time: "48h Deadline",
    desc: "Nuestra app crashea tras 2h de uso. Necesitamos experto en Node.js streams."
  },
  {
    id: 102, title: "Design Landing Page Hero", company: "Agency Y",
    reward: 200, currency: "USD",
    difficulty: "Medium", time: "24h Deadline",
    desc: "Figma ready. Solo necesitamos convertirlo a Tailwind CSS pixel-perfect."
  }
];

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' o 'bounties'
  const [unlockedCount, setUnlockedCount] = useState(0);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20 pt-10">
      
      <div className="max-w-5xl mx-auto px-6">
        
        {/* BUSCADOR SUPERIOR */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Buscar por rol, skill o comando..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 transition-colors text-white"
            />
          </div>
          <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition">
            <Filter className="w-5 h-5" /> Filtros
          </button>
        </div>

        {/* PESTAÑAS (Tabs) */}
        <div className="flex gap-8 mb-8 border-b border-white/10">
          <button 
            onClick={() => setActiveTab('jobs')}
            className={`pb-4 text-lg font-bold flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'jobs' ? 'border-blue-500 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
          >
            <Briefcase className="w-5 h-5" /> Ofertas Activas
          </button>
          <button 
            onClick={() => setActiveTab('bounties')}
            className={`pb-4 text-lg font-bold flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'bounties' ? 'border-yellow-500 text-white' : 'border-transparent text-gray-500 hover:text-white'}`}
          >
            <Zap className="w-5 h-5" /> Recompensas (Bounties)
          </button>
        </div>

        {/* LISTADO DE EMPLEOS */}
        {activeTab === 'jobs' && (
          <div className="space-y-4">
            {JOBS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            
            {/* Call to Action VIP */}
            <div className="mt-12 p-8 border border-dashed border-gray-700 rounded-2xl text-center bg-gray-900/30">
              <Lock className="w-8 h-8 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">14 Ofertas Ocultas Detectadas</h3>
              <p className="text-gray-400 mb-6">Solo visibles para usuarios con Early Access ($5/mes).</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition">
                DESBLOQUEAR ACCESO VIP
              </button>
            </div>
          </div>
        )}

        {/* LISTADO DE RECOMPENSAS */}
        {activeTab === 'bounties' && (
          <div className="grid md:grid-cols-2 gap-6">
            {BOUNTIES.map((bounty) => (
              <BountyCard key={bounty.id} bounty={bounty} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

// TARJETA DE EMPLEO
function JobCard({ job }) {
  const [isUnlocked, setIsUnlocked] = useState(job.salaryVisible);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative bg-white/5 border border-white/10 p-6 rounded-xl hover:border-blue-500/50 transition-all hover:bg-white/[0.07]"
    >
      {job.hot && (
        <div className="absolute top-0 right-0 bg-blue-600 text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl uppercase tracking-widest">
          Destacado
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
            {job.company} <span className="w-1 h-1 bg-gray-600 rounded-full"/> <Globe className="w-3 h-3" /> {job.location}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="text-xs bg-black border border-white/10 px-2 py-1 rounded text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* SECCIÓN DE SALARIO (MONETIZACIÓN) */}
        <div className="flex flex-col items-end gap-2 min-w-[200px]">
          {isUnlocked ? (
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400 font-mono">
                ${job.salary.toLocaleString()}
              </div>
              {job.ppp && (
                <div className="text-xs text-yellow-500 flex items-center justify-end gap-1 bg-yellow-500/10 px-2 py-1 rounded mt-1">
                  <Zap className="w-3 h-3" /> {job.ppp}
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => setIsUnlocked(true)}
              className="flex flex-col items-center justify-center bg-black/50 border border-white/10 rounded-lg p-3 w-full backdrop-blur-sm group/btn hover:border-green-500/50 transition cursor-pointer"
            >
              <div className="flex items-center gap-2 text-green-400 font-mono filter blur-sm">
                $$$,$$$
              </div>
              <div className="flex items-center gap-1 text-xs text-white font-bold mt-1 group-hover/btn:text-green-400">
                <Lock className="w-3 h-3" /> Desbloquear ($1)
              </div>
            </button>
          )}
          
          <div className="text-xs text-gray-500 mt-2">{job.type}</div>
        </div>
      </div>
    </motion.div>
  );
}

// TARJETA DE RECOMPENSA (BOUNTY)
function BountyCard({ bounty }) {
  return (
    <div className="bg-[#111] border border-yellow-500/20 p-6 rounded-xl hover:border-yellow-500 transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Zap className="w-24 h-24 text-yellow-500" />
      </div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="bg-yellow-500/10 text-yellow-500 text-xs font-bold px-2 py-1 rounded border border-yellow-500/20">
          {bounty.difficulty}
        </div>
        <div className="text-xs text-gray-400 flex items-center gap-1">
          <Clock className="w-3 h-3" /> {bounty.time}
        </div>
      </div>

      <h3 className="text-lg font-bold mb-2 relative z-10">{bounty.title}</h3>
      <p className="text-sm text-gray-400 mb-6 relative z-10">{bounty.desc}</p>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="text-2xl font-mono font-bold text-white">
          {bounty.reward} <span className="text-sm text-gray-500">{bounty.currency}</span>
        </div>
        <button className="bg-white text-black text-sm font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
          SOLVE
        </button>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Search, Filter, Lock, Zap, 
  Globe, Star, ShieldCheck, Heart, Scale, Code, Sparkles 
} from 'lucide-react';

// --- BASE DE DATOS MOCK (Universal) ---
const JOBS_DB = [
  // TECH
  {
    id: 1, title: "Desarrollador Full Stack", company: "TechNova Inc",
    category: "Tecnología", location: "Ciudad de México, MX", type: "Remoto",
    salary: 4500, salaryVisible: false,
    tags: ["React", "Node.js"], ppp: "Vives como Rey en CDMX", verified: true
  },
  // MÍSTICO (Tu nicho especial)
  {
    id: 2, title: "Lectora de Tarot Marsella", company: "Mystic Soul App",
    category: "Místico", location: "Buenos Aires, AR", type: "Online",
    salary: 2000, salaryVisible: true,
    tags: ["Tarot", "Astrología", "Español/Inglés"], ppp: null, verified: true
  },
  // LEGAL
  {
    id: 3, title: "Abogado Penalista Senior", company: "Bufete Torres & Asoc.",
    category: "Legal", location: "Madrid, ES", type: "Presencial",
    salary: 6000, salaryVisible: false,
    tags: ["Derecho Penal", "Litigios"], ppp: "Sueldo Top en España", verified: true
  },
  // HOGAR / CUIDADO
  {
    id: 4, title: "Niñera Bilingüe (Live-in)", company: "Familia Privada VIP",
    category: "Hogar", location: "Miami, USA", type: "Presencial",
    salary: 5500, salaryVisible: false,
    tags: ["Cuidado Infantil", "Primeros Auxilios"], ppp: null, verified: true
  },
  // INGENIERÍA
  {
    id: 5, title: "Ingeniero Civil de Puentes", company: "Constructora Global",
    category: "Ingeniería", location: "Santiago, CL", type: "Híbrido",
    salary: 3500, salaryVisible: false,
    tags: ["AutoCAD", "Estructuras"], ppp: null, verified: false
  },
  // FREELANCE / VARIOS
  {
    id: 6, title: "Chef Personal Vegano", company: "Evento Exclusivo",
    category: "Servicios", location: "Bogotá, CO", type: "Por Evento",
    salary: 300, salaryVisible: true,
    tags: ["Cocina", "Nutrición"], ppp: null, verified: true
  }
];

const CATEGORIES = [
  { name: "Todo", icon: <Globe className="w-4 h-4" /> },
  { name: "Tecnología", icon: <Code className="w-4 h-4" /> },
  { name: "Místico", icon: <Sparkles className="w-4 h-4" /> }, // Icono especial para Tarot
  { name: "Legal", icon: <Scale className="w-4 h-4" /> },
  { name: "Hogar", icon: <Heart className="w-4 h-4" /> },
  { name: "Ingeniería", icon: <Briefcase className="w-4 h-4" /> },
];

export default function UniversalMarket() {
  const [activeCat, setActiveCat] = useState("Todo");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Lógica de Filtrado
  const filteredJobs = JOBS_DB.filter(job => {
    const matchCat = activeCat === "Todo" || job.category === activeCat;
    const matchSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchLoc = locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchCat && matchSearch && matchLoc;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Mercado <span className="text-blue-500">Universal</span>
          </h1>
          <p className="text-gray-400">Desde Ingenieros Cuánticos hasta Maestros del Tarot. Encuentra todo.</p>
        </div>

        {/* BARRA DE CONTROL (BUSCADOR + FILTROS) */}
        <div className="bg-white/5 border border-white/10 p-4 rounded-2xl mb-8 flex flex-col md:flex-row gap-4">
          
          {/* Buscador Texto */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="¿Qué buscas? (ej: Abogado, Tarot, Niñera...)" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
            />
          </div>

          {/* Filtro Ciudad/País */}
          <div className="relative md:w-1/3">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Ciudad o País..." 
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500 text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* SELECTOR DE CATEGORÍAS (SCROLLABLE) */}
        <div className="flex overflow-x-auto gap-4 mb-8 pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCat(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border whitespace-nowrap transition-all ${
                activeCat === cat.name 
                ? 'bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.icon}
              <span className="font-bold text-sm">{cat.name}</span>
            </button>
          ))}
        </div>

        {/* RESULTADOS */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-gray-500">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                <p>No encontramos resultados en esta zona galáctica.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

// TARJETA DE EMPLEO INTELIGENTE
function JobCard({ job }) {
  const [isUnlocked, setIsUnlocked] = useState(job.salaryVisible);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-blue-500/30 transition-all hover:bg-white/[0.02]"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
        
        {/* INFO PRINCIPAL */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide border ${
              job.category === 'Místico' ? 'border-purple-500 text-purple-400 bg-purple-500/10' :
              job.category === 'Legal' ? 'border-red-500 text-red-400 bg-red-500/10' :
              'border-blue-500 text-blue-400 bg-blue-500/10'
            }`}>
              {job.category}
            </span>
            {job.verified && (
              <span className="flex items-center gap-1 text-[10px] text-green-400 font-bold" title="Identidad Verificada">
                <ShieldCheck className="w-3 h-3" /> VERIFICADO
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">{job.title}</h3>
          <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
            <span className="text-white font-medium">{job.company}</span> • 
            <MapPin className="w-3 h-3 text-gray-500" /> {job.location}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="text-xs bg-white/5 border border-white/5 px-3 py-1 rounded-full text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* BLOQUE DE PRECIO/MONETIZACIÓN */}
        <div className="flex flex-col items-end gap-2 min-w-[180px]">
          {isUnlocked ? (
            <div className="text-right">
              <div className="text-2xl font-bold text-green-400 font-mono">
                ${job.salary.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">{job.type}</div>
              {job.ppp && (
                <div className="text-[10px] text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded mt-2 border border-yellow-500/20 text-right max-w-[200px]">
                  <Zap className="w-3 h-3 inline mr-1" />{job.ppp}
                </div>
              )}
            </div>
          ) : (
            <button 
              onClick={() => setIsUnlocked(true)}
              className="w-full bg-white/5 border border-white/10 hover:border-green-500/50 rounded-lg p-3 group/btn transition-all text-center"
            >
              <div className="flex items-center justify-center gap-2 text-green-500/50 font-mono blur-[2px] mb-1">
                $4,###
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-white font-bold group-hover/btn:text-green-400">
                <Lock className="w-3 h-3" /> Ver Sueldo ($1)
              </div>
            </button>
          )}
        </div>

      </div>
    </motion.div>
  );
}

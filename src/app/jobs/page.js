"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Search, Lock, Zap, Globe, ShieldCheck, 
  Scale, Code, Sparkles, Hammer, Stethoscope, Palette, Truck, 
  GraduationCap, Calculator, Sprout, Shield, Settings, 
  Coffee, Award, Factory, Filter, CheckCircle2
} from 'lucide-react';

// --- BASE DE DATOS ---
const JOBS_DB = [
  {
    id: 1, title: "Director General (CEO)", company: "Multinacional Logística",
    category: "Alta Dirección", location: "Panamá City, PA", type: "Presencial",
    salary: 15000, salaryVisible: false,
    tags: ["Estrategia", "Bilingüe", "MBA"], ppp: "Vida de Lujo", verified: true
  },
  {
    id: 2, title: "Neurocirujano Principal", company: "Hospital Central",
    category: "Profesionales", location: "Madrid, ES", type: "Turnos",
    salary: 9000, salaryVisible: false,
    tags: ["Medicina", "Salud"], ppp: null, verified: true
  },
  {
    id: 3, title: "Soldador Subacuático", company: "Naviera Oil",
    category: "Oficios", location: "Mar del Norte", type: "Rotación",
    salary: 12000, salaryVisible: false,
    tags: ["Riesgo", "Petróleo"], ppp: "Ahorro Total", verified: true
  },
  {
    id: 4, title: "Asistente Virtual IA", company: "Tech Startup",
    category: "Tecnología", location: "Remoto", type: "Freelance",
    salary: 2000, salaryVisible: true,
    tags: ["Prompting", "Organización"], ppp: null, verified: true
  },
  {
    id: 11, title: "Astrólogo Kármico", company: "App Mística",
    category: "Místico", location: "Remoto", type: "Freelance",
    salary: 100, salaryVisible: true,
    tags: ["Cartas Natales", "Zoom"], ppp: null, verified: true
  },
   {
    id: 5, title: "Jefe de Sala / Maitre", company: "Restaurante Michelin",
    category: "Servicios", location: "Lima, PE", type: "Presencial",
    salary: 2000, salaryVisible: false,
    tags: ["Gastronomía", "Atención"], ppp: null, verified: true
  },
];

// --- LISTA VERTICAL DE CATEGORÍAS ---
const CATEGORIES = [
  { name: "Todo", icon: <Globe className="w-4 h-4" /> },
  { name: "Alta Dirección", icon: <Award className="w-4 h-4" /> },
  { name: "Tecnología", icon: <Code className="w-4 h-4" /> },
  { name: "Místico", icon: <Sparkles className="w-4 h-4" /> },
  { name: "Salud", icon: <Stethoscope className="w-4 h-4" /> },
  { name: "Legal", icon: <Scale className="w-4 h-4" /> },
  { name: "Oficios", icon: <Hammer className="w-4 h-4" /> },
  { name: "Fuerzas Armadas", icon: <Shield className="w-4 h-4" /> },
  { name: "Profesionales", icon: <GraduationCap className="w-4 h-4" /> },
  { name: "Creativo", icon: <Palette className="w-4 h-4" /> },
  { name: "Agro & Pesca", icon: <Sprout className="w-4 h-4" /> },
  { name: "Logística", icon: <Truck className="w-4 h-4" /> },
  { name: "Servicios", icon: <Coffee className="w-4 h-4" /> },
  { name: "Operarios", icon: <Factory className="w-4 h-4" /> },
  { name: "Administrativo", icon: <Calculator className="w-4 h-4" /> },
  { name: "Técnicos", icon: <Settings className="w-4 h-4" /> },
];

export default function UniversalMarket() {
  const [activeCat, setActiveCat] = useState("Todo");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = JOBS_DB.filter(job => {
    const matchCat = activeCat === "Todo" || job.category === activeCat;
    const matchSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchLoc = locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchCat && matchSearch && matchLoc;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20 pt-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* LAYOUT PRINCIPAL: SIDEBAR + CONTENIDO */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- SIDEBAR IZQUIERDA (FILTROS Y CATEGORÍAS) --- */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
            
            {/* CAJA DE BÚSQUEDA */}
            <div className="bg-[#111] p-5 rounded-xl border border-white/10 sticky top-24">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" /> Filtros
              </h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Palabra clave..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-500 w-4 h-4" />
                  <input 
                    type="text" 
                    placeholder="Ubicación..." 
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div className="my-6 border-t border-white/5"></div>

              {/* LISTA VERTICAL DE CATEGORÍAS */}
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Sectores</h3>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-800">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCat(cat.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                      activeCat === cat.name 
                      ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-500' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border-l-2 border-transparent'
                    }`}
                  >
                    {cat.icon}
                    <span className="font-medium">{cat.name}</span>
                    {activeCat === cat.name && <CheckCircle2 className="w-3 h-3 ml-auto opacity-50" />}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* --- CONTENIDO DERECHA (RESULTADOS) --- */}
          <main className="flex-grow pt-2">
            
            {/* HEADER DE RESULTADOS */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">
                {activeCat === "Todo" ? "Todas las Ofertas" : `Empleos en ${activeCat}`}
              </h1>
              <span className="text-sm text-gray-500 font-mono bg-white/5 px-3 py-1 rounded-full">
                {filteredJobs.length} Resultados
              </span>
            </div>

            {/* LISTA DE EMPLEOS */}
            <div className="space-y-4">
              <AnimatePresence mode='popLayout'>
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="text-center py-20 border border-dashed border-white/10 rounded-xl"
                  >
                    <p className="text-gray-500">No hay ofertas activas en este sector/ubicación.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}

// TARJETA DE EMPLEO (Optimizada para lista vertical)
function JobCard({ job }) {
  const [isUnlocked, setIsUnlocked] = useState(job.salaryVisible);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group bg-[#0A0A0A] border border-white/10 p-5 rounded-xl hover:border-blue-500/30 transition-all hover:bg-white/[0.02] flex flex-col sm:flex-row gap-4 sm:items-center"
    >
      {/* Icono Empresa */}
      <div className="hidden sm:flex w-12 h-12 rounded bg-white/5 items-center justify-center text-gray-400 font-bold border border-white/5">
        {job.company.charAt(0)}
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {job.title}
          </h3>
          {job.verified && <ShieldCheck className="w-4 h-4 text-green-500" title="Verificado" />}
        </div>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
          <span className="text-gray-300 font-medium">{job.company}</span>
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
          <span className="text-xs bg-white/5 px-2 py-0.5 rounded border border-white/5">{job.type}</span>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 min-w-[140px] border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
        {isUnlocked ? (
           <div className="text-right">
             <div className="text-lg font-bold text-green-400 font-mono">${job.salary.toLocaleString()}</div>
             {job.ppp && <div className="text-[10px] text-yellow-500">{job.ppp}</div>}
           </div>
        ) : (
           <button 
             onClick={() => setIsUnlocked(true)}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded hover:bg-green-500/10 hover:text-green-400 transition border border-white/10 text-xs font-bold"
           >
             <Lock className="w-3 h-3" /> Ver Sueldo
           </button>
        )}
        
        <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded hover:bg-gray-200 transition">
          APLICAR
        </button>
      </div>
    </motion.div>
  );
}

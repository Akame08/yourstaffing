"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Search, Lock, Zap, Globe, ShieldCheck, 
  Scale, Code, Sparkles, Hammer, Stethoscope, Palette, Truck, 
  GraduationCap, Calculator, Sprout, Shield, Settings, 
  Coffee, Award, Factory, ChevronDown, ChevronUp, Users
} from 'lucide-react';

// --- BASE DE DATOS (Mismos datos, nueva visualización) ---
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

// --- CATEGORÍAS EN GRID ---
const CATEGORIES = [
  { name: "Todo", icon: <Globe className="w-5 h-5" />, color: "bg-blue-500" },
  { name: "Alta Dirección", icon: <Award className="w-5 h-5" />, color: "bg-yellow-500" },
  { name: "Tecnología", icon: <Code className="w-5 h-5" />, color: "bg-indigo-500" },
  { name: "Místico", icon: <Sparkles className="w-5 h-5" />, color: "bg-purple-500" },
  { name: "Salud", icon: <Stethoscope className="w-5 h-5" />, color: "bg-red-500" },
  { name: "Oficios", icon: <Hammer className="w-5 h-5" />, color: "bg-orange-500" },
  { name: "Fuerzas Armadas", icon: <Shield className="w-5 h-5" />, color: "bg-green-600" },
  { name: "Profesionales", icon: <GraduationCap className="w-5 h-5" />, color: "bg-teal-500" },
  { name: "Legal", icon: <Scale className="w-5 h-5" />, color: "bg-slate-500" },
  { name: "Creativo", icon: <Palette className="w-5 h-5" />, color: "bg-pink-500" },
  { name: "Agro & Pesca", icon: <Sprout className="w-5 h-5" />, color: "bg-emerald-500" },
  { name: "Logística", icon: <Truck className="w-5 h-5" />, color: "bg-cyan-500" },
  { name: "Servicios", icon: <Coffee className="w-5 h-5" />, color: "bg-amber-500" },
  { name: "Operarios", icon: <Factory className="w-5 h-5" />, color: "bg-gray-500" },
  { name: "Administrativo", icon: <Calculator className="w-5 h-5" />, color: "bg-blue-400" },
  { name: "Técnicos", icon: <Settings className="w-5 h-5" />, color: "bg-zinc-500" },
];

export default function UniversalMarket() {
  const [activeCat, setActiveCat] = useState("Todo");
  const [isExpanded, setIsExpanded] = useState(false); // Estado para expandir/colapsar
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = JOBS_DB.filter(job => {
    const matchCat = activeCat === "Todo" || job.category === activeCat;
    return matchCat;
  });

  // Mostrar solo las primeras 8 o todas según el estado
  const visibleCategories = isExpanded ? CATEGORIES : CATEGORIES.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Mercado <span className="text-blue-500">Universal</span></h1>
            <p className="text-gray-400">Acceso global a talento de élite en 16 sectores.</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
             <div className="text-right">
                <div className="text-2xl font-mono font-bold text-white">4,230</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Ofertas Activas</div>
             </div>
          </div>
        </div>

        {/* --- NUEVO DISEÑO: GRID BENTO --- */}
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <AnimatePresence>
              {visibleCategories.map((cat, i) => (
                <motion.button
                  key={cat.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setActiveCat(cat.name)}
                  className={`relative group flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${
                    activeCat === cat.name 
                    ? 'bg-white/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                    : 'bg-[#0A0A0A] border-white/5 hover:bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className={`mb-3 p-2 rounded-lg ${activeCat === cat.name ? 'text-white' : 'text-gray-400 group-hover:text-white'} ${activeCat === cat.name ? cat.color : 'bg-white/5'}`}>
                    {cat.icon}
                  </div>
                  <span className={`text-xs font-bold text-center ${activeCat === cat.name ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                    {cat.name}
                  </span>
                  
                  {/* Luz de fondo activa */}
                  {activeCat === cat.name && (
                    <div className={`absolute inset-0 rounded-2xl opacity-20 ${cat.color} blur-xl -z-10`} />
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* BOTÓN EXPANDIR / COLAPSAR */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 py-2 text-xs font-bold text-gray-500 hover:text-white flex items-center justify-center gap-2 border-t border-white/5 transition-colors"
          >
            {isExpanded ? (
              <>CERRAR SECTORES <ChevronUp className="w-3 h-3" /></>
            ) : (
              <>VER TODOS LOS SECTORES (+8) <ChevronDown className="w-3 h-3" /></>
            )}
          </button>
        </div>

        {/* BARRA DE BÚSQUEDA FLOTANTE */}
        <div className="sticky top-24 z-30 mb-8">
           <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 p-2 rounded-xl flex shadow-2xl max-w-3xl mx-auto">
              <Search className="w-5 h-5 text-gray-500 ml-4 self-center" />
              <input 
                type="text" 
                placeholder="Buscar cargo, habilidad o empresa..." 
                className="bg-transparent border-none text-white px-4 py-3 flex-grow focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 rounded-lg font-bold text-sm transition">
                FILTRAR
              </button>
           </div>
        </div>

        {/* RESULTADOS */}
        <div className="grid grid-cols-1 gap-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-500">
               Selecciona otra categoría...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// TARJETA DE EMPLEO (Horizontal Ultra-Clean)
function JobCard({ job }) {
  const [isUnlocked, setIsUnlocked] = useState(job.salaryVisible);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="group bg-[#0A0A0A] border border-white/5 p-6 rounded-xl hover:border-blue-500/30 transition-all flex flex-col md:flex-row items-center gap-6"
    >
      <div className="flex-grow text-center md:text-left">
        <div className="text-[10px] uppercase font-bold text-blue-500 mb-1 tracking-widest">{job.category}</div>
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{job.title}</h3>
        <p className="text-sm text-gray-400">{job.company} • {job.location}</p>
      </div>

      <div className="flex items-center gap-4">
        {isUnlocked ? (
           <div className="text-right">
             <div className="text-xl font-bold text-green-400 font-mono">${job.salary.toLocaleString()}</div>
             <button className="text-xs bg-white text-black px-3 py-1 rounded font-bold mt-1 hover:bg-gray-200">APLICAR</button>
           </div>
        ) : (
           <button onClick={() => setIsUnlocked(true)} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition border border-white/10">
             <Lock className="w-4 h-4" /> <span className="text-sm font-bold">Ver Sueldo</span>
           </button>
        )}
      </div>
    </motion.div>
  );
}

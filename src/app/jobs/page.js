"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, MapPin, Search, Lock, Zap, Globe, ShieldCheck, 
  Scale, Code, Sparkles, Hammer, Stethoscope, Palette, Truck, 
  GraduationCap, Calculator, Sprout, Shield, Settings, 
  Coffee, Award, UserCog, Brush, Factory
} from 'lucide-react';

// --- BASE DE DATOS OMNIPRESENTE (Ejemplos de cada estrato) ---
const JOBS_DB = [
  // 1. ALTA DIRECCIÓN
  {
    id: 1, title: "Director General (CEO)", company: "Multinacional Logística",
    category: "Alta Dirección", location: "Panamá City, PA", type: "Presencial",
    salary: 15000, salaryVisible: false,
    tags: ["Estrategia", "Bilingüe", "MBA"], ppp: "Vida de Lujo", verified: true
  },
  // 2. PROFESIONALES CIENTÍFICOS
  {
    id: 2, title: "Neurocirujano Principal", company: "Hospital Central",
    category: "Profesionales", location: "Madrid, ES", type: "Turnos",
    salary: 9000, salaryVisible: false,
    tags: ["Medicina", "Salud"], ppp: null, verified: true
  },
  // 3. TÉCNICOS / NIVEL MEDIO
  {
    id: 3, title: "Controlador Aéreo", company: "Aeropuerto Int.",
    category: "Técnicos", location: "Santiago, CL", type: "Presencial",
    salary: 5500, salaryVisible: false,
    tags: ["Aviación", "Radar"], ppp: "Sueldo Alto", verified: true
  },
  // 4. APOYO ADMINISTRATIVO
  {
    id: 4, title: "Asistente Ejecutiva Bilingüe", company: "Bufete Legal",
    category: "Administrativo", location: "Miami, USA", type: "Híbrido",
    salary: 3200, salaryVisible: true,
    tags: ["Gestión", "Legal"], ppp: null, verified: true
  },
  // 5. SERVICIOS Y VENDEDORES
  {
    id: 5, title: "Jefe de Sala / Maitre", company: "Restaurante Michelin",
    category: "Servicios", location: "Lima, PE", type: "Presencial",
    salary: 2000, salaryVisible: false,
    tags: ["Gastronomía", "Atención"], ppp: null, verified: true
  },
  // 6. AGRICULTORES Y CALIFICADOS
  {
    id: 6, title: "Ingeniero Agrónomo de Campo", company: "AgroExport",
    category: "Agro & Pesca", location: "Mendoza, AR", type: "Campo",
    salary: 1800, salaryVisible: true,
    tags: ["Vino", "Exportación"], ppp: null, verified: true
  },
  // 7. OFICIALES Y ARTESANOS
  {
    id: 7, title: "Soldador Subacuático", company: "Naviera Oil",
    category: "Oficios", location: "Mar del Norte (Offshore)", type: "Rotación",
    salary: 12000, salaryVisible: false,
    tags: ["Riesgo", "Petróleo"], ppp: "Ahorro Total", verified: true
  },
  // 8. OPERADORES DE MAQUINARIA
  {
    id: 8, title: "Conductor de Tráiler Internacional", company: "TransEurope",
    category: "Operarios", location: "Ruta Europa", type: "Ruta",
    salary: 3500, salaryVisible: false,
    tags: ["Licencia C+E", "Logística"], ppp: null, verified: true
  },
  // 9. OCUPACIONES ELEMENTALES
  {
    id: 9, title: "Personal de Limpieza Especializada", company: "BioClean",
    category: "Elemental", location: "Bogotá, CO", type: "Turnos",
    salary: 500, salaryVisible: true,
    tags: ["Hospitalario", "Seguridad"], ppp: null, verified: true
  },
  // 10. FUERZAS ARMADAS / SEGURIDAD
  {
    id: 10, title: "Jefe de Seguridad Privada (Ex-Militar)", company: "Corp Security",
    category: "Fuerzas Armadas", location: "Ciudad de México, MX", type: "Presencial",
    salary: 2800, salaryVisible: false,
    tags: ["Escolta", "Armas"], ppp: null, verified: true
  },
  // MÍSTICO (Tu nicho)
  {
    id: 11, title: "Astrólogo Kármico", company: "App Mística",
    category: "Místico", location: "Remoto", type: "Freelance",
    salary: 100, salaryVisible: true, // Por hora
    tags: ["Cartas Natales", "Zoom"], ppp: null, verified: true
  },
  // SECTOR CUATERNARIO (TECH)
  {
    id: 12, title: "AI Prompt Engineer", company: "StartUp AI",
    category: "Tecnología", location: "Remoto (Global)", type: "Proyecto",
    salary: 4000, salaryVisible: false,
    tags: ["Gemini", "Python"], ppp: null, verified: true
  }
];

// --- LISTA MAESTRA DE FILTROS (ICONOS + NOMBRES) ---
const CATEGORIES = [
  { name: "Todo", icon: <Globe className="w-4 h-4" /> },
  { name: "Alta Dirección", icon: <Award className="w-4 h-4" /> }, // Gerentes
  { name: "Profesionales", icon: <GraduationCap className="w-4 h-4" /> }, // Científicos, Intelectuales
  { name: "Tecnología", icon: <Code className="w-4 h-4" /> }, // Cuaternario
  { name: "Técnicos", icon: <Settings className="w-4 h-4" /> }, // Nivel medio
  { name: "Administrativo", icon: <Calculator className="w-4 h-4" /> }, // Apoyo, Secretarios
  { name: "Servicios", icon: <Coffee className="w-4 h-4" /> }, // Camareros, Vendedores
  { name: "Agro & Pesca", icon: <Sprout className="w-4 h-4" /> }, // Sector Primario
  { name: "Oficios", icon: <Hammer className="w-4 h-4" /> }, // Artesanos, Construcción
  { name: "Operarios", icon: <Factory className="w-4 h-4" /> }, // Maquinaria, Fábrica
  { name: "Logística", icon: <Truck className="w-4 h-4" /> }, // Conductores
  { name: "Fuerzas Armadas", icon: <Shield className="w-4 h-4" /> }, // Militar, Policía
  { name: "Salud", icon: <Stethoscope className="w-4 h-4" /> }, // Sector Salud
  { name: "Legal", icon: <Scale className="w-4 h-4" /> }, // Abogados
  { name: "Creativo", icon: <Palette className="w-4 h-4" /> }, // Arte
  { name: "Místico", icon: <Sparkles className="w-4 h-4" /> }, // Nicho Especial
  { name: "Elemental", icon: <Brush className="w-4 h-4" /> }, // Limpieza, Peones
];

export default function UniversalMarket() {
  const [activeCat, setActiveCat] = useState("Todo");
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredJobs = JOBS_DB.filter(job => {
    const matchCat = activeCat === "Todo" || job.category === activeCat;
    const matchSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchLoc = locationFilter === "" || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    return matchCat && matchSearch && matchLoc;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-20 pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Mercado <span className="text-blue-500">Global</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La base de datos laboral más completa. Desde Alta Dirección hasta Oficios Elementales.
            Busca por sector, jerarquía o habilidad.
          </p>
        </div>

        {/* BARRA DE CONTROL */}
        <div className="sticky top-20 z-40 bg-[#050505]/90 backdrop-blur-md py-4 mb-4 border-b border-white/5">
          <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row gap-2 shadow-2xl">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Busca: 'Gerente', 'Soldador', 'Tarot'..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent py-3 pl-12 pr-4 focus:outline-none text-white placeholder-gray-500"
              />
            </div>
            <div className="relative md:w-1/3 border-t md:border-t-0 md:border-l border-white/10">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="País o Ciudad..." 
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full bg-transparent py-3 pl-12 pr-4 focus:outline-none text-white placeholder-gray-500"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-xl font-bold transition-all hidden md:block">
              BUSCAR
            </button>
          </div>
        </div>

        {/* SELECTOR DE CATEGORÍAS (SCROLL HORIZONTAL) */}
        <div className="mb-10">
          <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide snap-x px-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCat(cat.name)}
                className={`flex-shrink-0 snap-start flex items-center gap-2 px-4 py-2 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCat === cat.name 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-lg scale-105' 
                  : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="space-y-4 min-h-[400px]">
          <AnimatePresence mode='popLayout'>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5"
              >
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Sin resultados exactos</h3>
                <p className="text-gray-400">Intenta otra categoría o limpia los filtros.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// TARJETA DE EMPLEO (Diseño Compacto y Profesional)
function JobCard({ job }) {
  const [isUnlocked, setIsUnlocked] = useState(job.salaryVisible);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      className="group bg-[#0A0A0A] border border-white/10 p-5 rounded-xl hover:border-blue-500/30 transition-all hover:bg-white/[0.02]"
    >
      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
        
        {/* LOGO DE CATEGORÍA */}
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-gray-400">
           {job.category === "Fuerzas Armadas" ? <Shield className="w-6 h-6" /> : 
            job.category === "Místico" ? <Sparkles className="w-6 h-6 text-purple-400" /> :
            job.category === "Alta Dirección" ? <Award className="w-6 h-6 text-yellow-500" /> :
            <Briefcase className="w-6 h-6" />}
        </div>

        {/* INFO */}
        <div className="flex-grow text-center md:text-left w-full">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{job.category}</span>
             {job.verified && <ShieldCheck className="w-3 h-3 text-green-500" />}
          </div>
          
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {job.title}
          </h3>
          <p className="text-sm text-gray-400 mb-3">{job.company} • {job.location}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="text-[10px] bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ACCIÓN / SALARIO */}
        <div className="w-full md:w-auto min-w-[150px]">
           {isUnlocked ? (
            <div className="text-center md:text-right">
              <div className="text-xl font-bold text-green-400 font-mono">
                ${job.salary.toLocaleString()}
              </div>
              {job.ppp && <div className="text-[10px] text-yellow-500">{job.ppp}</div>}
              <button className="w-full mt-2 bg-white text-black text-xs font-bold py-2 rounded hover:bg-gray-200">
                CONTACTAR
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setIsUnlocked(true)}
              className="w-full py-3 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-lg hover:border-green-500/50 hover:text-green-400 transition-all"
            >
              <Lock className="w-3 h-3" />
              <span className="text-xs font-bold">Ver Salario</span>
            </button>
          )}
        </div>

      </div>
    </motion.div>
  );
}

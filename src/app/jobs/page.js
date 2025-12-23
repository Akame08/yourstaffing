"use client";
import React, { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Clock, Filter, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');

  // DATOS DE EJEMPLO (MOCK DATA)
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      company: "NeuralNet Corp",
      location: "San Francisco (Remote)",
      salary: "$180k - $250k",
      type: "Full-time",
      tags: ["Python", "PyTorch", "LLMs"],
      posted: "2h ago"
    },
    {
      id: 2,
      title: "Rust Backend Developer",
      company: "CryptoSecure",
      location: "Global Remote",
      salary: "$120k - $160k",
      type: "Contract",
      tags: ["Rust", "Solana", "Web3"],
      posted: "5h ago"
    },
    {
      id: 3,
      title: "Product Designer (UX/UI)",
      company: "Visionary Inc",
      location: "London, UK",
      salary: "£60k - £80k",
      type: "Hybrid",
      tags: ["Figma", "Design Systems"],
      posted: "1d ago"
    },
    {
      id: 4,
      title: "DevOps Architect",
      company: "CloudScale",
      location: "Berlin, DE",
      salary: "€90k - €110k",
      type: "Full-time",
      tags: ["AWS", "Kubernetes", "Terraform"],
      posted: "2d ago"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER DE BÚSQUEDA */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Encuentra tu misión.</h1>
          <p className="text-gray-400 mb-8">Accede al 1% de las vacantes tecnológicas ocultas.</p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative flex items-center bg-[#111] border border-white/10 rounded-full p-2">
              <Search className="w-5 h-5 text-gray-500 ml-4" />
              <input 
                type="text" 
                placeholder="Busca por rol, stack o empresa..."
                className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-2 placeholder-gray-500 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold transition">
                Buscar
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* SIDEBAR FILTROS */}
          <div className="hidden lg:block space-y-8">
            <div className="bg-[#111] p-6 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 mb-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                <Filter className="w-4 h-4" /> Filtros
              </div>
              
              <div className="space-y-6">
                <FilterGroup title="Modalidad" options={["Remoto", "Híbrido", "Presencial"]} />
                <FilterGroup title="Tipo" options={["Full-time", "Contract", "Freelance"]} />
                <FilterGroup title="Rango Salarial" options={["$50k - $100k", "$100k - $150k", "$150k+"]} />
              </div>
            </div>
          </div>

          {/* LISTA DE EMPLEOS */}
          <div className="lg:col-span-3 space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="group bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-blue-500/50 hover:bg-[#0f0f0f] transition-all cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="text-blue-500" />
                </div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{job.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{job.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {job.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4"/> {job.location}</div>
                  <div className="flex items-center gap-2"><DollarSign className="w-4 h-4"/> {job.salary}</div>
                  <div className="flex items-center gap-2"><Briefcase className="w-4 h-4"/> {job.type}</div>
                  <div className="flex items-center gap-2 ml-auto"><Clock className="w-4 h-4"/> {job.posted}</div>
                </div>
              </div>
            ))}

            <div className="text-center pt-8">
              <button className="text-gray-500 hover:text-white text-sm font-bold border-b border-gray-500 hover:border-white transition pb-1">
                Cargar más ofertas
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options }) {
  return (
    <div>
      <h4 className="text-white font-bold mb-3 text-sm">{title}</h4>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer group">
            <div className="w-4 h-4 rounded border border-white/20 group-hover:border-blue-500 flex items-center justify-center">
              {/* Checkbox simulado */}
            </div>
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}

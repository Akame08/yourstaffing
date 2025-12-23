"use client";
import React, { useState } from 'react';
import { 
  Brain, Crosshair, Wallet, 
  Zap, Shield, Globe, Lock, 
  Terminal, Activity, Mic, Users,
  ArrowRight, Briefcase, Layout, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

// DATOS DE LOS SERVICIOS (TU LISTA COMPLETA)
const SERVICES_DB = {
  neuronal: [
    {
      title: "Avatar Interviewer 24/7",
      desc: "Nuestros avatares entrevistan a 1,000 candidatos simultáneamente. Sin sesgos, sin cansancio.",
      tags: ["High Tech", "Ahorro de Tiempo"],
      icon: <Users className="w-6 h-6 text-blue-400" />
    },
    {
      title: "El Oráculo de Burnout",
      desc: "Analizamos patrones de Slack/Jira para predecir renuncias. 'El Lead Dev tiene 85% de riesgo de irse'.",
      note: "*Requiere consentimiento de datos.",
      tags: ["Retention AI", "Big Brother"],
      icon: <Activity className="w-6 h-6 text-red-400" />
    },
    {
      title: "Bóveda de Legado",
      desc: "Antes de que un experto renuncie, nuestra IA lo entrevista 5 horas y crea un clon consultable de su conocimiento.",
      tags: ["Knowledge Cloning", "Backup Humano"],
      icon: <Lock className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "ADN de Código",
      desc: "Generamos arte digital basado en el estilo de GitHub del candidato. Visualiza el caos o la elegancia.",
      tags: ["Visual", "Branding"],
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Auditoría Spaghetti",
      desc: "Tu IA audita el código Open Source anterior del candidato. Evita contratar a gente que programa mal.",
      tags: ["Tech Truth", "Audit"],
      icon: <Brain className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Voice Clone Support",
      desc: "Escucha cómo sonaría ese candidato atendiendo a tus clientes antes de contratarlo.",
      tags: ["ElevenLabs API", "Call Centers"],
      icon: <Mic className="w-6 h-6 text-cyan-400" />
    },
    {
      title: "Soft-Skills Calibration",
      desc: "Análisis de micro-expresiones para detectar Energía y Confianza. Algoritmo auditado anti-sesgo.",
      tags: ["Psych-Ops", "Bias-Free"],
      icon: <Users className="w-6 h-6 text-green-400" />
    }
  ],
  tactico: [
    {
      title: "Sniper Bot (Outreach)",
      desc: "Localizamos emails personales de empleados de tu competencia y enviamos ofertas irrechazables.",
      note: "⚠️ Uso responsable requerido.",
      tags: ["Agresivo", "High Ticket"],
      highlight: true,
      icon: <Crosshair className="w-6 h-6 text-red-500" />
    },
    {
      title: "Protocolo de Préstamo",
      desc: "¿Tienes devs ociosos? Alquílalos a otra empresa por 3 meses sin despedirlos. Optimización pura.",
      tags: ["B2B Swapping", "Eficiencia"],
      icon: <Briefcase className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Mercado 'Acqui-Hiring'",
      desc: "No contrates uno por uno. Compra equipos completos de Startups fallidas (5 Ingenieros + PM) por un precio fijo.",
      tags: ["Team Buyout", "Velocidad"],
      icon: <Users className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Caballo de Troya",
      desc: "Infiltramos un experto en cultura como empleado normal para arreglar ambientes tóxicos desde dentro.",
      note: "*Servicio encubierto.",
      tags: ["Spy-Consulting", "Change Agent"],
      icon: <Shield className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Rent-a-Squad",
      desc: "Despliega un equipo flash (Dev + Diseño) pre-sincronizado para proyectos urgentes.",
      tags: ["Speed", "Squads"],
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Reputation Ledger",
      desc: "Base de datos descentralizada de incidentes graves. Protege tu empresa de actores maliciosos.",
      note: "🚫 NO DISPONIBLE EN UNIÓN EUROPEA.",
      tags: ["Web3", "Offshore Only"],
      icon: <Lock className="w-6 h-6 text-gray-400" />
    }
  ],
  financiero: [
    {
      title: "Optimizador Fiscal",
      desc: "Mapa interactivo: 'Si contratas en Georgia en vez de España, el empleado gana 40% más neto'.",
      tags: ["Geo-Arbitraje", "Tax Router"],
      icon: <Globe className="w-6 h-6 text-green-400" />
    },
    {
      title: "Superfluid Streaming",
      desc: "Paga por segundo. El dinero fluye a la wallet del empleado en tiempo real. Retención brutal.",
      tags: ["Crypto", "Web3 Only"],
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Smart Contract Gen",
      desc: "Generación automática de contratos internacionales vinculantes. Sin abogados.",
      tags: ["LegalTech", "$29/contrato"],
      icon: <Terminal className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Firing Insurance",
      desc: "Adelantamos nóminas a freelancers o cubrimos despidos imprevistos.",
      note: "*Licencia limitada a zonas económicas especiales.",
      tags: ["Fintech", "Restricted"],
      icon: <Shield className="w-6 h-6 text-purple-400" />
    }
  ]
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('neuronal'); 

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Terminal className="w-3 h-3" /> Catálogo de Servicios v3.0
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Matriz de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Servicios</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Selecciona un Núcleo Operativo para desplegar las herramientas disponibles.
        </p>
      </div>

      {/* TABS (NÚCLEOS) */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#111] p-2 rounded-2xl border border-white/10">
          <button 
            onClick={() => setActiveTab('neuronal')}
            className={`flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${activeTab === 'neuronal' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
          >
            <Brain className="w-5 h-5" /> NÚCLEO NEURONAL
          </button>
          
          <button 
            onClick={() => setActiveTab('tactico')}
            className={`flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${activeTab === 'tactico' ? 'bg-red-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
          >
            <Crosshair className="w-5 h-5" /> NÚCLEO TÁCTICO
          </button>
          
          <button 
            onClick={() => setActiveTab('financiero')}
            className={`flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all ${activeTab === 'financiero' ? 'bg-green-600 text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
          >
            <Wallet className="w-5 h-5" /> NÚCLEO FINANCIERO
          </button>
        </div>
      </div>

      {/* GRID DE TARJETAS */}
      <div className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-500 key={activeTab}">
          {SERVICES_DB[activeTab].map((service, index) => (
            <ServiceCard key={index} data={service} />
          ))}
        </div>
      </div>

      {/* SECCIÓN ECOSISTEMA (Para no perder navegación) */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
        <h3 className="text-2xl font-bold mb-10 text-center text-gray-500 uppercase tracking-widest text-xs">Accesos Directos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <QuickLink href="/jobs" icon={<Briefcase/>} title="Soy Candidato" desc="Ver ofertas activas" color="blue" />
          <QuickLink href="/pricing" icon={<Layout/>} title="Ver Precios" desc="Planes desde $25" color="yellow" />
          <QuickLink href="/contact" icon={<MessageSquare/>} title="Soporte" desc="Hablar con humanos" color="green" />
        </div>
      </div>

    </div>
  );
}

// COMPONENTE TARJETA DE SERVICIO
function ServiceCard({ data }) {
  return (
    <div className={`group relative p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${data.highlight ? 'bg-[#0f0505] border-red-900/50 hover:border-red-500' : 'bg-[#0A0A0A] border-white/10 hover:border-white/30 hover:-translate-y-1'}`}>
      
      {/* Icono Flotante */}
      <div className="mb-6 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
        {data.icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
        {data.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {data.desc}
      </p>

      {/* Notas al pie (warnings) */}
      {data.note && (
        <div className="mb-6 text-[10px] font-mono text-gray-500 bg-white/5 p-2 rounded border border-white/5">
          {data.note}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {data.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      <Link href="/contact" className="mt-auto">
        <button className={`w-full py-3 rounded-lg font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
          data.highlight 
            ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]' 
            : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 group-hover:border-white/30'
        }`}>
          ACTIVAR <ArrowRight className="w-3 h-3" />
        </button>
      </Link>
    </div>
  );
}

// COMPONENTE QUICK LINK
function QuickLink({ href, icon, title, desc, color }) {
  const colors = {
    blue: 'text-blue-400 group-hover:text-white bg-blue-900/20',
    yellow: 'text-yellow-400 group-hover:text-white bg-yellow-900/20',
    green: 'text-green-400 group-hover:text-white bg-green-900/20'
  };

  return (
    <Link href={href} className="group">
      <div className="p-6 bg-[#111] border border-white/5 rounded-xl hover:bg-[#161616] transition h-full flex items-center gap-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition ${colors[color]}`}>
          {React.cloneElement(icon, { className: "w-5 h-5" })}
        </div>
        <div>
          <h4 className="font-bold text-white text-sm">{title}</h4>
          <p className="text-xs text-gray-500">{desc}</p>
        </div>
      </div>
    </Link>
  );
}

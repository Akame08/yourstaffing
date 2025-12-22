"use client";

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { Users, Zap, Shield, ChevronRight } from 'lucide-react';



const content = {

en: {

nav: { home: "Home", talent: "For Talent", corpus: "For Companies", contact: "Initialize" },

hero: {

h1: "Stop Hiring Employees.",

h1_b: "Start Integrating Intelligence.",

sub: "The top 1% of global talent is already pre-verified in our Neural Network. Your competition reads PDFs; you are one click away from evolution.",

cta: "INITIATE RECRUITMENT SEQUENCE",

stats: "Live Talent Map Active"

},

features: [

{ title: "Biometric Verification", desc: "Psychological and technical scanning. We don't guess, we know." },

{ title: "Resonance Guarantee", desc: "14-day zero-risk trial. If they don't fit, we replace instantly." },

{ title: "Global Deployment", desc: "From request to interview in under 48 terrestrial hours." }

],

roi: { title: "Inefficiency Calculator", label: "Weekly Budget ($)", result: "Est. Monthly Loss:" }

},

es: {

nav: { home: "Inicio", talent: "Talento", corpus: "Empresas", contact: "Inicializar" },

hero: {

h1: "Deja de Contratar Empleados.",

h1_b: "Empieza a Integrar Inteligencia.",

sub: "El 1% del talento global ya está pre-verificado en nuestra Red Neuronal. Tu competencia lee PDFs; tú estás a un clic de la evolución.",

cta: "INICIAR SECUENCIA DE RECLUTAMIENTO",

stats: "Mapa de Talento Activo"

},

features: [

{ title: "Verificación Biométrica", desc: "Escaneo psicológico y técnico. No adivinamos, sabemos." },

{ title: "Garantía de Resonancia", desc: "Prueba de 14 días riesgo cero. Si no encajan, reposición instantánea." },

{ title: "Despliegue Global", desc: "De la solicitud a la entrevista en menos de 48 horas terrestres." }

],

roi: { title: "Calculadora de Ineficiencia", label: "Presupuesto Semanal ($)", result: "Pérdida Mensual Est.:" }

}

};



const ParticleBackground = () => (

<div className="absolute inset-0 overflow-hidden pointer-events-none">

{[...Array(20)].map((_, i) => (

<motion.div

key={i}

className="absolute bg-blue-500 rounded-full opacity-20"

initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", scale: 0 }}

animate={{ y: [null, Math.random() * -100 + "%"], opacity: [0, 0.5, 0] }}

transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}

style={{ width: Math.random() * 4 + "px", height: Math.random() * 4 + "px" }}

/>

))}

</div>

);



export default function YourStaffingQuantum() {

const [lang, setLang] = useState('en');

const [budget, setBudget] = useState(2000);

const t = content[lang];

const loss = (budget * 0.35 * 4).toLocaleString('en-US', { style: 'currency', currency: 'USD' });



return (

<div className="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">

<div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#050505] to-[#050505] z-0" />

<ParticleBackground />



{/* NAV */}

<nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/50">

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">

YOURSTAFFING<span className="text-blue-500">.AGENCY</span>

</div>

<div className="flex items-center space-x-4">

<button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="px-3 py-1 text-xs border border-white/20 rounded-full hover:bg-white/10 transition">{lang === 'en' ? 'ES' : 'EN'}</button>

<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-xs font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)]">{t.nav.contact}</button>

</div>

</div>

</nav>

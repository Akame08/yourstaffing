"use client";
import React, { createContext, useContext, useState } from 'react';
import Link from "next/link";
import { ShieldCheck, Zap, Briefcase, Users, Lock, Menu, Github, Twitter, Linkedin } from "lucide-react";

// 1. CREAMOS EL CONTEXTO (El Cerebro)
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

// TEXTOS DEL MENÚ Y FOOTER
const content = {
  en: {
    nav: { jobs: "Find Jobs", talent: "Top Talent", services: "Agency Services", login: "Log In", post: "Post Job", vip: "VIP ACCESS" },
    footer: { 
      plat: "Platform", serv: "Services", vip: "VIP Newsletter", 
      desc: "Receive hidden USD remote offers not published elsewhere.",
      rights: "© 2025 YourStaffing Inc. Global Talent Operating System."
    }
  },
  es: {
    nav: { jobs: "Buscar Empleo", talent: "Talento Top", services: "Servicios Agency", login: "Entrar", post: "Publicar Oferta", vip: "ACCESO VIP" },
    footer: { 
      plat: "Plataforma", serv: "Servicios", vip: "Boletín VIP", 
      desc: "Recibe ofertas ocultas en USD no publicadas en otros sitios.",
      rights: "© 2025 YourStaffing Inc. Sistema Operativo de Talento Global."
    }
  }
};

// 2. EL COMPONENTE SHELL (Envuelve toda la web)
export default function Shell({ children }) {
  const [lang, setLang] = useState('en'); // Por defecto en Inglés
  const t = content[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      
      {/* HEADER SINCRONIZADO */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              YOURSTAFFING
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <NavLink href="/jobs" icon={<Briefcase className="w-4 h-4" />} text={t.nav.jobs} />
            <NavLink href="/talent" icon={<Users className="w-4 h-4" />} text={t.nav.talent} />
            <NavLink href="/services" icon={<ShieldCheck className="w-4 h-4" />} text={t.nav.services} />
          </div>

          <div className="flex items-center space-x-4">
            {/* BOTÓN DE IDIOMA GLOBAL */}
            <button onClick={toggleLang} className="text-xs font-bold border border-white/20 px-2 py-1 rounded hover:bg-white/10 transition">
              {lang === 'en' ? 'EN' : 'ES'}
            </button>
            <Link href="/post-job" className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all">
              {t.nav.post}
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENIDO DE LA PÁGINA */}
      <div className="pt-20 min-h-screen">
        {children}
      </div>

      {/* FOOTER SINCRONIZADO */}
      <footer className="border-t border-white/10 bg-black py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-500">
          <div>
            <h4 className="text-white font-bold mb-4">{t.footer.plat}</h4>
            <ul className="space-y-2">
              <li><Link href="/jobs" className="hover:text-blue-400">Jobs</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400">Pricing</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4">{t.footer.vip}</h4>
            <p className="mb-4">{t.footer.desc}</p>
            <div className="flex max-w-sm">
              <input type="email" placeholder="email@pro.com" className="bg-gray-900 border border-gray-700 rounded-l px-4 py-2 w-full text-white" />
              <button className="bg-blue-600 text-white px-4 rounded-r font-bold">GO</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/5 text-xs">
          {t.footer.rights}
        </div>
      </footer>

    </LanguageContext.Provider>
  );
}

function NavLink({ href, icon, text }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
      {icon}<span>{text}</span>
    </Link>
  );
}


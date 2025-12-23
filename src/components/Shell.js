"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, Zap, Briefcase, Users, Lock, Menu, X, 
  Github, Twitter, Linkedin, Facebook, Instagram, 
  ChevronRight, Mail, MapPin, Phone
} from "lucide-react";

const LanguageContext = createContext();
export const useLanguage = () => useContext(LanguageContext);

export default function Shell({ children }) {
  const [lang, setLang] = useState('es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Para saber en qué página estamos

  // Cerrar menú móvil al cambiar de página
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'es' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      <div className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500">
        
        {/* --- HEADER / NAVBAR --- */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* LOGO */}
              <Link href="/" className="flex items-center group z-50">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tighter text-white leading-none">
                    YOURSTAFFING
                  </span>
                  <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
                    Agency
                  </span>
                </div>
              </Link>

              {/* MENÚ DE ESCRITORIO (Hidden en móvil) */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink href="/jobs" icon={<Briefcase className="w-4 h-4" />} text="Empleos" active={pathname === '/jobs'} />
                <NavLink href="/services" icon={<ShieldCheck className="w-4 h-4" />} text="Servicios" active={pathname === '/services'} />
                <NavLink href="/contact" icon={<Users className="w-4 h-4" />} text="Contacto" active={pathname === '/contact'} />
              </div>

              {/* BOTONES DERECHA (Escritorio) */}
              <div className="hidden md:flex items-center space-x-4">
                <button onClick={toggleLang} className="text-xs font-bold text-gray-400 hover:text-white border border-white/10 px-2 py-1 rounded transition">
                  {lang === 'en' ? 'EN' : 'ES'}
                </button>
                <Link href="/login" className="text-sm font-bold text-gray-300 hover:text-white transition">
                  Iniciar Sesión
                </Link>
                <Link href="/post-job" className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-white/20">
                  Publicar Oferta
                </Link>
              </div>

              {/* BOTÓN MENÚ MÓVIL (Hamburguesa) */}
              <div className="md:hidden z-50">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* MENÚ MÓVIL DESPLEGABLE */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 top-20 bg-black z-40 p-6 flex flex-col space-y-6 md:hidden overflow-y-auto">
              <MobileLink href="/" text="Inicio" />
              <MobileLink href="/jobs" text="Buscar Empleo" />
              <MobileLink href="/services" text="Servicios Empresas" />
              <MobileLink href="/contact" text="Contacto" />
              <hr className="border-white/10" />
              <MobileLink href="/login" text="Iniciar Sesión" highlight />
              <MobileLink href="/post-job" text="Publicar Oferta" highlight />
            </div>
          )}
        </nav>

        {/* --- CONTENIDO PRINCIPAL --- */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* --- MEGA FOOTER PROFESIONAL --- */}
        <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              
              {/* COLUMNA 1: MARCA */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <Zap className="w-3 h-3 text-white fill-white" />
                  </div>
                  <span className="font-bold text-lg tracking-tight">YOURSTAFFING</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  La primera red neuronal de talento global. Conectamos el 1% del talento mundial con empresas Fortune 500 mediante Inteligencia Artificial.
                </p>
                <div className="flex gap-4 pt-2">
                  <SocialIcon Icon={Twitter} />
                  <SocialIcon Icon={Linkedin} />
                  <SocialIcon Icon={Instagram} />
                  <SocialIcon Icon={Github} />
                </div>
              </div>

              {/* COLUMNA 2: PLATAFORMA */}
              <div>
                <h4 className="font-bold text-white mb-6">Plataforma</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><FooterLink href="/jobs" text="Buscar Empleo" /></li>
                  <li><FooterLink href="/services" text="Para Empresas" /></li>
                  <li><FooterLink href="/pricing" text="Precios y Planes" /></li>
                  <li><FooterLink href="/dashboard/talent" text="Acceso Talento" /></li>
                  <li><FooterLink href="/dashboard/company" text="Acceso Reclutador" /></li>
                </ul>
              </div>

              {/* COLUMNA 3: LEGAL & SOPORTE */}
              <div>
                <h4 className="font-bold text-white mb-6">Legal & Ayuda</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li><FooterLink href="/contact" text="Centro de Ayuda" /></li>
                  <li><FooterLink href="/legal/terms" text="Términos de Servicio" /></li>
                  <li><FooterLink href="/legal/privacy" text="Política de Privacidad" /></li>
                  <li><FooterLink href="/legal/cookies" text="Política de Cookies" /></li>
                  <li><FooterLink href="/status" text="Estado del Sistema: Online 🟢" /></li>
                </ul>
              </div>

              {/* COLUMNA 4: CONTACTO */}
              <div>
                <h4 className="font-bold text-white mb-6">Contacto</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>Silicon Valley Labs<br />San Francisco, CA 94103</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>hello@yourstaffing.agency</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span>+1 (555) 000-0000</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* BARRA INFERIOR */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
              <p>© 2025 YourStaffing Agency Inc. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <span>Made with Next.js</span>
                <span>Secured by Vercel</span>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </LanguageContext.Provider>
  );
}

// COMPONENTES AUXILIARES DEL SHELL

function NavLink({ href, icon, text, active }) {
  return (
    <Link 
      href={href} 
      className={`flex items-center space-x-2 text-sm font-bold transition-colors ${
        active ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {/* {icon} Podríamos mostrar icono, pero en desktop suele verse mejor solo texto limpio */}
      <span>{text}</span>
    </Link>
  );
}

function MobileLink({ href, text, highlight }) {
  return (
    <Link 
      href={href} 
      className={`text-2xl font-bold ${
        highlight ? 'text-blue-500' : 'text-white'
      }`}
    >
      {text}
    </Link>
  );
}

function FooterLink({ href, text }) {
  return (
    <Link href={href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
      <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
      <span className="-ml-5 group-hover:ml-0 transition-all">{text}</span>
    </Link>
  );
}

function SocialIcon({ Icon }) {
  return (
    <a href="#" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
      <Icon className="w-4 h-4" />
    </a>
  );
}

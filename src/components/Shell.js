"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, Zap, Briefcase, Users, Menu, X, 
  Github, Twitter, Linkedin, Instagram, 
  ChevronRight, Mail, MapPin, Phone
} from "lucide-react";

export default function Shell({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500">
      
      {/* --- HEADER --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <Link href="/" className="flex items-center group">
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

            {/* MENÚ ESCRITORIO */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/jobs" className={`text-sm font-bold hover:text-white transition-colors ${pathname === '/jobs' ? 'text-white' : 'text-gray-400'}`}>Empleos</Link>
              <Link href="/services" className={`text-sm font-bold hover:text-white transition-colors ${pathname === '/services' ? 'text-white' : 'text-gray-400'}`}>Servicios</Link>
              <Link href="/pricing" className={`text-sm font-bold hover:text-white transition-colors ${pathname === '/pricing' ? 'text-white' : 'text-gray-400'}`}>Precios</Link>
              <Link href="/contact" className={`text-sm font-bold hover:text-white transition-colors ${pathname === '/contact' ? 'text-white' : 'text-gray-400'}`}>Contacto</Link>
            </div>

            {/* BOTONES */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-sm font-bold text-gray-300 hover:text-white transition">
                Entrar
              </Link>
              <Link href="/post-job" className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all">
                Publicar Oferta
              </Link>
            </div>

            {/* HAMBURGUESA MÓVIL */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col space-y-4 md:hidden">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Inicio</Link>
            <Link href="/jobs" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Empleos</Link>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Precios</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold">Contacto</Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-blue-500">Entrar</Link>
          </div>
        )}
      </nav>

      {/* --- CONTENIDO --- */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* --- FOOTER REPARADO --- */}
      <footer className="border-t border-white/10 bg-[#020202] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">YourStaffing</h4>
              <p className="text-gray-400 text-sm">Conectando talento global con el futuro.</p>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/jobs" className="hover:text-blue-500">Buscar Empleo</Link></li>
                <li><Link href="/services" className="hover:text-blue-500">Servicios</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-500">Precios</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/legal/terms" className="hover:text-blue-500">Términos</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-blue-500">Privacidad</Link></li>
                <li><Link href="/legal/cookies" className="hover:text-blue-500">Cookies</Link></li>
                <li><Link href="/status" className="hover:text-blue-500">Estado</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ayuda@yourstaffing.agency</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Silicon Valley, CA</li>
              </ul>
            </div>

          </div>
          <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-600">
            © 2025 YourStaffing Agency. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}

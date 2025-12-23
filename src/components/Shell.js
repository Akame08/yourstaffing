"use client";
import React, { useState, createContext, useContext } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, Globe } from "lucide-react";

// Contexto para el idioma
const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function Shell({ children }) {
    const [language, setLanguage] = useState('es');
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleLanguage = () => setLanguage(prev => prev === 'es' ? 'en' : 'es');

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            <div className="flex flex-col min-h-screen bg-[#050505] text-white font-sans">
                {/* NAVBAR */}
                <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-white/10 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                            <Zap className="text-blue-500" /> YOURSTAFFING
                        </Link>
                        
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                            <Link href="/jobs" className="hover:text-blue-400">Empleos</Link>
                            <Link href="/services" className="hover:text-blue-400">Servicios</Link>
                            <Link href="/pricing" className="hover:text-blue-400">Precios</Link>
                            <Link href="/contact" className="hover:text-blue-400">Contacto</Link>
                            <button onClick={toggleLanguage} className="bg-white/10 px-3 py-1 rounded-md flex items-center gap-2">
                                <Globe className="w-4 h-4" /> {language.toUpperCase()}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* EL CONTENIDO: Asegúrate de que {children} esté aquí */}
                <main className="flex-grow pt-20">
                    {children}
                </main>
            </div>
        </LanguageContext.Provider>
    );
}

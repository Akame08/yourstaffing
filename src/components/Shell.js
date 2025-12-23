"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";

// Agregamos la exportación que el build está buscando
export const useLanguage = () => {
    return { language: 'es', t: (key) => key }; 
};

export default function Shell({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-white font-sans">
            <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-white/10 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <div className="font-bold text-xl tracking-tight">
                                YOURSTAFFING <span className="text-blue-500 text-xs block">AGENCY</span>
                            </div>
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <Link href="/jobs" className="text-sm font-bold text-gray-400 hover:text-white transition">Empleos</Link>
                            <Link href="/services" className="text-sm font-bold text-gray-400 hover:text-white transition">Servicios</Link>
                            <Link href="/pricing" className="text-sm font-bold text-gray-400 hover:text-white transition">Precios</Link>
                            <Link href="/contact" className="text-sm font-bold text-gray-400 hover:text-white transition">Contacto</Link>
                        </div>
                        <div className="hidden md:flex items-center gap-4">
                            <Link href="/login" className="text-sm font-bold text-white hover:text-blue-400">Entrar</Link>
                            <Link href="/post-job" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
                                Publicar
                            </Link>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
                                {isOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-black border-t border-white/10 p-6 flex flex-col gap-6">
                        <Link href="/jobs" onClick={() => setIsOpen(false)} className="text-xl font-bold">Empleos</Link>
                        <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-xl font-bold">Precios</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-bold">Contacto</Link>
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-xl font-bold text-blue-500">Iniciar Sesión</Link>
                    </div>
                )}
            </nav>
            <main className="flex-grow pt-20">
                {children}
            </main>
            <footer className="bg-[#020202] border-t border-white/10 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">YourStaffing</h4>
                        <p className="text-sm text-gray-500">Red Neuronal de Talento Global.</p>
                        <div className="flex gap-4">
                            <Github className="w-5 h-5 text-gray-600 hover:text-white" />
                            <Linkedin className="w-5 h-5 text-gray-600 hover:text-white" />
                            <Twitter className="w-5 h-5 text-gray-600 hover:text-white" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Plataforma</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/jobs" className="hover:text-blue-500">Buscar Empleo</Link></li>
                            <li><Link href="/services" className="hover:text-blue-500">Para Empresas</Link></li>
                            <li><Link href="/pricing" className="hover:text-blue-500">Precios</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/legal/terms" className="hover:text-blue-500">Términos</Link></li>
                            <li><Link href="/legal/privacy" className="hover:text-blue-500">Privacidad</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Contacto</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hola@yourstaffing.agency</li>
                            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Silicon Valley, CA</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

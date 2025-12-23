"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail, ArrowRight, Github, Linkedin, Building2, User } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [role, setRole] = useState('talent'); // 'talent' o 'company'

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* FONDO ANIMADO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] z-0" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

      <div className="relative z-10 w-full max-w-md">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-bold tracking-tighter mb-2 hover:text-blue-400 transition">
            YOURSTAFFING
          </Link>
          <p className="text-gray-500 text-sm">Sistema de Acceso Seguro</p>
        </div>

        {/* TARJETA PRINCIPAL */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
          
          {/* SELECTOR DE ROL (SWITCH) */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 rounded-xl mb-6">
            <button 
              onClick={() => setRole('talent')}
              className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${
                role === 'talent' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" /> TALENTO
            </button>
            <button 
              onClick={() => setRole('company')}
              className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold transition-all ${
                role === 'company' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" /> EMPRESA
            </button>
          </div>

          {/* FORMULARIO CAMBIANTE */}
          <div className="px-6 pb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={role}
                initial={{ opacity: 0, x: role === 'talent' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: role === 'talent' ? 20 : -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-xl font-bold mb-1 text-center">
                  {role === 'talent' ? 'Bienvenido, Candidato.' : 'Portal Corporativo.'}
                </h2>
                <p className="text-center text-gray-400 text-xs mb-6">
                  {role === 'talent' 
                    ? 'Accede a empleos ocultos y herramientas de IA.' 
                    : 'Gestiona tus ofertas y equipos fantasma.'}
                </p>

                <div className="space-y-4">
                  <div className="relative group">
                    <Mail className="absolute left-4 top-3.5 text-gray-500 w-4 h-4 group-focus-within:text-blue-400 transition" />
                    <input 
                      type="email" 
                      placeholder={role === 'talent' ? "tu@email.com" : "rrhh@empresa.com"}
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none transition text-white"
                    />
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-3.5 text-gray-500 w-4 h-4 group-focus-within:text-blue-400 transition" />
                    <input 
                      type="password" 
                      placeholder="Contraseña" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none transition text-white"
                    />
                  </div>

                  <Link href={role === 'talent' ? "/dashboard/talent" : "/dashboard/company"}>
                    <button className={`w-full py-3 rounded-xl font-bold text-sm mt-2 flex items-center justify-center gap-2 transition-transform active:scale-95 ${
                        role === 'talent' ? 'bg-blue-600 hover:bg-blue-500' : 'bg-indigo-600 hover:bg-indigo-500'
                    }`}>
                        INICIAR SESIÓN <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 my-6">
                  <div className="h-px bg-white/10 flex-grow" />
                  <span className="text-xs text-gray-500 font-mono">O CONTINÚA CON</span>
                  <div className="h-px bg-white/10 flex-grow" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition text-xs font-bold">
                    <Github className="w-4 h-4" /> GITHUB
                  </button>
                  <button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition text-xs font-bold text-blue-400">
                    <Linkedin className="w-4 h-4" /> LINKEDIN
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          ¿No tienes cuenta? <Link href="/register" className="text-white font-bold hover:underline">Regístrate Gratis</Link>
        </p>

      </div>
    </div>
  );
}

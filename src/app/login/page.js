"use client";
import React from 'react';
import { Zap, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen bg-black flex font-sans">
      
      {/* IZQUIERDA: FORMULARIO */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#050505] border-r border-white/10">
        <div className="max-w-md w-full space-y-8">
          
          <div className="text-center lg:text-left">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white tracking-tight">YOURSTAFFING</span>
            </Link>
            <h2 className="text-3xl font-bold text-white">Bienvenido de nuevo</h2>
            <p className="mt-2 text-gray-400">Accede a tu panel de control neuronal.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition">
              <Github className="w-5 h-5" /> Continuar con GitHub
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-[#111] text-white font-bold py-3 rounded-xl border border-white/10 hover:bg-[#1a1a1a] transition">
              <div className="w-5 h-5 bg-gradient-to-tr from-blue-500 to-red-500 rounded-full" /> Continuar con Google
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
            <div className="relative flex justify-center text-sm"><span className="px-2 bg-[#050505] text-gray-500">O con email</span></div>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Corporativo</label>
              <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Contraseña</label>
              <input type="password" className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" />
            </div>
            
            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition flex items-center justify-center gap-2">
              INICIAR SESIÓN <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-center text-sm text-gray-500">
            ¿No tienes cuenta? <Link href="/contact" className="text-blue-500 hover:underline">Solicita acceso</Link>
          </p>
        </div>
      </div>

      {/* DERECHA: IMAGEN (SOLO EN ESCRITORIO) */}
      <div className="hidden lg:flex w-1/2 bg-[#020202] relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="relative z-10 text-center px-12">
          <div className="w-24 h-24 bg-blue-600/20 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <h3 className="text-2xl font-bold text-white mb-4">La IA ya está trabajando.</h3>
          <p className="text-gray-400">"El talento es universal, las oportunidades no. Hasta ahora."</p>
        </div>
      </div>

    </div>
  );
}

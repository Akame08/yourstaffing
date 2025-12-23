"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-mono">
      
      {/* FONDO DE ERROR */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black z-0" />
      
      {/* EFECTO DE LÍNEAS DE ESCANEO */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }} />

      <div className="relative z-10 text-center max-w-lg">
        
        {/* ICONO DE ALERTA ANIMADO */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block mb-6 text-red-500"
        >
          <AlertTriangle className="w-20 h-20 mx-auto" />
        </motion.div>

        <h1 className="text-8xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 tracking-tighter">
          404
        </h1>
        
        <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg mb-8 font-mono text-sm text-red-300 text-left">
          <p>&gt; ERROR: NEURAL LINK BROKEN</p>
          <p>&gt; TARGET: /unknown-sector</p>
          <p>&gt; STATUS: <span className="animate-pulse">CRITICAL FAILURE</span></p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Te has perdido en el vacío.</h2>
        <p className="text-gray-500 mb-8">
          La página que buscas ha sido eliminada, renombrada o nunca existió en esta línea temporal.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-200 transition w-full sm:w-auto">
              <Home className="w-4 h-4" /> REINICIAR SISTEMA
            </button>
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" /> VOLVER ATRÁS
          </button>
        </div>

      </div>

      <div className="absolute bottom-8 text-xs text-gray-600">
        SYSTEM_ID: YOURSTAFFING_OS_V1.0
      </div>
    </div>
  );
}

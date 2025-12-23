"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TalentPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500 selection:text-white">
            {/* Fondo sutil */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505] z-0" />

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-20">
                <Link href="/" className="inline-flex items-center text-gray-500 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Centro de Mando
                </Link>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                        Protocolo de Ascensión
                    </h1>
                    <p className="text-xl text-gray-400 mb-12 border-l-4 border-blue-500 pl-6">
                        No buscamos empleados. Buscamos nodos de alta capacidad para nuestra red neuronal global.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Velocidad de Asignación</h3>
                        <p className="text-sm text-gray-400">Olvídate de procesos de 3 meses. Si eres élite, te colocamos en 48 horas.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Pago en Cripto/USD</h3>
                        <p className="text-sm text-gray-400">Tú eliges cómo recibir tu energía. Sin fronteras, sin burocracia bancaria.</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                        APLICAR AHORA
                    </button>
                </div>
            </main>
        </div>
    );
}

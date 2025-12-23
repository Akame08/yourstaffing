"use client";
import React from 'react';
import Shell from '@/components/Shell';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Direct Hire (Standard)',
    price: '15%',
    description: 'De la compensación anual bruta del candidato.',
    features: ['Garantía de 90 días', 'Sustitución gratuita', 'Acceso a Red Neuronal']
  },
  {
    name: 'Direct Hire (Premium)',
    price: '25%',
    description: 'Para roles ejecutivos o C-Level de alta demanda.',
    features: ['Headhunting dedicado', 'Garantía extendida', 'Pruebas psicométricas']
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Modelos de Inversión</h1>
        <p className="text-gray-400 text-xl">Sin costos ocultos. Solo pagas por el éxito del talento.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.name} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-blue-500 transition">
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <div className="text-5xl font-black text-blue-500 mb-4">{tier.price}</div>
            <p className="text-gray-500 mb-8">{tier.description}</p>
            <ul className="space-y-4">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="text-blue-500 w-5 h-5"/>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

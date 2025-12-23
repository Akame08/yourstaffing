"use client";
import React from 'react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Hablemos.</h1>
          <p className="text-gray-400">Nuestro equipo (humano) suele responder en menos de 2 horas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <ContactCard icon={<MessageSquare className="text-blue-400"/>} title="Ventas" email="sales@yourstaffing.agency" />
          <ContactCard icon={<Mail className="text-purple-400"/>} title="Soporte" email="help@yourstaffing.agency" />
          <ContactCard icon={<MapPin className="text-green-400"/>} title="Oficinas" email="Silicon Valley, CA" />
        </div>

        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nombre</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none" placeholder="tu@empresa.com" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Departamento</label>
              <select className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none">
                <option>Ventas / Planes Corporativos</option>
                <option>Soporte Técnico</option>
                <option>Prensa / Media</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Mensaje</label>
              <textarea rows="5" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none" placeholder="¿Cómo podemos ayudarte?"></textarea>
            </div>

            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> ENVIAR MENSAJE
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

function ContactCard({ icon, title, email }) {
  return (
    <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-xl text-center hover:border-white/30 transition">
      <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <h3 className="font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{email}</p>
    </div>
  );
}

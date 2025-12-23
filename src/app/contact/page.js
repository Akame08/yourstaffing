"use client";
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  // --- CONFIGURACIÓN ---
  // PEGA AQUÍ TU ID DE FORMSPREE (Ej: "xkqnqjqz")
  const FORMSPREE_ID = "meejpwoy"; 
  // ---------------------

  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // Limpiar formulario
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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

        <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          
          {/* MENSAJE DE ÉXITO */}
          {status === 'success' ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Recibido!</h3>
              <p className="text-gray-400 mb-8">Gracias por contactar. Un agente de YourStaffing te escribirá pronto.</p>
              <button 
                onClick={() => setStatus(null)}
                className="text-blue-500 hover:text-white font-bold text-sm underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            /* FORMULARIO */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Nombre</label>
                  <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                  <input required name="email" type="email" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition" placeholder="tu@empresa.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Departamento</label>
                <select name="department" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition">
                  <option value="Ventas">Ventas / Planes Corporativos</option>
                  <option value="Soporte">Soporte Técnico</option>
                  <option value="Prensa">Prensa / Media</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Mensaje</label>
                <textarea required name="message" rows="5" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:border-blue-500 focus:outline-none transition" placeholder="¿Cómo podemos ayudarte?"></textarea>
              </div>

              <button 
                disabled={status === 'submitting'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 disabled:cursor-not-allowed text-white font-bold rounded-xl transition flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <> <Loader2 className="w-4 h-4 animate-spin" /> ENVIANDO... </>
                ) : (
                  <> <Send className="w-4 h-4" /> ENVIAR MENSAJE </>
                )}
              </button>
              
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Hubo un error al enviar. Por favor intenta de nuevo.</p>
              )}
            </form>
          )}

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

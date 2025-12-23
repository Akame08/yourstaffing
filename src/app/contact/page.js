"use client";
import React from 'react';
import { useLanguage } from '@/components/Shell';
import { Mail, MessageSquare, Send, Globe } from 'lucide-react';

const contactContent = {
  en: {
    title: "Initiate Connection",
    sub: "Our neural network is ready to receive your requirements. Response time: < 2 hours.",
    form: {
      name: "Full Name",
      email: "Business Email",
      company: "Company Name",
      message: "Project Requirements",
      button: "SEND SEQUENCE"
    }
  },
  es: {
    title: "Iniciar Conexión",
    sub: "Nuestra red neuronal está lista para recibir tus requerimientos. Tiempo de respuesta: < 2 horas.",
    form: {
      name: "Nombre Completo",
      email: "Email Corporativo",
      company: "Nombre de la Empresa",
      message: "Requerimientos del Proyecto",
      button: "ENVIAR SECUENCIA"
    }
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const t = contactContent[language] || contactContent.es;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Conexión iniciada. Nos pondremos en contacto pronto.");
  };

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black tracking-tighter mb-4">{t.title}</h1>
          <p className="text-gray-400 font-light">{t.sub}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] border border-white/5">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-blue-500 font-bold">{t.form.name}</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" required />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-blue-500 font-bold">{t.form.email}</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" required />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-blue-500 font-bold">{t.form.company}</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-blue-500 font-bold">{t.form.message}</label>
            <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition" required></textarea>
          </div>
          <button type="submit" className="w-full py-5 bg-white text-black font-black rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2">
            {t.form.button} <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
}

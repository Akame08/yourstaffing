"use client";
import React, { useState } from 'react';
import { 
  Briefcase, MapPin, DollarSign, Layout, 
  CheckCircle2, Zap, Loader2, Send 
} from 'lucide-react';

export default function PostJob() {
  // --- CONFIGURACIÓN ---
  // PEGA AQUÍ TU ID DE FORMSPREE PARA EMPLEOS
  const FORMSPREE_ID = "TU_ID_DE_FORMSPREE_JOBS"; 
  // ---------------------

  const [plan, setPlan] = useState('quarterly'); // 'single' | 'quarterly'
  const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'
  
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    type: 'Remoto',
    category: 'Tecnología'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Creamos un objeto con los datos del formulario + el plan seleccionado
    const dataToSend = new FormData(e.target);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: dataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        // No reseteamos el form inmediatamente para que el usuario vea el éxito
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6 font-sans flex items-center justify-center">
        <div className="max-w-xl w-full bg-[#111] border border-green-500/30 p-12 rounded-2xl text-center shadow-[0_0_50px_rgba(34,197,94,0.1)] animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold mb-4">¡Solicitud Recibida!</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Hemos recibido los detalles de tu vacante <strong>{formData.title}</strong> bajo el plan <strong>{plan === 'quarterly' ? 'Trimestral ($99)' : 'Básico ($25)'}</strong>.
          </p>
          <div className="bg-black/50 p-4 rounded-xl border border-white/10 text-sm text-gray-400 mb-8">
            Un agente de facturación te enviará el enlace de pago seguro a tu email en los próximos 15 minutos. La oferta se publicará automáticamente tras el pago.
          </div>
          <button onClick={() => window.location.reload()} className="text-blue-500 hover:text-white font-bold underline">
            Publicar otra vacante
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-28 pb-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Publicar Vacante <span className="text-blue-500">Global</span></h1>
          <p className="text-gray-400">
            Nuestra IA indexará tu oferta en menos de 10 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* CAMPO OCULTO PARA ENVIAR EL PLAN ELEGIDO */}
              <input type="hidden" name="selected_plan" value={plan === 'quarterly' ? 'Pack Trimestral ($99)' : 'Single Post ($25)'} />

              {/* 1. DETALLES DEL PUESTO */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-blue-500" /> 1. Detalles del Puesto
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Título del Puesto</label>
                    <input required name="title" onChange={handleChange} type="text" placeholder="Ej: Senior React Developer" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 focus:outline-none transition" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Empresa</label>
                      <input required name="company" onChange={handleChange} type="text" placeholder="Nombre de tu empresa" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 focus:outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Categoría</label>
                      <select name="category" onChange={handleChange} className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 focus:outline-none transition appearance-none">
                        <option>Tecnología</option>
                        <option>Diseño / Creativo</option>
                        <option>Marketing</option>
                        <option>Ventas</option>
                        <option>Finanzas</option>
                        <option>Salud</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Ubicación</label>
                      <input required name="location" onChange={handleChange} type="text" placeholder="Ej: Madrid, España (o Remoto)" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 focus:outline-none transition" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Salario</label>
                      <input required name="salary" onChange={handleChange} type="text" placeholder="Ej: $50k - $80k" className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 focus:outline-none transition" />
                    </div>
                  </div>

                  <div>
                     <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Descripción</label>
                     <textarea required name="description" rows="6" placeholder="Describe las responsabilidades..." className="w-full bg-black border border-white/10 rounded-xl p-4 text-white focus:border-blue-500 focus:outline-none transition" />
                  </div>
                </div>
              </div>

              {/* 2. SELECCIÓN DE PLAN */}
              <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" /> 2. Elige tu Plan
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div onClick={() => setPlan('single')} className={`cursor-pointer p-6 rounded-xl border transition-all ${plan === 'single' ? 'bg-blue-900/10 border-blue-500 relative' : 'bg-black border-white/10 hover:border-white/30'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg">Single Post</span>
                      <span className="font-mono text-xl">$25</span>
                    </div>
                    <p className="text-xs text-gray-400">1 Oferta activa por 30 días.</p>
                    {plan === 'single' && <CheckCircle2 className="absolute top-4 right-4 text-blue-500 w-5 h-5" />}
                  </div>

                  <div onClick={() => setPlan('quarterly')} className={`cursor-pointer p-6 rounded-xl border transition-all relative ${plan === 'quarterly' ? 'bg-yellow-900/10 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'bg-black border-white/10 hover:border-white/30'}`}>
                    <div className="absolute -top-3 left-6 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Recomendado</div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-lg text-white">3 Meses Pack</span>
                      <span className="font-mono text-xl text-yellow-500">$99</span>
                    </div>
                    <p className="text-xs text-gray-300">Publicaciones <strong>ILIMITADAS</strong>.</p>
                    {plan === 'quarterly' && <CheckCircle2 className="absolute top-4 right-4 text-yellow-500 w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* BOTÓN DE ENVÍO */}
              <button 
                disabled={status === 'submitting'}
                className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-900 disabled:cursor-not-allowed text-white font-bold rounded-xl transition shadow-lg text-lg flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <> <Loader2 className="w-5 h-5 animate-spin" /> PROCESANDO... </>
                ) : (
                  <> CONTINUAR AL PAGO (${plan === 'single' ? '25' : '99'}) </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-500 text-center font-bold">Error al enviar. Inténtalo de nuevo.</p>
              )}

            </form>
          </div>

          {/* COLUMNA DERECHA: VISTA PREVIA (IGUAL QUE ANTES) */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <h4 className="text-xs font-bold text-gray-500 uppercase mb-4 tracking-widest">Vista Previa en Vivo</h4>
              
              <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 shadow-2xl relative overflow-hidden">
                 {plan === 'quarterly' && (
                   <div className="absolute top-0 right-0 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg z-10">DESTACADO</div>
                 )}
                 <div className="flex items-start gap-4 mb-4">
                   <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-xl font-bold text-gray-500">
                     {formData.company ? formData.company.charAt(0) : "?"}
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-white leading-tight">{formData.title || "Título del Puesto..."}</h3>
                     <p className="text-sm text-gray-400 mt-1">{formData.company || "Tu Empresa"}</p>
                   </div>
                 </div>
                 <div className="flex flex-wrap gap-2 mb-4">
                   <Badge icon={<MapPin className="w-3 h-3" />} text={formData.location || "Ubicación"} />
                   <Badge icon={<Briefcase className="w-3 h-3" />} text="Remoto" />
                   <Badge icon={<DollarSign className="w-3 h-3" />} text={formData.salary || "$ Salario"} />
                 </div>
                 <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                   <span className="text-[10px] text-gray-500">Publicado: Hace 1 min</span>
                   <button className="px-4 py-1.5 bg-white text-black text-xs font-bold rounded hover:bg-gray-200">APLICAR</button>
                 </div>
                 {plan === 'quarterly' && <div className="absolute inset-0 border-2 border-yellow-500/20 rounded-xl pointer-events-none" />}
              </div>

              <div className="mt-8 bg-[#111] p-6 rounded-xl border border-white/5">
                <h4 className="text-sm font-bold text-white mb-4">Tu publicación incluye:</h4>
                <ul className="space-y-3 text-xs text-gray-400">
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> Indexación en Google Jobs</li>
                  <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> Panel de Analítica</li>
                  {plan === 'quarterly' && (
                    <li className="flex gap-2 text-yellow-500 font-bold"><Zap className="w-4 h-4"/> Boost de Visibilidad x3</li>
                  )}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Badge({ icon, text }) {
  return (
    <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-xs text-gray-300 border border-white/5">
      {icon} {text}
    </span>
  );
}

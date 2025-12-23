import React from 'react';
import { Cookie, Settings, BarChart } from 'lucide-react';

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Cookie className="text-orange-500" /> Política de Cookies
          </h1>
          <p className="text-sm text-gray-500">Transparencia en el rastreo.</p>
        </div>

        <div className="space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-3">¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestra web. No son virus ni código malicioso. Sirven para recordar sus preferencias y mantener su sesión iniciada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">Tipos de Cookies que usamos</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start bg-[#111] p-4 rounded-xl border border-white/5">
                <div className="bg-blue-900/20 p-2 rounded-lg text-blue-400"><Settings className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-bold text-white">Esenciales / Técnicas</h3>
                  <p className="text-sm mt-1">
                    Necesarias para que la web funcione. Permiten el login, la seguridad anti-fraude y el carrito de compras. No se pueden desactivar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-[#111] p-4 rounded-xl border border-white/5">
                <div className="bg-purple-900/20 p-2 rounded-lg text-purple-400"><BarChart className="w-5 h-5" /></div>
                <div>
                  <h3 className="font-bold text-white">Analíticas y Rendimiento</h3>
                  <p className="text-sm mt-1">
                    Nos ayudan a entender cómo usa la web (ej: qué ofertas visita más). Usamos datos anónimos agregados. Proveedores: Google Analytics, Vercel Insights.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Gestión de Cookies</h2>
            <p className="mb-4">
              Usted puede configurar su navegador para bloquear las cookies, pero es posible que algunas partes de YourStaffing (como el inicio de sesión o los pagos) dejen de funcionar correctamente.
            </p>
            <div className="bg-white/5 p-4 rounded-lg text-sm">
              <p className="font-bold text-white mb-2">Instrucciones por navegador:</p>
              <ul className="flex gap-4 text-blue-400 underline cursor-pointer">
                <li>Google Chrome</li>
                <li>Safari</li>
                <li>Firefox</li>
                <li>Edge</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

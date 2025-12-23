import React from 'react';
import { Lock, Eye, Server, Globe } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Lock className="text-green-500" /> Política de Privacidad
          </h1>
          <p className="text-sm text-gray-500">Cumplimiento Global (GDPR / CCPA). Última rev: Dic 2025</p>
        </div>

        <div className="space-y-10">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-400" /> 1. Datos que Recopilamos
            </h2>
            <p className="mb-4">Para operar nuestra red neuronal de empleo, recopilamos los siguientes tipos de información:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#111] p-4 rounded-lg border border-white/5">
                <h3 className="font-bold text-white mb-2">Datos de Identidad</h3>
                <p className="text-sm">Nombre, Email, Teléfono, Enlaces a LinkedIn/GitHub y Ubicación aproximada.</p>
              </div>
              <div className="bg-[#111] p-4 rounded-lg border border-white/5">
                <h3 className="font-bold text-white mb-2">Datos Biométricos y de Video</h3>
                <p className="text-sm">Si utiliza el "Video Studio", procesamos su imagen y voz mediante IA para analizar "soft skills" y generar transcripciones.</p>
              </div>
              <div className="bg-[#111] p-4 rounded-lg border border-white/5">
                <h3 className="font-bold text-white mb-2">Datos Financieros</h3>
                <p className="text-sm">Historial de transacciones y direcciones públicas de billeteras cripto (Wallet Address).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-400" /> 2. Cómo usamos su Información (Procesamiento IA)
            </h2>
            <p className="leading-relaxed">
              Utilizamos sus datos para alimentar nuestros algoritmos de emparejamiento (Matching). 
              <strong>Importante:</strong> Su Video-CV es analizado por sistemas automatizados para extraer métricas de confianza y comunicación. 
              Al usar este servicio, usted otorga consentimiento explícito para este procesamiento biométrico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Compartir con Terceros</h2>
            <p className="leading-relaxed">
              No vendemos sus datos personales a anunciantes. Sus datos solo se comparten con:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Empresas Reclutadoras:</strong> Solo cuando usted aplica a una oferta o si su perfil es público.</li>
              <li><strong>Proveedores de Servicio:</strong> Procesadores de pago (Stripe/Coinbase), alojamiento (Vercel/AWS) y servicios de IA (OpenAI/Anthropic) bajo estrictos acuerdos de confidencialidad.</li>
              <li><strong>Autoridades Legales:</strong> Si somos requeridos por una orden judicial válida.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-yellow-400" /> 4. Transferencia Internacional de Datos
            </h2>
            <p className="leading-relaxed">
              YourStaffing opera globalmente. Sus datos pueden ser transferidos y procesados en servidores ubicados en Estados Unidos o Europa. Utilizamos Cláusulas Contractuales Tipo (SCC) para garantizar la seguridad de estos datos internacionales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Sus Derechos (ARCO / GDPR)</h2>
            <p className="mb-4">Usted tiene derecho a:</p>
            <ul className="grid md:grid-cols-2 gap-2 text-sm">
              <li className="bg-white/5 p-2 rounded">Acceder a sus datos personales.</li>
              <li className="bg-white/5 p-2 rounded">Solicitar la rectificación de datos inexactos.</li>
              <li className="bg-white/5 p-2 rounded">Solicitar el borrado ("Derecho al olvido").</li>
              <li className="bg-white/5 p-2 rounded">Oponerse al procesamiento automatizado (IA).</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Para ejercer estos derechos, contacte a nuestro Oficial de Protección de Datos (DPO) en: <span className="text-blue-400">privacy@yourstaffing.agency</span>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}

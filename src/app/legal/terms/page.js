import React from 'react';
import { Shield, Scale, AlertTriangle, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="border-b border-white/10 pb-8 mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Scale className="text-blue-500" /> Términos y Condiciones de Uso
          </h1>
          <p className="text-sm text-gray-500">Última actualización: 22 de Diciembre, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-sm md:text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Aceptación de los Términos</h2>
            <p>
              Bienvenido a <strong>YourStaffing Agency</strong> ("la Plataforma"). Al acceder, navegar o utilizar nuestro sitio web, usted ("el Usuario") acepta estar legalmente vinculado por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Descripción del Servicio y Uso de IA</h2>
            <p>
              YourStaffing Agency es una plataforma de intermediación laboral que utiliza algoritmos avanzados de Inteligencia Artificial para conectar talento con empresas.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Naturaleza de la IA:</strong> Usted reconoce que nuestros sistemas de emparejamiento, análisis de video y chatbots utilizan IA generativa y predictiva. Aunque nos esforzamos por la precisión, la IA puede cometer errores ("alucinaciones") o presentar sesgos inherentes.</li>
              <li><strong>No Garantía de Contratación:</strong> El uso de la plataforma no garantiza empleo ni contratación. Somos un facilitador, no un empleador directo (salvo que se especifique lo contrario en servicios de "Staffing" directo).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Cuentas y Seguridad</h2>
            <p>
              Usted es responsable de mantener la confidencialidad de sus credenciales. YourStaffing no será responsable de ninguna pérdida derivada del uso no autorizado de su cuenta. Nos reservamos el derecho de suspender cuentas que presenten actividad sospechosa, fraudulenta o que violen nuestras normas de comunidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Pagos, Reembolsos y Blockchain</h2>
            <p>
              Ciertos servicios (como "Sniper Bot", "Video Studio" o "Desbloqueo de Contactos") requieren pago.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong>Pagos Finales:</strong> Todas las compras son definitivas. Debido a la naturaleza digital de los servicios, no ofrecemos reembolsos una vez que el servicio ha sido consumido (ej: contacto desbloqueado), salvo error técnico demostrable.</li>
              <li><strong>Pagos en Criptomonedas:</strong> Las transacciones realizadas en Blockchain (ETH, BTC, USDC) son irreversibles por naturaleza. El usuario es responsable de verificar las direcciones de las billeteras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Propiedad Intelectual y Contenido de Usuario</h2>
            <p>
              Al subir su CV, video o foto, usted otorga a YourStaffing una licencia mundial, no exclusiva y libre de regalías para usar, procesar y analizar dicho contenido con el fin de prestar el servicio. Usted declara que posee los derechos de todo el material que sube.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitación de Responsabilidad</h2>
            <div className="bg-red-900/10 border border-red-500/20 p-4 rounded-lg text-red-200 text-sm">
              <AlertTriangle className="w-5 h-5 inline mb-1 mr-2" />
              <strong>CLÁUSULA IMPORTANTE:</strong> En la medida máxima permitida por la ley, YourStaffing Agency no será responsable de daños indirectos, incidentales o punitivos, incluyendo pérdida de beneficios o datos, derivados del uso de la plataforma o de la conducta de cualquier tercero (empresa o candidato) contactado a través del servicio.
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Ley Aplicable</h2>
            <p>
              Estos términos se regirán e interpretarán de acuerdo con las leyes del Estado de Delaware (EE.UU.), sin tener en cuenta sus conflictos de disposiciones legales, salvo que la legislación local del usuario exija otra jurisdicción obligatoria.
            </p>
          </section>

        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
          © 2025 YourStaffing Agency Inc. Documento Legal Oficial.
        </div>
      </div>
    </div>
  );
}

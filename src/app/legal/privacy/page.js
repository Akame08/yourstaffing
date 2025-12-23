export default function Privacy() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-green-500">Política de Privacidad</h1>
        <p className="text-gray-400">Tus datos están encriptados de extremo a extremo.</p>
        <div className="prose prose-invert text-gray-300">
          <p>En YourStaffing, la privacidad no es una opción, es un derecho. Utilizamos protocolos de seguridad de grado militar.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">1. Datos que recopilamos</h3>
          <p>Recopilamos nombre, email, historial laboral y datos biométricos (si usas el Video-CV) para mejorar el emparejamiento.</p>
          <h3 className="text-xl font-bold text-white mt-6 mb-2">2. Uso de IA</h3>
          <p>Nuestra IA analiza tu perfil para sugerirte empleos. No vendemos tus datos a terceros para publicidad.</p>
        </div>
      </div>
    </div>
  )
}

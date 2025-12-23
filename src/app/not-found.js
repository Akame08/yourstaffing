import Link from 'next/link'
import { AlertTriangle, ArrowLeft, Terminal } from 'lucide-react'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Fondo Matrix estático */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
        <div className="text-xs leading-3 break-words">
           010101010101 ERROR 404 SYSTEM FAILURE 010101010101 REBOOT SEQUENCE INITIATED 0101010101
           010101010101 ERROR 404 SYSTEM FAILURE 010101010101 REBOOT SEQUENCE INITIATED 0101010101
           010101010101 ERROR 404 SYSTEM FAILURE 010101010101 REBOOT SEQUENCE INITIATED 0101010101
           {/* (Repite visualmente) */}
        </div>
      </div>

      <div className="z-10 text-center space-y-8 max-w-lg border border-green-500/30 p-12 rounded-2xl bg-black/80 backdrop-blur-sm shadow-[0_0_50px_rgba(34,197,94,0.2)]">
        
        <div className="flex justify-center">
            <AlertTriangle className="w-20 h-20 animate-pulse text-red-500" />
        </div>

        <div>
            <h2 className="text-6xl font-bold mb-2 text-white">404</h2>
            <h1 className="text-xl text-red-500 font-bold tracking-widest uppercase">
              Anomalía Detectada
            </h1>
        </div>

        <div className="text-sm text-gray-400 border-l-2 border-green-500 pl-4 text-left font-mono bg-white/5 p-4 rounded">
          <p>> System.scan(url);</p>
          <p className="text-red-400">> Error: Coordinates not found.</p>
          <p>> Suggestion: Return to base.</p>
        </div>

        <Link href="/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
          <ArrowLeft className="w-5 h-5" /> REINICIAR SISTEMA
        </Link>
      </div>
    </div>
  )
}

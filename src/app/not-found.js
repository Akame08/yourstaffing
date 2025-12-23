import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-4">
      <div className="z-10 text-center space-y-8 max-w-lg border border-green-500/30 p-12 rounded-2xl bg-black">
        <div className="flex justify-center">
          <AlertTriangle className="w-20 h-20 text-red-500" />
        </div>
        <div>
          <h2 className="text-6xl font-bold mb-2 text-white">404</h2>
          <h1 className="text-xl text-red-500 font-bold uppercase">Anomalía Detectada</h1>
        </div>
        <div className="text-sm text-gray-400 border-l-2 border-green-500 pl-4 text-left font-mono p-4">
          <p>{'> System.scan(url);'}</p>
          <p className="text-red-400">{'> Error: Coordinates not found.'}</p>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 bg-green-600 text-black font-bold px-8 py-4 rounded-xl">
          <ArrowLeft className="w-5 h-5" /> REINICIAR SISTEMA
        </Link>
      </div>
    </div>
  );
}

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ShieldCheck, Zap, Briefcase, Users, Lock, Menu } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YourStaffing | La Red Neuronal de Talento",
  description: "Marketplace de Talento con IA Integrada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#050505] text-white selection:bg-blue-500`}>
        
        {/* BARRA DE NAVEGACIÓN GLOBAL (Sticky) */}
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              {/* LOGO */}
              <Link href="/" className="flex items-center group">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  YOURSTAFFING
                </span>
              </Link>

              {/* MENÚ CENTRAL (Desktop) */}
              <div className="hidden md:flex space-x-8">
                <NavLink href="/jobs" icon={<Briefcase className="w-4 h-4" />} text="Buscar Empleo" />
                <NavLink href="/talent" icon={<Users className="w-4 h-4" />} text="Talento Top" />
                <NavLink href="/services" icon={<ShieldCheck className="w-4 h-4" />} text="Servicios Agency" />
                <div className="flex items-center space-x-1 text-xs text-yellow-500 font-mono border border-yellow-500/30 px-2 py-1 rounded bg-yellow-500/10 cursor-pointer hover:bg-yellow-500/20">
                  <Lock className="w-3 h-3" />
                  <span>VIP ACCESS</span>
                </div>
              </div>

              {/* BOTONES DERECHA */}
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-sm text-gray-400 hover:text-white transition">
                  Log In
                </Link>
                <Link href="/post-job" className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  Publicar Oferta
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* CONTENIDO DE LAS PÁGINAS */}
        <div className="pt-20 min-h-screen">
          {children}
        </div>

        {/* FOOTER GLOBAL */}
        <footer className="border-t border-white/10 bg-black py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-500">
            <div>
              <h4 className="text-white font-bold mb-4">Plataforma</h4>
              <ul className="space-y-2">
                <li><Link href="/jobs" className="hover:text-blue-400">Ver Ofertas (Early Access)</Link></li>
                <li><Link href="/pricing" className="hover:text-blue-400">Precios Empresas</Link></li>
                <li><Link href="/verify" className="hover:text-blue-400">Verificar Skills (Exámenes)</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><Link href="/ghost-teams" className="hover:text-blue-400">Ghost Teams</Link></li>
                <li><Link href="/escrow" className="hover:text-blue-400">Freelance Escrow</Link></li>
                <li><Link href="/cv-booster" className="hover:text-blue-400">AI CV Booster</Link></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h4 className="text-white font-bold mb-4">Boletín VIP</h4>
              <p className="mb-4">Recibe ofertas ocultas en USD que no publicamos en la web.</p>
              <div className="flex">
                <input type="email" placeholder="tu@email.com" className="bg-gray-900 border border-gray-700 rounded-l-lg px-4 py-2 w-full text-white focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-600 text-white px-6 rounded-r-lg font-bold hover:bg-blue-700">Unirme ($9/mo)</button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-white/5">
            © 2025 YourStaffing Inc. Sistema Operativo de Talento Global.
          </div>
        </footer>

      </body>
    </html>
  );
}

// Componente auxiliar para links del menú
function NavLink({ href, icon, text }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
      {icon}
      <span>{text}</span>
    </Link>
  );
}

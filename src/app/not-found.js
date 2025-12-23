import Link from 'next/link';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
    return (
        <div className={`${inter.className} flex flex-col items-center justify-center min-h-screen bg-black text-white p-4`}>
            <h1 className="text-6xl font-bold mb-4 text-blue-500">404</h1>
            <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
            <p className="mb-8 text-gray-400">The sector you are exploring does not exist.</p>
            <Link
                href="/"
                className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded transition-all uppercase tracking-widest text-sm font-bold"
            >
                Return to Base
            </Link>
        </div>
    );
}

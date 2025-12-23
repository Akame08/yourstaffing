import "./globals.css";
import { Inter } from "next/font/google";
import Shell from "@/components/Shell"; // Importamos nuestro componente inteligente

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YourStaffing | Global Talent OS",
  description: "AI-Powered Recruitment Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white`}>
        {/* Envolvemos todo en el Shell */}
        <Shell>
          {children}
        </Shell>
      </body>
    </html>
  );
}

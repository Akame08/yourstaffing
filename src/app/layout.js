import "./globals.css";
import Shell from "@/components/Shell";

export const metadata = {
  title: "YourStaffing | Global Talent OS",
  description: "Neural Network for Global Talent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Soft Eletrônica",
  description: "Com uma visão clara e uma sólida experiência no setor de tecnologia eletrônica, a Soft Sistemas Eletrônicos foi fundada por um empreendedor que dedicou anos ao aprimoramento de suas habilidades em uma renomada empresa multinacional",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width, shrink-to-fit=no',
  minimumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

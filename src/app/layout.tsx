import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import GsapInit from "@/components/GsapInit";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INCI Brasil - Educação, Tecnologia e Experiências",
  description:
    "A INCI Brasil desenvolve soluções em educação, inovação, eventos, inteligência artificial e experiências corporativas para impulsionar empresas, profissionais e instituições.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${rethinkSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <GsapInit />
        <PageTransition />
        {children}
      </body>
    </html>
  );
}

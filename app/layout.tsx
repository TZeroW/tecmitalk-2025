import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TecmiTalk Campus San Nicolás',
  description: '29 de Abril del 2025',
  openGraph: {
    title: 'Feria del Empleo Tecmilenio',
    description: 'Registra tus datos para participar en nuestra rifa y ganar un premio',
    images: [{
      url: 'https://tecmitalk.bysmax.com/4.svg',
      width: 1200,
      height: 630,
      alt: 'Feria del Empleo Tecmilenio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feria del Empleo Tecmilenio',
    description: 'Registra tus datos para participar en nuestra rifa y ganar un premio',
    images: ['https://tecmitalk.bysmax.com/4.svg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Analytics />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
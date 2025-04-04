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
    title: 'TecmiTalk Campus San Nicolás',
    description: 'Registra tus datos para participar en nuestra rifa y ganar un premio',
    images: [{
      url: 'https://tecmitalk.bysmax.com/compratusboletos.png',
      width: 1200,
      height: 630,
      alt: 'TecmiTalk Campus San Nicolás',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TecmiTalk Campus San Nicolás',
    description: 'Registra tus datos para participar en nuestra rifa y ganar un premio',
    images: ['https://tecmitalk.bysmax.com/compratusboletos.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header/>
        <Analytics />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
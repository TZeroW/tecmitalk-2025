'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface EventTicketProps {
  price?: string;
  date?: string;
  time?: string;
  location?: string;
}

export default function EventTicket({
  price = 'VIP $200',
  date = '29 de Abril del 2025',
  time = '9:00 a.m. - 6:00 p.m.',
  location = 'Tecmilenio Campus San Nicolás'
}: EventTicketProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl group hover:shadow-3xl transition-shadow duration-300">
        <div className="bg-gradient-to-br from-[#004d40] to-[#00251a] p-6 md:p-8 flex-grow space-y-6">
          <div className="flex justify-between items-start">
            <h3 className="text-xs font-medium text-tecmitalk-accent/90 tracking-[0.15em]">#leadyourpath</h3>
            <div className="bg-gradient-to-r from-tecmitalk-accent to-emerald-400 rounded-full px-4 py-1 text-xs font-medium text-white">
              EARLY BIRD
            </div>
          </div>

          <div className="mb-8 transition-transform duration-300 group-hover:scale-95">
            <Image 
              src="/tecmitalk-logo.svg"
              className="w-full max-w-[280px] mx-auto opacity-90 hover:opacity-100 transition-opacity"
              alt="TECMITALK" 
              width={300} 
              height={80} 
              priority
            />
          </div>
        </div>
        
        <div className="bg-[#a5d6a7] w-full sm:w-1/4 p-3 sm:p-4 flex flex-col justify-between relative">
          <div>
            <div className="absolute top-2 right-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e91e63] flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-xs">VIP</span>
              </div>
            </div>
            <h3 className="text-[#004d40] font-bold text-lg sm:text-xl mt-8 sm:mt-10">{price}</h3>
          </div>
          
          <div className="mt-auto">
            {/* Barcode */}
            <div className="space-y-1">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-1 bg-[#004d40]" style={{ opacity: Math.random() * 0.5 + 0.5 }}></div>
              ))}
            </div>
          </div>
        </div>
      </Card>
      
      {/* Perforation */}
      <div className="hidden sm:flex absolute top-0 bottom-0 right-[25%] flex-col justify-between py-2">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
        ))}
      </div>
    </div>
  );
}
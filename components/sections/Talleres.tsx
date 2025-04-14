import React, { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

export default function Talleres() {
    const supabase = createClient()

    const [workshops, setWorkshops] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [openWorkshopId, setOpenWorkshopId] = useState<number | null>(null)
  
    const handleToggle = (id: number) => {
      setOpenWorkshopId(openWorkshopId === id ? null : id)
    }

    useEffect(() => {
      const fetchWorkshops = async () => {
        const { data, error } = await supabase
          .from('workshops')
          .select('*')
  
        if (error) {
          console.error('Error al obtener talleres:', error)
        } else {
          setWorkshops(data || [])
        }
  
        setLoading(false)
      }
  
      fetchWorkshops()
    }, [])
  
    return (
    <section id="talleres" className="py-24 bg-gradient-to-b from-[#0D063A] to-[#14095D]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 space-y-4">
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          Nuestros <span className="text-tecmitalk-accent">talleres</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {workshops.map((workshop) => (
          <div
            key={workshop.id}
            className={`relative overflow-hidden rounded-2xl group transition-all duration-500 bg-white/5 backdrop-blur-lg border ${openWorkshopId === workshop.id ? "border-[#2DDC2F] scale-105 shadow-2xl shadow-tecmitalk-accent/20" : "border-white/10"} hover:border-[#2DDC2F] hover:scale-[1.02] hover:shadow-lg hover:shadow-tecmitalk-accent/10 transform`}
          >
            <div className="p-6 space-y-4 relative">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-tecmitalk-accent transition-colors">
                  {workshop.name}
                </h4>
                <Badge 
                  className="bg-tecmitalk-accent/20 text-tecmitalk-accent border-tecmitalk-accent/30 hover:bg-tecmitalk-accent/30"
                >
                  {workshop.capacity - workshop.current_attendees} lugares
                </Badge>
              </div>
              <p className="text-white/80 text-sm flex items-center gap-2">
                <span className="text-tecmitalk-accent">Imparte:</span> {workshop.leadear_worshop || "Por confirmar"}
              </p>

              <div 
                onClick={(e) => {
                  e.preventDefault()
                  handleToggle(workshop.id)
                }}
                className="text-white/80 text-sm mt-4 cursor-pointer group/details"
              >
                <div className="cursor-pointer text-tecmitalk-accent hover:text-tecmitalk-accent/80 transition-colors flex items-center bg-white/5 p-2 rounded-lg border border-white/10 hover:border-tecmitalk-accent/30 mt-2">
                  <span>Ver más detalles</span>
                  <svg
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${openWorkshopId === workshop.id ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className={`mt-4 transition-all duration-500 ease-in-out ${openWorkshopId === workshop.id ? 'opacity-100 translate-y-0 max-h-[500px]' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'}`}>
                  <p className="mt-2 text-white/90 bg-white/5 p-4 rounded-lg border border-white/10">{workshop.description_workshop || "Sin descripción disponible."}</p>
                  <div className="mt-6 space-y-3 bg-gradient-to-r from-[#14095D]/80 to-[#0D063A]/80 p-4 rounded-lg border border-tecmitalk-accent/30 backdrop-blur-md shadow-lg">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <span className="text-tecmitalk-accent font-bold text-lg block animate-pulse flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            ¡Solo quedan {Math.max(0, workshop.capacity - workshop.current_attendees)} lugares!
                          </span>
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#14095D] border border-tecmitalk-accent/50 text-white">
                          Cupo limitado, ¡reserva ahora!
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <span className="text-white/80 text-sm block">
                      ¡No te pierdas la oportunidad de ser parte de este taller exclusivo!
                    </span>
                    <Link
                      href="/tickets"
                      className="inline-block w-full text-center mt-2 text-sm bg-tecmitalk-accent hover:bg-tecmitalk-accent/90 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-tecmitalk-accent/30 font-medium flex items-center justify-center gap-2 group"
                    >
                      <span>Reserva tu lugar ahora</span>
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

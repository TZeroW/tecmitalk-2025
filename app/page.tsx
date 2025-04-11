'use client'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import AdminButton from '@/components/AdminButton'
import EventTicket from '@/components/EventTicket'
import TicketsCarousel from '@/components/TicketsCarousel'
import { createClient } from '@/lib/supabase/client';

export default function Home() {
  const supabase = createClient()

  const [workshops, setWorkshops] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [openWorkshopId, setOpenWorkshopId] = useState<number | null>(null)

  const handleToggle = (id: number) => {
    setOpenWorkshopId(openWorkshopId === id ? null : id)
  }
  const speakers = [
    { id: 1, name: "Rocío Turner", image: "rocio.jpg" },
    { id: 2, name: "Adrían Garza", image: "1.svg" },
    { id: 3, name: "Karla Morales", image: "2.svg" },
    { id: 4, name: "Ana Delia García", image: "3.svg" },
    { id: 5, name: "Melany Garza", image: "melanie.jpg" }
  ]

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
    <div className="min-h-screen flex flex-col bg-[#14095D] bg-opacity-95">
      {/* Hero Section */}
      <div className="flex-grow">
        <div className="max-w-7xl w-full mx-auto py-32 px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-6">
                <h2 className="text-sm font-medium text-tecmitalk-accent mb-4 tracking-[0.2em]">#LEADYOURPATH</h2>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.15] tracking-tight">
                  TecmiTalk 2025
                  <span className="bg-gradient-to-r from-tecmitalk-accent to-emerald-400 bg-clip-text text-transparent block">Inspirar, aprender y conectar </span>
                </h1>
              </div>

              <p className="text-xl text-gray-200/90 leading-relaxed max-w-2xl">
                Un espacio diseñado para inspirar, aprender y conectar con personas que buscan generar un impacto en sus industrias y en la sociedad.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="inline-flex items-center border border-white/20 rounded-xl px-5 py-3 text-white/90 backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  29 de Abril del 2025
                </div>
                <div className="inline-flex items-center border border-white/20 rounded-xl px-5 py-3 text-white/90 backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                 Visita Empresarial 30
                </div>
                <div className="inline-flex items-center border border-white/30 rounded-full px-4 py-2 text-white/90 backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9:00 a.m. - 6:00 p.m.
                </div>
                <div className="inline-flex items-center border border-white/30 rounded-full px-4 py-2 text-white/90 backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tecmilenio San Nicolás
                </div>
              </div>
            </div>
            <div className="w-full lg:max-w-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-out">
          <div className="relative w-full" style={{ aspectRatio: '16/7.2' }}> 
            <Image
              src="/boleto_priority.svg"
              alt="boleto_priority"
              layout="fill"  
              objectFit="cover"
              objectPosition="left"   
              className="w-full h-auto"
            />
          </div>
        </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <section className="bg-white/5 py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 space-y-5">
              <h3 className="text-4xl md:text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-white to-tecmitalk-accent">
                Razones para participar
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 hover:border-tecmitalk-accent/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-tecmitalk-accent text-4xl font-bold mb-6">01</div>
                <h4 className="text-2xl font-semibold text-white mb-4">Inspiración de Expertos</h4>
                <p className="text-gray-300/80 leading-relaxed">
                  Escucha a líderes de la innovación y el emprendimiento compartir sus experiencias, estrategias y consejos para impulsar tu crecimiento personal y profesional.
                </p>
              </div>

              <div className="group bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 hover:border-tecmitalk-accent/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-tecmitalk-accent text-4xl font-bold mb-4">02</div>
                <h4 className="text-xl font-bold text-white mb-3">Networking de Alto Nivel</h4>
                <p className="text-gray-200">Conéctate con emprendedores, inversionistas y profesionales de diversas industrias. Amplía tu red de contactos y encuentra nuevas oportunidades de colaboración.</p>
              </div>

              <div className="group bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 hover:border-tecmitalk-accent/30 transition-all duration-300 hover:-translate-y-2">
                <div className="text-tecmitalk-accent text-4xl font-bold mb-4">03</div>
                <h4 className="text-xl font-bold text-white mb-3">Aprendizaje Práctico</h4>
                <p className="text-gray-200">Talleres, paneles y charlas con contenido valioso que podrás aplicar de inmediato en tus proyectos y en tu desarrollo personal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="py-24 bg-gradient-to-b from-[#14095D] to-[#0D063A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                Nuestros <span className="text-tecmitalk-accent">ponentes</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="relative overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={`/${speaker.image}`}
                      alt={speaker.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 bg-white/5 backdrop-blur-lg border-t border-white/10">
                    <h4 className="text-xl font-semibold text-white">{speaker.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Workshops Section */}
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
                  className={`relative overflow-hidden rounded-2xl group transition-all duration-500 bg-white/5 backdrop-blur-lg border ${
                    openWorkshopId === workshop.id ? "border-[#2DDC2F] scale-105 shadow-2xl shadow-tecmitalk-accent/20" : "border-white/10"
                  } hover:border-[#2DDC2F]`}
                >
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-white">
                      {workshop.name}
                    </h4>
                    <p className="text-white/80 text-sm">
                      Imparte: {workshop.leadear_worshop || "Por confirmar"}
                    </p>

                    <details
                      open={openWorkshopId === workshop.id}
                      onClick={(e) => {
                        e.preventDefault()
                        handleToggle(workshop.id)
                      }}
                      className="text-white/80 text-sm mt-4 cursor-pointer group/details"
                    >
                      <summary className="cursor-pointer text-tecmitalk-accent hover:text-tecmitalk-accent/80 transition-colors flex items-center">
                        <span>Ver más detalles</span>
                        <svg 
                          className={`w-4 h-4 ml-2 transition-transform duration-300 ${openWorkshopId === workshop.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className={`mt-4 transition-all duration-500 ease-in-out ${
                        openWorkshopId === workshop.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                      }`}>
                        <p className="mt-2 text-white/90">{workshop.description_workshop || "Sin descripción disponible."}</p>
                        <div className="mt-6 space-y-3 bg-white/5 p-4 rounded-lg border border-tecmitalk-accent/20">
                          <span className="text-tecmitalk-accent font-bold text-lg block animate-pulse">
                            ¡Solo quedan {Math.max(0, workshop.capacity - workshop.current_attendees)} lugares!
                          </span>
                          <span className="text-white/80 text-sm block">
                            ¡No te pierdas la oportunidad de ser parte de este taller exclusivo!
                          </span>
                          <Link 
                            href="/tickets" 
                            className="inline-block w-full text-center mt-2 text-sm bg-tecmitalk-accent hover:bg-tecmitalk-accent/90 text-white px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                          >
                            Reserva tu lugar ahora →
                          </Link>
                        </div>
                      </div>
                    </details>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        </section>

        {/* Tickets Section */}
        <section id="tickets" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-tecmitalk-accent text-sm font-medium tracking-widest mb-4">ENTRADAS</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Obtén tu ticket ahora</h3>
            </div>

            <div className="mt-16">
              <TicketsCarousel />
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/tickets"
                className="inline-block bg-tecmitalk-accent hover:bg-tecmitalk-accent/90 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Obtener tickets
              </Link>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="bg-white/10 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-tecmitalk-accent text-sm font-medium tracking-widest mb-4">UBICACIÓN</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Tecmilenio Campus San Nicolás</h3>
                <p className="text-gray-200 text-lg mb-6">
                  Iztaccihuatl 431, Las Puentes 3er Sector, 66460 San Nicolás de los Garza, N.L.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-tecmitalk-accent mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Cómo llegar</h4>
                      <p className="text-gray-300">El campus cuenta con estacionamiento gratuito. También es accesible mediante transporte público (rutas: 001, 217, TME, 207, L02 del Metrorrey, Rufino Tamayo, Camino Al Milagro, Benito Juárez, Eloy Cavazos, Gonzalitos).</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-tecmitalk-accent mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <h4 className="text-white font-medium">Contacto</h4>
                      <p className="text-gray-300">Para preguntas sobre el evento: 
                        <a 
                          href="https://wa.me/5218180861794" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-tecmitalk-accent hover:underline ml-1"
                        >
                          Contactar por WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.210318477921!2d-100.2853909!3d25.743988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866294ea743f4987%3A0x1c359940df5d881f!2sTecmilenio%20San%20Nicol%C3%A1s!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="filter grayscale-50 contrast-125"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import AdminButton from '@/components/AdminButton';
import EventTicket from '@/components/EventTicket';
import TicketsCarousel from '@/components/TicketsCarousel';

export default function Home() {
  const speakers = [
    {
      id: 1,
      name: "Adrían Garza",
      image: "1.svg"
    },
    {
      id: 2,
      name: "Karla Morales",
      image: "2.svg"
    },
    {
      id: 3,
      name: "Ana Delia García",
      image: "3.svg"
    }
  ];

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
                  El evento tecnológico
                  <span className="bg-gradient-to-r from-tecmitalk-accent to-emerald-400 bg-clip-text text-transparent"> más importante del año</span>
                </h1>
              </div>

              <p className="text-xl text-gray-200/90 leading-relaxed max-w-2xl">
                Descubre las tendencias que están transformando la industria a través de experiencias inmersivas y networking de calidad.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Info Badges - Updated styling */}
                <div className="inline-flex items-center border border-white/20 rounded-xl px-5 py-3 text-white/90 backdrop-blur-sm hover:bg-white/5 transition-colors">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  29 de Abril del 2025
                </div>
                <div className="inline-flex items-center border border-white/30 rounded-full px-4 py-2 text-white text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  9:00 a.m. - 6:00 p.m.
                </div>
                <div className="inline-flex items-center border border-white/30 rounded-full px-4 py-2 text-white text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tecmilenio Campus San Nicolás
                </div>
              </div>
            </div>

            <div className="w-full lg:max-w-2xl transform hover:scale-[1.02] transition-transform duration-300 ease-out">
              <EventTicket />
            </div>
          </div>
        </div>

        {/* Why Attend Section - Modernized */}
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
                <h4 className="text-2xl font-semibold text-white mb-4">Expertos globales</h4>
                <p className="text-gray-300/80 leading-relaxed">
                  Accede a conocimiento de líderes internacionales en IA, blockchain y transformación digital.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tecmitalk-accent transition">
                <div className="text-tecmitalk-accent text-4xl font-bold mb-4">02</div>
                <h4 className="text-xl font-bold text-white mb-3">Networking valioso</h4>
                <p className="text-gray-200">Conecta con profesionales, reclutadores y colegas que comparten tus intereses y pasiones.</p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tecmitalk-accent transition">
                <div className="text-tecmitalk-accent text-4xl font-bold mb-4">03</div>
                <h4 className="text-xl font-bold text-white mb-3">Tendencias actuales</h4>
                <p className="text-gray-200">Mantente al día con las últimas tecnologías, herramientas y metodologías que están transformando el sector.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers Section - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-[#14095D] to-[#0D063A]">
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
                      src={speaker.image}
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
              <Button className="bg-tecmitalk-accent hover:bg-tecmitalk-accent/90 text-white px-8 py-4 text-lg">
                Obtener tickets
              </Button>
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
                      <p className="text-gray-300">Para preguntas sobre el evento: <a href="mailto:tecmitalk@tecmilenio.mx" className="text-tecmitalk-accent hover:underline">tecmitalk@tecmilenio.mx</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/place/Tecmilenio+San+Nicolás/@25.743988,-100.2853909,17z/data=!3m1!4b1!4m6!3m5!1s0x866294ea743f4987:0x1c359940df5d881f!8m2!3d25.743988!4d-100.282816!16s%2Fg%2F1trvlw4k?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D"
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
  );
}
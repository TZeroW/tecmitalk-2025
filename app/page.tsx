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
    <div className="min-h-screen flex flex-col bg-tecmitalk-green">
       {/* Hero Section */}
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-sm font-medium text-tecmitalk-accent mb-2 tracking-widest">#LEADYOURPATH</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  El evento tecnológico <br/>más importante del año
                </h1>
              </div>
              
              <p className="text-xl text-gray-100 mb-8 max-w-lg">
                Conoce las últimas tendencias tecnológicas de la mano de expertos y networking con profesionales del sector.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="inline-flex items-center border border-white/30 rounded-full px-4 py-2 text-white text-sm">
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
            
            <div className="flex justify-center">
              <div className="w-full max-w-md transform hover:scale-105 transition duration-500">
                <EventTicket />
              </div>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <section id="why-attend" className="bg-white/10 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-tecmitalk-accent text-sm font-medium tracking-widest mb-4">¿POR QUÉ ASISTIR?</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white">Razones para no perdértelo</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 hover:border-tecmitalk-accent transition">
                <div className="text-tecmitalk-accent text-4xl font-bold mb-4">01</div>
                <h4 className="text-xl font-bold text-white mb-3">Expertos de clase mundial</h4>
                <p className="text-gray-200">Aprende de los líderes y pioneros en tecnología que están dando forma al futuro de la industria.</p>
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

        {/* Speakers Section */}
        <section id="speakers" className="py-20 bg-[#14095D]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-tecmitalk-accent text-sm font-medium tracking-widest mb-4">PONENTES</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Conoce a nuestros expertos</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Los líderes de la industria que compartirán su conocimiento y experiencia contigo.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="group relative bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-tecmitalk-accent transition duration-500">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white text-center">{speaker.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-tecmitalk-accent text-tecmitalk-accent hover:bg-tecmitalk-accent/10 px-8 py-4 text-lg">
                Ver todos los ponentes
              </Button>
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                  style={{border:0}} 
                  allowFullScreen 
                  loading="lazy"
                  className="filter grayscale-50 contrast-125"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <AdminButton />
        </div>
      </div>
    </div>
  );
}
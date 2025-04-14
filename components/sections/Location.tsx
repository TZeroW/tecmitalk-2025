import React from 'react'

export default function Location() {
    return (
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
                                        <a href="https://wa.me/5218180861794"
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
    )
}

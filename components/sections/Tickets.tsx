import React from 'react'
import TicketsCarousel from '../TicketsCarousel'
import Link from 'next/link'

export default function Tickets() {
  return (
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
  )
}

import Image from 'next/image'
import React from 'react'

export default function Ponentes() {

    const speakers = [
        {
          id: 1,
          name: "Rocío Turner",
          image: "rocio.jpg",
          description: "Creadora de contenido y host de Date Cuenta Podcast. Con 1.3M de seguidores en TikTok, usa el humor para hablar de salud mental y romper estigmas. 💬🧠"
        },
        {
          id: 2,
          name: "Adrían Garza",
          image: "1.svg",
          description: "Conocido como Mr. Hillman, emprendedor regiomontano fundador de Hillman Eyewear. Su marca es líder en Latinoamérica gracias a estrategias innovadoras de marketing. 🔥"
        },
        {
          id: 3,
          name: "Karla Morales",
          image: "2.svg",
          description: "Nutrióloga especializada en TCA y Psicología de la Alimentación. Influencer con +900k seguidores, transformando la manera de entender la nutrición. 💚"
        },
        {
          id: 4,
          name: "Ana Delia García",
          image: "3.svg",
          description: "Experta en humanidades, género y cultura con 25 años de experiencia académica. Líder en políticas públicas con perspectiva de género. 🎓"
        },
        {
          id: 5,
          name: "Javier Muñoz",
          image: "javier.jpg",
          description: "Creador de contenido fitness que inspira a miles. Colaborador de Gymshark y YoungLA, compartiendo su transformación física y personal. 💪"
        },
        {
          id: 6,
          name: "Melany Garza",
          image: "melanie.jpg",
          description: "Comunicóloga y locutora con 10+ años transformando medios. Conductora en Amor 90.9 FM y voz de grandes marcas como Netflix y HBO MAX. 🎙️"
        }
      ]
  return (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <p className="text-white text-center mb-16">{speaker.description}</p>
              </div>
            </div>
            <div className="p-6 bg-white/5 backdrop-blur-lg border-t border-white/10">
              <h4 className="text-xl font-semibold text-white">{speaker.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

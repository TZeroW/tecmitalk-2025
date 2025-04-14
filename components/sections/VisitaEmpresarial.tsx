import React from 'react'
import Image from 'next/image'

export default function VisitaEmpresarial() {
  const empresas = [
    {
      id: 1,
      name: "Bimbo",
      image: "/bimbo.jpg",
      description: "Líder mundial en la industria de panificación, con presencia en más de 33 países. Conoce su innovador modelo de producción y distribución que ha revolucionado la industria alimenticia a nivel global."
    },
    {
        id: 3,
        name: "Brands&People",
        image: "/brands.jpg",
        description: "Agencia creativa especializada en branding y estrategia de marca que ha trabajado con empresas de renombre internacional. Conoce su enfoque innovador para crear identidades de marca memorables y efectivas."
    },
    {
      id: 2,
      name: "Fastenal",
      image: "/fastenal.jpg",
      description: "Empresa líder en distribución industrial y construcción, especializada en suministros de fijación y herramientas. Descubre cómo su modelo de negocio ha transformado la cadena de suministro industrial."
    },
  ]

  return (
    <section id="visita-empresarial" className="py-24 bg-gradient-to-b from-[#14095D] to-[#0D063A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-4xl md:text-5xl font-bold text-white">
            Visita <span className="text-tecmitalk-accent">Empresarial</span>
          </h3>
          <p className="text-xl text-gray-200/90 max-w-3xl mx-auto">
            Conoce de cerca las operaciones de empresas líderes en sus industrias y amplía tu visión del mundo empresarial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {empresas.map((empresa) => (
            <div key={empresa.id} className="relative overflow-hidden rounded-2xl group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-tecmitalk-accent/30">
                <div className="flex items-center justify-center h-full">
                  <div className="relative w-full h-full aspect-square">
                    <Image
                      src={empresa.image}
                      alt={empresa.name}
                      layout="fill"
                      objectFit="contain"
                      className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <p className="text-white text-center mb-8">{empresa.description}</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-lg border-t border-white/10">
                <h4 className="text-xl font-semibold text-white">{empresa.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
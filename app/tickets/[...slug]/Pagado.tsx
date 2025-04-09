import { Order, OrderItem } from '@/app/types'
import Link from 'next/link'
import React from 'react'

export default function Pagado({ order, orderItems }: { order: Order, orderItems: OrderItem[] }) {
  return (
    <div className="min-h-screen bg-[#14095D] py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto h-64 flex rounded-lg overflow-hidden shadow-lg">
          <div className="w-full bg-[#0a4a3c] relative p-5 mx-auto">
            <div className="absolute top-5 right-16 text-[#8cd9a0] font-bold">#leadyourpath</div>

            <h1 className="text-[#8cd9a0] text-6xl font-bold mt-8 tracking-wider">TECMITALK</h1>

            <div className="flex mt-8 space-x-4">
              <div className="bg-opacity-10 bg-white border border-white border-opacity-30 rounded-full px-4 py-1 text-white text-sm">
                29 de Abril del 2025
              </div>
              <div className="bg-opacity-10 bg-white border border-white border-opacity-30 rounded-full px-4 py-1 text-white text-sm">
                9:00 a.m. - 6:00 p.m.
              </div>
              <div className="bg-opacity-10 bg-white border border-white border-opacity-30 rounded-full px-4 py-1 text-white text-sm">
                Tecmilenio Campus San Nicolás
              </div>
            </div>

            <div className="flex justify-between mt-10">
              <div className="text-white font-bold">FETECMI</div>
              <div className="text-white font-bold">TECMILENIO</div>
              <div className="text-white font-bold">VIVE Grupo Estudiantil</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-light-green">
              <div className="absolute top-0 bottom-0 left-0 w-full">
                <div className="flex flex-col h-full">
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                  <div className="h-2 bg-[#0a4a3c]"></div>
                  <div className="h-2 bg-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-1/4 bg-light-green relative p-4">
            <div className="text-[#0a4a3c] font-bold text-sm absolute top-7 right-14">PRIORITY $250</div>
            <div className="w-8 h-8 rounded-full bg-[#8cd9a0] absolute top-5 right-5"></div>

            <div className="mt-16 w-full h-32 relative">
              <div className="flex justify-between h-full">
                <div className="w-1 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-0.5 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-2 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-1 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-0.5 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-1 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-2 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-0.5 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-1 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-0.5 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-1 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-2 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-0.5 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-1 bg-[#0a4a3c] mx-0.5"></div>
                <div className="w-0.5 bg-[#0a4a3c] mx-0.5"></div>
              </div>
            </div>
          </div> */}
        </div>
      <div className="max-w-2xl mx-auto bg-white/5 rounded-xl border border-tecmitalk-accent/30 p-6 md:p-8">
        <Link href="/" className="inline-flex items-center text-tecmitalk-accent hover:text-tecmitalk-accent/80 mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8 text-center">Detalles de tu Orden</h1>

        {order && (
          <div className="space-y-8">
            {/* Información de la orden */}
            <div className="bg-blue-900/10 border border-blue-400/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Información de la Orden</h2>

              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Número de orden:</span>
                  <span className="text-white font-mono">#{order.id}</span>
                </div>

                <div className="flex justify-between">
                  <span>Fecha:</span>
                  <span className="text-white">{new Date(order.created_at).toLocaleDateString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Estado de pago:</span>
                  <span className={`capitalize ${order.paid ? 'text-green-400' : 'text-yellow-400'}`}>
                    Pagado
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Método de pago:</span>
                  <span className="text-white capitalize">{order.payment_method.replace('_', ' ')}</span>
                </div>

                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="text-white font-bold">${order.total_amount.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Información del cliente */}
            <div className="bg-blue-900/10 border border-blue-400/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Información del Cliente</h2>

              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between">
                  <span>Nombre:</span>
                  <span className="text-white">{order.customer_name}</span>
                </div>

                <div className="flex justify-between">
                  <span>Correo electrónico:</span>
                  <span className="text-white">{order.customer_email}</span>
                </div>

                <div className="flex justify-between">
                  <span>Teléfono:</span>
                  <span className="text-white">{order.customer_phone}</span>
                </div>
              </div>
            </div>

            {/* Detalles de los tickets */}
            <div className="bg-blue-900/10 border border-blue-400/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Detalles de los Tickets</h2>

              <div className="space-y-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="border-b border-blue-400/10 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{item.tickets?.name || 'Ticket'}</span>
                      <span className="text-white">{item.quantity}x ${item.unit_price.toFixed(2)}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.tickets?.description || ''}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-300">Subtotal:</span>
                      <span className="text-white">${(item.quantity * item.unit_price).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instrucciones de pago */}
            <div className="bg-blue-900/10 border border-blue-400/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Instrucciones de Pago</h2>

              <div className="space-y-4 text-gray-300">
                {order.payment_method === 'transferencia' && (
                  <div className="space-y-2">
                    <p>Para completar tu compra, realiza una transferencia con los siguientes datos:</p>
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <p><span className="font-medium">Banco:</span> BBVA</p>
                      <p><span className="font-medium">Titular:</span> TECMITALK A.C.</p>
                      <p><span className="font-medium">CLABE:</span> 012580015678901234</p>
                      <p><span className="font-medium">Concepto:</span> Orden #{order.id}</p>
                    </div>
                    <p className="text-sm">Una vez realizada la transferencia, envía el comprobante por WhatsApp.</p>
                  </div>
                )}

                {order.payment_method === 'efectivo' && (
                  <div className="space-y-2">
                    <p>Para completar tu compra en efectivo:</p>
                    <div className="bg-blue-900/30 p-4 rounded-lg">
                      <p>Acude a nuestras oficinas ubicadas en:</p>
                      <p className="font-medium">Av. Universidad 123, Col. Centro</p>
                      <p>Horario: Lunes a Viernes de 9:00 AM a 5:00 PM</p>
                      <p>Menciona tu número de orden: #{order.id}</p>
                    </div>
                  </div>
                )}

                <p className="mt-4">
                  Para cualquier duda,{' '}
                  <a
                    href="https://wa.me/5218180861794"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tecmitalk-accent hover:underline"
                  >
                    contáctanos por WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import { Order, OrderItem } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import QRCode from 'react-qr-code'

export default function Pagado({ order, orderItems }: { order: Order, orderItems: OrderItem[] }) {
  return (
    <div className="min-h-screen bg-[#14095D] py-12 px-4 sm:px-6 lg:px-8">


      <div className="max-w-2xl mx-auto bg-white/5 rounded-xl border border-tecmitalk-accent/30 p-6 md:p-8">
        <Link href="/" className="inline-flex items-center text-tecmitalk-accent hover:text-tecmitalk-accent/80 mb-6">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-white mb-8 text-center">Detalles de tu Orden</h1>
        {
          !order.paid ? (
            <div className='py-20 text-center w-full '>
              <p className='text-white'>Estamos generando tu boleto</p>
            </div>
          ) :
            (
              <div>
                <Image
                  src="/boleto_priority.svg"
                  alt="boleto_priority"
                  className="w-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
            )
        }



        {order && (
          <div className="space-y-8 mt-8">
            {/* Información de la orden */}
            <div className="bg-blue-900/10 border border-blue-400/20 rounded-lg p-6 flex justify-center items-center">
              <div className="text-gray-300">
                <QRCode value={`https://tecmitalk.bysmax.com/tickets/${order.id}`} size={128} />
              </div>
            </div>

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
                    {order.paid ? 'Pagado' : 'Pendiente'}
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
                      <div className="flex items-center gap-2">
                        <p><span className="font-medium">CLABE:</span> 012580015678901234</p>
                        <button
                          onClick={() => navigator.clipboard.writeText('012580015678901234')}
                          className="px-2 py-1 text-sm bg-tecmitalk-accent/20 hover:bg-tecmitalk-accent/30 rounded-md transition-colors"
                        >
                          Copiar
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <p><span className="font-medium">Concepto:</span> Orden #{order.id}</p>
                        <button
                          onClick={() => navigator.clipboard.writeText(`${order.id}`)}
                          className="px-2 py-1 text-sm bg-tecmitalk-accent/20 hover:bg-tecmitalk-accent/30 rounded-md transition-colors"
                        >
                          Copiar
                        </button>
                      </div>
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

'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  
  // Obtener parámetros de la URL
  const orderId = searchParams.get('order_id');
  const amount = searchParams.get('amount');
  const tickets = searchParams.get('tickets');
  const ticketName = searchParams.get('ticket_name');
  const paymentMethod = searchParams.get('payment_method');

  // Validar que existan los parámetros requeridos
  if (!orderId || !amount || !tickets || !ticketName || !paymentMethod) {
    return (
      <div className="min-h-screen bg-[#14095D] flex items-center justify-center p-4">
        <div className="bg-white/5 border border-red-500/30 rounded-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error en la confirmación</h1>
          <p className="text-gray-300 mb-6">
            No se recibieron todos los datos necesarios para mostrar la confirmación.
          </p>
          <Link href="/tickets">
            <Button className="w-full py-3 bg-tecmitalk-accent hover:bg-tecmitalk-accent/90">
              Volver a la página de tickets
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#14095D] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white/5 rounded-xl border border-tecmitalk-accent/30 p-6 md:p-8">
        <div className="text-center mb-8">
          {/* Ícono de checkmark */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 mb-4">
            <svg 
              className="h-10 w-10 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2">¡Compra Exitosa!</h1>
          <p className="text-gray-300">Hemos recibido tu pedido correctamente</p>
        </div>

        {/* Resumen de la compra */}
        <div className="bg-blue-900/10 border border-blue-400/20 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Resumen de tu orden</h2>
          
          <div className="space-y-4 text-gray-300">
            <div className="flex justify-between">
              <span>Número de orden:</span>
              <span className="text-white font-mono">#{orderId}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Producto:</span>
              <span className="text-white">{tickets} × {ticketName}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Total:</span>
              <span className="text-white font-bold">${parseFloat(amount).toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Método de pago:</span>
              <span className="text-white capitalize">{paymentMethod.replace('_', ' ')}</span>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-center text-gray-400 mb-8">
          <p className="mb-2">
            Hemos enviado los detalles de tu compra al correo electrónico proporcionado.
          </p>
          <p>
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

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/tickets" className="flex-1">
            <Button variant="outline" className="w-full py-3">
              Comprar más tickets
            </Button>
          </Link>
          
          <Link href="/" className="flex-1">
            <Button className="w-full py-3 bg-tecmitalk-accent hover:bg-tecmitalk-accent/90">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
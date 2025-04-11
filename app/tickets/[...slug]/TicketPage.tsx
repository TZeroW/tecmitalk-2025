"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Order, OrderItem } from "@/app/types"
import Pagado from "./Pagado"

export default function TicketClientPage() {
  const params = useParams()
  const [order, setOrder] = useState<Order | null>(null)
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!params.slug || !params.slug[0]) {
        setError("ID de orden no proporcionado")
        setLoading(false)
        return
      }

      const orderId = params.slug[0]
      const supabase = createClient()

      try {
        // Consultar la orden
        const { data: orderData, error: orderError } = await supabase
          .from("orders")
          .select("*")
          .eq("id", orderId)
          .single()

        if (orderError) throw orderError
        if (!orderData) throw new Error("Orden no encontrada")

        setOrder(orderData)

        // Consultar los items de la orden con información del ticket
        const { data: itemsData, error: itemsError } = await supabase
          .from("order_items")
          .select(`
            *,
            tickets:ticket_id (name, description)
          `)
          .eq("order_id", orderId)

        if (itemsError) throw itemsError
        setOrderItems(itemsData || [])
      } catch (err: any) {
        console.error("Error al cargar detalles de la orden:", err)
        setError(err.message || "Error al cargar los detalles de la orden")
      } finally {
        setLoading(false)
      }
    }

    fetchOrderDetails()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#14095D] text-white flex items-center justify-center p-4">
        <div className="text-center py-12">
          <div className="inline-flex items-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Cargando detalles de tu ticket...
          </div>
        </div>
      </div>
    )
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-[#14095D] flex items-center justify-center p-4">
        <div className="bg-white/5 border border-red-500/30 rounded-xl p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Error</h1>
          <p className="text-gray-300 mb-6">{error}</p>
          <Link href="/tickets">
            <Button className="w-full py-3 bg-tecmitalk-accent hover:bg-tecmitalk-accent/90 ">
              Volver a la página de tickets
            </Button>
          </Link>
        </div>
      </div>
    )
  }
  if (!order) {
    return <div>No se encotro la orden</div>
  }
  return <Pagado order={order} orderItems={orderItems} />
}

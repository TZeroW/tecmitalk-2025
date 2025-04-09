import { createClient } from "@/lib/supabase/client"
import TicketClientPage from "./TicketPage"

// This function is required for static exports with dynamic routes
export async function generateStaticParams() {
  // If you know the specific ticket IDs that should be pre-rendered:
  const supabase = createClient()
  const { data } = await supabase.from("orders").select("id")
  return data?.map((order) => ({ slug: [order.id] })) || []

  // If you don't know the IDs or want to render them on-demand:
  // return [];
}

export default function TicketPage() {
  return <TicketClientPage />
}

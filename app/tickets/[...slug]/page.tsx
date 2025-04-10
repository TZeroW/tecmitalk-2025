import { createClient } from "@/lib/supabase/client"
import TicketClientPage from "./TicketPage"

// This function is required for static exports with dynamic routes

export default function TicketPage() {
  return <TicketClientPage />
}

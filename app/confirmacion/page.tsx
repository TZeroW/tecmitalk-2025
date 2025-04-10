import { Suspense } from "react"
import ConfirmationContent from "./confirmation-content"

export default function ConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#14095D] flex items-center justify-center p-4">
          <div className="bg-white/5 border border-white/30 rounded-xl p-8 max-w-md w-full text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Cargando confirmación...</h1>
          </div>
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  )
}

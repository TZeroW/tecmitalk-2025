'use client'
import React, { useState } from "react"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import Image from "next/image";

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const supabase = createClient()
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) throw error
            toast.success('Inicio de sesión exitoso')
            router.push('/admin')

        } catch (error) {
            toast.error('Error al iniciar sesión')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="h-screen flex flex-col md:flex-row items-center justify-center p-4 bg-gradient-to-br from-[#14095D] to-[#0D063A]">
            <div className="lg:w-1/2 hidden lg:flex flex-col items-center justify-center p-8 space-y-6">
                <div className="relative w-full max-w-xl group">
                    <Image
                        src="/feria.jpg"
                        alt="Feria de Empleo"
                        width={600}
                        height={600}
                        className="rounded-2xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
                </div>
                <h1 className="text-4xl font-bold text-white text-center leading-snug">
                    <span className="bg-gradient-to-r from-tecmitalk-accent to-emerald-400 bg-clip-text text-transparent">Feria de Empleo</span><br/>
                    TECMI 2024
                </h1>
            </div>

            <div className="lg:w-1/2 w-full max-w-md p-6">
                <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-xl border border-white/10 p-8 space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-center transition-opacity duration-300 hover:opacity-90">
                            <Image
                                src="/logo.png"
                                alt="Logo TECMI"
                                width={160}
                                height={160}
                                className="w-32 h-32"
                            />
                        </div>
                        <div className="text-center space-y-2">
                            <h2 className="text-2xl font-bold text-white">Bienvenido</h2>
                            <p className="text-gray-300/90 text-sm">Accede a tu cuenta para continuar</p>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full h-12 px-4 bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-tecmitalk-accent focus:border-transparent transition-all"
                            />
                            <Input
                                type="password"
                                placeholder="Contraseña"
                                className="w-full h-12 px-4 bg-white/5 border-white/20 text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-tecmitalk-accent focus:border-transparent transition-all"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 bg-gradient-to-r from-tecmitalk-accent to-emerald-500 text-white rounded-lg font-semibold hover:from-tecmitalk-accent/90 hover:to-emerald-500/90 transition-all transform hover:scale-[1.02]"
                        >
                            {isLoading ? 'Iniciando sesión...' : 'Acceder ahora'}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
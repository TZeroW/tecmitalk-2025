import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export default function Header() {
    return (
        <nav className="bg-[#14095D] py-4 px-6 sticky top-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image src="logo_sin_fondo.png"
                        alt="TECMITALK"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#speakers" className="text-white hover:text-tecmitalk-accent transition">Ponentes</a>
                    <a href="#why-attend" className="text-white hover:text-tecmitalk-accent transition">¿Por qué asistir?</a>
                    <a href="#tickets" className="text-white hover:text-tecmitalk-accent transition">Tickets</a>
                    <a href="#location" className="text-white hover:text-tecmitalk-accent transition">Ubicación</a>
                </div>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#14095D]">
                    Registro
                </Button>
            </div>
        </nav>
    )
}

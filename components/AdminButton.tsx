'use client';

import { Button } from '@/components/ui/button';

export default function AdminButton() {
  const handleAdminClick = () => {
    window.location.href = '/login';
  };

  return (
    <Button
      variant="outline"
      className="group bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-tecmitalk-accent/30 transition-all duration-300 hover:-translate-y-2 max-sm:w-full text-custom-green h-11"
      onClick={handleAdminClick}
    >
      Panel de Administrador
    </Button>
  );
}
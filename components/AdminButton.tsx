'use client';

import { Button } from '@/components/ui/button';

export default function AdminButton() {
  const handleAdminClick = () => {
    window.location.href = '/login';
  };

  return (
    <Button
      variant="outline"
      className="bg-white max-sm:w-full text-custom-green hover:bg-black-100 h-11 py-4"
      onClick={handleAdminClick}
    >
      Panel de Administrador
    </Button>
  );
}
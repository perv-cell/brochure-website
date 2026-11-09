'use client';

import { useState } from 'react';
import ModalForm from '@/components/modelform/modelForm';

interface OpenModalButtonProps {
  text?: string;
  className?: string;
}

export default function OpenModalButton({ text = 'Обсудить проект', className }: OpenModalButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className || "px-8 py-4 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:-translate-y-1 hover:shadow-xl transition-all w-full"}
      >
        {text}
      </button>

      <ModalForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

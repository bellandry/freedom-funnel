"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop avec effet blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FFFDF9] rounded-2xl shadow-2xl border border-gold/20">
        {/* Close button avec style doré */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 shadow-gold-glow group"
          aria-label="Fermer"
        >
          <X className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">{children}</div>
      </div>
    </div>
  );
}

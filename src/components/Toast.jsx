import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />,
    info: <Info className="w-4 h-4 text-cyan-400 shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0e0724]/95 border border-purple-500/40 shadow-[0_0_35px_rgba(147,51,234,0.4)] backdrop-blur-xl text-white text-xs sm:text-sm">
        {icons[toast.type] || icons.info}
        <span className="font-medium text-neutral-200">{toast.message}</span>
        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-purple-900/50 text-purple-300 hover:text-white transition ml-2"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

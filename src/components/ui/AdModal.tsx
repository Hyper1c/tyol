"use client";
import { useEffect, useState } from "react";

export default function AdModal() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false); // Ocultar el anuncio tras X segundos si lo deseas
    }, 15000); // 15 segundos

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <video
  className="w-full h-auto rounded-md"
  autoPlay
  muted // ← necesario para autoplay automático
  playsInline // para evitar comportamiento raro en móviles
>
  <source src="/videos/anuncio.mp4" type="video/mp4" />
  Tu navegador no soporta el video.
</video>

      </div>
    </div>
  );
}

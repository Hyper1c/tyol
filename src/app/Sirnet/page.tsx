'use client';

import Image from 'next/image';
import React from 'react';

export default function NuplinPublicidad() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full text-center">
       
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Bienvenido a Nuplin
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Tu nueva plataforma para disfrutar de televisión, noticias y contenido digital a un solo clic.
          Accede desde cualquier dispositivo y conéctate con lo que realmente importa.
        </p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <a
            href="https://disponet-tv.com/index.php/television/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded shadow-lg transition"
          >
            Adquirir Nuplin
          </a>
          
        </div>

        <Image
          src="/images/nuplin1.jpg" // Usa una imagen destacada del sitio original
          alt="TV Nuplin"
          width={800}
          height={450}
          className="rounded-lg shadow-md mx-auto"
        />

        <Image
          src="/images/nuplin2.jpg" // Usa una imagen destacada del sitio original
          alt="TV Nuplin"
          width={800}
          height={450}
          className="rounded-lg shadow-md mx-auto"
        />

        <Image
          src="/images/nuplin3.jpg" // Usa una imagen destacada del sitio original
          alt="TV Nuplin"
          width={800}
          height={450}
          className="rounded-lg shadow-md mx-auto"
        />

        <p className="text-gray-600 mt-8">
          Nuplin es más que una aplicación: es una experiencia. Noticias al instante, transmisiones en vivo, y todo desde un diseño intuitivo y veloz.
          ¡Descúbrelo ahora!
        </p>
      </div>
    </div>
  );
}

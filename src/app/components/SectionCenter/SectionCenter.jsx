'use client';

import React from 'react';
import clsx from 'clsx';

export default function SectionCenter({
    backgroundImage = '/ruta/a/tu-imagen.jpg',
    overlayColor = 'bg-primary/80',
    height="h-full",
    children,
    className = '',
}) {
  return (
    <section
      className={clsx(
        'relative bg-fixed bg-center bg-cover bg-no-repeat flex items-center justify-center py-10 px-1 text-quaternary',
        height,
        className
      )}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Capa semitransparente */}
      <div className={clsx('absolute inset-0 z-0', overlayColor)} />

      {/* Contenido encima del fondo */}
      <div className="relative z-10 max-w-5xl "> {/* Cambiar el max-w- para ajustar el texto */}
        {children}
      </div>
    </section>
  );
}

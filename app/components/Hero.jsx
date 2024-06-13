import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <main className='h-[75vh] flex flex-col items-center justify-center bg-darkwhite px-4'>
      <h1 className='mb-6 text-3xl md:text-5xl font-bold text-center'>Bienvenido a Trámites Europa</h1>
      <div className='max-w-[700px] text-center text-lg md:text-xl mt-6 md:mt-10 font-light'>
        <p className='mb-5 md:mb-8'>
          Aquí encontraras información sobre los trámites necesarios para que puedas <span className='font-bold'>vivir/trabajar</span> en los distintos países de Europa siendo residente comunitario.
        </p>
        <p className='font-bold'>Te presentamos la información de manera simple y directa, sin publicidades ni distracciones para que puedas ahorrar tiempo en tu búsqueda.</p>
      </div>
      <Link href="/countries">
        <button className='mt-8 md:mt-10 py-3 px-6 text-blue border border-blue hover:text-darkwhite hover:bg-blue transition-colors duration-300'>
          Elegir País
        </button>
      </Link>
    </main>
  );
}

export default Hero;

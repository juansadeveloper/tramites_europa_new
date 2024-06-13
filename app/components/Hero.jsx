import React from 'react'
import Link from 'next/link'


function Hero() {

  return (
    <main className='h-[75vh] flex flex-col items-center justify-center bg-darkwhite'>
        <h1 className='mb-[30px] text-5xl font-bold'>Bienvenido a Trámites Europa</h1>
        <div className='max-w-[700px] text-center text-xl mt-10 font-light'>
            <p className='mb-[20px]'>Aquí encontraras información sobre los trámites necesarios para que puedas <span className='font-bold'>vivir/trabajar</span> en los distintos países de Europa siendo residente comunitario.</p>
            <p className='font-bold'>Te presentamos la información de manera simple y directa, sin publicidades ni distracciones para que puedas ahorrar tiempo en tu búsqueda.</p>
        </div>
        <Link href="/countries"><button className='mt-[40px] py-3 px-6 text-blue border border-blue hover:text-darkwhite hover:bg-blue'>Elegir País</button></Link>
    </main>
  )
}

export default Hero
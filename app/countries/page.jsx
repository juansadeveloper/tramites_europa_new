import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <main className='min-h-[75vh] text-center flex flex-col justify-center items-center px-4'>
      <p className='mt-10 max-lg:hidden'>Haz click para seleccionar el país</p>
      <p className='mt-10 lg:hidden'>Selecciona el país</p>
      <div className='grid gap-3 max-w-[940px] m-auto grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center my-[40px]'>
        <Link href="/countries/spain"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>España</button></Link>
        <Link href="/countries/the-netherlands"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Países bajos</button></Link>
        <Link href="/countries/ireland"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Irlanda</button></Link>
        <Link href="/countries/germany"><button className='font-light cursor-pointer text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Alemania</button></Link>
        <Link href="countries/portugal"><button className='font-light cursor-pointer text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Portugal</button></Link>
        <Link href="/countries/denmark"><button className='font-light cursor-pointer text-blue border border-blue  hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Dinamarca</button></Link>
        <Link href="/countries/austria"><button className='font-light cursor-pointer text-blue border border-blue  hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Austria</button></Link>
        <Link href="/countries/greece"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Grecia</button></Link>
        <Link href="/countries/malta"><button className='font-light cursor-pointer text-blue border border-blue  hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Malta</button></Link>
        <Link href="/countries/belgium"><button className='font-light cursor-pointer text-blue border border-blue  hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Bélgica</button></Link>
        <Link href="/countries/hungary"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Hungria</button></Link>
        <Link href="/countries/norway"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Noruega</button></Link>
        <Link href="/countries/czech-republic"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>República Checa</button></Link>
        <Link href="/countries/iceland"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Islandia</button></Link>
        <Link href="/countries/poland"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Polonia</button></Link>
        <Link href="/countries/estonia"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Estonia</button></Link>
        <Link href="/countries/latvia"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Letonia</button></Link>
        <Link href="/countries/slovakia"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Eslovaquia</button></Link>
        <Link href="/countries/findland"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Finlandia</button></Link>
        <Link href="/countries/lithuania"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Lituania</button></Link>
        <Link href="/countries/sweden"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Suecia</button></Link>
        <Link href="/countries/italy"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Italia</button></Link>
        <Link href="/countries/france"><button className='font-light cursor-pointer text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Francia</button></Link>
        <Link href="/countries/luxembourg"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Luxemburgo</button></Link>
        <Link href="/countries/switzerland"><button className='font-light cursor-pointer text-blue border border-blue hover:text-darkwhite hover:bg-blue blue w-full sm:min-w-[150px] py-3'>Suiza</button></Link>
        <Link href="/countries/liechtenstein"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Liechtenstein</button></Link>
        <Link href="/countries/slovenia"><button className='font-light text-blue border border-blue hover:text-darkwhite hover:bg-blue w-full sm:min-w-[150px] py-3'>Eslovenia</button></Link>
      </div>
      <Link href="/"><p className='hover:text-blue mt-4 mb-10'>Volver atrás</p></Link>
    </main>
  )
}

export default Page;

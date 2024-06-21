"use client";
import Link from 'next/link';
import React from 'react';

function page() {
  return (
    <main className='md:h-[75vh] py-14 flex flex-col justify-center items-center'>
      <h1 className='font-bold mb-2 text-xl'>ESPAÑA</h1>
      <p className='mb-10 text-neutral-500 text-center px-4 md:px-0'>¿Que trámites tengo que hacer para poder vivir/trabajar legalmente en España al llegar?</p>
      <div className='w-full max-w-[800px] bg-container transition duration-300 rounded-md border h-[55vh] flex flex-col justify-center items-center'>
        {/* <div className=' max-w-[800px] bg-container  transition duration-300 hover:shadow-xl border w-full h-[55vh] flex flex-col justify-center items-center'> */}
        <div className='flex flex-col md:flex-row justify-center md:gap-16 items-center w-full'>
          {/* <h1 className='font-bold cursor-default'>Prerequisitos</h1> */}
          <h1 className='font-bold text-lg md:text-xl'>Trámites a realizar</h1>
          {/* <h1 className='cursor-pointer hover:text-blue'>Recomendaciones extras</h1> */}
        </div>
        {/* <div className='flex flex-col items-center justify-start gap-3 w-full px-20 max-w-[600px] py-5'>
                <div className=' w-full  text-neutral-500 bg-white py-3 pl-5 shadow rounded-md'><span className='font-bold text-black mr-2'>1</span> Registrar el Empadronamiento</div>
                <div className=' w-full  text-neutral-500 bg-white py-3 pl-5 shadow rounded-md'><span className='font-bold text-black mr-2'>2</span> Obtener el NIE</div>
                <div className=' w-full  text-neutral-500 bg-white py-3 pl-5 shadow rounded-md'><span className='font-bold text-black mr-2'>3</span> Obtener el Nº de Seguridad Social</div>
                <div className=' w-full  text-neutral-500 bg-white py-3 pl-5 shadow rounded-md'><span className='font-bold text-black mr-2'>4</span> Adquirir un número de teléfono español</div>
                <div className=' w-full  text-neutral-500 bg-white py-3 pl-5 shadow rounded-md'><span className='font-bold text-black mr-2'>5</span> Abrir una cuenta bancaria española</div>
            </div> */}
        <div className='flex flex-col items-center justify-start w-full px-4 md:px-20 max-w-[600px] py-5 rounded-md cursor-default'>
          <div className='w-full text-neutral-500 bg-white hover:bg-neutral-100 py-3 pl-5 shadow border-b rounded-t-md'>
            <span className='font-bold text-black mr-2'>1</span> Registrar el Empadronamiento
          </div>
          <div className='w-full text-neutral-500 bg-white hover:bg-neutral-100 py-3 pl-5 shadow border-b'>
            <span className='font-bold text-black mr-2'>2</span> Obtener el NIE
          </div>
          <div className='w-full text-neutral-500 bg-white hover:bg-neutral-100 py-3 pl-5 shadow border-b'>
            <span className='font-bold text-black mr-2'>3</span> Obtener el Nº de Seguridad Social
          </div>
          <div className='w-full text-neutral-500 bg-white hover:bg-neutral-100 py-3 pl-5 shadow border-b'>
            <span className='font-bold text-black mr-2'>4</span> Adquirir un número de teléfono español
          </div>
          <div className='w-full text-neutral-500 bg-white hover:bg-neutral-100 py-3 pl-5 shadow-md rounded-b-md'>
            <span className='font-bold text-black mr-2'>5</span> Abrir una cuenta bancaria española
          </div>
        </div>
        <Link href="/countries/spain/steps">
          <button className='mt-2 bg-black hover:bg-blue transition duration-300 text-darkwhite px-5 py-3 rounded-full'>Ver trámites</button>
        </Link>
        {/* <Link href="/countries/spain/steps"><button className=' mt-2 bg-black hover:bg-blue transition duration-300 text-darkwhite px-5 py-3 rounded-full animate-pulse'>Ver trámites</button></Link> */}
      </div>
    </main>
  );
}

export default page;

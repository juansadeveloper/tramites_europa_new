import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <main className='h-[75vh] flex flex-col items-center justify-center bg-darkwhite px-4'>
      <h1 className='mb-6 text-3xl md:text-5xl font-bold text-center'>Welcome to Trámites Europa</h1>
      <div className='max-w-[700px] text-center text-lg md:text-xl mt-6 md:mt-10 font-light'>
        <p className='mb-5 md:mb-8'>
          Here you will find information about the necessary procedures for you to <span className='font-bold'>live/work</span> in different European countries as a community resident.
        </p>
        <p className='font-bold'>We present the information in a simple and direct way, without advertisements or distractions so you can save time in your search.</p>
      </div>
      <Link href="/countries">
        <button className='mt-8 md:mt-10 py-3 px-6 text-blue border border-blue hover:text-darkwhite hover:bg-blue transition-colors duration-300 rounded'>
          Choose Country
        </button>
      </Link>
    </main>
  );
}

export default Hero;


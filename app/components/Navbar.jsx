import React from 'react'
import Link from 'next/link'

import { TfiWorld } from "react-icons/tfi"



function Navbar() {
  return (
    <main className='flex justify-between items-center h-[10vh] p-6 bg-background border-b'>
        <Link href="/">
          <div className='flex justify-center items-center gap-3'>
            <h1 className=' rounded-full bg-black text-white font-bold p-3 text-2xl'>TE</h1>
            <h1 className=' font-bold text-2xl'><span className='font-light'>Trámites</span> Europa</h1>
          </div>
        </Link>
        <div className='flex justify-center items-center gap-5 '>
            
            <TfiWorld size={22} className='hover:text-blue cursor-pointer transition duration-300'/>
            <p className='cursor-pointer py-1 px-5 border hover:border-blue bg-container rounded-full hover:text-blue transition duration-300'>Feedback</p>
        </div>
    </main>
  )
}

export default Navbar
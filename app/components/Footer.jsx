import React from 'react'
import Link from 'next/link'
import { CgDarkMode } from "react-icons/cg";

function Footer() {
  return (
    <main className='h-[15vh] bg-background flex items-center justify-around p-3 border-t'>
        <CgDarkMode size={22} className='invisible'/>
        <ul className='flex items-center justify-around text-center gap-6 md:gap-16 '>
            <Link href="/contact" className='hover:text-blue transition duration-300'><li>Contact</li></Link>
            {/* <Link href="/feedback" className='hover:text-blue transition duration-300'><li>Quiero colaborar</li></Link> */}
            {/* <Link href="" className='footer-link'><li>Reportar un error</li></Link> */}
            <Link href="/faq" className='hover:text-blue transition duration-300'><li>FAQ</li></Link>
        </ul>
        <CgDarkMode size={22} className='invisible'/>
    </main>
  )
}

export default Footer
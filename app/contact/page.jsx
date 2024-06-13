import Link from 'next/link'
import React from 'react'
import {BsWhatsapp} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {FiMail} from "react-icons/fi"

function page() {
  return (
    <main className='h-[75vh] flex flex-col justify-center items-center'>
        <h3 className='mb-20 font-bold text-xl'>Podes comunicarte con nosotros a través de los siguientes medios digitales:</h3>
        <div className='flex flex-col items-center gap-5'>
          <div className='flex items-center justify-start gap-3'>
            <BsInstagram size={26} /><p>Instagram</p>
          </div>
          <div className='flex items-center gap-3'><BsFacebook size={26} />
            <p>Facebook</p>
          </div>
          <div className='flex items-center gap-3'><BsWhatsapp size={26} />
            <p>Whatsapp</p>
          </div>
          <div className='flex items-center gap-3'><FiMail size={26} />
            <p>info@tramiteseuropa.com</p>
          </div>
        </div>
        <Link href="/" className='mt-20 text-blue'><p>Volver a la página principal</p></Link>
    </main>
  )
}

export default page
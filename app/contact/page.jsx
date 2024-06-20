// import Link from 'next/link'
// import React from 'react'
// import {BsWhatsapp} from "react-icons/bs"
// // import {BsFacebook} from "react-icons/bs"
// import {BsInstagram} from "react-icons/bs"
// import {FiMail} from "react-icons/fi"

// function page() {
//   return (
//     <main className='h-[75vh] flex flex-col justify-center items-center px-5'>
//         <h3 className='mb-20 font-bold text-xl text-center'>Podes comunicarte con nosotros a través de los siguientes medios digitales:</h3>
//         <div className='flex flex-col items-center gap-5'>
//           <div className='flex items-center justify-start gap-3'>
//             <BsInstagram size={26} /><p>Instagram</p>
//           </div>
//           {/* <div className='flex items-center gap-3'><BsFacebook size={26} />
//             <p>Facebook</p>
//           </div> */}
//           <div className='flex items-center gap-3'><BsWhatsapp size={26} />
//             <Link target="_blank" href="https://api.whatsapp.com/send?phone=353899696179&text=Hello I want to talk about Trámites Europa&app_absent=0">Whatsapp</Link>
//           </div>
//           <div className='flex items-center gap-3'><FiMail size={26} />
//             <p>juansapereira@icloud.com</p>
//           </div>
//         </div>
//         <Link href="/" className='mt-20 text-blue'><p>Volver a la página principal</p></Link>
//     </main>
//   )
// }

// export default page

import Link from 'next/link'
import React from 'react'
import { BsWhatsapp } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { FiMail } from "react-icons/fi"

function page() {
  return (
    <main className='h-[75vh] flex flex-col justify-center items-center px-5'>
      <h3 className='mb-20 font-bold text-xl text-center'>You can contact us through the following digital media:</h3>
      <div className='flex flex-col items-center gap-5'>
        <div className='flex items-center justify-start gap-3'>
          <BsInstagram size={26} /><p>Instagram</p>
        </div>
        {/* <div className='flex items-center gap-3'><BsFacebook size={26} />
          <p>Facebook</p>
        </div> */}
        <div className='flex items-center gap-3'><BsWhatsapp size={26} />
          <Link target="_blank" href="https://api.whatsapp.com/send?phone=353899696179&text=Hello I want to talk about Trámites Europa&app_absent=0">Whatsapp</Link>
        </div>
        <div className='flex items-center gap-3'><FiMail size={26} />
          <p>juansapereira@icloud.com</p>
        </div>
      </div>
      <Link href="/" className='mt-20 text-blue'><p>Back to the main page</p></Link>
    </main>
  )
}

export default page

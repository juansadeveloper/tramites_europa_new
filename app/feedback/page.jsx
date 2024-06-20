// import React from 'react'

// function page() {
//   return (
//     <main className='md:h-[75vh] text-center p-5 flex flex-col justify-center items-center'>
//         <h3 className='font-bold text-xl'>Gracias por ayudarnos a mejorar.</h3>
//         <p className='text-lg'>Para poder hacerlo solo tienes que llenar el siguiente formulario.</p>
//         <form className='flex flex-col gap-3 p-5 mt-10 max-w-[400px] w-full bg-container rounded-md border'>
//             <input className='p-3 rounded border' type='text' placeholder='Nombre y apellido' required></input>
//             <input className='p-3 rounded border' type='email'placeholder='E-mail' required></input>
//             <input className='p-3 rounded border' type='text' placeholder='Nacionalidad' required></input>
//             {/* <input type='text' placeholder='Asunto'></input> */}
//             <textarea className='p-3 rounded border' placeholder='Mensaje' required rows={8}></textarea>
//             <button  type="submit" value="Send" className='bg-darkwhite p-3 border rounded hover:bg-blue hover:text-darkwhite transition duration-300' >Enviar</button>
//         </form>
//     </main>
//   )
// }

// export default page


import React from 'react'

function page() {
  return (
    <main className='md:h-[75vh] text-center p-5 flex flex-col justify-center items-center'>
        <h3 className='font-bold text-xl'>Thank you for helping us improve.</h3>
        <p className='text-lg'>To do so, you only need to fill out the following form.</p>
        <form className='flex flex-col gap-3 p-5 mt-10 max-w-[400px] w-full bg-container rounded-md border'>
            <input className='p-3 rounded border' type='text' placeholder='First and Last Name' required></input>
            <input className='p-3 rounded border' type='email' placeholder='E-mail' required></input>
            <input className='p-3 rounded border' type='text' placeholder='Nationality' required></input>
            {/* <input type='text' placeholder='Subject'></input> */}
            <textarea className='p-3 rounded border' placeholder='Message' required rows={8}></textarea>
            <button type="submit" value="Send" className='bg-darkwhite p-3 border rounded hover:bg-blue hover:text-darkwhite transition duration-300'>Send</button>
        </form>
    </main>
  )
}

export default page

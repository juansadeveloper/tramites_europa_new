import React from 'react'

function page() {
  return (
    <main className='h-[75vh] text-center p-5 flex flex-col justify-center items-center'>
        <h3 className='font-bold text-xl'>Gracias por ayudarnos a mejorar.</h3>
        <p className='text-lg'>Para poder hacerlo solo tienes que llenar el siguiente formulario.</p>
        <form className='flex flex-col gap-3 p-5 mt-10 max-w-[400px] w-full'>
            <input className='p-3 border' type='text' placeholder='Nombre y apellido' required></input>
            <input className='p-3 border' type='email'placeholder='E-mail' required></input>
            <input className='p-3 border' type='text' placeholder='Nacionalidad' required></input>
            {/* <input type='text' placeholder='Asunto'></input> */}
            <textarea className='p-3 border' placeholder='Mensaje' required rows={8}></textarea>
            <button  type="submit" value="Send" className='p-3 border hover:bg-blue hover:text-darkwhite' >Enviar</button>
        </form>
    </main>
  )
}

export default page
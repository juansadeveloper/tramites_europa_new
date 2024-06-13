import React from 'react'

function page() {
  return (
    <main className='min-h-[75vh] py-20 flex flex-col justify-center items-center'>
        <h1 className='font-bold mb-10 text-xl'>Irlanda</h1>
        <div className=' max-w-[800px] bg-[#FAFAFA]  transition duration-300 hover:shadow-xl border w-full h-[50vh] flex flex-col justify-center items-center'>
            <div className='flex justify-center gap-16 items-center w-full bg-white py-3'>
                <h1 className='font-bold cursor-default'>Prerequisitos</h1>
                <h1 className='cursor-pointer  hover:text-blue'>Pasos a seguir</h1>
                <h1 className='cursor-pointer hover:text-blue'>Recomendaciones extras</h1>
            </div>
            <div className='flex flex-col items-center gap-3 w-full px-20 mt-20'>
                <div className='bg-white w-full h-[7vh]'></div>
                <div className='bg-white w-full h-[7vh]'></div>
                <div className='bg-white w-full h-[7vh]'></div>
                {/* <div className='bg-white w-full h-[7vh]'></div> */}
                {/* <div className='bg-white w-full h-[7vh]'></div> */}
                

            </div>
        </div>
    </main>
  )
}

export default page
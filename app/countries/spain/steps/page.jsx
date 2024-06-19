"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

function Page() {

    const [nie, setNie] = useState(false)
    const [empadronamiento, setEmpadronamiento] = useState(false)
    const [social, setSocial] = useState(false)
    const [cuenta, setCuenta] = useState(false)
    const [sim, setSim] = useState(false)
  
    const [documentos, setDocumentos] = useState(true)
    const [documentos2, setDocumentos2] = useState(true)
  
    function changeDocumentos(){
      setDocumentos(!documentos)
    }
    function changeDocumentos2(){
      setDocumentos2(!documentos2)
    }
  
  
  
    function changeNie(){
      setNie(true)
      setEmpadronamiento(false)
      setSocial(false)
      setCuenta(false)
      setSim(false)
    }
    function changeEmpadronamiento(){
      setNie(false)
      setEmpadronamiento(true)
      setSocial(false)
      setCuenta(false)
      setSim(false)
    }
    function changeSocial(){
      setNie(false)
      setEmpadronamiento(false)
      setSocial(true)
      setCuenta(false)
      setSim(false)
    }
    function changeCuenta(){
      setNie(false)
      setEmpadronamiento(false)
      setSocial(false)
      setCuenta(true)
      setSim(false)
    }
    function changeSim(){
      setNie(false)
      setEmpadronamiento(false)
      setSocial(false)
      setCuenta(false)
      setSim(true)
    }

  return (
    <main className='md:h-[75vh]'>
        <div className='flex flex-col md:flex-row lg:max-w-[1000px] lg:mx-auto items-center w-full h-full p-7 gap-20'>
            <div className="w-full lg:max-w-[400px] flex flex-col items-center justify-center bg-gray-100 border p-7 rounded-lg shadow-lg">
                <h1 className='mb-10 font-bold'>Pasos a seguir</h1>
                <div className='flex flex-col items-center gap-5 w-full max-w-[250px]'>
                    <button onClick={changeEmpadronamiento}  className={empadronamiento ? 'w-full py-3 px-5 font-light text-blue bg-white border border-blue rounded' : 'w-full py-3 px-5 font-light text-neutral-400 bg-white border  hover:text-blue rounded'}>Empadronamiento</button>
                    <button onClick={changeNie} className={nie ? 'w-full py-3 px-5 font-light text-blue bg-white border border-blue rounded' : 'w-full py-3 px-5 font-light text-neutral-400 bg-white border  hover:text-blue rounded'}>NIE</button>
                    <button onClick={changeSocial} className={social ? 'w-full py-3 px-5 font-light text-blue bg-white border border-blue rounded' : 'w-full py-3 px-5 font-light text-neutral-400 bg-white border  hover:text-blue rounded'}>Nº Seguridad Social</button>
                    <button onClick={changeCuenta} className={cuenta ? 'w-full py-3 px-5 font-light text-blue bg-white border border-blue rounded' : 'w-full py-3 px-5 font-light text-neutral-400 bg-white border  hover:text-blue rounded'}>Cuenta Bancaria Española</button>
                    <button onClick={changeSim} className={sim ? 'w-full py-3 px-5 font-light text-blue bg-white border border-blue rounded' : 'w-full py-3 px-5 font-light text-neutral-400 bg-white border  hover:text-blue rounded'}>SIM Española</button>
                </div>
                <p className='mt-10 cursor-pointer text-blue'>Preguntas frecuentes</p>
            </div>
            <div className='h-full w-full  flex flex-col justify-center items-center'>

            {empadronamiento | nie | social | cuenta | sim ? "" : <h1>Haz click en cada item del panel de navegación izquierdo para obtener información sobre cada trámite en particular.</h1>}


            {/* EMPADRONAMIENTO 
            https://growproexperience.com/espana/empadronarse-en-espana/
            */}
            {empadronamiento ? <div>
            {documentos2 ?  
            <div id="empadronamiento" className='max-w-[600px]'>
            <h3 className='font-bold mb-10 text-xl'>¿Qué es el empadronamiento? ¿Para que lo necesito?</h3>
            <p><b>El empadronamiento en España indica residencia y domicilio habitual.</b> Se utiliza para certificar que vives en una determinada población de España.
            Es &quot;imprescindible&quot; que hagas el trámite una vez que llegues al país.
            Para realizar el empadronamiento hay que dirigirse a la oficina correspondiente a la ciudad de España en donde estás viviendo.</p>
            <div className='mt-10 flex  gap-3'>
            <Link target='_blank' href='https://administracion.gob.es/pagFront/tramites/fichaTramite.htm?idTramiteSeleccionado=3485&idMateria=21&idBoletin=21'><button className='px-5 py-3 border hover:text-blue max-w-[200px]  rounded'>Comenzar el trámite</button></Link>
            <button onClick={changeDocumentos2} className='px-5 py-3 border hover:text-blue max-w-[200px] rounded'>Ver documentación</button> 
            </div>
            </div>
            : <div id="doc">
                <h3 className='font-bold text-xl'>Documentación a aportar en modalidad presencial:</h3>
                <div className='my-10'>
                    <p className='mb-2'>Tarjeta de identidad extranjera</p>
                    <p className='mb-2'>Pasaporte/DNI del país comunitario</p>
                    <p>Certificado del registro de ciudadano de la Unión Europea</p>
                    {/* <p>Empadronamiento</p>
                    <p>Fotocopia del empadronamiento</p>
                    <p>Foto carnet</p>
                    <p>Cuenta bancaria</p> */}
                </div> 
                <p onClick={changeDocumentos2} className='text-blue cursor-pointer'>Volver atrás</p>
                </div>
              } </div> : "" }



              {/* NIE    */}
              {nie ? <div> 
              { documentos ? 
                <div>
                <h3 className='font-bold mb-10 text-xl'>¿Qué es el NIE? ¿Por qué lo necesito?</h3>
                <p style={{maxWidth: "600px"}}><b>El NIE es un número unico y personal de registro para extranjeros</b> otorgado por el gobierno de españa. Es único y exclusivo. Es 100% necesario para poder trabajar de manera legal en España siendo residente comunitario.<span style={{fontSize: "16px"}}><Link href="/equivalentes" target='_blank' className='e-link'>Ver equivalentes a NIE en los distintos países de Europa.</Link></span></p>
                <div className='mt-10 flex gap-3'>
                  <Link href='https://icp.administracionelectronica.gob.es/icpplus/index.html' target='_blank' className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue'>Pedir cita para tramitar el NIE</Link>
                  <button onClick={changeDocumentos} className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue'>Ver documentos a llevar</button>
                </div>
                </div>
              : <div id="doc">
                  <h3 className='font-bold text-xl'>Documentos a llevar el día del trámite previamente completados:</h3>
                  <div className='my-10'>
                      <p className='mb-2'>Justificante de cita previa</p>
                      <p className='mb-2'><a href='https://www.inclusion.gob.es/documents/410169/2156469/15-Formulario_NIE_y_certificados.pdf' target='_blank'>Formulario: &quot;EX-15&quot;</a></p>
                      <p className='mb-2'><a href='https://sede.policia.gob.es:38089/Tasa790_012/ImpresoRellenar' target='_blank'>Boleto de pago de la tasa impositiva</a></p>
                      <p className='mb-2'>Pasaporte/DNI europeo</p>
                      <p>Fotocopia del pasaporte/DNI europeo</p>
                      {/* <p>Empadronamiento</p>
                      <p>Fotocopia del empadronamiento</p>
                      <p>Foto carnet</p>
                      <p>Cuenta bancaria</p> */}
                  </div> 
                  <p onClick={changeDocumentos} className='text-blue cursor-pointer'>Volver atrás</p>
                </div>
              }</div> : "" }



            {/* SEGURIDAD SOCIAL
            https://revista.seg-social.es/-/qu%C3%A9-es-el-n%C3%BAmero-de-la-seguridad-social-y-d%C3%B3nde-obtenerlo
            */}
            {social ? 
            <div id="social" className='max-w-[600px]'>
            <h3 className='font-bold text-xl mb-10'>¿Qué es el Nº de Seguridad Social? ¿Para que lo necesito?</h3>
            <p className='mb-10'><b>Es un número para identificar al ciudadano en todo lo relativo a la Seguridad Social.</b> Es obligatorio para cualquier ciudadano que sea beneficiario de pensiones, subsidios o prestaciones de la Seguridad Social. Si vas a ser contratado por una empresa como trabajador en relación de dependencia, el trámite de solicitud debe realizarlo la empresa. Para el resto de los casos debe realizarce de manera personal.</p>
            <Link href='https://identificacion.seg-social.es/?origen=tgss&representante=false&pasaporte=true&destino=https%3A%2F%2Fw6.seg-social.es%2FProsaInternetAnonimo%2FOnlineAccess%3FARQ.SPM.ACTION%3DLOGIN%26ARQ.SPM.APPTYPE%3DSERVICE%26ARQ.IDAPP%3DXV26N00B' target='_blank' className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue '>Enviar solicitud </Link>
            </div>
 


            : ""}
            {/* CUENTA BANCARIA */}
            {cuenta ? 
            <div id="bank" className='max-w-[600px] text-center'>
              <p className='text-xl mb-10'>Para poder obtener una cuenta bancaria con IBAN español hay varias opciones. Bancos físicos y bancos digitales.</p>
              <h3 className='font-bold'>Elegir tipo de banco    </h3>
              <div className='flex justify-center gap-5 mt-5'>
                <Link href="/bank-online-spain" className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue '><p>Banco Online</p></Link>
                <Link href="/bank-traditional-spain" className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue '><p>Banco Tradicional</p></Link>
              </div>
            </div>
            : ""}
            {/* SIM */}
            {sim ? 
            <div className='text-center'>
              <p className='mb-10 text-xl'>Obtener una tarjeta SIM Española es muy fácil.</p> 
              <h3 className='font-bold'>Te ofrecemos las siguientes opciones:</h3>
              <div className='flex justify-center items-center gap-3 mt-5'>
                <Link href='https://www.vodafone.es/c/particulares/es/' target='_blank' className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue '>Vodafone</Link>
                <Link href='https://www.movistar.es/' target='_blank' className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue '>Movistar</Link>
                <Link href='https://www.digimobil.es/movil/?_gl=1*q2ftjx*_up*MQ..&gclid=CjwKCAjw586hBhBrEiwAQYEnHVILR5GbbS5DFzUYCGi2LBQb10wWz5w49jJ3sEEbH76zeIGzB8_-7RoCB-0QAvD_BwE' target='_blank' className='px-5 py-3 border text-blue max-w-[350px] hover:border-blue '>DIGI</Link>
             </div>
            </div> 
            : ""}
            </div>
        </div>
    </main>
  )
}

export default Page
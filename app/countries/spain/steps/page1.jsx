"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function Page() {
  const [activeSection, setActiveSection] = useState('');

  const sections = {
    nie: {
      title: "¿Qué es el NIE? ¿Por qué lo necesito?",
      description: "El NIE es un número único y personal de registro para extranjeros otorgado por el gobierno de España. Es único y exclusivo. Es 100% necesario para poder trabajar de manera legal en España siendo residente comunitario.",
      links: [
        { href: "https://icp.administracionelectronica.gob.es/icpplus/index.html", text: "Pedir cita para tramitar el NIE" },
      ],
      documents: [
        "Justificante de cita previa",
        <a href='https://www.inclusion.gob.es/documents/410169/2156469/15-Formulario_NIE_y_certificados.pdf' target='_blank'>Formulario: "EX-15"</a>,
        <a href='https://sede.policia.gob.es:38089/Tasa790_012/ImpresoRellenar' target='_blank'>Boleto de pago de la tasa impositiva</a>,
        "Pasaporte/DNI europeo",
        "Fotocopia del pasaporte/DNI europeo"
      ]
    },
    empadronamiento: {
      title: "¿Qué es el empadronamiento? ¿Para que lo necesito?",
      description: "El empadronamiento en España indica residencia y domicilio habitual. Se utiliza para certificar que vives en una determinada población de España. Es 'imprescindible' que hagas el trámite una vez que llegues al país. Para realizar el empadronamiento hay que dirigirse a la oficina correspondiente a la ciudad de España en donde estás viviendo.",
      links: [
        { href: "https://administracion.gob.es/pagFront/tramites/fichaTramite.htm?idTramiteSeleccionado=3485&idMateria=21&idBoletin=21", text: "Comenzar el trámite" }
      ],
      documents: [
        "Tarjeta de identidad extranjera",
        "Pasaporte/DNI del país comunitario",
        "Certificado del registro de ciudadano de la Unión Europea"
      ]
    },
    social: {
      title: "¿Qué es el Nº de Seguridad Social? ¿Para que lo necesito?",
      description: "Es un número para identificar al ciudadano en todo lo relativo a la Seguridad Social. Es obligatorio para cualquier ciudadano que sea beneficiario de pensiones, subsidios o prestaciones de la Seguridad Social. Si vas a ser contratado por una empresa como trabajador en relación de dependencia, el trámite de solicitud debe realizarlo la empresa. Para el resto de los casos debe realizarce de manera personal.",
      links: [
        { href: "https://identificacion.seg-social.es/?origen=tgss&representante=false&pasaporte=true&destino=https%3A%2F%2Fw6.seg-social.es%2FProsaInternetAnonimo%2FOnlineAccess%3FARQ.SPM.ACTION%3DLOGIN%26ARQ.SPM.APPTYPE%3DSERVICE%26ARQ.IDAPP%3DXV26N00B", text: "Enviar solicitud" }
      ]
    },
    cuenta: {
      title: "Cuenta Bancaria Española",
      description: "Para poder obtener una cuenta bancaria con IBAN español hay varias opciones. Bancos físicos y bancos digitales.",
      links: [
        { href: "/bank-online-spain", text: "Banco Online" },
        { href: "/bank-traditional-spain", text: "Banco Tradicional" }
      ]
    },
    sim: {
      title: "SIM Española",
      description: "Obtener una tarjeta SIM Española es muy fácil.",
      links: [
        { href: "https://www.vodafone.es/c/particulares/es/", text: "Vodafone" },
        { href: "https://www.movistar.es/", text: "Movistar" },
        { href: "https://www.digimobil.es/movil/?_gl=1*q2ftjx*_up*MQ..&gclid=CjwKCAjw586hBhBrEiwAQYEnHVILR5GbbS5DFzUYCGi2LBQb10wWz5w49jJ3sEEbH76zeIGzB8_-7RoCB-0QAvD_BwE", text: "DIGI" }
      ]
    }
  };

  const handleClick = (section) => {
    setActiveSection(activeSection === section ? '' : section);
  };

  return (
    <main className="min-h-screen py-10 px-5">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-10">
        <div className="w-full lg:max-w-xs bg-gray-100 border p-7 rounded-lg shadow-lg">
          <h1 className="mb-10 font-bold text-center">Pasos a seguir</h1>
          <div className="flex flex-col items-center gap-5">
            {Object.keys(sections).map(section => (
              <button
                key={section}
                onClick={() => handleClick(section)}
                className={`w-full py-3 px-5 font-light ${activeSection === section ? 'text-blue-600 border-blue-600' : 'text-gray-600 hover:text-blue-600'} bg-white border rounded-lg`}
              >
                {sections[section].title.split(' ').slice(0, 2).join(' ')}
              </button>
            ))}
          </div>
          <p className="mt-10 text-center text-blue-600 cursor-pointer">Preguntas frecuentes</p>
        </div>

        <div className="w-full lg:max-w-2xl flex flex-col items-center">
          {!activeSection && <h1 className="text-center">Haz click en cada item del panel de navegación izquierdo para obtener información sobre cada trámite en particular.</h1>}

          {activeSection && (
            <div className="max-w-xl">
              <h3 className="font-bold mb-10 text-xl">{sections[activeSection].title}</h3>
              <p>{sections[activeSection].description}</p>
              {sections[activeSection].links.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-3">
                  {sections[activeSection].links.map((link, index) => (
                    <Link key={index} href={link.href} target="_blank" className="px-5 py-3 border text-blue-600 hover:border-blue-600 rounded-lg">{link.text}</Link>
                  ))}
                </div>
              )}
              {sections[activeSection].documents && (
                <div className="mt-10">
                  <h3 className="font-bold text-xl">Documentación necesaria:</h3>
                  <ul className="list-disc ml-5 mt-3">
                    {sections[activeSection].documents.map((doc, index) => (
                      <li key={index} className="mb-2">{doc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Page;

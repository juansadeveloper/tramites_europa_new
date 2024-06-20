"use client";
import React, { useState } from 'react';

function Page() {
  const [activeSection, setActiveSection] = useState('prerequisites');

  const sections = {
    prerequisites: (
      <div className='flex flex-col items-start gap-5 w-full md:px-20 mt-20'>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Valid Passport or National ID</h2>
          <p>Ensure your passport or national ID card is valid for the duration of your stay in Norway.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Registration with Local Authorities</h2>
          <p>If you plan to stay in Norway for more than three months, you must register with the Norwegian Directorate of Immigration (UDI) through the self-service portal and then appear in person at a local police station to finalize your registration.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Health Insurance</h2>
          <p>You must have health insurance coverage in Norway. If you are employed, you will be covered by the Norwegian National Insurance Scheme (Folketrygden). You can also apply for the European Health Insurance Card (EHIC) before moving, which provides temporary health coverage. Alternatively, you can get private health insurance if you are not employed or want additional coverage.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Employment</h2>
          <p>As an EU citizen, you do not need a work permit to work in Norway. Employers may ask for proof of identity and your registration certificate.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Housing</h2>
          <p>Arrange accommodation before or soon after your arrival. The housing market can be competitive, particularly in larger cities like Oslo, Bergen, and Stavanger, so it’s advisable to start looking early.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Bank Account</h2>
          <p>Opening a Norwegian bank account is recommended for salary payments and everyday transactions. You will need a valid ID, proof of address, and sometimes proof of employment to open an account.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Norwegian Personal Number (D-Number or Fødselsnummer)</h2>
          <p>You will need a Norwegian personal number for various administrative processes in Norway, including opening a bank account, signing a lease, and employment. You can obtain it from the Norwegian Tax Administration (Skatteetaten).</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Language</h2>
          <p>While many Norwegians speak English, proficiency in Norwegian is highly beneficial for daily life, integration, and job opportunities.</p>
        </div>
      </div>
    ),
    steps: (
      <div className='flex flex-col items-center gap-5 w-full md:px-20 mt-20'>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Arrive in Norway:</h2>
          <p>With your valid passport or ID.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Find Accommodation:</h2>
          <p>Secure a place to live. Temporary accommodation may be necessary initially.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Obtain a Norwegian Personal Number (D-Number or Fødselsnummer):</h2>
          <p>Apply for a personal number at the Norwegian Tax Administration (Skatteetaten).</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Register with Local Authorities:</h2>
          <p>If you plan to stay for more than three months, register with the Norwegian Directorate of Immigration (UDI) through the self-service portal and then appear in person at a local police station.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Get Health Insurance:</h2>
          <p>If employed, you will be automatically enrolled in the Norwegian National Insurance Scheme (Folketrygden); otherwise, arrange for private health insurance or ensure you have the EHIC.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Open a Bank Account:</h2>
          <p>Using your ID, proof of address, and sometimes proof of employment.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Seek Employment:</h2>
          <p>If you haven&apos;t secured a job beforehand, start applying. Utilize job websites, networking, and recruitment agencies.</p>
        </div>
      </div>
    ),
    recommendations: (
      <div className='flex flex-col items-center gap-5 w-full md:px-20 mt-20'>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Taxes:</h2>
          <p>Understand the Norwegian tax system and ensure you register with the local tax authorities.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Social Security:</h2>
          <p>Familiarize yourself with the Norwegian social security system, including benefits and pension schemes.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Driver’s License:</h2>
          <p>If you plan to drive, check the regulations for using or exchanging your EU driver’s license. EU licenses are generally recognized in Norway.</p>
        </div>
        <div className='bg-white p-4 rounded shadow w-full'>
          <h2 className='font-bold'>Language Courses:</h2>
          <p>Consider enrolling in Norwegian language courses to improve your language skills, which can aid in integration and job prospects.</p>
        </div>
      </div>
    )
  };

  return (
    <main className='min-h-[75vh] py-20 flex flex-col justify-center items-center'>
      <h1 className='font-bold mb-10 text-xl'>Norway</h1>
      <div className='max-w-[800px] px-5 py-10 bg-[#FAFAFA] transition duration-300 hover:shadow-xl border w-full flex flex-col justify-center items-center'>
        <div className='flex max-md:flex-col max-md:gap-0 justify-between items-center w-full max-w-[600px] border'>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 md:px-5 ${activeSection === 'prerequisites' ? 'font-bold bg-white max-md:w-full max-md:text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('prerequisites')}
          >
            Prerequisites
          </h1>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 md:px-5 ${activeSection === 'steps' ? 'font-bold bg-white max-md:w-full max-md:text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('steps')}
          >
            Steps to follow
          </h1>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 md:px-5 ${activeSection === 'recommendations' ? 'font-bold bg-white max-md:w-full max-md:text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('recommendations')}
          >
            Recommendations
          </h1>
        </div>
        {sections[activeSection]}
      </div>
    </main>
  );
}

export default Page;


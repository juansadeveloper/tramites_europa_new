"use client";
import React, { useState } from 'react';

function Page() {
  const [activeSection, setActiveSection] = useState('prerequisites');

  const sections = {
    prerequisites: (
      <div className="flex flex-col items-start gap-5 w-full md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Valid Passport or National ID</h2>
          <p>Ensure your Italian passport or national ID card is valid for the duration of your stay.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Registration with Local Authorities (Anmeldung)</h2>
          <p>Within 14 days of finding permanent accommodation, you must register your address at the local registration office (Einwohnermeldeamt or Bürgeramt). This process is known as "Anmeldung". Upon registration, you will receive a confirmation of registration (Anmeldebestätigung) and a tax identification number (Steueridentifikationsnummer).</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Health Insurance</h2>
          <p>Health insurance is mandatory in Germany. If you are employed, you will be enrolled in the public health insurance system (gesetzliche Krankenversicherung) through your employer. If you are not employed or prefer private insurance, you need to arrange for private health insurance coverage.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Employment</h2>
          <p>As an EU citizen, you are free to work without needing a work permit. Employers will require your tax identification number and proof of health insurance.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Bank Account</h2>
          <p>Opening a German bank account is recommended for salary payments and everyday transactions. You will need a valid ID, proof of address, and the Anmeldebestätigung to open an account.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Language</h2>
          <p>While many Germans speak English, proficiency in German is highly beneficial for daily life, integration, and job opportunities.</p>
        </div>
      </div>
    ),
    steps: (
      <div className="flex flex-col items-center gap-5 w-full  md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Arrive in Germany:</h2>
          <p>With your valid passport or ID.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Find Accommodation:</h2>
          <p>Secure a place to live. Temporary accommodation may be necessary initially.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Register Your Address (Anmeldung):</h2>
          <p>Within 14 days of moving into permanent accommodation, register at the local registration office.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Apply for a Tax Identification Number:</h2>
          <p>You will receive this automatically after registering your address.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Get Health Insurance:</h2>
          <p>If employed, you will be automatically enrolled in public health insurance; otherwise, arrange for private health insurance.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Open a Bank Account:</h2>
          <p>Using your ID, proof of address, and Anmeldebestätigung.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Seek Employment:</h2>
          <p>If you haven't secured a job beforehand, start applying. Utilize job websites, networking, and recruitment agencies.</p>
        </div>
      </div>
    ),
    recommendations: (
      <div className="flex flex-col items-center gap-5 w-full  md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Taxes:</h2>
          <p>Understand the German tax system and ensure you register with the tax authorities (Finanzamt).</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Social Security:</h2>
          <p>Familiarize yourself with the German social security system, including benefits and pension schemes.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Driver’s License:</h2>
          <p>If you plan to drive, check the regulations for using or exchanging your Italian driver’s license.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Language Courses:</h2>
          <p>Consider enrolling in German language courses to improve your language skills, which can aid in integration and job prospects.</p>
        </div>
      </div>
    )
  };

  return (
    <main className="min-h-[75vh] py-20 flex flex-col justify-center items-center">
      <h1 className="font-bold mb-10 text-xl">Germany</h1>
      <div className="max-w-[800px] px-5 py-10 bg-[#FAFAFA] transition duration-300 hover:shadow-xl border w-full flex flex-col justify-center items-center">
        <div className="flex max-md:flex-col max-md:gap-0 justify-between  items-center w-full max-w-[600px] border">
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 md:px-5 ${activeSection === 'prerequisites' ? 'font-bold bg-white  max-md:w-full max-md:text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('prerequisites')}
          >
            Prerequisites
          </h1>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 md:px-5 ${activeSection === 'steps' ? 'font-bold bg-white  max-md:w-full max-md:text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('steps')}
          >
            Steps to follow
          </h1>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 md:px-5 ${activeSection === 'recommendations' ? 'font-bold bg-white  max-md:w-full max-md:text-center' : 'hover:text-blue'}`}
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

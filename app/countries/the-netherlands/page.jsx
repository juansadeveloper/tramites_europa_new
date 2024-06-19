"use client";
import React, { useState } from 'react';

function Page() {
  const [activeSection, setActiveSection] = useState('prerequisites');

  const sections = {
    prerequisites: (
      <div className="flex flex-col items-start gap-5 w-full  md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Valid Passport or National ID</h2>
          <p>Ensure your Italian passport or national ID card is valid for the duration of your stay.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Registration with the Municipality (BSN Number)</h2>
          <p>If you plan to stay for more than 4 months, you must register with the local municipality (Gemeente) where you will be living. Upon registration, you will receive a Citizen Service Number (Burgerservicenummer or BSN), which is essential for various administrative processes.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Health Insurance</h2>
          <p>You are required to have health insurance coverage in the Netherlands. Basic Dutch health insurance (zorgverzekering) is mandatory, even if you already have health insurance from Italy.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Residence Permit</h2>
          <p>As an EU citizen, you do not need a residence permit to live in the Netherlands, but you may choose to apply for a registration certificate (Verblijfsvergunning) from the Immigration and Naturalisation Service (IND) to formalize your stay.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Employment</h2>
          <p>You are free to work without needing a work permit. Employers might ask for your BSN and sometimes proof of registration with the municipality.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Housing</h2>
          <p>Arrange accommodation before or soon after your arrival. The housing market can be competitive, so it’s advisable to start looking early.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Bank Account</h2>
          <p>Opening a Dutch bank account is recommended for salary payments and everyday transactions. You will need a BSN, a valid ID, and proof of address to open an account.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Language</h2>
          <p>While many Dutch people speak English, learning Dutch can be very beneficial for daily life and integration.</p>
        </div>
      </div>
    ),
    steps: (
      <div className="flex flex-col items-center gap-5 w-full px-5 md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Arrive in Germany:</h2>
          <p>With your valid passport or ID.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Find Accommodation:</h2>
          <p>ecure a place to live. Temporary accommodation may be necessary initially.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Register Your Address (Anmeldung): </h2>
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
          <h2 className="font-bold">Seek Employment: </h2>
          <p>WIf you haven't secured a job beforehand, start applying. Utilize job websites, networking, and recruitment agencies.</p>
        </div>
      </div>
    ),
    recommendations: (
      <div className="flex flex-col items-center gap-5 w-full px-5 md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Taxes:  </h2>
          <p>Understand the German tax system and ensure you register with the tax authorities (Finanzamt).</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Social Security:  </h2>
          <p>Familiarize yourself with the German social security system, including benefits and pension schemes.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Driver’s License: </h2>
          <p>If you plan to drive, check the regulations for using or exchanging your Italian driver’s license.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Language Courses: </h2>
          <p>Consider enrolling in German language courses to improve your language skills, which can aid in integration and job prospects.</p>
        </div>
      </div>
    )
  };

  return (
    <main className="min-h-[75vh] py-20 flex flex-col justify-center items-center">
      <h1 className="font-bold mb-10 text-xl">Países Bajos</h1>
      <div className="max-w-[800px] px-5 py-10 bg-[#FAFAFA] transition duration-300 hover:shadow-xl border w-full flex flex-col justify-center items-center">
        <div className="flex max-md:flex-col max-md:gap-0 justify-center gap-16 items-center w-full border ">
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 ${activeSection === 'prerequisites' ? 'font-bold bg-white w-full text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('prerequisites')}
          >
            Prerequisitos
          </h1>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 ${activeSection === 'steps' ? 'font-bold bg-white w-full text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('steps')}
          >
            Pasos a seguir
          </h1>
          <h1
            className={`cursor-pointer text-sm md:text-lg py-3 ${activeSection === 'recommendations' ? 'font-bold bg-white w-full text-center' : 'hover:text-blue'}`}
            onClick={() => setActiveSection('recommendations')}
          >
            Recomendaciones extras
          </h1>
        </div>
        {sections[activeSection]}
      </div>
    </main>
  );
}

export default Page;

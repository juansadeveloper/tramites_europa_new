"use client";
import React, { useState } from 'react';

function Page() {
  const [activeSection, setActiveSection] = useState('prerequisites');

  const sections = {
    prerequisites: (
      <div className="flex flex-col items-start gap-5 w-full md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Valid Passport or National ID</h2>
          <p>Ensure your passport or national ID card is valid for the duration of your stay in Liechtenstein.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Residence Permit</h2>
          <p>Liechtenstein has a quota system for residence permits, making it more difficult for EU/EEA citizens to obtain a permit compared to other EEA countries. You must apply for a residence permit, which can be challenging due to the limited number of permits issued annually. This often requires having a job lined up before you apply.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Employment</h2>
          <p>You need a work permit to be employed in Liechtenstein. Securing a job beforehand is crucial as employers typically assist in obtaining the necessary permits. Cross-border commuters from neighboring countries (Switzerland and Austria) are common, and many work in Liechtenstein while residing in these countries.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Health Insurance</h2>
          <p>Health insurance is mandatory in Liechtenstein. You must register with a health insurance provider within three months of arrival.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Housing</h2>
          <p>Arrange accommodation before or soon after your arrival. The housing market can be competitive, and prices are generally high, so it&apos;s advisable to start looking early.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Bank Account</h2>
          <p>Opening a bank account in Liechtenstein is recommended for salary payments and everyday transactions. You will need a valid ID, proof of address, and proof of employment to open an account.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Language</h2>
          <p>While many people in Liechtenstein speak German, English is also widely understood. Proficiency in German is beneficial for daily life, integration, and job opportunities.</p>
        </div>
      </div>
    ),
    steps: (
      <div className="flex flex-col items-center gap-5 w-full md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Arrive in Liechtenstein:</h2>
          <p>With your valid passport or ID.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Find Accommodation:</h2>
          <p>Secure a place to live. Temporary accommodation may be necessary initially.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Obtain a Residence Permit:</h2>
          <p>Apply for a residence permit. Ensure you have a job offer to improve your chances of securing a permit.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Get Health Insurance:</h2>
          <p>Register with a health insurance provider within three months of arrival.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Open a Bank Account:</h2>
          <p>Using your ID, proof of address, and proof of employment.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Seek Employment:</h2>
          <p>If you haven&apos;t secured a job beforehand, it may be challenging to obtain a residence permit. Utilize job websites, networking, and recruitment agencies.</p>
        </div>
      </div>
    ),
    recommendations: (
      <div className="flex flex-col items-center gap-5 w-full md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Taxes:</h2>
          <p>Understand the Liechtenstein tax system and ensure you register with the local tax authorities.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Social Security:</h2>
          <p>Familiarize yourself with the Liechtenstein social security system, including benefits and pension schemes.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Driver&apos;s License:</h2>
          <p>If you plan to drive, check the regulations for using or exchanging your EU driver&apos;s license. EU licenses are generally recognized in Liechtenstein.</p>
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
      <h1 className="font-bold mb-10 text-xl">Liechtenstein</h1>
      <div className="max-w-[800px] px-5 py-10 bg-[#FAFAFA] transition duration-300 hover:shadow-xl border w-full flex flex-col justify-center items-center">
        <div className="flex max-md:flex-col max-md:gap-0 justify-between items-center w-full max-w-[600px] border">
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


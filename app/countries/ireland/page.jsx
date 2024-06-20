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
          <h2 className="font-bold">Registration with Local Authorities</h2>
          <p>While there is no mandatory requirement to register with local authorities for EU citizens, it is advisable to inform them of your residence for administrative purposes.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Personal Public Service (PPS) Number</h2>
          <p>You need to apply for a Personal Public Service (PPS) number, which is essential for tax, social welfare, public services, and employment purposes. You can apply for a PPS number at a Social Welfare office.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Health Insurance</h2>
          <p>While public healthcare is available, it is advisable to have private health insurance. If you are employed, you may be covered by your employer&apos;s health insurance plan.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Employment</h2>
          <p>As an EU citizen, you are free to work without needing a work permit. Employers will require your PPS number and proof of identity.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Housing</h2>
          <p>Arrange accommodation before or soon after your arrival. The housing market can be competitive, particularly in larger cities like Dublin, so it&apos;s advisable to start looking early.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Bank Account</h2>
          <p>Opening an Irish bank account is recommended for salary payments and everyday transactions. You will need a PPS number, a valid ID, and proof of address to open an account.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Language</h2>
          <p>English is the primary language spoken in Ireland, so proficiency in English is important for daily life and work.</p>
        </div>
      </div>
    ),
    steps: (
      <div className="flex flex-col items-center gap-5 w-full px-5 md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Arrive in Ireland:</h2>
          <p>With your valid passport or ID.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Find Accommodation:</h2>
          <p>Secure a place to live. Temporary accommodation may be necessary initially.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Apply for a PPS Number:</h2>
          <p>As soon as possible after arriving. Visit the Social Welfare office with your ID and proof of address.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Get Health Insurance:</h2>
          <p>If employed, check with your employer about health insurance coverage; otherwise, arrange private health insurance.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Open a Bank Account:</h2>
          <p>Using your PPS number, ID, and proof of address.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Seek Employment:</h2>
          <p>If you haven&apos;t secured a job beforehand, start applying. Utilize job websites, networking, and recruitment agencies.</p>
        </div>
      </div>
    ),
    recommendations: (
      <div className="flex flex-col items-center gap-5 w-full px-5 md:px-20 mt-20">
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Taxes:</h2>
          <p>Understand the Irish tax system and ensure you register with the Revenue Commissioners.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Social Security:</h2>
          <p>Familiarize yourself with the Irish social security system, including benefits and pension schemes.</p>
        </div>
        <div className="bg-white p-4 rounded shadow w-full">
          <h2 className="font-bold">Driver&rsquo;s License:</h2>
          <p>If you plan to drive, check the regulations for using or exchanging your Italian driver&rsquo;s license.</p>
        </div>
      </div>
    )
  };

  return (
    <main className="min-h-[75vh] py-20 flex flex-col justify-center items-center">
      <h1 className="font-bold mb-10 text-xl">Ireland</h1>
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

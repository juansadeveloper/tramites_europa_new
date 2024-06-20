"use client";
import React from 'react';
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-85">
            <div className="relative w-full max-w-[500px] mx-4 my-6 md:mx-auto">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <div className='flex flex-col items-start'>
                    <h3 className="text-xl font-bold md:text-2xl">Thanks for your feedback!</h3>
                    <p className='ml-1 mt-2 text-sm md:text-base text-neutral-500'>It&apos;s very helpful for our project improvement.</p>
                  </div>
                  <div onClick={() => setShowModal(false)}><IoClose size={24} className='cursor-pointer text-xl bg-neutral-100 hover:bg-neutral-300 p-1 rounded-full'/></div>
                </div>
                <div className="relative flex-auto p-6 bg-white md:pl-12 w-full">
                  <form className='flex flex-col gap-3 p-5 max-w-full md:max-w-[400px] w-full rounded-md'>
                    <div className='flex flex-col gap-3 md:flex-row md:items-center md:gap-5'>
                      <input className='p-3 rounded text-sm border w-full md:max-w-[180px]' type='text' placeholder='First and Last Name' required />
                      <input className='p-3 rounded text-sm border w-full md:max-w-[180px]' type='email' placeholder='E-mail' required />
                    </div>
                    <textarea className='p-3 rounded text-sm border' placeholder='Message' required rows={5}></textarea>
                  </form>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-gray-300 rounded-b">
                  <button onClick={() => setShowModal(false)} type="submit" className='w-full max-w-[250px] bg-black text-darkwhite py-3 px-5 border rounded hover:bg-blue hover:text-darkwhite transition duration-300'>
                    Send Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

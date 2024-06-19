"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

import Modal from './Modal'
// import Menu from './Menu';

import { IoMenuSharp } from "react-icons/io5";

import { TfiWorld } from "react-icons/tfi"
import { MenuIcon } from 'lucide-react';



function Navbar() {

  const [showModal, setShowModal] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }


  return (
    <main  className='flex justify-between items-center h-[10vh] px-3 md:p-6 bg-background border-b'>
        <Link href="/">
          <div className='flex justify-center items-center gap-3'>
            <h1 className=' rounded-full bg-black text-white font-bold p-3 text-2xl'>TE</h1>
            <h1 className='font-bold text-2xl tracking-tighter'><span className='font-light'>Trámites</span> Europa</h1>
          </div>
        </Link>
        <div className='flex justify-center items-center gap-5 '>
        <div className="relative mt-[6px]">
          <button 
            onClick={toggleDropdown} 
            className="text-black focus:outline-none"
          >
           <TfiWorld size={22} className='hover:text-blue cursor-pointer transition duration-300'/>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg z-50">
              <ul className="py-1 text-gray-700">
                <li>
                  <Link href="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100">English</Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100">Español</Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100">Français</Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100">Deutsch</Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDropdown} className="block px-4 py-2 hover:bg-gray-100">中文</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
            
            <p onClick={() => setShowModal(true)} className='max-lg:hidden cursor-pointer py-1 px-5 border hover:border-blue bg-container rounded-full hover:text-blue transition duration-300'>Feedback</p>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            
        </div>
        {/* <MenuIcon size={28} onClick={() => setShowMenu(true)} className='cursor-pointer lg:hidden'/>
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} /> */}
        
    </main>
  )
}

export default Navbar
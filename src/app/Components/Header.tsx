"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  
      const [isClick, setIsClick] = useState(false);

      const toggleNavbar = () => {
        setIsClick(!isClick)
      }
  return (
    <>
    <nav className='bg-[#F7F7F7]'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex">
            <Image src={"/Frame 1.png"} alt='Logo' width={32} height={30}/>
            <Link href={"/"} className='text-black ml-2 font-bold text-2xl font-sans'>
            Ddsgnr 
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center bg-white space-x-4">
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Home
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Courses
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Services
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Achievement
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            About us
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Testimonial
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold border-2 px-4 border-black'>
            Login
            </Link>
            <Link href={"/"} className='text-white bg-black rounded-lg p-2 font-semibold border-2 px-4 border-black'>
            Signup
            </Link>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black
          focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black'
          onClick={toggleNavbar}> 
          {isClick ? (
            <svg  className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"/>
</svg>
          ) : (
            <svg  className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"/>
</svg>
          )}
          </button>
        </div>
      </div>
    </div>
    {isClick && (
      <div className="md:hidden bg-white">
        <div className="flex flex-wrap px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Home
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Courses
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Services
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Achievement
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            About us
            </Link>
            <Link href={"/"} className='text-black rounded-lg p-2 font-semibold'>
            Testimonial
            </Link>
        </div>
      </div>
    )}
    </nav>
    </>
  )
}

export default Header
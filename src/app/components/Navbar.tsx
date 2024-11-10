
"use client"
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/assests/profle/logo.jpeg"

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           
          <Image src={logo} alt="mylogo" width={100} height={100} className="w-10"/>
          <span className="ml-3 text-xl">SAIFI SOOMRO</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-blue-700">
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-blue-700">
              About
            </Link>
            <Link href="/skills" className="mr-5 hover:text-blue-700">
              Skills
            </Link>
            <Link href="/projects" className="mr-5 hover:text-blue-700">
              Projects
            </Link>
            <Link href="/contact" className="mr-5 hover:text-blue-700">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            
           Download cv
           <FaArrowAltCircleDown  className="ml-2 text-2xl"/>

          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

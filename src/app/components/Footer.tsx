
import React from "react";
import { FaFacebook , FaInstagram,FaLinkedin,FaYoutube,FaTiktok } from "react-icons/fa";
import Image from "next/image";
import logos from "../../../public/assests/profle/logo.jpeg"


const Footer = () => {
  return (
    <div className="bg-blue-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <Image src={logos} alt="logo" width={100} height={100} className="w-12 rounded-full"/>
            <span className="ml-3 text-xl">Saif Soomro</span>
          </a>
          <p className=" text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 SAIF SOOMRO &copy; All Rights Reserved
           
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-500 flex justify-evenly space-x-2">
              
              <FaFacebook className="text-2xl"/>
              <FaInstagram className="text-2xl"/>
              <FaLinkedin className="text-2xl rounded-lg"/>
              <FaYoutube className="text-2xl"/>
              <FaTiktok className="text-2xl"/>
              
            </a>
           
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

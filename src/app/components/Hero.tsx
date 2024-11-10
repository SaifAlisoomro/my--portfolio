"use client"
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import profile from "../../../public/assests/profle/profle.png"

const Hero = () => {
  return (
    
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            hello ! i am 
              <br className="hidden lg:inline-block" />
              
              
<Typewriter
  options={{
    strings: ['SAif Soomro', 'Passionate Front-End Developer' , 'Specializing in User-Centric Web Design'],
    autoStart: true,
    loop: true,
  }}     

/>          
            </h1>
            <p className="mb-8 leading-relaxed">
             ` Creative and detail-oriented front-end developer with a passion
              for building intuitive, responsive, and accessible web interfaces.
              Skilled in HTML, CSS, JavaScript, and modern frameworks like
              Next.js, with a focus on delivering user-friendly experiences and
              visually appealing designs. Dedicated to continuous learning and
              applying best practices to craft efficient, maintainable code`
            </p>
            <div className="flex justify-center">
             <Link href={"/contact"}>
              <button className="ml-4 inline-flex text-gray-700 bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contact
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image 
              className="object-cover object-center rounded-md mx-auto w-[15rem]"
              width={500}
              height={500}
              alt="hero"
              src={profile}
            />
          </div>
        </div>
      </section>
    
  );
};

export default Hero;

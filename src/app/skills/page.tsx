import React from 'react'
import { FaHtml5,FaCss3,FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs,SiCanva } from "react-icons/si";


const Skills = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
       My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">
     
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
              < FaHtml5 className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            HTML
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[100%]'></div>
            
           </div>
           <p className='font-bold text-blue-500 text-right'>100%</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              < FaCss3 className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            css
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[85%]'></div>
            
           </div>
           <p className='font-bold text-blue-500 text-right'>85%</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
              < IoLogoJavascript className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            JavaScript
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[50%]'></div>
            
           </div>
           <p className='font-bold text-blue-500 text-right'>50%</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              < SiNextdotjs className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Next Js
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[50%]'></div>
            
           </div>
           <p className='font-bold text-blue-500 text-right'>50%</p>
          
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
              < SiCanva className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            Canva
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[70%]'></div>
            
           </div>
           <p className='font-bold text-blue-500 text-right'>70%</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
              < FaWordpress className='text-2xl' />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
            WordPress
            </h2>
          </div>
          <div className="flex-grow">
           <div className='relative h-1 w-full bg-gray-300 rounded-xl'>
            <div className='absolute bg-blue-500 h-1 rounded-xl w-[45%]'></div>
            
           </div>
           <p className='font-bold text-blue-500 text-right'>45%</p>
          
          </div>
        </div>
      </div>
     
     
     
     
    </div>
  </div>
</section>

    </div>
  )
}

export default Skills

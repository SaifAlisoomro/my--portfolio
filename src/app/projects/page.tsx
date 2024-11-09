import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              "In my portfolio, I showcase a collection of projects deployed on
              Vercel, highlighting my skills in front-end development and my
              commitment to building functional, visually appealing web
              applications. Each project reflects my experience with modern
              tools like Next.js, Tailwind CSS, and JavaScript, with a focus on
              responsive design and user-friendly interfaces. Hosted on Vercel
              for optimal performance, these projects demonstrate my approach to
              creating accessible and maintainable code, bringing unique ideas
              to life for various users and industries."
            </p>
          </div>
          <div className="flex flex-wrap -m-5 -m-t[5rem]">
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/work/image1.jpeg.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    figma design
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    design
                  </h1>
                  <p className="leading-relaxed">
                    My Figma design project showcases a modern, user-centered
                    interface with a clean aesthetic and intuitive layout. This
                    design highlights my focus on creating visually cohesive,
                    accessible experiences tailored for usability.
                  </p>
                  <Link href={"https://my-portfolio-ebon-sigma-77.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Page
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/work/image2.jpeg.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    static Resume Builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Resume
                  </h1>
                  <p className="leading-relaxed">
                    A simple, static resume builder that lets users create
                    clean, professional resumes quickly. Built for ease of use,
                    it allows customization of key sections and is perfect for
                    those looking for a streamlined, no-fuss resume solution
                  </p>
                  <Link href={"https://static-resume-builder-five.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Page
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assests/work/image3.jpeg.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    dynamic Resume builder
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    dynamic Resume
                  </h1>
                  <p className="leading-relaxed">
                    A dynamic resume builder designed for flexibility and
                    interactivity, allowing users to customize content, add a
                    profile picture, and make real-time edits. This tool
                    provides an adaptable, user-friendly way to create and
                    personalize professional resumes suited to various
                    industries.
                  </p>
                  <Link href={"https://dynamic-resume-builder-ten-rho.vercel.app/"}>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Page
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

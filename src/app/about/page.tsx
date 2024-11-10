import React from "react";
import Image from "next/image";
import logo from "../../../public/assests/profle/profle.png"

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="Profile"
              src={logo} // Correct relative path
              width={400}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a master’s student in Art at Shah Abdul Latif University,
              with a deep interest in front-end development. My journey merges
              creativity and technology, allowing me to transform design
              concepts into engaging, responsive web experiences. Skilled in
              HTML, CSS, JavaScript, and frameworks like Next.js, I focus on
              building accessible and visually captivating interfaces. My art
              background sharpens my eye for detail and aesthetics, while my
              development skills enable me to craft user-friendly digital
              spaces. Currently, I’m showcasing my projects on Vercel, driven by
              a passion for blending art and technology in meaningful ways.
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
                Front-End Developer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

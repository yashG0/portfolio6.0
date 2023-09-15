
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Typewriter from 'typewriter-effect';

const Hero = ({ dark }) => {
  return (
    <>
      <div name='hero' className={`w-full h-screen ${dark ? 'bg-gray-700 text-gray-200' : 'text-gray-700 bg-gray-200'}`}>

        {/* CONTAINER */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-f1">
          <p className='text-blue-500'>Hi, My Name is</p>
          <h1 className={`text-4xl sm:text-7xl font-bold ${dark ? 'text-gray-200' : 'text-gray-800'}  font-f1`}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Yash Gaurkar').start();
              }} />

          </h1>
          <h2 className={`text-3xl sm:text-7xl font-bold ${dark ? 'text-gray-400' : 'text-gray-600'} font-f1`}>
            <Typewriter
              options={{
                strings: ["Web Developer", 'Programmer', 'Freelancer', 'Designer'],
                autoStart: true,
                loop: true,
              }}
            />

          </h2>
          <p className={`font-f1 ${dark ? 'text-gray-400' : 'text-gray-600'} py-4 max-w-[700px]`}>As a Full Stack Developer with a BCA degree and a strong background in web development, I am dedicated to creating dynamic and user-friendly web experiences. I have a passion for crafting innovative solutions that not only meet but exceed user expectations..</p>

          <div>
            <button className={`${dark ? 'hover:bg-blue-500 border-blue-500' : 'hover:text-gray-200 border-blue-500 hover:bg-blue-500'} group border-2 px-6 py-3 my-2 flex items-center duration-150 outline-none`} onClick={() => window.open('resume.pdf', '_blank')}>View Resume
              {/* <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-2' /></span> */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
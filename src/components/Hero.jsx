import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <>
      <div name='hero' className="bg-[#0a192f] w-full h-screen">

        {/* CONTAINER */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-f1">
          <p className='text-[#7EE39D]'>Hi, My Name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] font-f1 '>Yash Gaurkar</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] font-f1'>I'm a Full Stack Developer.</h2>
          <p className='font-f1 text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos repudiandae odit totam ut nihil nostrum ipsa eveniet facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit. </p>

          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7EE39D] hover:border-[#7EE39D] hover:text-black duration-150 outline-none' onClick={()=>window.open('URL_OF_YOUR_UPDATED_RESUME_FILE', '_blank')}>View Resume
              <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-2' /></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

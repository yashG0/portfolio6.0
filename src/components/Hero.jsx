import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <>
      <div name='hero' className="w-full h-screen bg-slate-800 text-slate-200">

        {/* CONTAINER */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-f1">
          <p className='text-[#7EE39D]'>Hi, My Name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] font-f1 '>Yash Gaurkar</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] font-f1'>I'm a Full Stack Developer.</h2>
          <p className='font-f1 text-[#8892b0] py-4 max-w-[700px]'>As a Full Stack Developer with a BCA degree and a strong background in web development, I am dedicated to creating dynamic and user-friendly web experiences. I have a passion for crafting innovative solutions that not only meet but exceed user expectations..</p>

          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#7EE39D] hover:border-[#7EE39D] hover:text-black duration-150 outline-none' onClick={()=>window.open('resume.pdf', '_blank')}>View Resume
              <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-2' /></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

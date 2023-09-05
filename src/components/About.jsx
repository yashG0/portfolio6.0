import React from 'react';

const About = () => {
  return (
    <>
      <div name='about' className="w-full h-screen bg-slate-700 text-gray-300 font-f1">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4 '>
              <p className='text-4xl font-bold inline border-b-4 border-[#7CD795]'>About</p>
            </div>

            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold '>
              <p className=''>Hi, I'm Freelancer, nice to meet you, please take a look around</p>
            </div>
            <div>
              <p>Hello, I'm Yash Gaurkar, a passionate Full Stack Developer with a strong foundation in computer science and a BCA degree. I've embarked on an exciting journey in the world of web development, where I strive to turn ideas into interactive and user-friendly web experiences.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;

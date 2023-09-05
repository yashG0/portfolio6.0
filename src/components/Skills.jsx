import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Image from 'next/image';

const Skills = () => {

  return (
    <>
      <div name="skills" className='w-full  h-screen bg-slate-700 text-gray-300'>

        {/* CONTAINER */}
        <div className='mx-auto max-w-[1000px] p-4 flex flex-col justify-center w-full h-screen '>
          <div className="">
            <p className='text-4xl py-4 font-bold border-b-4 border-[#7CD795]'>Experience</p>
            <p className='py-4 '>// These are the Technologies I've worked with</p>
          </div>


          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">


            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={HTML} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto' />
              <p className='my-4 '>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={CSS} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={JavaScript} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={GitHub} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={Mongo} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>MongoDB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={ReactImg} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>ReactJs</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={Tailwind} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>Tailwind</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
              <Image src={Node} height={200} width={200} alt='htmlIcon' className='w-20 mx-auto ' />
              <p className='my-4 '>Node</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

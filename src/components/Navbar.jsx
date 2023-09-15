import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo5.png';
import { Link } from 'react-scroll';
import Image from 'next/image';

import { CgMoon, CgSun } from 'react-icons/cg';

const Navbar = ({ dark, setDark }) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const toggleDarkMode = () => {
        setDark(!dark)
    }

    const textShadow = {
        'text-shadow': '.8px .8px 1px blue'
    }
    const textShadowNone = {
        'text-shadow': 'none'
    }

    return (
        <>
            <div className={`fixed w-full h-[80px] flex justify-between items-center px-4  z-10 ${dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}>
                <div className={`text-2xl sm:text-4xl font-bold text-blue-500 cursor-pointer`} style={!dark ? textShadow : textShadowNone}>
                    {/* <Image src={Logo} alt='logo' width={180} height={180} /> */}
                    <Link to='hero' duration={200} smooth={true}>
                        My Portfolio
                    </Link>
                </div>

                {/* MENU */}

                <ul className='hidden md:flex'>
                    <li className='hover:text-blue-500 text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="hero" smooth={true} duration={400}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="about" smooth={true} duration={400}>
                            About
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="skills" smooth={true} duration={400}>
                            Skills
                        </Link>
                    </li>
                    <li className='hover:text-blue-500 text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="project" smooth={true} duration={400}>
                            Projects
                        </Link>
                    </li>

                    <li className='hover:text-blue-500 text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="contact" smooth={true} duration={400}>
                            Contact
                        </Link>
                    </li>

                </ul>

                <div className={`right-0 top-20 ${dark ? 'bg-white text-black' : 'bg-black text-white'} absolute rounded-l-full active:translate-x-4 bg-black p-2 duration-300 cursor-pointer`} onClick={toggleDarkMode}>{dark ? <CgSun /> : <CgMoon />}</div>


                {/* HAMBURGER */}
                <div className={`${dark ? 'text-gray-200' : 'text-gray-700'} md:hidden z-30 cursor-pointer `} onClick={handleClick}>
                    {!nav ? <FaBars size={25} /> : <FaTimes size={25} className={`${dark ? '' : 'text-gray-200'}`} />}
                </div>

                {/* MOBILE MENU */}

                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-700 text-gray-200 flex flex-col justify-center items-center z-20'}>
                    <li className='py-6 text-4xl hover:text-blue-500 duration-100'>
                        <Link onClick={handleClick} to="hero" smooth={true} duration={400}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-blue-500 duration-100'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={400}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-blue-500 duration-100'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={400}>
                            Skills
                        </Link>
                    </li>
                    {/* <li className='py-6 text-4xl hover:text-blue-500 duration-100'>Work</li> */}
                    <li className='py-6 text-4xl hover:text-blue-500 duration-100'>
                        <Link onClick={handleClick} to="project" smooth={true} duration={400}>
                            Projects
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-blue-500 duration-100'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={400}>
                            Contact
                        </Link>
                    </li>

                </ul>


                {/* SOCIAL ICONS */}
                <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0c83e9]' >
                            <Link onClick={() => window.open('https://www.facebook.com/', '_blank')} className='flex justify-between items-center w-full text-gray-300' > Facebook <FaFacebook size={30} /> </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                            <Link onClick={() => window.open('https://www.github.com/', '_blank')} className='flex justify-between items-center w-full text-gray-300'> Github <FaGithub size={30} /> </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <Link onClick={() => window.open('https://www.gmail.com/', '_blank')} className='flex justify-between items-center w-full text-gray-300'> Mail <HiOutlineMail size={30} /> </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <Link onClick={() => window.open('resume.pdf', '_blank')} className='flex justify-between items-center w-full text-gray-300'> Resume <BsFillPersonLinesFill size={30} /> </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

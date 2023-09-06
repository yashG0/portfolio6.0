import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo3.png';
import { Link } from 'react-scroll';
import Image from 'next/image';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <>
            <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-gray-300 z-10">
                <div className="">
                    <Image src={Logo} alt='logo' width={180} height={180} />
                </div>

                {/* MENU */}

                <ul className='hidden md:flex'>
                    <li className='hover:text-[#7EE39D] text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="hero" smooth={true} duration={400}>
                            Home
                        </Link>
                    </li>
                    <li className='hover:text-[#7EE39D] text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="about" smooth={true} duration={400}>
                            About
                        </Link>
                    </li>
                    <li className='hover:text-[#7EE39D] text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="skills" smooth={true} duration={400}>
                            Skills
                        </Link>
                    </li>

                    <li className='hover:text-[#7EE39D] text-xl hover:translate-y-1 hover:duration-100 duration-150 hover:scale-105 '>
                        <Link to="contact" smooth={true} duration={400}>
                            Contact
                        </Link>
                    </li>
                </ul>


                {/* HAMBURGER */}
                <div className="md:hidden z-30 cursor-pointer" onClick={handleClick}>
                    {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
                </div>

                {/* MOBILE MENU */}

                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-20'}>
                    <li className='py-6 text-4xl hover:text-[#7EE39D] duration-100'>
                        <Link onClick={handleClick} to="hero" smooth={true} duration={400}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-[#7EE39D] duration-100'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={400}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-[#7EE39D] duration-100'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={400}>
                            Skills
                        </Link>
                    </li>
                    {/* <li className='py-6 text-4xl hover:text-[#7EE39D] duration-100'>Work</li> */}
                    <li className='py-6 text-4xl hover:text-[#7EE39D] duration-100'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={400}>
                            Contact
                        </Link>
                    </li>
                </ul>


                {/* SOCIAL ICONS */}
                <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                    <ul>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0c83e9]' >
                            <Link onClick={() => window.open('https://www.facebook.com/','_blank')}    className='flex justify-between items-center w-full text-gray-300' > Facebook <FaFacebook size={30} /> </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                            <Link onClick={() => window.open('https://www.github.com/','_blank')} className='flex justify-between items-center w-full text-gray-300'> Github <FaGithub size={30} /> </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                            <Link onClick={() => window.open('https://www.gmail.com/','_blank')} className='flex justify-between items-center w-full text-gray-300'> Mail <HiOutlineMail size={30} /> </Link>
                        </li>
                        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                            <Link onClick={() => window.open('resume.pdf','_blank')} className='flex justify-between items-center w-full text-gray-300'> Resume <BsFillPersonLinesFill size={30} /> </Link>
                        </li>


                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;

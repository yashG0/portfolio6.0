import Image from 'next/image';
import React from 'react';
import blog from '../assets/blog.jpg';
import weather from '../assets/weather.jpg';
import currency from '../assets/currency.jpg';
import login from '../assets/login.jpg';

const Project = ({ dark }) => {
    const projects = [
        {
            id: 0,
            name: 'Weather App',
            link: 'https://heartfelt-squirrel-e3edcd.netlify.app/',
            size: 600,
            link_img: weather
        },
        {
            id: 1,
            name: 'Blog App',
            link: 'https://deluxe-tanuki-889eb0.netlify.app/',
            size: 601,
            link_img: blog
        },
        {
            id: 2,
            name: 'Currency Converter',
            link: 'https://musical-cucurucho-121071.netlify.app/',
            size: 602,
            link_img: currency
        },
        {
            id: 3,
            name: 'Login Page',
            link: 'https://fascinating-crumble-aca16b.netlify.app/',
            size: 603,
            link_img: login
        },
    ];

    const handleOpenLink = (link) => {
        window.open(link, '_blank');
    };

    return (
        <div name="project" className={`${dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'} h-screen w-full`}>
            <div className="mx-auto max-w-[1000px] p-4">
                <p className="text-4xl py-4 font-bold border-b-4 border-blue-500 mt-20">Projects</p>
                <p className="py-4 ">
                    {/* These are the applications I've worked on. Below, you'll find detailed descriptions of each project: */}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-9 text-center py-8">
                    {projects.map(({ id, name, link, link_img }) => (
                        <div
                            className="shadow-md shadow-[#040c16] bg-gray-700 hover:scale-105 duration-300"
                            key={id}
                            id={id}
                        >
                            <div className="w-full p-2" onClick={() => handleOpenLink(link)}>
                                <Image
                                    src={link_img}
                                    width={250}
                                    height={250}
                                    style={{ cursor: 'pointer' }}
                                    loading='lazy'
                                    className=''
                                />
                            </div>
                            <div className="text-xl py-4 text-gray-200">{name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;

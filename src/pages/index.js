import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Head from 'next/head'
import { useState } from 'react'





export default function Home() {
  const [dark, setDark] = useState(true);


  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Navbar dark={dark} setDark={setDark}/>
      <div className=''>
        <Hero dark={dark}/>
        <About dark={dark}/>
        <Skills dark={dark}/>
        <Project dark={dark}/>
        <Contact dark={dark}/>

      </div>
    </>
  )
}

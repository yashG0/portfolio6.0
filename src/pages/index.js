import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Social from '@/components/Social'
import Head from 'next/head'
import { useState } from 'react'





export default function Home() {
  const [dark, setDark] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <>
      <Head>
        <title>Yash's Portfolio</title>
      </Head>

      <Navbar dark={dark} setDark={setDark} nav={nav} setNav={setNav} />
      <div className='' onClick={() => setNav(false)}>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Project dark={dark} />
        <Social dark={dark} />
        <Contact dark={dark} />
      </div>
    </>
  )
}

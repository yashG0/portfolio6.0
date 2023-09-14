import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import Skills from '@/components/Skills'
import Head from 'next/head'

// import Work from '@/components/Work'
// import Image from 'next/image'



export default function Home() {
  
  return (
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <Navbar />
      <div className=''>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        
      </div>
    </>
  )
}

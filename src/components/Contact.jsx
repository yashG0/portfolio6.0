import React from 'react'

const Contact = () => {
  return (
   <>
    <div name='contact' className='w-full sm:h-screen bg-slate-700 flex justify-center items-center p-4'>
      <form action="https://getform.io/f/e1c71e22-0753-4800-a681-2ffaeb6f3102" className='sm:mt-36 flex flex-col max-w-[600px] w-full' method='POST'>
          <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4 border-[#7CD795] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>// Submit the Form Below or shoot me an Email - myemail@gmail.com</p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='name' />
          {/* <input type="email" placeholder='Email' name='name' /> */}
          <textarea className='p-2 bg-[#ccd6f6] ' name="Message" id="" rows="6" placeholder='Your Message'></textarea>
          <button className='text-white border-2 hover:bg-[#ccd6f6] hover:border-[#ccd6f6] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>

    </div>
   </>
  )
}

export default Contact
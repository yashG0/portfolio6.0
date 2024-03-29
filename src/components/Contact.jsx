import React from 'react'

const Contact = ({ dark }) => {
  return (
    <>
      <div name='contact' className={`w-full ${dark ? 'bg-gray-700 text-gray-200' : 'text-gray-700 bg-gray-200'} flex justify-center items-center p-4`}>
        <form action="https://getform.io/f/e1c71e22-0753-4800-a681-2ffaeb6f3102" className={`${dark ? 'md:bg-gray-800/20' : 'md:bg-gray-300/80'} sm:mt-36 flex flex-col max-w-[600px] w-full px-6 pt-2 rounded-md`} method='POST'>
          <div className='pb-8 mt-32 sm:mt-0'>
            <p className={`${dark ? 'text-gray-200' : 'text-gray-700'} text-4xl font-bold inline sm:text-center sm:block w-fit sm:mx-auto border-b-4 border-blue-500`}>Contact</p>
            <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} py-4`}>// Submit the Form Below or shoot me an Email - myemail@gmail.com</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <input className={`outline-none md:border-none ${dark ? 'text-gray-700 bg-gray-600 border border-gray-500' : 'md:border-none border border-gray-300'} w-full p-2`} type="text" placeholder='Name' name='name' />
            <input className={`outline-none ${dark ? 'text-gray-700 bg-gray-600 border border-gray-500' : 'md:border-none border border-gray-300'} my-3 w-full p-2`} type="email" placeholder='Email' name='name' />
            {/* <input type="email" placeholder='Email' name='name' /> */}
            <textarea className={`outline-none ${dark ? 'text-gray-700 bg-gray-600 border border-gray-500' : 'md:border-none border border-gray-300'} w-full p-2`} name="Message" id="" rows="6" placeholder='Your Message'></textarea>
          </div>
          <button className={`${dark ? 'hover:bg-blue-500 border-blue-500' : 'border-blue-500 hover:bg-blue-500'} border-2 px-4 py-3 my-8 mx-auto flex items-center`}>Let's Collaborate</button>
        </form>
      </div>
    </>
  )
}

export default Contact
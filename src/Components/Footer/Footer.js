import React from 'react'
import './Footer.css'
function Footer() {

  return (
    <div className='Footer flex flex-col  items-center justify-center'>
    
    <section className='mt-6 md:mt-16'>
        <a className='qn-link' href='' >Questions? Contact us.</a> 
        </section>

        <section className='mt-5 md:mt-10 flex gap-20 justify-center'>
            <div className='text-gray-600 sm:mb-14 flex flex-col gap-3 items-center'>
           <p className='hover:text-blue-500 cursor-pointer'>FAQ</p>
           <p className='hover:text-blue-500 cursor-pointer'>Help Center</p>
           <p className='hover:text-blue-500 cursor-pointer'>Account</p>
           <p className='hover:text-blue-500 cursor-pointer'>Media Center</p>
           </div>
           
           <div className='text-gray-600 hidden sm:mb-14 md:visible md:flex flex-col gap-3 items-center'>
           <p className='hover:text-blue-500 cursor-pointer'>Investor</p>
           <p className='hover:text-blue-500 cursor-pointer'>Jobs </p>
           <p className='hover:text-blue-500 cursor-pointer'>Cookie Preferences</p>
           <p className='hover:text-blue-500 cursor-pointer'>Legal Notices</p>
           </div>
           
           <div className='text-gray-600 hidden sm:mb-14 md:visible md:flex flex-col gap-3 items-center'>
           <p className='hover:text-blue-500 cursor-pointer'>Relations</p>
           <p className='hover:text-blue-500 cursor-pointer'>Terms of Use</p>
           <p className='hover:text-blue-500 cursor-pointer'>Corporate Information</p>
           <p className='hover:text-blue-500 cursor-pointer'>Legal Notices</p>
           </div>
           
           <div className='text-gray-600 hidden sm:mb-14 md:visible md:flex flex-col gap-3 items-center'>
           <p className='hover:text-blue-500 cursor-pointer'>Speed Test</p>
           <p className='hover:text-blue-500 cursor-pointer'>Ways to Watch</p>
           <p className='hover:text-blue-500 cursor-pointer'>Contact US</p>
           <p className='hover:text-blue-500 cursor-pointer'>Legal Notices</p>
           </div>
          
        </section>
        <div className='copyright flex gap-4 my-2 mt-5 md:mt-0'>
        <h1 className='text-gray-400 text-[12px] md:text-xs font-medium '>@2022</h1>
        <a href='https://github.com/Jerin3j' className='text-gray-400 text-[12px] md:text-xs font-medium focus:text-blue-400'>made by Jerin3J</a>
           </div>
    </div>
  )
}

export default Footer

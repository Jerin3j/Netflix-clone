import React from 'react'
import './Footer.css'
function Footer() {

  return (
    <>
    
    <section className='footer '>
        <a className='qn-link' href='' >Questions? Contact us.</a> 
        </section>

        <section className='footer '>
            <div className='foot sm:grid sm:mb-14'>
           <p className='hover:text-blue-500 cursor-pointer'>FAQ</p>
           <p className='hover:text-blue-500 cursor-pointer'>Help Center</p>
           <p className='hover:text-blue-500 cursor-pointer'>Account</p>
           <p className='hover:text-blue-500 cursor-pointer'>Media Center</p>
           </div>
           
           <div className='foot invisible sm:grid sm:mb-14 md:visible '>
           <p className='hover:text-blue-500 cursor-pointer'>Investor</p>
           <p className='hover:text-blue-500 cursor-pointer'>Jobs </p>
           <p className='hover:text-blue-500 cursor-pointer'>Cookie Preferences</p>
           <p className='hover:text-blue-500 cursor-pointer'>Legal Notices</p>
           </div>
           
           <div className='foot invisible sm:grid sm:mb-14 md:visible'>
           <p className='hover:text-blue-500 cursor-pointer'>Relations</p>
           <p className='hover:text-blue-500 cursor-pointer'>Terms of Use</p>
           <p className='hover:text-blue-500 cursor-pointer'>Corporate Information</p>
           <p className='hover:text-blue-500 cursor-pointer'>Legal Notices</p>
           </div>
           
           <div className='foot invisible sm:grid sm:mb-14 md:visible'>
           <p className='hover:text-blue-500 cursor-pointer'>Speed Test</p>
           <p className='hover:text-blue-500 cursor-pointer'>Ways to Watch</p>
           <p className='hover:text-blue-500 cursor-pointer'>Contact US</p>
           <p className='hover:text-blue-500 cursor-pointer'>Legal Notices</p>
           </div>
        </section>
    </>
  )
}

export default Footer

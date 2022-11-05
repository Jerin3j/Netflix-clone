import React from 'react'
import './Footer.css'
function Footer({opts,nyc}) {

  return (
    <>
    <div className='footer-nf'>
     {nyc ? <a className='qn-link-nf ' href='' >Questions? Contact us.</a> :""}
      <div className='footer-rows-nf'>
          <div className='link-1-nf'> 
           { opts.map( obj=>
               
                <a className='foot ' href="" > {obj} </a>
           )}
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer

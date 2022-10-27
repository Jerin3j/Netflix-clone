import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
           <img className='title-logo' src="https://www.themoviedb.org/t/p/original/mdjqHbSttjMci0OcCNdXSfQc8YK.png" alt="title" srcset="" />
            <div className='banner_button'>
              <button className='button'>Play</button>
              <button className='button'>My List</button>
            </div>
            <h1 className='description'>With millions of euros and their lives on the line,nine robbers attempt to pull off the greatest heist of all time</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner

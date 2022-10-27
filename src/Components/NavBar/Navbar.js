import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
       <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Navbar" />
       <ul className='nav-options'>
        <li className='options'>Home</li>
        <li className='options'>TV Shows</li>
        <li className='options'>Movies</li>
        <li className='options'>Recently Added</li>
        <li className='options'>My List</li>
       </ul>
       <ul className='nav-options2'>
         <li className='options fa-sharp fa-solid fa-magnifying-glass '></li>
         <li className='options'>KIDS</li>
         <li className='options'>DVD</li>
         <li className='options fa-solid fa-bell'></li>
       </ul> 
       <img className='avatar-logo'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
      
    </div>
  )/**/
}

export default Navbar

import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar-nf">
       <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Navbar" />
       <ul className='nav-options'>
        <li className='options-nf'>Home</li>
        <li className='options-nf'>TV Shows</li>
        <li className='options-nf'>Movies</li>
        <li className='options-nf'>Recently Added</li>
        <li className='options-nf'>My List</li>
       </ul>
       <ul className='nav-options2'>
         <li className='options-nf fa-sharp fa-solid fa-magnifying-glass '></li>
         <li className='options-nf'>KIDS</li>
         <li className='options-nf'>DVD</li>
         <li className='options-nf fa-solid fa-bell'></li>
       </ul> 
       <img className='avatar-logo'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
      
    </div>
  )/**/
}

export default Navbar

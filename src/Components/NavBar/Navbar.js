import React from 'react'
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar-nf ">
       <img className='netflix-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Navbar" />
       <ul className='nav-options'>
        <li className='options-nf md:ml-7'>Home</li>
        <li className='options-nf md:ml-7 hidden-visible md:visible'>TV Shows</li>
        <li className='options-nf md:ml-7 '>Movies</li>
        <li className='options-nf md:ml-7 hidden-visible md:visible'>Recently Added</li>
        <li className='options-nf md:ml-7 hidden-visible md:visible'>My List</li>
       </ul>
       <ul className='nav-options2 '>
         <li className='options-nf md:mr-6 fa-sharp fa-solid fa-magnifying-glass '></li>
         <li className='options-nf md:mr-6 hidden-visible md:visible'>KIDS</li>
         <li className='options-nf md:mr-6 hidden-visible md:visible'>DVD</li>
         <li className='options-nf md:mr-6 hidden-visible md:visible fa-solid fa-bell'></li>
       </ul> 
       <img className='avatar-logo'src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
      
    </nav>
  )/**/
}

export default Navbar

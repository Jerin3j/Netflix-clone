import React from 'react';
import "./App.css"
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions, horrors, childrens, dramas, comedies, romantics, wars, tops} from './Constants/urls'
function App() {
  return (
   <div >
    <Navbar/>
    <Banner/>
    <RowPost title="Netflix Originals" url={originals} />
    <RowPost title="Top Rated" isSmall url={tops} />   
    <RowPost title="Action Movies" isSmall url={actions} />
    <RowPost title="Children Movies" isSmall url={childrens} />
    <RowPost title="Dramas " isSmall url={dramas} />
    <RowPost title="Comedy" isSmall url={comedies} />     
    <RowPost title="War" isSmall url={wars} />
    <RowPost title="Romantic Movies" isSmall url={romantics} />                                
    <RowPost title="Horror Movies" isSmall url={horrors} />
    <Footer />      
    </div> 
  );
}

export default App;

import React from 'react';
import "./App.css"
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {originals,actions, horrors, childrens, dramas, comedies, documentries, romantics} from './Constants/urls'
function App() {
  return (
   <div >
    <Navbar/>
    <Banner/>
    <RowPost title="Netflix Originals" url={originals} />
    <RowPost title="Action Movies" isSmall url={actions} />
    <RowPost title="Children Movies" isSmall url={childrens} />
    <RowPost title="Dramas " isSmall url={dramas} />
    <RowPost title="Comedy" isSmall url={comedies} />     
    <RowPost title="Romantic Movies" isSmall url={romantics} />                                
    <RowPost title="Horror Movies" isSmall url={horrors} />
    <RowPost title="Documentry" isSmall url={documentries} />               
    </div> 
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <Banner/>
    <RowPost/>
  </React.StrictMode>
);


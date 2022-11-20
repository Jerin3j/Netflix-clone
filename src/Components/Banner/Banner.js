import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { API_KEY, imgUrl } from "../../Constants/constants";
function Banner() {

    const [movie,setMovie] = useState({})

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response=>{
      console.log(response.data.results[0]) 
      setMovie(response.data.results[0])
    }))
  },[] )
  return (
    <div
     style={{backgroundImage: `url(${movie ? imgUrl+movie.backdrop_path : ""})`}}
     className='banner-nf md:bg-top'>
      
        <div className='content-nf'>
                <h1 className='title-nf  md:text-left md:text-4xl'>{movie?.name || movie.title} </h1>
              <div className='banner_button-nf'>
              <button className='button-nf'>Play</button>
              <button className='button-nf'>My List</button>
            </div>
            <h1 className='description-nf'>{movie.overview} </h1>
        </div>
        <div className="fade-bottom-nf"></div>
    </div>
  )
}

export default Banner

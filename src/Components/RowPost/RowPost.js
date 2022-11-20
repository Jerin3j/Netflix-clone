import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {baseUrl,imgUrl} from '../../Constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies,setMovies]= useState([])
  const [urlId,setUrlId]= useState('')

    useEffect(()=>{
        axios.get(`${baseUrl,props.url}`).then(response=>{
          console.log(response.data.results);
          setMovies(response.data.results);
        })

    }, [])
    const opts = {
      height: '190',
      width: '400',
      align:'center',
      playerVars: {
        autoplay: 1,
        fs:1,
        playsinline:0,
        start:2,
        rel:0,
        
      },
    };
    const handleMovie=(id)=>{
     axios.get(`${baseUrl}/movie/${id}/videos?api_key=b1555777bd6f4ce2f540de40a437c648&language=en-US}`).then(response=>{
        console.log(response.data.results);
        if(response.data.results!==0);
        setUrlId(response.data.results[0])
    })}


  return (
    <div className='row-nf'>
      <h2 className='title-org min-[330px]:text-center lg:text-left '>{props.title}</h2>
      <div className="posters-nf ">
       {   movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'small-poster-nf  sm:max-h-36' : 'poster-nf sm:max-h-52'} src={`${imgUrl+obj.backdrop_path}`} alt={obj.title}  />
             
      )}
       </div>

      {urlId ? <Youtube  className='youtube-frame flex' videoId={urlId.key} opts={opts}  /> : "" }
   
    </div>
  )
}

export default RowPost

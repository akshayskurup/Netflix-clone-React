import axios from '../../axios'
import React, { useEffect,useState } from 'react'
import {API_key, imgUrl} from '../../constant/constant'

//import Logo from '../../olx-logo.png';
import './TvShows.css';

export default function TvShows(props) {
  const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(Response=>{
            console.table(Response.data)
            setMovies(Response.data.results)
        }).catch(err=>{
        //    alert('Network Error')
        })
    }, [])
     return (
        <div className='row'>
            <div className="Row_Poster">
            <h1 className='title'>TV Shows</h1>
            <h3 className='movie'>{movies ? movies.name:'Movie.name'}</h3>
            <p className='description'>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best shows on TV.</p>
                {movies.map((obj)=>
                <img className='TvShow_Poster' src={`${imgUrl+obj.backdrop_path}`} alt="" />
                )}
                
                
            </div>
      
        </div>
    )
}

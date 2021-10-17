import axios from '../../axios'
import React, { useEffect,useState } from 'react'
import './RowPost.css'
import {API_key, imgUrl} from '../../constant/constant'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(Response=>{
            console.log(Response.data)
            setMovies(Response.data.results)
        }).catch(err=>{
        //    alert('Network Error')
        })
    }, [])
    
    return (
        <div className='row'>
            <h2 className='subTitle' >{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                <img className={props.isSmall ? 'smallPoster':'poster'} src={`${imgUrl+obj.backdrop_path}`} alt="" />
                )}
                
                
            </div>
      
        </div>
    )
}

export default RowPost

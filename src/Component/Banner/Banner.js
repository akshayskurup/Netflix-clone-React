import React, {useEffect, useState}from 'react'
import './Banner.css'
import {API_key,imgUrl} from '../../constant/constant'
import axios from '../../axios'

function Banner() {
         const [Movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_key}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[10])
            setMovie((Response.data.results[16]))
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${Movie ? imgUrl+Movie.backdrop_path : ""})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{Movie ? Movie.original_title:'Movie.name'}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h1 className='discription'>{Movie ? Movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>

        </div>
    )
}

export default Banner

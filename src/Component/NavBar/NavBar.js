import React from 'react'
import './NavBar.css'
//import TvShows from './Pages/TvShows';

function NavBar() {
    return (
        <div className='navbar'>
            <a href="/"><img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" /></a>
            <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
            <a className='home' href="/">Home</a>
            <a className='tvShows' href="/tvshows">Tv Shows</a>
        </div>
    )
}

export default NavBar

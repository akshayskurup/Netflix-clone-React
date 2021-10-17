import React, { useState } from "react";
import NavBar from "./Component/NavBar/NavBar";
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Banner from "./Component/Banner/Banner";
import RowPost from "./Component/RowPost/RowPost";
import {Originals,Action,Trending} from './urls'
import TvShows from './Pages/TvShows';



function App(){

  return(
    <div className="App">
      <NavBar /> 
      <Router>
        <Route exact path= '/'>
            
          <Banner />
          <RowPost url={Originals} title='Netflix Originals'/>
          <RowPost url={Action} title='Action' isSmall/>
          <RowPost url={Trending} title='Horror' isSmall/>
        </Route>
        <Route path='/tvshows'>
          <TvShows/>
        </Route>
      </Router> 
          
      
    </div>
  );
}

export default App;
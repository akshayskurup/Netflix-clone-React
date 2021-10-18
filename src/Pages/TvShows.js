import React from 'react';
import {Originals} from '../urls'
import Signup from '../Component/Tvshows/TvShows';

function TvShowsPage() {
  return (
    <div>
      <Signup url={Originals} title='Netflix Originals'/>
    </div>
  );
}

export default TvShowsPage;

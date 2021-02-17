import React from 'react';
import { movies } from '../data';

const Movies = () => {


  return (
    <div>
        <h1>Movies Page</h1>
        
          {movies.map((movie) => {
            return(
              <div> 
              <h3>Name: {movie.title}</h3>
                <div>
                Time: {movie.time}
                </div>
                <div>
                <ul>Genres: 
                <li>{movie.genres}</li> </ul>
                </div>
              </div>
            )
          })
          }
        
        
      
    </div>
  );
};

export default Movies;

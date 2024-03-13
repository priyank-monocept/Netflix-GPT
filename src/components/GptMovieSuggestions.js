import React from 'react'
import MovieList from './MovieList'
const GptMovieSuggestions = ({title, movies}) => {
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        <MovieList title={title} movies={movies} /> 
      </div>
    </div>
  )
}

export default GptMovieSuggestions
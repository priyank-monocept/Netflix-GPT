import React from 'react'
import {IMG_CDN_URL} from '../utils/constant'
const MovieCard = ({path}) => {
  if(!path) return;
  return (
    <div className="w-48 pr-6">
      <img alt="Movie Card" src={IMG_CDN_URL + path} />
    </div>
  )
}

export default MovieCard
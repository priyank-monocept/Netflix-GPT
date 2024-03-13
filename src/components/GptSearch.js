import React from 'react'
import {BG_URL}  from "../utils/constant";
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
const GptSearch = () => {

   
  return (
    <div>
        <div className="absolute -z-10">
        <img src={BG_URL} alt="logo" />
        </div>
    <GptSearchBar />

  </div>
  )
}

export default GptSearch
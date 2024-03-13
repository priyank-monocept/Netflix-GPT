import React from 'react'
import { useRef, useState } from 'react';
import {options} from  "../utils/constant"
import GptMovieSuggestions from './GptMovieSuggestions';
//import openai from "../utils/openai"

const GptSearchBar = () => {

   const searchText = useRef(null);
   const [movieSuggestions, setmovieSuggestions] = useState(null)
   const [searchKeyword, setsearchKeyword] = useState(null)

   const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        options
    );
    const json = await data.json();
    return json.results;
  };
   const handleGptSearchClick = () =>{
   const getsearchText = searchText.current.value;
   setsearchKeyword(getsearchText);
   /* comment gpt service calling 
   const getsearchText = searchText.current.value;
   const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
   const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(gptResult);
   */
    const movieSearchResult = searchMovieTMDB(getsearchText);
    movieSearchResult.then(
      (result) => { 
        setmovieSuggestions(result);
      },
      (error) => { 
         console.log(error);
      }
    );        
}
  return (
    <>
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <input
          ref = {searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="What would you like to watch today?"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
          Search
        </button>
      </form>
    </div>
    {console.log(movieSuggestions)}
    {movieSuggestions && (
    <GptMovieSuggestions title={searchKeyword} movies={movieSuggestions}/>
    )}
    </>
  )
}

export default GptSearchBar
import { useEffect } from 'react'
import Header from "./Header";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopularMovies from '../utils/usePopularMovies';
import { UseSelector, useSelector } from 'react-redux';

const Browse = () => {  
  useNowPlayingMovies();  
  usePopularMovies();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  return (
    <>
     <div>
      <Header />
      { showGptSearch ? (
      <GptSearch /> )
      : (
      <>
      <MainContainer />
      <SecondaryContainer />
      </>
      )}
      {/* 
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n
              - cards * n
      */}
    </div>
    </>
  )
}

export default Browse
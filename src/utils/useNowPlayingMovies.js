import { useEffect } from 'react'
import {options} from "../utils/constant"
import { useDispatch } from 'react-redux';
import {addnowPlayingMovies} from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async  () =>{
    try{
        console.log(options);
        const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const nowPlayingMovies = await movies.json();
        console.log(nowPlayingMovies.results);

        dispatch(addnowPlayingMovies(nowPlayingMovies.results));
    }
    catch(error){
        console.log(error);
    }            
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}
export default useNowPlayingMovies

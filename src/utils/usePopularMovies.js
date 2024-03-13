import { useEffect } from 'react'
import {options} from "../utils/constant"
import { useDispatch } from 'react-redux';
import {addPopularMovies} from "../utils/movieSlice";
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async  () =>{
      try{
          const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
          const popularMovies = await movies.json();
          console.log(popularMovies.results);
          dispatch(addPopularMovies(popularMovies.results));
      }
      catch(error){
          console.log(error);
      }            
    }
  
    useEffect(()=>{
    getPopularMovies();
    },[])
}

export default usePopularMovies
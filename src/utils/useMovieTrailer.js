import { useEffect } from 'react'
import {options} from "../utils/constant"
import { useDispatch } from 'react-redux';
import {addTrailerVideo} from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
 const dispatch = useDispatch();
 const getVideoTrailer = async  () =>{
    try{
        const response = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', options);
        const data = await response.json();
        const filterData = data?.results.filter((video) => video.type =='Trailer');
        const trailerData = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailerData));
    }
    catch(error){
        console.log(error);
    }            
  }

  useEffect(()=>{
    getVideoTrailer();
  },[])
}

export default useMovieTrailer
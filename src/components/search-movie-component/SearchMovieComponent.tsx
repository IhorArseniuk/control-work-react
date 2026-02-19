import {useEffect, useState} from "react";
import type {MovieType} from "../../models/movies/movieType.ts";
import {axiosService} from "../../services/axiosMovieService.ts";
import type {MoviesResponceType} from "../../models/movies/moviesResponceType.ts";
import {MovieComponent} from "../movie-component/MovieComponent.tsx";

export const SearchMovieComponent = () => {
  const [searchMovies, setSearchMovies]=useState<MovieType[]>([])
const [searchMovieName, setSearchMovieName]=useState<string>("")
   const searchedMovies=localStorage.getItem('movieTitle')
    useEffect(() => {
        if(!searchedMovies)return
        setSearchMovieName(searchedMovies)
    }, [searchedMovies]);

    useEffect(()=>{
      axiosService<MoviesResponceType>(`3/search/movie?query=${searchMovieName}`,'get')
          .then(res=>
              res&& setSearchMovies(res.results))
   })
    return (
        <>
        <div>{searchMovies&&searchMovies.map((movie)=><MovieComponent movie={movie} imageW={100}/>)}</div>
        </>
    );
};

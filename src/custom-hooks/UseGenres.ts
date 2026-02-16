import {useEffect, useState} from "react";
import type {MovieType} from "../models/movies/movieType.ts";
import {axiosService,} from "../services/axiosMovieService.ts";
import type {MoviesResponceType} from "../models/movies/moviesResponceType.ts";
import {useSearchParams} from "react-router-dom";


export const useGenres = (genre:number | null) => {

  const [movies, setMovies]=useState<MovieType[]>([])
  const[genreQuery]=useSearchParams({})
    useEffect(()=>{
      if(!genre) return
      const pg =genreQuery.get('genrePage')||'1'
      axiosService<MoviesResponceType>(`3/discover/movie?with_genres=${genre.toString()}&page=${pg}`,'get')
          .then(res=>setMovies(res.results))
    },[genre, genreQuery])
  return (
      movies
    );
};

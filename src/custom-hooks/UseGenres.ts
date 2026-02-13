import {useEffect, useState} from "react";
import type {MovieType} from "../models/movies/movieType.ts";
import {axiosService,} from "../services/axiosMovieService.ts";
import type {MoviesResponceType} from "../models/movies/moviesResponceType.ts";
import {useSearchParams} from "react-router-dom";


export const useGenres = (genre:number) => {
  const [movies, setMovies]=useState<MovieType[]>()
  const[query]=useSearchParams({})
    useEffect(()=>{
      const pg =query.get('page')||'1'
      axiosService<MoviesResponceType>(`3/discover/movie?with_genres=${genre.toString()}&page=${pg}`,'get')
          .then(res=>setMovies(res.results))
    },[genre, query])
  return (
      movies
    );
};

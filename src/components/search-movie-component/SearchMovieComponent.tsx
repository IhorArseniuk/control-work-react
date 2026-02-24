import {useEffect, useState} from "react";
import type {MovieType} from "../../models/movies/movieType.ts";
import {axiosService} from "../../services/axiosMovieService.ts";
import type {MoviesResponceType} from "../../models/movies/moviesResponceType.ts";
import {MovieComponent} from "../movie-component/MovieComponent.tsx";
import {useSearchParams} from "react-router-dom";
import {SearchPagination} from "./SearchPagination.tsx";
import {SearchInputComponent} from "./SearchInputComponent.tsx";

export const SearchMovieComponent = () => {
    const [searchMovies, setSearchMovies]=useState<MovieType[]>([])

    const [searchMovieName, setSearchMovieName]=useState<string>("")

    const [searchQuery, setQuery]=useSearchParams()

    useEffect(() => {
        let searchedMovies=localStorage.getItem('movieTitle')
        if(searchedMovies) setSearchMovieName(JSON.parse(searchedMovies))
    }, []);

    useEffect(() => {
        if (!searchMovieName) return;

        const params = new URLSearchParams(searchQuery);
        params.set('SearchPage', '1');

        setQuery(params);

    }, [searchMovieName]);

    useEffect(()=>{
        if(!searchMovieName) return
        const pg=searchQuery.get('SearchPage') ||'1'
      axiosService<MoviesResponceType>(`3/search/movie?query=${searchMovieName}&page=${pg}`,'get')
          .then(res=>
              res&& setSearchMovies(res.results))
   },[searchMovieName, searchQuery])

    return (
        <>
            <SearchInputComponent onSearch={setSearchMovieName}/>
        <div>{searchMovies&&searchMovies.map((movie)=><MovieComponent key={movie.id} movie={movie} imageW={100}/>)}</div>
            <SearchPagination />
        </>
    );
};

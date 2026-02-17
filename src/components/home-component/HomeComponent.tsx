import {useEffect, useState} from "react";
import {axiosService,} from "../../services/axiosMovieService.ts";
import type {MovieType} from "../../models/movies/movieType.ts";
import type {MoviesResponceType} from "../../models/movies/moviesResponceType.ts";
import {useSearchParams} from "react-router-dom";
import {MovieComponent} from "../movie-component/MovieComponent.tsx";


export const HomeComponent = () => {
    const [movies, setMovies] = useState<MovieType[]>()
    const [query]=useSearchParams({})
    useEffect(() => {
        const pg=query.get('page')||'1'
        if(pg){
        axiosService<MoviesResponceType>('3/discover/movie?page='+pg, 'get')
            .then(res => {
                if (res) {
                    setMovies(res.results)
                }
            })
    }}, [query])
    return (
        <>
            <div>{movies && movies.map((movie) => <MovieComponent movie={movie}  imageW={300} />)}</div>

        </>
    )
}

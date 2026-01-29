import type {MovieType} from "../models/movies/movieType.ts";
import type {FC} from "react";

   type MovieProps={
       movie:MovieType
   }
export const MovieComponent:FC<MovieProps> = ({movie}) => {
    return (
        <div>
            <p>{movie.title}</p>
            <p>{movie.id}</p>
            <img alt={movie.title} src={'https://media.themoviedb.org'+movie.poster_path}/>
        </div>
    );
};

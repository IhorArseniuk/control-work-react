import type {MovieType} from "../models/movies/movieType.ts";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";

   type MovieProps={
       movie:MovieType
   }
export const MovieComponent:FC<MovieProps> = ({movie}) => {
       const navigation=useNavigate()
    return (
        <div onClick={()=>{
            navigation(`movie/${movie.id}-${movie.title.replaceAll(/\s+/g,'-')}`, {state:movie})
        }}>
            <p>{movie.title}</p>
            <p>{movie.id}</p>
            <img alt={movie.title} src={'https://media.themoviedb.org/t/p/w300/'+movie.poster_path}/>

        </div>
    );
};

import type {MovieType} from "../models/movies/movieType.ts";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {StarRating} from "./Star-Rating-Component/StarRatingComponent.tsx";

   type MovieProps={
       movie:MovieType
   }
export const MovieComponent:FC<MovieProps> = ({movie}) => {
       const navigation=useNavigate()
    return (
<div>
        <div onClick={()=>{
            navigation(`movie/${movie.id}-${movie.title.replaceAll(/\s+/g,'-')}`, {state:movie})
        }}>

            <img alt={movie.title} src={'https://media.themoviedb.org/t/p/w300/'+movie.poster_path}/>
            <p>{movie.title}</p>
        </div>

    <StarRating initial={movie.vote_average} disabled={false}></StarRating>
</div>
    );
};

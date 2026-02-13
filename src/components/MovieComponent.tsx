import type {MovieType} from "../models/movies/movieType.ts";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";
import {StarRating} from "./star-rating-component/StarRatingComponent.tsx";

   type MovieProps={
       movie:MovieType
       imageW:number,
       imageH:number
   }
export const MovieComponent:FC<MovieProps> = ({movie, imageW, imageH}) => {
       const navigation=useNavigate()
    return (
<div>
        <div onClick={()=>{
            navigation(`movie/${movie.id}-${movie.title.replaceAll(/\s+/g,'-')}`, {state:movie})
        }}>

            <img alt={movie.title} src={`https://media.themoviedb.org/t/p/w500`+movie.poster_path} height={imageH} width={imageW}/>
            <p>{movie.title}</p>
        </div>

    <StarRating initial={movie.vote_average} disabled={false}></StarRating>
</div>
    );
};

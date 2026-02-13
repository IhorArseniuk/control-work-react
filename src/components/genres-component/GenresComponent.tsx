import {useEffect, useState} from "react";
import './genres.css'
import type {GenresResponceType, GenreType} from "../../models/genres/genresResponceType.ts";
import {axiosService} from "../../services/axiosMovieService.ts";
import {useGenres} from "../../custom-hooks/UseGenres.ts";


export const GenresComponent = () => {
   const [genres, setGenres]= useState<GenreType[]>()
    const [selectedGenre, setSelectedGenre] = useState<number>();
  const moviesBygenre=selectedGenre&&useGenres(selectedGenre)
   useEffect(()=>{
       axiosService<GenresResponceType>('3/genre/movie/list','get')
           .then(res=>{
               if(res) setGenres(res.genres) })
   },[])

    return (
        <div className={'genresContainer'}>
            {genres&&genres.map((genre)=>(<div><h3 onClick={()=>{setSelectedGenre(genre.id),localStorage.setItem(genre.name,JSON.stringify(moviesBygenre) )}}>{genre.name}</h3>
            <div>

            </div>
            </div>))}
        </div>
    );
};

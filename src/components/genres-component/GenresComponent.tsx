import {useEffect, useState} from "react";
import './genres.css'
import type {GenresResponceType, GenreType} from "../../models/genres/genresResponceType.ts";
import {axiosService} from "../../services/axiosMovieService.ts";
import {useGenres} from "../../custom-hooks/UseGenres.ts";
import {MovieComponent} from "../movie-component/MovieComponent.tsx";
import {GenrePaginationComponent} from "./GenrePagination.tsx";


export const GenresComponent = () => {
   const [genres, setGenres]= useState<GenreType[]>([])
    const [selectedGenre, setSelectedGenre] = useState<number | null>(null)
    const moviesByGenre =  useGenres(selectedGenre)

    useEffect(()=>{
       axiosService<GenresResponceType>('3/genre/movie/list','get')
           .then(res=>{
               if(res) setGenres(res.genres) })
   },[])
    useEffect(()=>{
        if(!selectedGenre || !moviesByGenre.length) return

    localStorage.setItem(`genre${selectedGenre}`,JSON.stringify(moviesByGenre))

    },[selectedGenre, moviesByGenre]);

    return (
        <div className={'genresContainer'}>
            {genres&&genres.map((genre)=>(
                <div key={genre.id}><h3 onClick={()=>{setSelectedGenre(genre.id)}}>{genre.name}</h3>
            <div>
                {selectedGenre===genre.id &&
                moviesByGenre.map(moviesBGenre=>(<MovieComponent key={moviesBGenre.id} movie={moviesBGenre} imageW={200}/>))
                }
            </div>
                    {selectedGenre===genre.id &&(
                    <GenrePaginationComponent/>)}
            </div>))}
        </div>
    );
};

import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

 type FormProps={
     movieTitle: string,
 }
export const SearchInputComponent = () => {
    const {handleSubmit, register}=useForm<FormProps>({mode:'onSubmit'})
    const [moviesName, setMoviesName ]=useState<string>("")
   const customHandler= (formDataProps:FormProps)=>{
        setMoviesName(formDataProps.movieTitle)
   }
    useEffect(()=>{
        if(!moviesName.length) return
        localStorage.setItem('movieTitle',JSON.stringify(moviesName))
    },[moviesName])
    return (
        <form onSubmit={handleSubmit(customHandler)}><input  type={'text'} placeholder={'Search for movie'} {...register('movieTitle')}  />

        <button type={'submit'}>Submit</button></form>
    );
};

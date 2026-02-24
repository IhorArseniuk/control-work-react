import {useForm} from "react-hook-form";
 type FormProps={
     movieTitle: string,
 }
 type Props={
     onSearch: (name:string) => void
 }
export const SearchInputComponent = ({onSearch}:Props) => {
    const {handleSubmit, register}=useForm<FormProps>({mode:'onSubmit'})


   const customHandler= (formDataProps:FormProps)=>{
        onSearch(formDataProps.movieTitle)
       localStorage.setItem('movieTitle',JSON.stringify(formDataProps.movieTitle))

   }
    return (
        <form onSubmit={handleSubmit(customHandler)}><input  type={'text'} placeholder={'Search for movie'} {...register('movieTitle')}  />

        <button type={'submit'}>Submit</button></form>
    );
}

import {useSearchParams} from "react-router-dom";

export const GenrePaginationComponent = () => {
    const [genreQuery, setGenreQuery]=useSearchParams({genrePage:'1'})

    return (
        <div>
            <button onClick={()=>{
                const page = genreQuery.get('genrePage')
                if(page){
                    let currentPage = +page
                    if(currentPage<54917){
                        setGenreQuery({genrePage:(++currentPage).toString()})
                    }}}}>Next Page</button>

            <button onClick={()=>{
                const page=genreQuery.get('genrePage')
                if(page){
                    let currentPage = +page
                    if( currentPage>1){
                        setGenreQuery({genrePage:(--currentPage).toString()})
                    }
                }}}>Previous page</button>
        </div>
    );
};

import { useSearchParams} from "react-router-dom";

export const PaginationComponent = () => {
   const [query, setQuery]=useSearchParams({page:'1'})

    return (
        <div>
            <button onClick={()=>{
                const page = query.get('page')
                   if(page){
                       let currentPage = +page
                if(currentPage<54917){
                    setQuery({page:(++currentPage).toString()})
                }}}}>Next Page</button>

            <button onClick={()=>{
                const page=query.get('page')
                if(page){
                    let currentPage = +page
                if( currentPage>1){
                    setQuery({page:(--currentPage).toString()})
                }
            }}}>Previous page</button>
        </div>
    );
};

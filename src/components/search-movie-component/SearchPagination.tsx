import {useSearchParams} from "react-router-dom";

export const SearchPagination = () => {

        const [searchQuery, setQuery]=useSearchParams({SearchPage:'1'})

        return (
            <div>
                <button onClick={()=>{
                    const page = searchQuery.get('SearchPage')
                    if(page){
                        let currentPage = +page
                        if(currentPage<54917){
                            setQuery({SearchPage:(++currentPage).toString()})
                        }}}}>Next Page</button>

                <button onClick={()=>{
                    const page=searchQuery.get('SearchPage')
                    if(page){
                        let currentPage = +page
                        if( currentPage>1){
                            setQuery({SearchPage:(--currentPage).toString()})
                        }
                    }}}>Previous page</button>
            </div>
        );
    };

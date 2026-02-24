
import {HomeComponent} from "../components/home-component/HomeComponent.tsx";
import {PaginationComponent} from "../components/paginations-components/PaginationComponent.tsx";
import {GenresComponent} from "../components/genres-component/GenresComponent.tsx";
import {SearchMovieComponent} from "../components/search-movie-component/SearchMovieComponent.tsx";


export const HomePage = () => {
 return(
<>
 <div>
<HomeComponent/>
 <PaginationComponent />
 </div>
 <div>
  <GenresComponent/>
 </div>
 <div>
 <SearchMovieComponent/></div>
 </>
 )
};

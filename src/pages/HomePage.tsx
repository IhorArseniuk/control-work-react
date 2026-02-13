
import {HomeComponent} from "../components/HomeComponent.tsx";
import {PaginationComponent} from "../components/PaginationComponent.tsx";
import {GenresComponent} from "../components/genres-component/GenresComponent.tsx";


export const HomePage = () => {
 return(
<>
 <div>
<HomeComponent/>
 <PaginationComponent/>
 </div>
 <div>
  <GenresComponent/>
  <PaginationComponent/>
 </div>
 </>
 )
};

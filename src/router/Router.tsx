import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {MovieDeatailsPage} from "../pages/MovieDeatailsPage.tsx";
import {SerialDetailsPage} from "../pages/SerialDetailsPage.tsx";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>, children:[
            {index:true,element:<HomePage/>},
            {path:'movie/:id-:name',element:<MovieDeatailsPage/>},
            {path:'serial/:id-:name',element:<SerialDetailsPage/>}
        ]}
])

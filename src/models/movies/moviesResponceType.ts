import type {MovieType} from "./movieType.ts";

export type MoviesResponceType ={
    page: number
    results:MovieType[],
    total_pages: number,
    total_results:number
}

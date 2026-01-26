import  axios from "axios";
import type {GuestSessionType} from "../models/authentication/guestSesionModel.ts";
import type {RequestTokenType} from "../models/authentication/requestTokenModel.ts";

const API='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MzNlOTFkYWYyYjk4NDI0YjVmNTk3ZDU4MGNiMDg1OCIsIm5iZiI6MTc2ODc2MzY2NS44NSwic3ViIjoiNjk2ZDMxMTFmMjY1M2I5ZjYxNjg5Y2M4Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.0NCOKJxfxP6qdGjgbzJFVw1-mLSTK_s_mFHi3kY5LLQ'
localStorage.setItem('token',JSON.stringify(API))

export const axiosInstance=axios.create({
    baseURL:'https://api.themoviedb.org',
    headers:{
        'Accept': 'application/json',

        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token')||'')}`
    }
})

export const createGuestSession= async():Promise<GuestSessionType>=>{
    const{data}= await axiosInstance.get<GuestSessionType>('/3/authentication/guest_session/new')
    return data
}
export const createRequestToken= async ():Promise<RequestTokenType>=>{
const {data}= await axiosInstance.get<RequestTokenType>(' /3/authentication/token/new')
    return data
}

export const axiosGetService= async<T>(url:string):Promise<T>=>{
    const {data}=await axiosInstance.get<T>(url)
    return data
}

export const axiosService= async<T>(url:String,method:string,dat ?:string):Promise<T>=>{
    if(method.toLowerCase()==='get'){
        const {data}= await axiosInstance.get<T>(String(url))
        return data
    }
    if(method.toLowerCase()==='post'){
        const {data}= await axiosInstance.post<T>(String(url), dat)
        return data
    }
    else return { } as T

}

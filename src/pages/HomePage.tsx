import {useEffect, useState} from "react";
import {createGuestSession} from "../services/axiosMovieService.ts";
import type {GuestSessionType} from "../models/authentication/guestSesionModel.ts";


export const HomePage = () => {
  const [sesion, setSesion]=useState<GuestSessionType>()
    useEffect( ()=>{
      createGuestSession()
          .then(res=>{
              if(res){setSesion(res)}
          })
  },[])
    return (
        <>
                <div>{String(sesion?.expires_at)}</div>

        </>
    );
};

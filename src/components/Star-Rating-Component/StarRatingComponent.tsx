import {type FC, useState} from "react";
import "./Rating.css"
type RatingProps={
    initial:number,
    disabled:boolean,
}

export const StarRating:FC<RatingProps> = ({initial,disabled}) => {
const [rating, setRating]=useState(initial)
const [hover, setHover]=useState(null)

    const handleClick= (value:number)=>{
    if(disabled) return;
    setRating(value)
    }

    return (
        <div  className={'starContainer'}>{[0,1,2,3,4,5,6,7,8,9].map((i)=> {
            const active = (hover ?? rating) >= i;

            return(
                <span key = {i} style={{ cursor:disabled ? "default" : "pointer", color:active ? "gold" : "#ccc"}}
                      onMouseEnter={()=> !disabled && setHover(i)}
                      onMouseLeave={()=>setHover(null)}
                      onClick={()=>handleClick(i)}
                >★</span>
            )  })}</div>
    );
};

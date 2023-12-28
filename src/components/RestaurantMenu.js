import { useState } from "react";
import Shimmer from "./Shimmer";
import SingleMenu from "./SingleMenu";

const RestaurantMenu = ({menudata,index}) => {
    const{title} = menudata?.card?.card;
    const {itemCards} = menudata?.card?.card;
    if(itemCards === undefined) return null;
    return (
        <div className="menu container">
            <h1>{title}</h1>
            {itemCards.map((item,i)=>{
                return <SingleMenu key={i} menulist={itemCards[i]}/>
            })}
            {/* <h4>{menudata?.card?.card?.itemCards[index].card.info.name}</h4> */}
        </div>
    )
};

export default RestaurantMenu;
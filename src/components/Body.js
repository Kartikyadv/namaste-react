import RestaurantCard from "./RestaurantCard";
import data from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [resList,setresList] = useState(data);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter_btn" onClick={()=>{
                    const filterResList = resList.filter((info)=> info.info.avgRating > 4.2);
                    setresList(filterResList);
                }}>Top Rated</button>    
            </div>            
            <div className="res_container">
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
};

export default Body;
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantDetails from "../utils/useRestaurantDetail";


const RestaurantDetail = () => {
    const {id} = useParams();
    
   const resInfo = useRestaurantDetails(id);
    
    if(resInfo === null) return <Shimmer/>;
    
    const {name,avgRatingString,costForTwoMessage,cuisines,sla,veg,totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;
    const {cards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    
    return (
        <div className="outer_container">
            <div className="container">
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
                <h3>{avgRatingString}</h3>
                {cards.map((item,i)=>{
                    return <RestaurantMenu key={i} menudata={cards[i]}/>
                })}
            </div>
        </div>
    )
}

export default RestaurantDetail;
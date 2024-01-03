import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantDetails from "../utils/useRestaurantDetail";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [showIndex,setShowIndex] = useState(false);

  const resInfo = useRestaurantDetails(id);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
      {categories.map((c,index) => (
        <RestaurantMenu 
        key={c?.card?.card?.title} 
        data={c?.card?.card} 
        showItems = {index === showIndex? true: false}
        setShowIndex={()=>{setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantDetail;

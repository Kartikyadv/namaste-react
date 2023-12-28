import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";


const RestaurantDetail = () => {
    const [data,setData] = useState(null);
    const [menuData,setMenuData] = useState(null);
    const {id} = useParams();
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const dataTemp = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1774553&lng=78.0077653&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await dataTemp.json();
        // console.log(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
        // console.log(jsonData?.data?.cards);
        setData(jsonData?.data?.cards);
        setMenuData(jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    };
    
    if(data === null && menuData === null) return <Shimmer/>;
    
    const {name,avgRatingString,costForTwoMessage,cuisines,sla,veg,totalRatingsString} = data[0]?.card?.card?.info;
    // const {} = data[2]?.groupedCard?.cardGroupMap?.REGULAR;
    
    return (
        <div className="outer_container">
            <div className="container">
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h3>{costForTwoMessage}</h3>
                <h3>{avgRatingString}</h3>
                {menuData.map((item,i)=>{
                    return <RestaurantMenu key={i} menudata={menuData[i]}/>
                })}
            </div>
        </div>
    )
}

export default RestaurantDetail;
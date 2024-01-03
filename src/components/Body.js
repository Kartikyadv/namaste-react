import RestaurantCard, { isPromotedRestaurant } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurant = isPromotedRestaurant(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4894154&lng=77.01186960000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apiData.json();
    setresList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like your internet connection is weak</h1>
  return (
    <div className="mx-6">
      <div className="flex">
        <div className="m-4 p-4 bg-gray-100 rounded-lg">
          <button
            className=""
            onClick={() => {
              const filterResListTemp = filteredResList.filter(
                (info) => info.info.avgRating > 4.2
              );
              setfilteredResList(filterResListTemp);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="m-4 p-4 border border-solid border-grey rounded-lg">
          <input
            className=""
            onChange={(e) => {
              setSearchText(e.target.value);
              const filterResListTemp = resList.filter(
                (info) => info.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResList(filterResListTemp);
            }}
            value={searchText}
            placeholder="Search here.."
          />
          <button
            className="px-4"
            onClick={() => {
              const filterResListTemp = resList.filter((info) => info.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredResList(filterResListTemp);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {(filteredResList === undefined || filteredResList.length === 0 || filteredResList === null)? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredResList.map((restaurant) => (
            <Link to={`restaurant-detail/${restaurant.info.id}`} key={restaurant.info.id}>
              {restaurant.info.availability.opened ? (
                <PromotedRestaurant resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

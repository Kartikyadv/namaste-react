import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredResList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

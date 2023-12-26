import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredResList, setfilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await apiData.json();
    setresList(
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredResList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  };

  return (
    <div className="body">
      <div className="upper_body">
        <div className="filter">
          <button
            className="filter_btn"
            onClick={() => {
              const filterResList = filteredResList.filter(
                (info) => info.info.avgRating > 4.2
              );
              setfilteredResList(filterResList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="search_container">
          <input
            className="search_bar"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            placeholder="Search here.."
          />
          <button
            className="search_bar"
            onClick={() => {
              const filterResList = resList.filter((info) => info.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredResList(filterResList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      {resList.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res_container">
          {filteredResList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;

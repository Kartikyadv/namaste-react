import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {
        name,
        cuisines,
        costForTwo,
        sla,
        cloudinaryImageId,
        avgRating,
        id
    } = props.resData?.info;
    return (
        <>
        <Link to={`restaurant-detail/${id}`}>
        <div className="m-4 p-4 w-[240] bg-gray-100 rounded-lg h-[500px] hover:bg-gray-200">
            <img className="rounded-lg h-[50%] w-[100%]" src={CDN_URL+cloudinaryImageId} alt="logo"/>
            <div className="m-2 mt-8">
            <h3 className="font-bold my-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla?.slaString}</h4>
            </div>
        </div>
        </Link>
        </>
    );
}

export default RestaurantCard;
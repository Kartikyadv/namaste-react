import { CDN_URL } from "../utils/constant";


const RestaurantCard = (props) => {
    const {
        name,
        cuisines,
        costForTwo,
        sla,
        cloudinaryImageId,
        avgRating
    } = props.resData?.info;
    return (
        <div className="res_card">
            <img className="res_logo" src={CDN_URL+cloudinaryImageId} alt="logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
}

export default RestaurantCard;
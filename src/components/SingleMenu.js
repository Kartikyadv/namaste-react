import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const SingleMenu = ({itemCards}) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div className="single_menu">
            {itemCards.map((item)=>(
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="text-lg">{item.card.info.name}</span>
                            <span className="text-lg"> - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button onClick={() => handleAddItem(item)} className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">Add +</button>
                        </div>
                        {item?.card?.info?.imageId && <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`} className="w-full"/>}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default SingleMenu;
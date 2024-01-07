import { useDispatch, useSelector } from "react-redux";
import SingleMenu from "./SingleMenu";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <>
        <div className="text-center m-6 p-2">
            <div className="flex">
            <h1 className="text-2xl font-bold m-auto">Cart</h1>
            <button onClick={handleClearCart} className="m-2 p-2 bg-black rounded-lg text-white">Clear</button>
            </div>
            {cartItems.length === 0 && <Link to="/"><h1 className="font-serif mt-4 p-5 text-2xl">Add Items to the Cart</h1></Link>}
            <div className="w-2/4 m-auto">
            <SingleMenu itemCards={cartItems}/>
            </div>
        </div>
        </>
    )
};

export default Cart;
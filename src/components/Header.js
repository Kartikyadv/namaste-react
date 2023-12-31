import { useState } from "react";
import logo from "../../public/assets/images/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginStatus,setLoginStatus] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-lg m-2">
            <div className="w-44">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-5">Online Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li className="px-5"><Link to="/">Home</Link></li>
                    <li className="px-5"><Link to="/about">About Us</Link></li>
                    <li className="px-5"><Link to="/contact">Contact</Link></li>
                    <li className="px-5"><Link to="/">Cart</Link></li>
                    <button className="login_button" 
                    onClick={()=>{
                        loginStatus === "Login"
                        ? setLoginStatus("Logout")
                        : setLoginStatus("Login");
                    }}>{loginStatus}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
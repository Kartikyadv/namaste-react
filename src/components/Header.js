import { useContext, useState } from "react";
import logo from "../../public/assets/images/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginStatus,setLoginStatus] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    console.log(data);
    return (
        <div className="flex justify-between shadow-lg m-2">
            <div className="w-32">
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
                    <li className="px-5"><Link to="/">{data.loggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
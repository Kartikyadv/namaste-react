import { useState } from "react";
import logo from "../../public/assets/images/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginStatus,setLoginStatus] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav_items">
                <ul>
                    <l1>Online Status: {onlineStatus?"🟢":"🔴"}</l1>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Cart</Link></li>
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
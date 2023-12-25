import logo from "../../public/assets/images/logo.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo_container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav_items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
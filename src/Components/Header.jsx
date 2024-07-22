import { LOGO_URL } from "../Utils/constants";
import { CART_LOGO_URL } from "../Utils/constants";

const Header = () => {

    return (
        <div className="header-section">

            <div className="brand-logo">
                <img className="logo" src= {LOGO_URL} />
            </div>

            <div className="nav-items">

                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart <img className="cart"
                     src={CART_LOGO_URL}/></li>
                </ul>

            </div>

        </div>
    )
};

export default Header;
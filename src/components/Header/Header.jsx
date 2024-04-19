import "./Header.css";
import ImageLogo from "../../assets/Logo.svg";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isLoing, setIsLogin] = useState(false);

  const handlerLogin = () => {
    setIsLogin((log) => !log);
  };

  return (
    <>
      <header className="header">
        <Link to="/" className="image-logo">
          <img
            src={ImageLogo}
            alt="logo image from the company"
            className="logo"
          />
        </Link>

        <nav className="nav-menu">
          <ul className="menu-items">
            <a href="#espical-offers">
              <li> Today Especial Offers</li>
            </a>

            <a href="#why-food__hut">
              <li> Why FoodHut</li>
            </a>

            <a href="#menu">
              <li> Our Menu</li>
            </a>

            <Link to="/cart">
              <ShoppingCart color="#191919" />
            </Link>

            <a href="#" className="login-buttom" onClick={handlerLogin}>
              {isLoing ? "Login" : "Logout"}
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

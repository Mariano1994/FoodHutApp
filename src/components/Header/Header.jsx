import "./Header.css";
import ImageLogo from "../../assets/Logo.svg";
export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="image-logo">
          <img
            src={ImageLogo}
            alt="logo image from the company"
            className="logo"
          />
        </div>

        <nav className="nav-menu">
          <ul className="menu-items">
            <a href="#">
              <li> Today Especial Offers</li>
            </a>

            <a href="#">
              <li> Why FoodHut</li>
            </a>

            <a href="#">
              <li> Our Menu</li>
            </a>

            <a href="#">
              <li> Our Popular Menu</li>
            </a>

            <a href="#">
              <li> Cart</li>
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

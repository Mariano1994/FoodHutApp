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
      <header className=" flex content-between items-center w-full py-16 px-28 gap-[68rem]">
        <Link to="/" className=" w-48">
          <img src={ImageLogo} alt="logo image from the company" />
        </Link>

        <nav>
          <ul className="flex gap-16 items-center justify-between">
            <a href="#espical-offers" className=" text-3xl font-[400]">
              <li> Today Especial Offers</li>
            </a>

            <a href="#why-food__hut" className=" text-3xl font-[400]">
              <li> Why FoodHut</li>
            </a>

            <a href="#menu" className=" text-3xl font-[400]">
              <li> Our Menu</li>
            </a>

            <Link to="/cart" className="flex">
              <ShoppingCart color="#191919" />
              <span className=" flex items-center justify-center absolute h-8 w-8 rounded-full bg-primary text-white ml-[1.3rem] -mt-[0.4rem]">
                0
              </span>
            </Link>

            <a
              href="#"
              className="flex items-center justify-center w-36 h-14 bg-primary text-alt  rounded-[10px]  left-8 right-12"
              onClick={handlerLogin}
            >
              {isLoing ? "Login" : "Logout"}
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};

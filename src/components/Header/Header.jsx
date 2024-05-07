import ImageLogo from "../../assets/Logo.svg";
import { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import { UserContext } from "../../context/UserContext";
import * as Dialog from "@radix-ui/react-dialog";
import { Login } from "../Login/Login";
import { toast } from "sonner";

export const Header = () => {
  const { cardItems } = useContext(ShoppingCardContext);
  const { userName, loginStatusUser, showLogout, handlerLogout, handlerLogin } =
    useContext(UserContext);

  return (
    <>
      <Dialog.Root>
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

              <Link to={loginStatusUser ? "/cart" : "/"} className="flex">
                <ShoppingCart
                  color="#191919"
                  onClick={() => {
                    !loginStatusUser ? toast.info("Login to open cart") : null;
                  }}
                />
                {loginStatusUser && (
                  <span className=" flex items-center justify-center absolute h-8 w-8 rounded-full bg-primary text-white ml-[1.3rem] -mt-[0.4rem]">
                    {cardItems.length}
                  </span>
                )}
              </Link>

              {loginStatusUser ? (
                <div className="flex flex-col justify-center items-center gap-2">
                  <div
                    className="h-[5rem] w-[5rem] flex justify-center items-center bg-primary rounded-full ml-[1rem] border-[3px] border-white shadow text-white font-semibold cursor-pointer"
                    onClick={handlerLogout}
                  >
                    {userName[0].toUpperCase()}
                  </div>

                  {showLogout && (
                    <div
                      className=" ml-[1.1rem] bg-white  px-4 rounded"
                      onClick={handlerLogout}
                    >
                      <span
                        className=" font-medium text-lg hover:text-primary brightness-95 cursor-pointer"
                        onClick={handlerLogin}
                      >
                        Logout
                      </span>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Dialog.Trigger asChild>
                    <a
                      href="#"
                      className="flex items-center justify-center w-36 h-14 bg-primary text-alt  rounded-[10px]  left-8 right-12"
                    >
                      Login
                    </a>
                  </Dialog.Trigger>
                  <Login />
                </>
              )}
            </ul>
          </nav>
        </header>
      </Dialog.Root>
    </>
  );
};

import { useContext } from "react";
import { Divider } from "../Divider/Divider";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";

export const CartPaymentForm = () => {
  const { totalCost } = useContext(ShoppingCardContext);
  const { userName } = useContext(UserContext);
  return (
    <>
      <div className=" w-[35%] h-[450px] rounded-2xl p-10 bg-gradient shadow-sm">
        <div className=" flex items-center">
          <span className="text-[1.5rem] font-medium ]">User: {userName}</span>
        </div>

        <div className=" flex justify-between mt-[3rem] text-[1.5rem] font-medium]">
          <span>Total </span>
          <span className="font-bold text-primary text-[1.8rem] mb-[4rem]">
            Rs {totalCost}
          </span>
        </div>
        <Divider />

        <span className="text-[1.5rem] font-medium">Cart Details</span>
        <form className=" flex flex-col w-full gap-6 mt-[1.2rem] h-full">
          <input
            type="text"
            placeholder="Name on Card"
            className="h-[3.8rem] rounded-full p-4 placeholder:text-[1.3rem] border border-solid border-secondary outline-none"
          />
          <input
            type="number"
            placeholder="Card number"
            className="h-[3.8rem] rounded-full p-4 placeholder:text-[1.3rem] border border-solid border-secondary outline-none"
          />
          <input
            type="text"
            placeholder=" Expiration date"
            className="h-[3.8rem] rounded-full p-4 placeholder:text-[1.3rem] border border-solid border-secondary outline-none"
          />

          <div className="flex justify-between mx-32 mt-8">
            <Link
              to={"/"}
              className="py-4 px-8 bg-secondary rounded-xl text-[1.2rem] cursor-pointer transition-all hover:brightness-95"
            >
              Shopping{" "}
            </Link>
            <button className="py-4 px-8 bg-primary rounded-xl text-[1.2rem] cursor-pointer transition-all hover:brightness-95">
              Checkout{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

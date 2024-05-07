import { ShoppingCartIcon, ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const EmptyCartMessage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mt-[25rem] flex flex-col justify-center items-center gap-[1.8rem] ">
          <ShoppingBagIcon className="text-primary" size={130} />
          <h1 className="text-[6rem] font-semibold">
            Your cart is <span className="text-primary">empty</span>
          </h1>
          <p className="text-[1.5rem] font-medium">
            {" "}
            Must add items on the cart to proceed to check out
          </p>
          <Link
            to="/"
            className="py-[1.5rem] px-[3.5rem] bg-secondary text-[1.5rem] rounded-2xl mt-[1.5rem] hover:brightness-95 flex"
          >
            {" "}
            Return to shop{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

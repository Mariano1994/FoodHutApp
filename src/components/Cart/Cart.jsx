import { Plus, Minus, X } from "lucide-react";
import { Divider } from "../Divider/Divider";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { BASE_IMAGE_URL } from "../../utils/ConstURLs";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";

export const Cart = () => {
  const { cardItems, handlerRamoveItemFromShoppingCard } =
    useContext(ShoppingCardContext);

  return (
    <>
      <div className="w-full h-screen bg-white">
        <div className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-[40px] w-[80%] h-[80%] ">
          <h2 className="  mb-[5.5rem] text-[1.8rem] font-normal">
            <span className="text-primary">Shopping</span> Card
          </h2>
          <div className=" flex justify-between">
            <div className=" flex flex-col gap-[8px] overflow-scroll">
              {cardItems.map((item) => (
                <div key={item?.card?.info?.id}>
                  <div className="flex flex-1 items-center gap-[3rem]  ">
                    <img
                      src={`${BASE_IMAGE_URL}${item?.card?.info?.imageId}`}
                      className=" h-[11rem] w-[11rem] rounded-full"
                    />
                    <div>
                      <h3 className=" text-[1.5rem] text-primary font-medium w-[30rem]">
                        {item?.card?.info?.name}
                      </h3>
                      <span className="text-[1rem]">
                        {item?.card?.info?.category}
                      </span>
                    </div>
                    <div className=" border border-solid rounded-3xl px-2 w-[15rem]">
                      <div className="flex items-center justify-around">
                        <span className="text-[2rem] font-light">
                          {" "}
                          <Minus
                            size={15}
                            className="cursor-pointer transition-all hover:text-secondary"
                          />
                        </span>
                        <span className="text-[1.5rem] font-light">1</span>
                        <span className="text-[2rem] font-light">
                          {" "}
                          <Plus
                            size={15}
                            className="cursor-pointer transition-all hover:text-secondary"
                          />{" "}
                        </span>
                      </div>
                    </div>
                    <span className="text-[1.5rem] font-light">
                      {" "}
                      Rs {item?.card?.info?.price / 100}{" "}
                    </span>
                    <span
                      onClick={() =>
                        handlerRamoveItemFromShoppingCard(item?.card?.info?.id)
                      }
                    >
                      <X
                        size={18}
                        className="cursor-pointer transition-all hover:text-primary"
                      />
                    </span>
                  </div>
                  <Divider />
                </div>
              ))}
            </div>

            <div className=" w-[35%] h-[450px] rounded-2xl p-10 bg-gradient shadow-sm">
              <div className=" flex items-center">
                <span className="text-[1.5rem] font-medium ]">
                  User: Mariano Artur
                </span>
              </div>

              <div className=" flex justify-between mt-[3rem] text-[1.5rem] font-medium]">
                <span>Total </span>
                <span className="font-bold text-primary text-[1.8rem] mb-[4rem]">
                  Rs 500,9
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
          </div>
        </div>
      </div>
    </>
  );
};

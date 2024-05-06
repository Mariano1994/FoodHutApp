import { useContext } from "react";
import Detail from "../../assets/detail.svg";
import Rose from "../../assets/rosemary.svg";
import { FoodCard } from "../FoodCard/FoodCard";
import { Shimmer } from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";

export const SpecialOffers = () => {
  const { foodCards, isLoading } = useContext(FoodContext);
  console.log(foodCards, isLoading);
  return (
    <>
      <div
        className="flex flex-col justify-center items-center gap-[1.5] mt-[9rem] "
        id="espical-offers"
      >
        <h2 className="text-[4.8rem] font-bold">
          Today <span className="text-primary">Special</span> Offers
        </h2>
        <p className="w-[85.5rem] text-center leading-[3rem] text-[1.8rem] font-light mb-[14rem] mt-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="absolute overflow-hidden -mt-[8rem] -ml[2rem]">
        <img src={Detail} className="w-[15rem]" />
      </div>

      <div className="flex flex-wrap h-auto items-center justify-center gap-8 mx-28 mb-56">
        {!isLoading ? (
          foodCards?.map((card, index) => {
            if (index <= 3)
              return (
                <Link
                  to={`/restaurants/${card?.info?.id}`}
                  key={card?.info?.id}
                >
                  {" "}
                  <FoodCard card={card} />
                </Link>
              );
          })
        ) : (
          <Shimmer />
        )}
      </div>

      <div className="flex justify-end items-center -mr-40 -mt-32">
        <img src={Rose} />
      </div>
    </>
  );
};

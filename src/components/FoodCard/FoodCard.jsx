import "./FoodCard.css";
import Costumer1 from "../../assets/costumersPhoto/1.jpg";
import Costumer2 from "../../assets/costumersPhoto/2.jpg";
import Costumer3 from "../../assets/costumersPhoto/3.jpg";
import Star from "../../assets/star.svg";
import { BASE_IMAGE_URL } from "../../utils/ConstURLs";
import { Truck, Dot } from "lucide-react";

export const FoodCard = ({ card }) => {
  const { avgRating, cloudinaryImageId, name, cuisines, sla, isOpen } =
    card?.info;
  return (
    <>
      <div className=" w-[31rem] h-[45rem] flex flex-col items-center justify-center gap-8 mt-[11rem] rounded-[25px] p-[3.3rem] cursor-pointer hover:scale-90 transition-all food-card ">
        <div className=" rounded-[50%] mb-8">
          <img
            src={`${BASE_IMAGE_URL}${cloudinaryImageId}`}
            className="w-[18rem] h-[18rem] border-solid rounded-[50%]"
          />
          <div className="w-[48px] h-[48px]  rounded-[50%] bg-secondary border-solid border-[white] flex justify-center items-center absolute -mt-[5.3rem] ml-[12rem] border-[3px]">
            <span className="flex justify-center items-center text-[1.7rem] font-medium">
              ${Math.round(avgRating > 4 ? avgRating * 5 : avgRating * 7)}
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-16">
          <div className="flex w-[30px] h-[30px]">
            <img
              src={Costumer1}
              alt="costumer user photo"
              className="rounded-full -ml-[1.5rem] border-solid border-alt border-[2px]"
            />
            <img
              src={Costumer2}
              alt="costumer user photo"
              className="rounded-full -ml-[1.5rem] border-solid border-alt border-[2px]"
            />
            <img
              src={Costumer3}
              alt="costumer user photo"
              className="rounded-full -ml-[1.5rem] border-solid border-alt border-[2px]"
            />
          </div>
          <span className="flex items-center font-semibold gap-2">
            <img src={Star} /> ({avgRating})
          </span>
        </div>

        <div className="flex flex-col items-center gap-8">
          <h3 className=" text-center text-8 text-primary">{name}</h3>
          <div>
            <span className=" flex items-center">
              <Truck color="#191919" size={22} /> <Dot size={22} />
              {sla.deliveryTime}min
            </span>
          </div>
          <div className="text-center text-[1.5rem] font-light mb-32">
            <p>{cuisines.join(", ")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

// HIGER-ORDER COMPONENT => HOC

export const OpenStatusRestaurants = (FoodCard) => {
  return ({ card }) => {
    return (
      <>
        <div>
          <label className=" absolute mt-[43.5rem] bg-secondary px-4 rounded-lg ml-[10.3rem]">
            {/* {" "}
            Open now{" "} */}
          </label>
          <FoodCard card={card} />
        </div>
      </>
    );
  };
};

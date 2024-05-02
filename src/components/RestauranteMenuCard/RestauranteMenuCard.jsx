import { Divider } from "../Divider/Divider";
import defaultImage from "../../assets/defaultImage.svg";
import { Star } from "lucide-react";
import { BASE_IMAGE_URL } from "../../utils/ConstURLs";

export const RestaurantMenuCard = ({ card }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        {card.map((c) => (
          <>
            <div className="flex justify-between items-center gap-[4rem] cursor-pointer transition-all hover:scale-105">
              <div className="flex flex-col gap-5 flex-1">
                <h2 className="text-[1.8rem] font-medium">
                  {" "}
                  {c.card.info.name}
                </h2>
                <span className=" flex items-center gap-4 text-[1.8rem]">
                  {" "}
                  <Star size={20} fill="#fdc55e" color="#fdc55e" />{" "}
                  {c.card.info.ratings?.aggregatedRating?.rating || "N/A"}
                </span>
                <p className=" text-[1.5rem]">
                  {c.card.info.description ||
                    "Lorem ipsum dolor, sit amet consectetur adipisicingelit. Pariatur, eius minus! Magnam velit officia nam sapiente sed.Numquam reprehenderit id dolore magni, atque accusamus"}
                </p>

                <span className="mt-[1.5rem] font-bold text-primary text-[1.6rem]">
                  Rs {c.card.info.price / 100 || "N/A"}
                </span>
              </div>
              <div>
                <img
                  src={`${BASE_IMAGE_URL}${c.card.info.imageId}`}
                  className=" w-[22rem] h-[18rem] rounded-[8px]"
                />
              </div>
            </div>
            <Divider />
          </>
        ))}
      </div>
    </>
  );
};

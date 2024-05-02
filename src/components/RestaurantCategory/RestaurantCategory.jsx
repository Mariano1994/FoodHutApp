import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
import { RestaurantMenuCard } from "../RestauranteMenuCard/RestauranteMenuCard";
import { Divider } from "../Divider/Divider";
export const RestaurantCategory = ({ category }) => {
  const { title, itemCards } = category?.card?.card;

  // console.log(itemCards.map((item) => item.card.info));
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    setExpand((ex) => !ex);
  };
  return (
    <>
      <div className="w-full mb-8  shadow-sm">
        <ul className="mb-4">
          <li className=" flex justify-between items-center">
            <h2 className=" font-bold text-2xl">{`${category?.card?.card?.title.toUpperCase()} (${
              category?.card?.card?.itemCards.length
            })`}</h2>
            <div onClick={handleExpand}>
              {expand ? (
                <CircleArrowDown className=" cursor-pointer hover:text-primary" />
              ) : (
                <CircleArrowUp className=" cursor-pointer text-primary" />
              )}
            </div>
          </li>
        </ul>

        <RestaurantMenuCard card={category.card.card.itemCards} />
      </div>
    </>
  );
};

import { ChevronDown, ChevronUp } from "lucide-react";
import { RestaurantMenuCard } from "../RestauranteMenuCard/RestauranteMenuCard";
export const RestaurantCategory = ({ category, expandMenu, onExpandMenu }) => {
  return (
    <>
      <div className="w-full mb-8  shadow-sm">
        <ul className="mb-4">
          <li
            className=" flex justify-between items-center cursor-pointer"
            onClick={onExpandMenu}
          >
            <h2 className=" font-bold text-2xl">{`${category?.card?.card?.title.toUpperCase()} (${
              category?.card?.card?.itemCards.length
            })`}</h2>
            <div>
              {!expandMenu ? (
                <ChevronDown className=" hover:text-primary" />
              ) : (
                <ChevronUp className="  text-primary" />
              )}
            </div>
          </li>
        </ul>

        {expandMenu && (
          <RestaurantMenuCard card={category.card.card.itemCards} />
        )}
      </div>
    </>
  );
};

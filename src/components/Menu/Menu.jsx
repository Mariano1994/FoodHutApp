import { Link } from "react-router-dom";
import { FoodCard, OpenStatusRestaurants } from "../FoodCard/FoodCard";
import { NotFoundMessage } from "../NotFoundMessage/NotFoundMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import { Shimmer } from "../Shimmer/Shimmer";
import { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";

export const Menu = ({ query, onSetQuery, onHandleTopRatedFood }) => {
  const OpenStatusRestaurant = OpenStatusRestaurants(FoodCard);

  const { filteredFood, isLoading } = useContext(FoodContext);

  return (
    <>
      <div className="flex flex-col items-center" id="menu">
        <div className="flex justify-center items-center -mt-[14rem] w-[45%]">
          <h2 className="text-[4.8rem] font-bold text-center mb-[6rem]">
            {" "}
            <span className="text-primary">Menu</span> That{" "}
            <span className="text-secondary">Always</span> Make you Fall in{" "}
            <span className="text-primary">Love</span>
          </h2>
        </div>
        <SearchBar />
        {!isLoading ? (
          <div className="flex flex-wrap h-auto items-center justify-center gap-8 mx-28 mb-56">
            {filteredFood.length > 0 ? (
              filteredFood
                .map((food) => (
                  <Link
                    to={`/restaurants/${food?.info?.id}`}
                    key={food?.info?.id}
                  >
                    {" "}
                    {!food.info.isOpen ? (
                      <FoodCard card={food} />
                    ) : (
                      <OpenStatusRestaurant card={food} />
                    )}
                  </Link>
                ))
                .reverse()
            ) : (
              <NotFoundMessage />
            )}
          </div>
        ) : (
          <Shimmer />
        )}
      </div>
    </>
  );
};

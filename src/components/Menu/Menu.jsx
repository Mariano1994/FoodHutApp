import { Link } from "react-router-dom";
import { FoodCard } from "../FoodCard/FoodCard";
import { NotFoundMessage } from "../NotFoundMessage/NotFoundMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import { Shimmer } from "../Shimmer/Shimmer";
import "./Menu.css";

export const Menu = ({
  menu,
  query,
  onSetQuery,
  onHandleTopRatedFood,
  isLoading,
}) => {
  return (
    <>
      <div className="foodhut-menu" id="menu">
        <div className="foodhut-menu__title">
          <h2>
            {" "}
            <span className="text-red">Menu</span>{" "}
            <span className="text-black">That</span>{" "}
            <span className="text-yellow">Always</span>{" "}
            <span className="text-black">Make you Fall in</span>{" "}
            <span className="text-red">Love</span>
          </h2>
        </div>
        <SearchBar
          query={query}
          onSetQuery={onSetQuery}
          onHandleTopRatedFood={onHandleTopRatedFood}
        />
        {!isLoading ? (
          <div className="food-cards-container">
            {menu.length > 0 ? (
              menu
                .map((men) => (
                  <Link
                    to={`/restaurants/${men?.info?.id}`}
                    key={men?.info?.id}
                  >
                    {" "}
                    <FoodCard card={men} />
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

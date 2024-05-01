import { Link } from "react-router-dom";
import { FoodCard, OpenStatusRestaurants } from "../FoodCard/FoodCard";
import { NotFoundMessage } from "../NotFoundMessage/NotFoundMessage";
import { SearchBar } from "../SearchBar/SearchBar";
import { Shimmer } from "../Shimmer/Shimmer";

export const Menu = ({
  menu,
  query,
  onSetQuery,
  onHandleTopRatedFood,
  isLoading,
}) => {
  const OpenStatusRestaurant = OpenStatusRestaurants(FoodCard);

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
        <SearchBar
          query={query}
          onSetQuery={onSetQuery}
          onHandleTopRatedFood={onHandleTopRatedFood}
        />
        {!isLoading ? (
          <div className="flex flex-wrap h-auto items-center justify-center gap-8 mx-28 mb-56">
            {menu.length > 0 ? (
              menu
                .map((men) => (
                  <Link
                    to={`/restaurants/${men?.info?.id}`}
                    key={men?.info?.id}
                  >
                    {" "}
                    {!men.info.isOpen ? (
                      <FoodCard card={men} />
                    ) : (
                      <OpenStatusRestaurant card={men} />
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

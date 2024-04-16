import { FoodCard } from "../FoodCard/FoodCard";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Menu.css";

export const Menu = ({ menu, query, onSetQuery, onHandleTopRatedFood }) => {
  return (
    <>
      <div className="foodhut-menu">
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
        <div className="food-cards-container">
          {menu.length > 0 ? (
            menu.map((men) => <FoodCard card={men} key={men.id} />).reverse()
          ) : (
            <h2>Food not found</h2>
          )}
        </div>
      </div>
    </>
  );
};

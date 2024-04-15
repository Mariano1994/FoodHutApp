import "./SearchBar.css";
import SearchButtonSubmit from "../../assets/search-button-submit.svg";
import { useState } from "react";

export const SearchBar = ({ onHandleTopRatedFood, onSerachFood }) => {
  const [foodQuery, setFoodQuery] = useState("");

  const onChangeValue = (event) => {
    event.preventDefault();
    setFoodQuery(event.target.value);
    onSerachFood(foodQuery);
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    onSerachFood(foodQuery);
    setFoodQuery("");
  };

  return (
    <>
      <div className="serach">
        <form className="search-from" onSubmit={onSubmitSearch}>
          <input
            type="text"
            placeholder="search food"
            className="search-input"
            required
            value={foodQuery}
            onChange={onChangeValue}
          />
          <button type="submit">
            <img src={SearchButtonSubmit} />
          </button>
        </form>
        <button className="filter" onClick={onHandleTopRatedFood}>
          Filter by Top Rated Food
        </button>
      </div>
    </>
  );
};

import "./SearchBar.css";
import SearchButtonSubmit from "../../assets/search-button-submit.svg";
import { useState } from "react";

export const SearchBar = ({ query, onSetQuery, onHandleTopRatedFood }) => {
  return (
    <>
      <div className="serach">
        <form className="search-from">
          <input
            type="text"
            placeholder="search food"
            className="search-input"
            required
            value={query}
            onChange={onSetQuery}
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

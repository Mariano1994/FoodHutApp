import { useContext } from "react";
import SearchButtonSubmit from "../../assets/search-button-submit.svg";
import { FoodContext } from "../../context/FoodContext";

export const SearchBar = () => {
  const { query, handlerSetQuery, handlerTopRatedFood } =
    useContext(FoodContext);

  return (
    <>
      <div className="flex items-center gap-[1.5rem] mb-[5rem] ">
        <form className="flex justify-between items-center gap-4 w-[45rem] h-[4.5rem] -mt-4 border-solid border-[0.5px] border-[#191919] rounded-[30px] py-[0.5rem] px-[1.5rem]   ">
          <input
            type="text"
            placeholder="search food"
            className=" flex-1 outline-none border-none placeholder:text-[1.8rem]"
            required
            value={query}
            onChange={handlerSetQuery}
          />
          <button
            type="submit"
            className="w-[2.6rem] h-[2.6rem] rounded-[50%] flex items-center justify-center bg-transparent cursor-pointer"
          >
            <img src={SearchButtonSubmit} className="mt-[0.8rem]" />
          </button>
        </form>
        <button
          className="flex justify-center items-center h-[4.5rem] bg-primary text-alt cursor-pointer rounded-[30px] py-4 px-[1.5rem] -mt-[0.8rem]"
          onClick={handlerTopRatedFood}
        >
          Filter by Top Rated Food
        </button>
      </div>
    </>
  );
};

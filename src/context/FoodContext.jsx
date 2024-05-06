import { createContext, useState, useEffect } from "react";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [foodCards, setFoodCards] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // FETCHING DATA FORM SWIGGY API
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setFoodCards(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setIsLoading(false);
    }

    fetchData();
  }, []);

  const handlerSetQuery = (e) => {
    setQuery(e.target.value);
  };

  // Top rated food logic
  const filteredFood = foodCards.filter((foodCard) =>
    foodCard?.info?.name.toLowerCase().includes(query?.toLowerCase())
  );

  // Function to handle sort by top rationg
  const handlerTopRatedFood = () => {
    const topRated = foodCards
      .filter((foodCard) => foodCard?.info?.avgRating > 4.2)
      .sort((a, b) => a.info?.avgRating - b.info?.avgRating);
    setFoodCards(topRated);
  };

  return (
    <FoodContext.Provider
      value={{
        foodCards,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        handlerSetQuery,
        filteredFood,
        handlerTopRatedFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

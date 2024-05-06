import { createContext, useState } from "react";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
  const [foodCards, setFoodCards] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlerSetQuery = (e) => {
    setQuery(e.target.value);
  };

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
        setFoodCards,
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

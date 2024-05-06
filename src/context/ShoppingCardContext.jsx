import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);

  const handlerAddFoodOnShoppingCard = (myCard) => {
    setCardItems(() => [myCard, ...cardItems]);
  };

  const handlerClearShoppingCard = () => {
    setCardItems([]);
  };

  const handlerRamoveItemFromShoppingCard = (id) => {
    const list = cardItems.filter((item) => item.card.info.id !== id);
    setCardItems(list);
  };

  return (
    <ShoppingCardContext.Provider
      value={{
        cardItems,
        handlerAddFoodOnShoppingCard,
        handlerClearShoppingCard,
        handlerRamoveItemFromShoppingCard,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};

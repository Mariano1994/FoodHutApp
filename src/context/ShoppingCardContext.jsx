import { createContext, useState } from "react";

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);

  const addQuantityOnCardItem = () => {
    cardItems.map((item) => (item.card.info.quantity = 1));
  };
  addQuantityOnCardItem();

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

  const totalCost = cardItems.reduce(
    (total, item) =>
      (total +=
        item.card.info.price !== undefined ? item.card.info.price / 100 : 250),
    0
  );

  return (
    <ShoppingCardContext.Provider
      value={{
        cardItems,
        handlerAddFoodOnShoppingCard,
        handlerClearShoppingCard,
        handlerRamoveItemFromShoppingCard,
        totalCost,
        setCardItems,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};

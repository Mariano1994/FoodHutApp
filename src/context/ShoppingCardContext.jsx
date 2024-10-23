import { createContext, useState } from "react";
import { Toaster, toast } from "sonner";

export const ShoppingCardContext = createContext();

export const ShoppingCardContextProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);

  cardItems.map((item) => (item.card.info.quantity = 1));

  const handlerAddFoodOnShoppingCard = (myCard) => {
    setCardItems(() => [myCard, ...cardItems]);
  };

  const handlerClearShoppingCard = () => {
    setCardItems([]);
    toast.info("Shopping cart cleaned");
  };

  const handlerRemoveItemFromShoppingCard = (id) => {
    const list = cardItems.filter((item) => item?.card?.info?.id !== id);
    setCardItems(list);
  };

  const handlerIncrementQuantityItem = (id) => {
    setCardItems(
      cardItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const handlerDecrementQuantityItem = (id) => {
    setCardItems(
      cardItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
            }
          : item
      )
    );
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
        handlerRemoveItemFromShoppingCard,
        totalCost,
        setCardItems,
        handlerIncrementQuantityItem,
      }}
    >
      <Toaster richColors position="top-right" />
      {children}
    </ShoppingCardContext.Provider>
  );
};

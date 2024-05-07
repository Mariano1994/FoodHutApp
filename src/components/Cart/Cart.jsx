import { useContext } from "react";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";
import { ItemCart } from "../ItemCart/ItemCart";
import { CartPaymentForm } from "../CartPaymentForm/CartPaymentForm";
import { EmptyCartMessage } from "../EmptyCartMessage/EmptyCartMessage";

export const Cart = () => {
  const { cardItems, handlerClearShoppingCard, setCardItems } =
    useContext(ShoppingCardContext);

  cardItems.map((item) => (item.card.info.quantity = 1));

  const handlerIncreasShoppingItemQuantity = (id) => {
    cardItems.map((item) => {
      if (item?.card?.info?.id === id) {
        setCardItems([...cardItems, item.card.info.quantity++]);
      }
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-white">
        {cardItems.length > 0 ? (
          <div className=" absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-[40px] w-[80%] h-[80%] ">
            <div className="flex items-center gap-[3rem]">
              <h2 className="  mb-[5.5rem] text-[1.8rem] font-semibold">
                <span className="text-primary">Shopping</span> Cart
              </h2>
              <button
                className="-mt-[5.6rem] py-4 px-8 bg-primary text-white text-[1.3rem] rounded-xl hover:brightness-95"
                onClick={handlerClearShoppingCard}
              >
                Remove All items
              </button>
            </div>
            <div className=" flex justify-between">
              <ul className=" flex flex-col gap-[8px] overflow-scroll">
                {cardItems.map((item) => (
                  <ItemCart item={item} key={item?.card?.info?.id} />
                ))}
              </ul>
              <CartPaymentForm />
            </div>
          </div>
        ) : (
          <EmptyCartMessage />
        )}
      </div>
    </>
  );
};

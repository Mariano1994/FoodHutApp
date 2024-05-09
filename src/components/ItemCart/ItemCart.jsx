import { BASE_IMAGE_URL } from "../../utils/ConstURLs";
import { Divider } from "../Divider/Divider";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { toast } from "sonner";
import { ShoppingCardContext } from "../../context/ShoppingCardContext";

export const ItemCart = ({ item }) => {
  const { handlerRemoveItemFromShoppingCard } = useContext(ShoppingCardContext);
  return (
    <>
      <li key={item?.card?.info?.id}>
        <div className="flex flex-1 items-center gap-[3rem]  ">
          <img
            src={`${BASE_IMAGE_URL}${item?.card?.info?.imageId}`}
            className=" h-[11rem] w-[11rem] rounded-full"
          />
          <div>
            <h3 className=" text-[1.5rem] text-primary font-medium w-[30rem]">
              {item?.card?.info?.name}
            </h3>
            <span className="text-[1rem]">{item?.card?.info?.category}</span>
          </div>
          <div className=" border border-solid rounded-3xl px-2 w-[15rem]">
            <div className="flex items-center justify-around">
              <span className="text-[2rem] font-light">
                {" "}
                <Minus
                  size={15}
                  className="cursor-pointer transition-all hover:text-secondary"
                />
              </span>
              <span className="text-[1.5rem] font-light">
                {item.card.info.quantity}
              </span>
              <span
                className="text-[2rem] font-light"
                onClick={() =>
                  handlerIncreasShoppingItemQuantity(item?.card?.info?.id)
                }
              >
                {" "}
                <Plus
                  size={15}
                  className="cursor-pointer transition-all hover:text-secondary"
                />{" "}
              </span>
            </div>
          </div>
          <span className="text-[1.5rem] font-light">
            {" "}
            Rs{" "}
            {item?.card?.info?.price !== undefined
              ? item?.card?.info?.price / 100
              : 250}{" "}
          </span>
          <span
            onClick={() => {
              handlerRemoveItemFromShoppingCard(item?.card?.info?.id);
              toast.error("Item removed from shopping cart");
            }}
          >
            <Trash2
              size={18}
              className="cursor-pointer transition-all hover:text-primary"
            />
          </span>
        </div>
        <Divider />
      </li>
    </>
  );
};

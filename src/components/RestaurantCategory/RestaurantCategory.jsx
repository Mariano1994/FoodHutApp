import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { useState } from "react";
export const RestaurantCategory = ({ category }) => {
  const [expand, setExpand] = useState(true);

  const handleExpand = () => {
    setExpand((ex) => !ex);
  };
  return (
    <>
      <div className="w-full mb-4 border-b-[1.3rem] border-b-gradient">
        <ul className="mb-4">
          <li className=" flex justify-between items-center">
            <h2 className=" font-bold text-2xl">
              {category?.card?.card?.title.toUpperCase()}
            </h2>
            <div onClick={handleExpand}>
              {expand ? (
                <CircleArrowDown className=" cursor-pointer hover:text-primary" />
              ) : (
                <CircleArrowUp className=" cursor-pointer text-primary" />
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

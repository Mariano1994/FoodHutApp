import { SearchBar } from "../SearchBar/SearchBar";
import { RestaurantMenuCard } from "../RestauranteMenuCard/RestauranteMenuCard";
import { Divider } from "../Divider/Divider";
import { MapPin, Star, CircleDollarSign } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { MenuCardShimmer } from "../MenuCardShimmer/MenuCardShimmer";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";
import { RestaurantCategory } from "../RestaurantCategory/RestaurantCategory";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <MenuCardShimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = restInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  if (itemCards === undefined) return <h1>MENU NOT AVALAIBLE</h1>;

  return (
    <>
      <div className="grid place-content-center">
        <Link
          to="/"
          className=" flex items-center justify-center w-32 mt-32 gap-4 py-3 px-4 bg-primary rounded-[5px] text-[1.3rem] text-[white]"
        >
          <ArrowLeft size={15} /> Home
        </Link>
        <div className="flex flex-col items-center w-[60vw]">
          <div className="flex flex-col w-full gap-16 mt-8 mb-20 rounded-[10px] p-8  bg-gradient shadow-sm">
            <div>
              <h1 className="text-[3rem] -mb-[1.5rem] text-primary font-semibold">
                {name}
              </h1>
            </div>
            <div className=" flex flex-col gap-5">
              <span className=" flex items-center gap-2 text-[1.4rem] font-medium">
                {" "}
                <Star size={15} color="#f54748" /> {avgRating} (
                {totalRatingsString}
                ) <CircleDollarSign size={15} color="#f54748" />{" "}
                {costForTwoMessage}
              </span>
              <span className=" flex items-center gap-2 text-[1.4rem] font-medium">
                {cuisines.join(", ")}
              </span>
              <span className=" flex items-center gap-2 text-[1.4rem] font-medium">
                <MapPin size={15} color="#f54748" /> {locality}
              </span>
            </div>
          </div>
          <strong className=" mb-12 text-[1.8rem]">Menu</strong>
          <SearchBar />
          <Divider />

          {
            categories.map((category, index) => (
              <RestaurantCategory category={category} key={index} />
            ))

            //
          }

          {/* {itemCards.map((itemCard) => (
            <RestaurantMenuCard
              key={itemCard?.card?.info?.id}
              card={itemCard}
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

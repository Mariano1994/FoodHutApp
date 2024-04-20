import { useEffect, useState } from "react";
import "./RestaurantMenu.css";
import { MENU_URL } from "../../utils/ConstURLs";
import { Shimmer } from "../Shimmer/Shimmer";
import { SearchBar } from "../SearchBar/SearchBar";
import { RestaurantMenuCard } from "../RestauranteMenuCard/RestauranteMenuCard";
import { Divider } from "../Divider/Divider";
import { MapPin, Star, CircleDollarSign } from "lucide-react";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    async function getMenuData() {
      const data = await fetch(`${MENU_URL}${resId}`);
      const json = await data.json();

      setRestInfo(json);
    }

    getMenuData();
  }, [MENU_URL, resId]);

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    locality,
  } = restInfo?.data?.cards[2]?.card?.card?.info;

  const Data =
    restInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  console.log(Data);

  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || Data;

  console.log(itemCards);

  if (itemCards === undefined) return <h1>MENU NOT AVALAIBLE</h1>;

  return (
    <>
      <div className="wrap">
        <div className="rest-wrap">
          <div className="rest-conteiner">
            <div className="rest_title">
              <h1>{name}</h1>
            </div>
            <div className=" rest-info">
              <span>
                {" "}
                <Star size={15} color="#f54748" /> {avgRating} (
                {totalRatingsString}
                ) <CircleDollarSign size={15} color="#f54748" />{" "}
                {costForTwoMessage}
              </span>
              <span>{cuisines.join(", ")}</span>
              <span>
                <MapPin size={15} color="#f54748" /> {locality}
              </span>
            </div>
          </div>
          <strong>Menu</strong>
          <SearchBar />
          <Divider />

          {itemCards.map((itemCard) => (
            <RestaurantMenuCard
              key={itemCard?.card?.info?.id}
              card={itemCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

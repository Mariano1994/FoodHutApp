import "./RestaurantMenu.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { RestaurantMenuCard } from "../RestauranteMenuCard/RestauranteMenuCard";
import { Divider } from "../Divider/Divider";
import { MapPin, Star, CircleDollarSign } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MoveLeft } from "lucide-react";
import { MenuCardShimmer } from "../MenuCardShimmer/MenuCardShimmer";
import useRestaurantMenu from "../../utils/hooks/useRestaurantMenu";

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

  if (itemCards === undefined) return <h1>MENU NOT AVALAIBLE</h1>;

  return (
    <>
      <div className="wrap">
        <Link to="/" className="back_home">
          <ArrowLeft size={15} /> Home
        </Link>
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

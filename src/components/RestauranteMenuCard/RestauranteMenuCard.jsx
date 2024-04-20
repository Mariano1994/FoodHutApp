import "./RestaurantMenuCard.css";
import { Divider } from "../Divider/Divider";
import CostumerImg from "../../assets/costumersPhoto/2.jpg";
import { Star } from "lucide-react";
import { BASE_IMAGE_URL } from "../../utils/ConstURLs";

export const RestaurantMenuCard = ({ card }) => {
  console.log(card);

  const { name, description, ratings, imageId } = card?.card?.info;
  return (
    <>
      <div className="rest_card">
        <div className="rest-card_info">
          <h2> {name}</h2>
          <span>
            {" "}
            <Star size={20} fill="#fdc55e" color="#fdc55e" />{" "}
            {ratings?.aggregatedRating?.rating}
          </span>
          <p>{description}</p>
        </div>
        <div className="rest-card_img">
          <img src={`${BASE_IMAGE_URL}${imageId}`} />
        </div>
      </div>
      <Divider />
    </>
  );
};

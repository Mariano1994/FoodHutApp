import "./RestaurantMenuCard.css";
import { Divider } from "../Divider/Divider";
import defaultImage from "../../assets/defaultImage.svg";
import { Star } from "lucide-react";
import { BASE_IMAGE_URL } from "../../utils/ConstURLs";

export const RestaurantMenuCard = ({ card }) => {
  console.log(card);
  const { name, description, ratings, imageId, price } = card?.card?.info;

  // Check if the card has its onw image, if not replace it with default image
  const image =
    imageId === undefined ? defaultImage : `${BASE_IMAGE_URL}${imageId}`;

  return (
    <>
      <div className="rest_card">
        <div className="rest-card_info">
          <h2> {name}</h2>
          <span>
            {" "}
            <Star size={20} fill="#fdc55e" color="#fdc55e" />{" "}
            {ratings?.aggregatedRating?.rating || "N/A"}
          </span>
          <p>
            {description ||
              "Lorem ipsum dolor, sit amet consectetur adipisicingelit. Pariatur, eius minus! Magnam velit officia nam sapiente sed.Numquam reprehenderit id dolore magni, atque accusamus"}
          </p>
          <span className="food-price">Rs {price / 100 || "N/A"}</span>
        </div>
        <div className="rest-card_img">{<img src={image} />}</div>
      </div>
      <Divider />
    </>
  );
};

import "./FoodCard.css";
import Costumer1 from "../../assets/costumersPhoto/1.jpg";
import Costumer2 from "../../assets/costumersPhoto/2.jpg";
import Costumer3 from "../../assets/costumersPhoto/3.jpg";
import Star from "../../assets/star.svg";
import { BASE_IMAGE_URL } from "../../utils/ConstURLs";

export const FoodCard = ({ card }) => {
  const { avgRating, cloudinaryImageId, name, cuisines } = card?.info;
  return (
    <>
      <div className="food-card">
        <div className="food-card__img">
          <img src={`${BASE_IMAGE_URL}${cloudinaryImageId}`} />
          <div className="food-card__price">
            <span>${avgRating > 4 ? avgRating * 5 : avgRating * 7}</span>
          </div>
        </div>

        <div className="food-testimonials">
          <div className="costumers-photo">
            <img src={Costumer1} alt="costumer user photo" />
            <img src={Costumer2} alt="costumer user photo" />
            <img src={Costumer3} alt="costumer user photo" />
          </div>
          <span>
            <img src={Star} /> ({avgRating})
          </span>
        </div>

        <div className="food-card__info">
          <h3>{name}</h3>
          <div className="paragra">
            <p>{cuisines.join(", ")}</p>
          </div>
        </div>

        <a href="#"> Order Now</a>
      </div>
    </>
  );
};

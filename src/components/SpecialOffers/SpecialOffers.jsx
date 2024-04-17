import "./SpecialOffers.css";
import Detail from "../../assets/detail.svg";
import Rose from "../../assets/rosemary.svg";
import { FoodCard } from "../FoodCard/FoodCard";
import { Shimmer } from "../Shimmer/Shimmer";

export const SpecialOffers = ({ cardsInfo, isLoading }) => {
  return (
    <>
      <div className="special-offers">
        <h2 className="special-offers__title">
          Today <span className="text-red">Special</span> Offers
        </h2>
        <p className="special-offers__paragra">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="detail">
        <img src={Detail} />
      </div>

      <div className="food-cards-container">
        {!isLoading ? (
          cardsInfo.map((card, index) => {
            if (index <= 3)
              return <FoodCard card={card} key={card?.info?.id} />;
          })
        ) : (
          <Shimmer />
        )}
      </div>

      <div className="rose">
        <img src={Rose} />
      </div>
    </>
  );
};

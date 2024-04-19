import "./RestaurantMenuCard.css";
import { Divider } from "../Divider/Divider";
import CostumerImg from "../../assets/costumersPhoto/2.jpg";
import { Star } from "lucide-react";

export const RestaurantMenuCard = ({ card }) => {
  console.log(card);
  return (
    <>
      <div className="rest_card">
        <div className="rest-card_info">
          <h2> Kebabs in Box (Non Veg Overload)</h2>
          <span>
            {" "}
            <Star size={20} fill="#fdc55e" color="#fdc55e" /> 4.5
          </span>
          <p>
            Serves 2 | Chilly Garlic Prawns (6 Pcs) + Chicken Tikka (6 Pcs) +
            Chicken Wings (6 Pcs) + Tandoori Tangadi (2Pcs) + Fish Tikka (6 Pcs)
            + Angoori Jamun (8 Pcs). Accompanied with Dips & Salad. Non Veg
            Overload in a Box.
          </p>
        </div>
        <div className="rest-card_img">
          <img src={CostumerImg} />
        </div>
      </div>
      <Divider />
    </>
  );
};

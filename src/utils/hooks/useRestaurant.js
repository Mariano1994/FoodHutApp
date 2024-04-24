import { useEffect, useState } from "react";

const useResturant = () => {
  const [foodCards, setFoodCards] = useState([]);
  useEffect(() => {
    async function getRestaurant() {
      const restaurantData = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = restaurantData.json();
      setFoodCards(
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }

    getRestaurant();
  }, []);

  return foodCards;
};

export default useResturant;

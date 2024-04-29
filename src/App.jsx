import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSetion";
import { Menu } from "./components/Menu/Menu";
import { PopularFood } from "./components/PopularFood/PopularFood";
import { SpecialOffers } from "./components/SpecialOffers/SpecialOffers";
import { WhyFoodHut } from "./components/WhyFoodHut/WhyFoodHut";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";
import { Shimmer } from "./components/Shimmer/Shimmer";

export const App = () => {
  const [foodCards, setFoodCards] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const foodCards = useResturant();

  // FETCHING DATA FORM SWIGGY API
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      setFoodCards(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setIsLoading(false);
    }

    fetchData();
  }, []);

  const handlerSetQuery = (event) => {
    setQuery(event.target.value);
  };

  // Function to filter top rated foods
  const filteredFood = foodCards?.filter((foodCard) =>
    foodCard?.info?.name.toLowerCase().includes(query?.toLowerCase())
  );

  // Function to handle sort by top rationg
  const handlerTopRatedFood = () => {
    const topRated = foodCards
      .filter((foodCard) => foodCard?.info?.avgRating > 4.2)
      .sort((a, b) => a.info?.avgRating - b.info?.avgRating);
    setFoodCards(topRated);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <>
        <span className="online-status">
          Looks like you're offline. Please check your internet connection.
        </span>
        <Shimmer />
      </>
    );
  }

  return (
    <div className="app-container">
      <HeroSection />
      <SpecialOffers cardsInfo={foodCards} isLoading={isLoading} />

      <WhyFoodHut />

      <Menu
        menu={filteredFood}
        onHandleTopRatedFood={handlerTopRatedFood}
        query={query}
        onSetQuery={handlerSetQuery}
        isLoading={isLoading}
      />

      <PopularFood />
      <Footer />
    </div>
  );
};

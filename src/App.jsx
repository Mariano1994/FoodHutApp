import { useContext, useEffect } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSetion";
import { Menu } from "./components/Menu/Menu";
import { PopularFood } from "./components/PopularFood/PopularFood";
import { SpecialOffers } from "./components/SpecialOffers/SpecialOffers";
import { WhyFoodHut } from "./components/WhyFoodHut/WhyFoodHut";
import useOnlineStatus from "./utils/hooks/useOnlineStatus";
import { Shimmer } from "./components/Shimmer/Shimmer";
import { FoodContext, FoodContextProvider } from "./context/FoodContext";

export const App = () => {
  const { setFoodCards, setIsLoading } = useContext(FoodContext);

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
      <SpecialOffers />
      <WhyFoodHut />
      <Menu />
      <PopularFood />
      <Footer />
    </div>
  );
};

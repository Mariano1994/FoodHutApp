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
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <>
        <span>
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

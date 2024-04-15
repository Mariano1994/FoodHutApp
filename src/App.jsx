import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { HeroSection } from "./components/HeroSection/HeroSetion";
import { Menu } from "./components/Menu/Menu";
import { PopularFood } from "./components/PopularFood/PopularFood";
import { SpecialOffers } from "./components/SpecialOffers/SpecialOffers";
import { WhyFoodHut } from "./components/WhyFoodHut/WhyFoodHut";
import { CardObjData } from "./utils/data";

export const App = () => {
  const [foodCards, setFoodCards] = useState(CardObjData);

  // Function to handle sort by top rationg
  const handlerTopRatedFood = () => {
    const topRated = foodCards
      .filter((foodCard) => foodCard.rating > 4)
      .sort((a, b) => a.rating - b.rating);
    setFoodCards(topRated);
  };

  //Function to serachFood
  const onSearchFoodHanldler = (query) => {
    const result = [];
    // if (query.lenght == null) return;
    foodCards.map((foodCard) => {
      if (foodCard.name.toLowerCase().includes(query.toLowerCase()))
        result.push(foodCard);
    });
    setFoodCards(result);
  };

  return (
    <div className="app-container">
      <HeroSection />
      <SpecialOffers cardsInfo={CardObjData} />
      <WhyFoodHut />
      <Menu
        menu={foodCards}
        onHandleTopRatedFood={handlerTopRatedFood}
        onSerachFood={onSearchFoodHanldler}
      />
      <PopularFood />
      <Footer />
    </div>
  );
};
